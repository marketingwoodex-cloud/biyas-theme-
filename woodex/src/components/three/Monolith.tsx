"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * THE MATERIAL MONOLITH — the site's 3D centrepiece.
 *
 * A fluted walnut column banded in unlacquered amber, standing on honed
 * travertine. It is not decoration: it is the studio's palette rendered as
 * a physical object you can rotate. Scroll drives the turn, cursor drives
 * the tilt, so the section rewards both passive and active users.
 *
 * Everything is procedural — geometry is displaced in JS, wood grain and
 * stone are drawn to canvas at runtime. No model downloads, no texture
 * payload: the whole scene costs ~0 KB over the wire.
 */
export default function Monolith({ className = "" }: { className?: string }) {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = host.current;
    if (!el) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    } catch {
      return;
    }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
    camera.position.set(0, 0.35, 9.4);

    const group = new THREE.Group();
    scene.add(group);

    /* ---------------------------------------------------------------
       TEXTURES — drawn procedurally so the scene ships with zero assets
       --------------------------------------------------------------- */

    const woodTexture = (() => {
      const c = document.createElement("canvas");
      c.width = 512;
      c.height = 512;
      const g = c.getContext("2d")!;
      g.fillStyle = "#4a2f1c";
      g.fillRect(0, 0, 512, 512);
      // Cathedral-ish grain: stacked sine bands with jittered amplitude.
      for (let i = 0; i < 190; i++) {
        const y = Math.random() * 512;
        const amp = 3 + Math.random() * 16;
        const light = Math.random() * 0.36;
        g.strokeStyle = `rgba(${120 + light * 150}, ${78 + light * 110}, ${44 + light * 80}, ${0.16 + Math.random() * 0.3})`;
        g.lineWidth = 0.6 + Math.random() * 2.4;
        g.beginPath();
        for (let x = 0; x <= 512; x += 8) {
          const yy = y + Math.sin(x * 0.017 + i) * amp + Math.sin(x * 0.06 + i * 2) * 2;
          if (x === 0) g.moveTo(x, yy);
          else g.lineTo(x, yy);
        }
        g.stroke();
      }
      const t = new THREE.CanvasTexture(c);
      t.wrapS = t.wrapT = THREE.RepeatWrapping;
      t.colorSpace = THREE.SRGBColorSpace;
      t.anisotropy = 4;
      return t;
    })();

    const stoneTexture = (() => {
      const c = document.createElement("canvas");
      c.width = 256;
      c.height = 256;
      const g = c.getContext("2d")!;
      g.fillStyle = "#cdbfa9";
      g.fillRect(0, 0, 256, 256);
      for (let i = 0; i < 900; i++) {
        g.fillStyle = `rgba(${150 + Math.random() * 70}, ${138 + Math.random() * 60}, ${118 + Math.random() * 55}, ${Math.random() * 0.5})`;
        g.fillRect(Math.random() * 256, Math.random() * 256, 1 + Math.random() * 5, 1 + Math.random() * 2);
      }
      const t = new THREE.CanvasTexture(c);
      t.wrapS = t.wrapT = THREE.RepeatWrapping;
      t.colorSpace = THREE.SRGBColorSpace;
      return t;
    })();

    /* ---------------------------------------------------------------
       GEOMETRY — a fluted column, displaced radially by a sine of angle.
       32 flutes at 3.5% radius: enough to catch a highlight per rib
       without turning into moire at small sizes.
       --------------------------------------------------------------- */

    const FLUTES = 32;
    const colGeo = new THREE.CylinderGeometry(1.05, 1.05, 4.1, 220, 24, false);
    {
      const pos = colGeo.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i);
        const z = pos.getZ(i);
        const r = Math.hypot(x, z);
        if (r < 0.001) continue;
        const a = Math.atan2(z, x);
        const flute = 1 + Math.sin(a * FLUTES) * 0.035;
        pos.setX(i, Math.cos(a) * r * flute);
        pos.setZ(i, Math.sin(a) * r * flute);
      }
      colGeo.computeVertexNormals();
    }

    const woodMat = new THREE.MeshPhysicalMaterial({
      map: woodTexture,
      color: new THREE.Color("#7a4f2c"),
      roughness: 0.44,
      metalness: 0.0,
      clearcoat: 0.35,
      clearcoatRoughness: 0.42,
      sheen: 0.25,
      sheenColor: new THREE.Color("#c08a3e"),
    });
    woodTexture.repeat.set(3, 1);

    const column = new THREE.Mesh(colGeo, woodMat);
    group.add(column);

    /* Brass bands — the studio's signature metal, used at ~5% of surface. */
    const amberMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#c08a3e"),
      metalness: 1,
      roughness: 0.24,
      clearcoat: 0.6,
      clearcoatRoughness: 0.25,
    });

    [1.72, -1.72].forEach((y) => {
      const band = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.1, 0.13, 128), amberMat);
      band.position.y = y;
      group.add(band);
    });

    const collar = new THREE.Mesh(new THREE.TorusGeometry(1.11, 0.028, 16, 160), amberMat);
    collar.rotation.x = Math.PI / 2;
    group.add(collar);

    /* Travertine plinth */
    const plinth = new THREE.Mesh(
      new THREE.CylinderGeometry(1.62, 1.72, 0.34, 96),
      new THREE.MeshPhysicalMaterial({
        map: stoneTexture,
        color: new THREE.Color("#d6cab6"),
        roughness: 0.92,
        metalness: 0,
      })
    );
    plinth.position.y = -2.22;
    group.add(plinth);

    /* Capping stone */
    const cap = new THREE.Mesh(
      new THREE.CylinderGeometry(1.28, 1.2, 0.2, 96),
      new THREE.MeshPhysicalMaterial({
        color: new THREE.Color("#2a2622"),
        roughness: 0.55,
        metalness: 0.15,
      })
    );
    cap.position.y = 2.15;
    group.add(cap);

    /* ---------------------------------------------------------------
       LIGHTING — a single warm key raking from the left (matching the
       photography), a cool fill, and a amber rim to separate the object
       from the dark ground.
       --------------------------------------------------------------- */

    scene.add(new THREE.AmbientLight(0xbcd0e6, 0.3));

    const key = new THREE.DirectionalLight(0xffd9a0, 2.9);
    key.position.set(-4.2, 3.6, 3.4);
    scene.add(key);

    const fill = new THREE.DirectionalLight(0x7ea3c8, 0.7);
    fill.position.set(4.5, -1.2, 2.2);
    scene.add(fill);

    const rim = new THREE.SpotLight(0xffb763, 12, 22, 0.6, 0.8, 1.6);
    rim.position.set(2.6, 2.2, -5);
    scene.add(rim);

    // Cheap "environment": a gradient sphere used ONLY to bake a PMREM
    // reflection map. It is deliberately NOT added to the visible scene —
    // the canvas must stay transparent so the object sits on the section's
    // own navy ground rather than inside a dark box.
    const envScene = new THREE.Scene();
    const envGeo = new THREE.SphereGeometry(30, 32, 32);
    const envMat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      uniforms: {
        top: { value: new THREE.Color("#5c4327") },
        bottom: { value: new THREE.Color("#0e1a2b") },
      },
      vertexShader: `varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
      fragmentShader: `
        uniform vec3 top; uniform vec3 bottom; varying vec3 vP;
        void main(){ float h = clamp(vP.y / 30.0 * 0.5 + 0.5, 0.0, 1.0); gl_FragColor = vec4(mix(bottom, top, pow(h,1.6)), 1.0); }`,
    });
    envScene.add(new THREE.Mesh(envGeo, envMat));

    const pmrem = new THREE.PMREMGenerator(renderer);
    const envRT = pmrem.fromScene(envScene, 0.04);
    scene.environment = envRT.texture;

    /* ---------------------------------------------------------------
       RENDER + INTERACTION
       --------------------------------------------------------------- */

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    el.appendChild(renderer.domElement);
    Object.assign(renderer.domElement.style, { width: "100%", height: "100%", display: "block" });

    const resize = () => {
      const w = el.clientWidth || 1;
      const h = el.clientHeight || 1;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      // Pull the camera back on narrow viewports so the column always fits.
      camera.position.z = w < 640 ? 12.4 : 9.4;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(el);

    const target = { x: 0, y: 0 };
    const cur = { x: 0, y: 0 };
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      target.x = ((e.clientX - r.left) / r.width) * 2 - 1;
      target.y = ((e.clientY - r.top) / r.height) * 2 - 1;
    };
    el.addEventListener("mousemove", onMove, { passive: true });
    el.addEventListener("mouseleave", () => {
      target.x = 0;
      target.y = 0;
    });

    // Scroll progress across the section drives a 3/4 turn.
    let scrollT = 0;
    const onScroll = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      scrollT = 1 - (r.top + r.height / 2) / (vh + r.height / 2);
      scrollT = Math.max(0, Math.min(1, scrollT));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    let visible = true;
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting), { threshold: 0 });
    io.observe(el);

    const t0 = performance.now();
    let raf = 0;
    const loop = () => {
      raf = requestAnimationFrame(loop);
      if (!visible || document.hidden) return;

      cur.x += (target.x - cur.x) * 0.06;
      cur.y += (target.y - cur.y) * 0.06;

      const t = (performance.now() - t0) / 1000;
      group.rotation.y = reduce ? 0.5 : scrollT * Math.PI * 1.5 + t * 0.06 + cur.x * 0.5;
      group.rotation.x = reduce ? 0 : cur.y * -0.16 + Math.sin(t * 0.25) * 0.015;
      group.position.y = reduce ? 0 : Math.sin(t * 0.4) * 0.05;

      renderer.render(scene, camera);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      window.removeEventListener("scroll", onScroll);
      el.removeEventListener("mousemove", onMove);
      scene.traverse((o) => {
        const m = o as THREE.Mesh;
        m.geometry?.dispose?.();
        const mat = m.material as THREE.Material | THREE.Material[];
        if (Array.isArray(mat)) mat.forEach((x) => x.dispose());
        else mat?.dispose?.();
      });
      woodTexture.dispose();
      stoneTexture.dispose();
      envRT.texture.dispose();
      pmrem.dispose();
      renderer.dispose();
      el.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={host} className={className} aria-hidden />;
}
