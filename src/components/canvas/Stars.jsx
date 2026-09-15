import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import CanvasErrorBoundary, { canUseWebGL } from "./CanvasErrorBoundary";

const Stars = (props) => {
  const ref = useRef();
  // Length must be divisible by 3 (xyz); otherwise Three.js hits NaN bounding spheres.
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5001), { radius: 1.2 })
  );

  useFrame((_state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  if (!canUseWebGL()) return null;

  return (
    <div className="w-full h-auto absolute inset-0 z-[-1] pointer-events-none">
      <CanvasErrorBoundary>
        <Canvas
          camera={{ position: [0, 0, 1] }}
          dpr={[1, 1.5]}
          gl={{
            antialias: false,
            alpha: true,
            powerPreference: "default",
            failIfMajorPerformanceCaveat: false,
          }}
        >
          <Suspense fallback={null}>
            <Stars />
          </Suspense>
          <Preload all />
        </Canvas>
      </CanvasErrorBoundary>
    </div>
  );
};

export default StarsCanvas;