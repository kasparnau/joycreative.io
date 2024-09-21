"use client";

import { useEffect, useRef } from "react";

import createGlobe from "cobe";
import { useSpring } from "react-spring";

export default function Cobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const [{ r }, api] = useSpring(() => ({
    r: 4.3,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001,
    },
  }));
  useEffect(() => {
    if (!canvasRef.current) return;

    let width = 0;
    const onResize = () =>
      canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener("resize", onResize);
    onResize();
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 2.7,
      theta: 0.3,
      dark: 1,
      diffuse: 2,
      mapSamples: 16000,
      mapBrightness: 2,
      baseColor: [0.5, 0.5, 0.5],
      markerColor: [0.882, 0.114, 0.282],
      glowColor: [0.07, 0.07, 0.07],
      markers: [
        { location: [60.1699, 24.9384], size: 0.05 }, //* HELSINKI
      ],
      onRender: (state) => {
        state.phi = r.get();
        state.width = width * 2;
        state.height = width * 2;
      },
    });
    setTimeout(() => {
      if (!canvasRef.current) return;
      canvasRef.current.style.opacity = "1";
    });
    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 600,
        aspectRatio: 1,
        margin: "auto",
        position: "relative",
      }}
    >
      <canvas
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current =
            e.clientX - pointerInteractionMovement.current;
          canvasRef.current && (canvasRef.current.style.cursor = "grabbing");
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          canvasRef.current && (canvasRef.current.style.cursor = "grab");
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          canvasRef.current && (canvasRef.current.style.cursor = "grab");
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            void api.start({
              r: delta / 200,
            });
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            void api.start({
              r: delta / 100,
            });
          }
        }}
        style={{
          width: "100%",
          height: "100%",
          contain: "layout paint size",
          cursor: "auto",
          userSelect: "none",
        }}
      />
    </div>
  );
}
