import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBG() {
  const init = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      init={init}
      className="absolute inset-0 -z-10"
      options={{
        fullScreen: false,
        fpsLimit: 60,
        particles: {
          number: {
            value: 45,
            density: { enable: true, area: 900 },
          },
          color: {
            value: ["#3b82f6", "#8b5cf6"],
          },
          opacity: {
            value: 0.25,
            random: true,
          },
          size: {
            value: { min: 1, max: 2 },
          },
          links: {
            enable: true,
            distance: 140,
            opacity: 0.12,
            color: "#3b82f6",
          },
          move: {
            enable: true,
            speed: 0.4,
            outModes: { default: "out" },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            repulse: {
              distance: 120,
              duration: 0.4,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
