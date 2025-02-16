"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const BRANDS = [
	"Gucci",
	"Prada",
	"Hermès",
	"Louis Vuitton",
	"Chanel",
	"Dior",
	"Saint Laurent",
	"Balenciaga",
	"Fendi",
	"Burberry",
];

export function BrandMarquee() {
	const marqueeRef = useRef(null);
	const brandRefs = useRef<(HTMLDivElement | null)[]>([]);

	useEffect(() => {
		const ctx = gsap.context(() => {
			// Create a timeline for the marquee animation
			const tl = gsap.timeline({
				repeat: -1,
				defaults: { ease: "none" },
			});

			// Calculate the total width of all brands
			const totalWidth = brandRefs.current
				.filter((el): el is HTMLDivElement => el !== null)
				.reduce((acc, el) => acc + el.offsetWidth + 64, 0);

			// Set the initial position
			gsap.set(brandRefs.current, { xPercent: 0 });

			// Animate all brands together
			tl.to(brandRefs.current, {
				x: -totalWidth,
				duration: 15,
				ease: "none",
			});

			// // Hover effect
			// brandRefs.current.forEach((brand) => {
			// 	brand.addEventListener("mouseenter", () => {
			// 		gsap.to(brand, {
			// 			scale: 1.1,
			// 			duration: 0.3,
			// 			ease: "power2.out",
			// 		});
			// 	});

			// 	brand.addEventListener("mouseleave", () => {
			// 		gsap.to(brand, {
			// 			scale: 1,
			// 			duration: 0.3,
			// 			ease: "power2.in",
			// 		});
			// 	});
			// });

			brandRefs.current
				.filter((brand): brand is HTMLDivElement => brand !== null) // Ensure brand is not null
				.forEach((brand) => {
					brand.addEventListener("mouseenter", () => {
						gsap.to(brand, {
							scale: 1.1,
							duration: 0.3,
							ease: "power2.out",
						});
					});

					brand.addEventListener("mouseleave", () => {
						gsap.to(brand, {
							scale: 1,
							duration: 0.3,
							ease: "power2.in",
						});
					});
				});
		});

		return () => ctx.revert();
	}, []);

	return (
		<div className="h-[25vh] bg-black overflow-hidden flex items-center">
			<div ref={marqueeRef} className="whitespace-nowrap flex gap-16 px-8">
				{[...BRANDS, ...BRANDS].map((brand, index) => (
					<div
						key={`${brand}-${index}`}
						ref={(el) => (brandRefs.current[index] = el)}
						className="inline-block text-white text-6xl font-black opacity-50 hover:opacity-100 transition-opacity cursor-default"
					>
						{brand}
					</div>
				))}
			</div>
		</div>
	);
}
