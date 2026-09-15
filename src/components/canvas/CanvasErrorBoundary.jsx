import React from "react";

let cachedWebGL = null;

/**
 * True when the browser can create a WebGL context.
 * Result is cached. We avoid WEBGL_lose_context on the probe by default —
 * forcibly losing the probe context has caused false negatives / flaky
 * follow-up canvases in Chrome.
 */
export function canUseWebGL(options = {}) {
  const { refresh = false } = options;
  if (typeof document === "undefined") return false;
  if (!refresh && cachedWebGL !== null) return cachedWebGL;

  try {
    const canvas = document.createElement("canvas");
    canvas.width = 1;
    canvas.height = 1;
    const gl =
      canvas.getContext("webgl2", {
        failIfMajorPerformanceCaveat: false,
        powerPreference: "default",
      }) ||
      canvas.getContext("webgl", {
        failIfMajorPerformanceCaveat: false,
        powerPreference: "default",
      }) ||
      canvas.getContext("experimental-webgl");

    cachedWebGL = !!gl;

    // Detach the probe canvas; do not call loseContext() — that can poison
    // Chrome's shared GPU process for subsequent real canvases.
    if (gl && typeof gl.getParameter === "function") {
      // Touch a harmless parameter so drivers fully initialize the context.
      gl.getParameter(gl.VERSION);
    }
  } catch {
    cachedWebGL = false;
  }

  return cachedWebGL;
}

/**
 * Isolates react-three-fiber Canvas failures so a missing/broken WebGL context
 * cannot unmount the rest of the portfolio (black empty page in Chrome).
 */
class CanvasErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    if (import.meta.env.DEV) {
      console.warn("[CanvasErrorBoundary]", error?.message || error);
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? null;
    }
    return this.props.children;
  }
}

export default CanvasErrorBoundary;
