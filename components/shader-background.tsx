"use client";

import { useEffect, useRef, useState } from "react";

const VERT = `
attribute vec2 aPosition;
varying vec2 vUv;
void main() {
  vUv = aPosition * 0.5 + 0.5;
  gl_Position = vec4(aPosition, 0.0, 1.0);
}
`;

const FRAG = `
precision highp float;
uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uMouse;
varying vec2 vUv;

vec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
  m = m * m;
  m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
  float aspect = uResolution.x / max(uResolution.y, 1.0);
  vec2 uv = vUv;
  vec2 p = vec2(uv.x * aspect, uv.y);

  float t = uTime * 0.05;

  vec2 q = vec2(
    snoise(p * 1.1 + vec2(t, -t * 0.7)),
    snoise(p * 1.1 + vec2(-t * 0.8, t) + 4.7)
  );
  vec2 r = vec2(
    snoise(p * 1.5 + q * 0.85 + vec2(t * 1.4, 2.1)),
    snoise(p * 1.5 + q * 0.85 + vec2(6.4, -t * 1.1))
  );
  float f = snoise(p * 1.05 + r * 1.05);
  float g2 = snoise(p * 0.85 - r * 0.9 + vec2(-t * 0.6, t * 0.5));

  float md = distance(uv, uMouse);
  f += 0.18 * smoothstep(0.5, 0.0, md);

  vec3 base = vec3(0.016, 0.027, 0.06);
  vec3 blue = vec3(0.145, 0.388, 0.922);
  vec3 teal = vec3(0.078, 0.722, 0.651);
  vec3 cyan = vec3(0.133, 0.827, 0.933);
  vec3 amber = vec3(0.984, 0.573, 0.235);

  float n1 = smoothstep(-0.7, 0.95, f);
  float n2 = smoothstep(-0.25, 1.05, g2);

  vec3 col = base;
  col = mix(col, blue, n1 * 0.55);
  col = mix(col, teal, n1 * n2 * 0.45);
  col = mix(col, cyan, smoothstep(0.55, 1.0, n2) * n1 * 0.40);
  col = mix(col, amber, smoothstep(0.80, 1.0, f) * n2 * 0.12);

  float vig = smoothstep(1.35, 0.3, length((uv - vec2(0.5, 0.52)) * vec2(aspect * 0.75, 1.0)));
  col *= mix(0.45, 1.05, vig);
  col *= 1.0 - 0.30 * smoothstep(0.85, 0.0, distance(uv, vec2(0.18, 0.42)));

  gl_FragColor = vec4(col, 1.0);
}
`;

export function ShaderBackground({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", {
      antialias: false,
      alpha: false,
      powerPreference: "low-power",
    });
    if (!gl) {
      setFailed(true);
      return;
    }

    const compile = (type: number, src: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, src);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        return null;
      }
      return shader;
    };

    const vs = compile(gl.VERTEX_SHADER, VERT);
    const fs = compile(gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) {
      setFailed(true);
      return;
    }
    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      setFailed(true);
      return;
    }
    gl.useProgram(program);

    // One oversized triangle covers the viewport with fewer vertices than a quad
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const aPosition = gl.getAttribLocation(program, "aPosition");
    gl.enableVertexAttribArray(aPosition);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, "uTime");
    const uResolution = gl.getUniformLocation(program, "uResolution");
    const uMouse = gl.getUniformLocation(program, "uMouse");

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let running = true;
    let inView = true;
    let docVisible = !document.hidden;
    const mouse = { x: 0.3, y: 0.5, tx: 0.3, ty: 0.5 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (!w || !h) return;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uResolution, canvas.width, canvas.height);
    };
    resize();

    const draw = () => {
      mouse.x += (mouse.tx - mouse.x) * 0.05;
      mouse.y += (mouse.ty - mouse.y) * 0.05;
      gl.uniform1f(uTime, (performance.now() - start) / 1000);
      gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    const loop = () => {
      if (!running || !inView || !docVisible) return;
      draw();
      if (!reduced) raf = requestAnimationFrame(loop);
    };
    const wake = () => {
      cancelAnimationFrame(raf);
      loop();
    };

    const ro = new ResizeObserver(() => {
      resize();
      if (reduced) draw();
    });
    ro.observe(canvas);

    const io = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      if (inView) wake();
    });
    io.observe(canvas);

    const onVisibility = () => {
      docVisible = !document.hidden;
      if (docVisible) wake();
    };
    document.addEventListener("visibilitychange", onVisibility);

    const onPointer = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.tx = (e.clientX - rect.left) / Math.max(rect.width, 1);
      mouse.ty = 1 - (e.clientY - rect.top) / Math.max(rect.height, 1);
    };
    window.addEventListener("pointermove", onPointer, { passive: true });

    const start = performance.now();
    loop();

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pointermove", onPointer);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, []);

  if (failed) {
    return (
      <div aria-hidden className={`pointer-events-none ${className}`}>
        <div className="absolute -top-32 -left-24 h-[34rem] w-[34rem] animate-blob rounded-full bg-[#2563eb]/30 blur-[110px] motion-reduce:animate-none" />
        <div className="absolute top-1/3 -right-36 h-[30rem] w-[30rem] animate-blob rounded-full bg-cyan/25 blur-[110px] [animation-delay:-6s] motion-reduce:animate-none" />
        <div className="absolute -bottom-44 left-1/4 h-[30rem] w-[30rem] animate-blob rounded-full bg-[#14b8a6]/25 blur-[110px] [animation-delay:-11s] motion-reduce:animate-none" />
      </div>
    );
  }

  return <canvas ref={canvasRef} aria-hidden className={`${className} h-full w-full`} />;
}
