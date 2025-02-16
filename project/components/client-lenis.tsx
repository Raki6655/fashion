"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export function ClientLenis() {
	useEffect(() => {
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			orientation: "vertical", // ✅ Correct property instead of "direction"
			gestureOrientation: "vertical", // ✅ Correct property instead of "gestureDirection"
			smoothWheel: true, // ✅ Alternative for enabling smooth scrolling with a mouse wheel
			// smoothTouch: false, // ✅ Valid, controls touch scrolling behavior
			touchMultiplier: 2, // ❌ May not exist in newer versions, remove if necessary
		});

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		return () => {
			lenis.destroy();
		};
	}, []);

	return null;
}
