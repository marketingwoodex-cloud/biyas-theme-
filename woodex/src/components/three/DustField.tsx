"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * HERO ATMOSPHERE — volumetric dust in a light shaft.
 *
 * Why WebGL and not a GIF: the particles must respond to the cursor to make
 * the hero feel like a *space* rather than a picture. Depth is carried by
 * size + opacity falloff on Z, so the field reads as a real volume the
 * headline sits inside.
 *
 * Budget: 900 points, additive, no depth write, DPR clamped to 1.5.
 * Pauses when off-screen or when the tab is hidden.
 */
export default function DustField({ className = "" }: { className?: string }) {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = host.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false, powerPreference: "low-power" });
    } catch {
      return; // no WebGL — the photographic hero behind is a complete fallback
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(52, 1, 0.1, 100);
    camera.position.z = 14;

    const COUNT = 900;
    const positions = new Float32Array(COUNT * 3);
    const seeds = new Float32Array(COUNT);
    const scales = new Float32Array(COUNT);

    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 18;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      seeds[i] = Math.random() * Math.PI * 2;
      scales[i] = 0.4 + Math.random() * 1.6;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("aSeed", new THREE.BufferAttribute(seeds, 1));
    geo.setAttribute("aScale", new THREE.BufferAttribute(scales, 1));

    const mat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: {
        uTime: { value: 0 },
        uPointer: { value: new THREE.Vector2(0, 0) },
        uPixelRatio: { value: Math.min(window.devicePixelRatio, 1.5) },
        uColor: { value: new THREE.Color("#e8c489") },
      },
      vertexShader: /* glsl */ `
        uniform float uTime;
        uniform float uPixelRatio;
        uniform vec2 uPointer;
        attribute float aSeed;
        attribute float aScale;
        varying float vFade;

        void main() {
          vec3 p = position;

          // Slow convection: motes rise and wander, never in a straight line.
          p.y += sin(uTime * 0.16 + aSeed) * 1.4;
          p.x += cos(uTime * 0.11 + aSeed * 1.7) * 1.1;
          p.z += sin(uTime * 0.09 + aSeed * 0.6) * 0.9;

          // Pointer pushes the field with depth-scaled strength: near motes
          // move more than far ones, which is what sells the parallax.
          float depth = smoothstep(-10.0, 10.0, p.z);
          p.x += uPointer.x * 2.6 * depth;
          p.y += uPointer.y * 1.8 * depth;

          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = aScale * uPixelRatio * (110.0 / -mv.z);

          // Fade at the volume edges so particles never pop at the boundary.
          vFade = smoothstep(0.0, 0.35, depth) * (1.0 - smoothstep(0.7, 1.0, depth));
          vFade *= 0.55 + 0.45 * sin(uTime * 0.8 + aSeed * 3.1);
        }
      `,
      fragmentShader: /* glsl */ `
        uniform vec3 uColor;
        varying float vFade;
        void main() {
          // Soft radial falloff — a hard disc reads as a bug, not a mote.
          float d = length(gl_PointCoord - 0.5);
          float a = smoothstep(0.5, 0.0, d);
          a = pow(a, 2.2) * vFade * 0.55;
          if (a < 0.002) discard;
          gl_FragColor = vec4(uColor, a);
        }
      `,
    });

    const points = new THREE.Points(geo, mat);
    scene.add(points);

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    el.appendChild(renderer.domElement);
    Object.assign(renderer.domElement.style, { width: "100%", height: "100%", display: "block" });

    const resize = () => {
      const w = el.clientWidth || 1;
      const h = el.clientHeight || 1;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(el);

    const pointer = new THREE.Vector2();
    const target = new THREE.Vector2();
    const onMove = (e: MouseEvent) => {
      target.set(
        (e.clientX / window.innerWidth) * 2 - 1,
        -((e.clientY / window.innerHeight) * 2 - 1)
      );
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    let visible = true;
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting), { threshold: 0 });
    io.observe(el);

    const t0 = performance.now();
    let raf = 0;
    const loop = () => {
      raf = requestAnimationFrame(loop);
      if (!visible || document.hidden) return;
      pointer.lerp(target, 0.045);
      mat.uniforms.uTime.value = (performance.now() - t0) / 1000;
      mat.uniforms.uPointer.value.copy(pointer);
      camera.position.x = pointer.x * 0.8;
      camera.position.y = pointer.y * 0.5;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      window.removeEventListener("mousemove", onMove);
      geo.dispose();
      mat.dispose();
      renderer.dispose();
      el.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={host} className={className} aria-hidden />;
}
