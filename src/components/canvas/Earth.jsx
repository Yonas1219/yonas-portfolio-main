import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import CanvasErrorBoundary, { canUseWebGL } from "./CanvasErrorBoundary";

const preparedScenes = new WeakSet();

/**
 * Clouds texture is RGB brush strokes on black (no alpha). Across browsers/GPUs
 * that mesh either vanishes or renders as opaque blue/violet "ribbons" caging
 * the planet. Hide it so every browser matches the intended clean night globe.
 */
function prepareEarthScene(scene) {
	if (preparedScenes.has(scene)) return;
	preparedScenes.add(scene);

	scene.traverse((child) => {
		if (!child.isMesh) return;

		const name = `${child.name || ""} ${child.parent?.name || ""}`.toLowerCase();
		const materials = Array.isArray(child.material)
			? child.material
			: child.material
				? [child.material]
				: [];
		const matName = materials.map((m) => (m.name || "").toLowerCase()).join(" ");
		const isClouds = name.includes("cloud") || matName.includes("cloud");

		if (isClouds) {
			child.visible = false;
		}
	});
}

const Earth = () => {
	const { scene } = useGLTF("./planet/scene.gltf");
	// Run synchronously so the first painted frame never shows opaque cloud ribbons.
	prepareEarthScene(scene);

	return (
		<primitive object={scene} scale={2.5} position-y={0} rotation-y={0} />
	);
};

/** Static stand-in when WebGL is unavailable or the 3D canvas fails. */
const EarthFallback = () => (
	<div className="w-full h-full min-h-[350px] flex items-center justify-center relative">
		{/* Soft atmospheric glow to match the 3D globe */}
		<div
			aria-hidden
			className="absolute rounded-full pointer-events-none"
			style={{
				width: "min(88%, 460px)",
				aspectRatio: "1",
				background:
					"radial-gradient(circle, rgba(145,94,255,0.45) 0%, rgba(145,94,255,0.12) 45%, transparent 70%)",
				filter: "blur(8px)",
			}}
		/>
		<div
			className="relative w-[min(80%,420px)] aspect-square rounded-full overflow-hidden shadow-[0_0_48px_rgba(145,94,255,0.4)]"
			style={{
				background:
					"radial-gradient(circle at 35% 30%, #1a1035 0%, #050816 70%)",
			}}
		>
			<img
				src="/planet/textures/Planet_baseColor.png"
				alt="Earth globe"
				className="absolute inset-0 w-full h-full object-cover"
				style={{
					animation: "earth-spin 80s linear infinite",
					// Equirectangular map as a flat disc approximates the night globe
					filter: "saturate(1.05) brightness(1.05)",
				}}
				draggable={false}
			/>
		</div>
		<style>{`
			@keyframes earth-spin {
				from { transform: rotate(0deg); }
				to { transform: rotate(360deg); }
			}
		`}</style>
	</div>
);

const EarthCanvas = () => {
	const [webglOk, setWebglOk] = useState(() => canUseWebGL());

	// Re-check once after mount if the probe previously failed (false negative).
	useEffect(() => {
		if (webglOk) return;
		const id = requestAnimationFrame(() => {
			setWebglOk(canUseWebGL({ refresh: true }));
		});
		return () => cancelAnimationFrame(id);
	}, [webglOk]);

	if (!webglOk) {
		return <EarthFallback />;
	}

	return (
		<div className="w-full h-full min-h-[350px]">
			<CanvasErrorBoundary fallback={<EarthFallback />}>
				<Canvas
					shadows
					frameloop="demand"
					dpr={[1, 1.75]}
					gl={{
						preserveDrawingBuffer: true,
						antialias: true,
						alpha: true,
						powerPreference: "default",
						failIfMajorPerformanceCaveat: false,
					}}
					camera={{
						fov: 45,
						near: 0.1,
						far: 200,
						position: [-4, 3, 6],
					}}
					style={{ width: "100%", height: "100%" }}
					onCreated={({ gl }) => {
						gl.setClearColor(0x000000, 0);
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
		</div>
	);
};

useGLTF.preload("./planet/scene.gltf");

export default EarthCanvas;
