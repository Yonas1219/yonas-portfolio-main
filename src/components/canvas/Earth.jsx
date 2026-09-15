import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import CanvasErrorBoundary, { canUseWebGL } from "./CanvasErrorBoundary";

const Earth = () => {
	const earth = useGLTF("./planet/scene.gltf");
	return (
		<primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
	);
};

/** Static stand-in when WebGL is unavailable or the 3D canvas fails. */
const EarthFallback = () => (
	<div className="w-full h-full min-h-[350px] flex items-center justify-center">
		<img
			src="/planet/textures/Planet_baseColor.png"
			alt="Earth globe"
			className="w-[min(80%,420px)] aspect-square object-cover rounded-full shadow-[0_0_40px_rgba(145,94,255,0.35)]"
			style={{ animation: "earth-spin 80s linear infinite" }}
		/>
		<style>{`
			@keyframes earth-spin {
				from { transform: rotate(0deg); }
				to { transform: rotate(360deg); }
			}
		`}</style>
	</div>
);

const EarthCanvas = () => {
	const webglOk = canUseWebGL();

	if (!webglOk) {
		return <EarthFallback />;
	}

	return (
		<CanvasErrorBoundary fallback={<EarthFallback />}>
			<Canvas
				shadows
				frameloop="demand"
				dpr={[1, 2]}
				gl={{ preserveDrawingBuffer: true }}
				camera={{
					fov: 45,
					near: 0.1,
					far: 200,
					position: [-4, 3, 6],
				}}
			>
				<Suspense fallback={<CanvasLoader />}>
					<OrbitControls
						autoRotate
						enableZoom={false}
						maxPolarAngle={Math.PI / 2}
						minPolarAngle={Math.PI / 2}
					/>
					<Earth />
				</Suspense>

				<Preload all />
			</Canvas>
		</CanvasErrorBoundary>
	);
};

export default EarthCanvas;
