import React from "react";

let cachedWebGL = null;

/**
 * True when the browser can create a WebGL context.
 * Result is cached and the probe context is released so we do not
 * exhaust the browser's limited WebGL context budget (false negatives).
 */
export function canUseWebGL() {
  if (typeof document === "undefined") return false;
  if (cachedWebGL !== null) return cachedWebGL;

  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl");

    cachedWebGL = !!gl;

    if (gl) {
      const lose = gl.getExtension("WEBGL_lose_context");
      if (lose) lose.loseContext();
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
