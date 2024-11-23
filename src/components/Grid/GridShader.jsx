import { useRef } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import * as THREE from "three";

// Create shader material
const GridMaterial = shaderMaterial(
  {
    u_time: 0,
    u_resolution: new THREE.Vector2(1, 1),
  },
  // Vertex shader
  `
    void main() {
      gl_Position = vec4(position, 1.0);
    }
  `,
  // Fragment shader
  `
    precision mediump float;

    uniform vec2 u_resolution;
    uniform float u_time;

    float glow(float d, float strength, float thickness) {
        return strength / (d * d + thickness);
    }

    void main() {
        // Normalize pixel coordinates (from 0 to 1)
        vec2 uv = gl_FragCoord.xy/u_resolution.xy;

        // Calculate aspect ratio
        float aspectRatio = u_resolution.x/u_resolution.y;

        // Correct UV coordinates to maintain square cells
        vec2 correctedUV = uv;
        if (aspectRatio > 1.0) {
            correctedUV.x *= aspectRatio;
        } else {
            correctedUV.y /= aspectRatio;
        }

        // Scale UV to create grid cells
        vec2 grid = fract(correctedUV * ${
          window.innerWidth <= 1000 ? "7.5" : "20.0"
        });

        // Create grid lines with smoothstep
        float lineWidth = 0.05;
        vec2 smoothGrid = smoothstep(lineWidth, 0.0, abs(grid - 0.5));
        float line = max(smoothGrid.x, smoothGrid.y);

        // Create diagonal wave from top-left
        float diagonal = (correctedUV.x - correctedUV.y) * ${
          window.innerWidth <= 1000 ? "0.3" : "0.5"
        };
        // Extend the animation range to ensure it goes fully off screen
        float wavePos = fract(u_time * 0.1) * ${
          window.innerWidth <= 1000 ? "3.5" : "2.7"
        } - ${window.innerWidth <= 1000 ? "2.5" : "1.0"};
        float distanceFromWave = abs(diagonal - wavePos);

        // Create subtle glowing effect
        float glowIntensity = glow(distanceFromWave, 0.004, 0.005);
        glowIntensity *= smoothstep(0.1, 0.0, distanceFromWave);

        // Grid colors
        vec3 lineColor = vec3(30.0/255.0, 25.0/255.0, 41.0/255.0); // #44297A
        vec3 glowColor = vec3(147.0/255.0, 51.0/255.0, 255.0/255.0); // Saturated purple
        vec3 backgroundColor = vec3(21.0/255.0);

        // Mix colors
        vec3 gridColor = mix(backgroundColor, lineColor, line);
        vec3 finalColor = mix(gridColor, glowColor, glowIntensity * line);

        // Add subtle ambient glow
        finalColor += glowColor * glowIntensity * 0.1;

        gl_FragColor = vec4(finalColor, 1.0);
    }
  `
);

// 44297A

extend({ GridMaterial });

// Animated plane component
function GridPlane() {
  const materialRef = useRef();

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.u_time = state.clock.elapsedTime;
      materialRef.current.u_resolution.set(state.size.width, state.size.height);
    }
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <gridMaterial ref={materialRef} />
    </mesh>
  );
}

// Main component
export default function GridShader() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100dvh",
        zIndex: -1,
        position: "absolute",
        // opacity: 0.87,
      }}
    >
      <Canvas>
        <GridPlane />
      </Canvas>
    </div>
  );
}
