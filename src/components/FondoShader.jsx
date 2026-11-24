import React, { useEffect, useRef } from "react";
import "./FondoShader.css";

/* Fondo animado con WebGL (la misma técnica que usan sitios como
   landonorris.com): un shader dibuja un "líquido" de colores en los tonos
   de la landing (crema, beige y azul pálido) que fluye lento y se
   deforma suavemente alrededor del mouse. Es abstracto: nunca toca la
   foto, que queda por encima. Si no hay WebGL, queda el crema liso. */

const VERT = `
attribute vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }`;

const FRAG = `
precision mediump float;
uniform vec2 uRes;
uniform float uTime;
uniform vec2 uMouse;
uniform float uFuerza;

vec3 mod289(vec3 x){ return x - floor(x * (1.0/289.0)) * 289.0; }
vec2 mod289(vec2 x){ return x - floor(x * (1.0/289.0)) * 289.0; }
vec3 permute(vec3 x){ return mod289(((x*34.0)+1.0)*x); }
float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod289(i);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m; m = m*m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
  vec2 uv = gl_FragCoord.xy / uRes;
  vec2 p = uv * vec2(uRes.x / uRes.y, 1.0);
  vec2 m = uMouse * vec2(uRes.x / uRes.y, 1.0);

  // el mouse empuja el líquido suavemente
  vec2 hacia = p - m;
  float cerca = exp(-dot(hacia, hacia) * 4.0) * uFuerza;
  p += normalize(hacia + 0.0001) * cerca * 0.07;

  // Olas: bandas suaves que ondulan en diagonal, blanco mezclado con beige
  float t = uTime * 0.13;
  float n = snoise(p * 0.8 + vec2(t * 0.3, -t * 0.2));
  float ola1 = sin(p.y * 6.0 + p.x * 2.2 + t * 2.0 + n * 2.2);
  float ola2 = sin(p.y * 3.5 - p.x * 1.4 - t * 1.4 + n * 1.6);
  float olas = (ola1 * 0.6 + ola2 * 0.4) * 0.5 + 0.5;

  vec3 blanco = vec3(0.992, 0.984, 0.968);
  vec3 crema  = vec3(0.961, 0.953, 0.937);
  vec3 beige  = vec3(0.898, 0.855, 0.788);

  vec3 col = mix(crema, blanco, smoothstep(0.55, 0.95, olas));
  col = mix(col, beige, smoothstep(0.45, 0.0, olas) * 0.9);
  // en lo más hondo de cada ola asoma un marrón suave (del tono del caso)
  vec3 marron = vec3(0.780, 0.690, 0.600);
  col = mix(col, marron, smoothstep(0.2, 0.0, olas) * 0.55);
  gl_FragColor = vec4(col, 1.0);
}`;

function compilar(gl, tipo, src) {
  const s = gl.createShader(tipo);
  gl.shaderSource(s, src);
  gl.compileShader(s);
  return gl.getShaderParameter(s, gl.COMPILE_STATUS) ? s : null;
}

export default function FondoShader() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    // En celulares y tablets también se activa, pero a menor resolución
    const esMovil = window.matchMedia("(max-width: 900px), (hover: none)").matches;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", { antialias: false });
    if (!gl) return;
    const vs = compilar(gl, gl.VERTEX_SHADER, VERT);
    const fs = compilar(gl, gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return;
    const prog = gl.createProgram();
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(prog, "aPos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "uRes");
    const uTime = gl.getUniformLocation(prog, "uTime");
    const uMouse = gl.getUniformLocation(prog, "uMouse");
    const uFuerza = gl.getUniformLocation(prog, "uFuerza");

    const sinMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // se dibuja a baja resolución: es un degradé suave (más baja en celular)
    const ESCALA = esMovil ? 0.35 : 0.5;

    const mouse = { x: 0.5, y: 0.5 };
    let suave = { x: 0.5, y: 0.5 };
    let fuerza = 0;
    const fuerzaObj = 0;
    let frame;
    const inicio = performance.now();

    const medir = () => {
      canvas.width = Math.round(window.innerWidth * ESCALA);
      canvas.height = Math.round(window.innerHeight * ESCALA);
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uRes, canvas.width, canvas.height);
    };

    const dibujar = (ahora) => {
      suave.x += (mouse.x - suave.x) * 0.06;
      suave.y += (mouse.y - suave.y) * 0.06;
      fuerza += (fuerzaObj - fuerza) * 0.05;
      gl.uniform1f(uTime, (ahora - inicio) / 1000);
      gl.uniform2f(uMouse, suave.x, suave.y);
      gl.uniform1f(uFuerza, fuerza);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      if (!sinMovimiento) frame = requestAnimationFrame(dibujar);
    };

    const visibilidad = () => {
      cancelAnimationFrame(frame);
      if (!document.hidden && !sinMovimiento) frame = requestAnimationFrame(dibujar);
    };

    medir();
    frame = requestAnimationFrame(dibujar);
    window.addEventListener("resize", medir);
    // sin interacción con el mouse: las olas solo fluyen
    document.addEventListener("visibilitychange", visibilidad);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", medir);
      document.removeEventListener("visibilitychange", visibilidad);
    };
  }, []);

  return <canvas className="fondo-shader" ref={canvasRef} aria-hidden="true" />;
}
