"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function BrandStory() {
	const sectionRef = useRef(null);
	const headingRef = useRef(null);
	const statsRef = useRef<(HTMLDivElement | null)[]>([]);

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from(headingRef.current, {
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top center",
					end: "bottom center",
				},
				y: 100,
				opacity: 0,
				duration: 1,
				ease: "power4.out",
			});

			statsRef.current.forEach((stat, index) => {
				gsap.from(stat, {
					scrollTrigger: {
						trigger: stat,
						start: "top bottom",
						end: "bottom center",
					},
					y: 50,
					opacity: 0,
					duration: 1,
					delay: index * 0.2,
					ease: "power4.out",
				});
			});
		});

		return () => ctx.revert();
	}, []);

	return (
		<section
			ref={sectionRef}
			className="min-h-screen bg-black text-white py-32"
		>
			<div className="max-w-7xl mx-auto px-4">
				<div className="max-w-3xl mx-auto text-center mb-24">
					<h2
						ref={headingRef}
						className="text-6xl font-black uppercase mb-8 tracking-tight"
					>
						Our Legacy of Luxury
					</h2>
					<p className="text-xl text-neutral-400">
						Since 1925, we have been crafting exceptional garments that combine
						traditional craftsmanship with contemporary design. Our commitment
						to quality and innovation has made us a leader in luxury fashion.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{[
						{ number: "100", label: "Years of Excellence" },
						{ number: "50+", label: "Global Boutiques" },
						{ number: "1M+", label: "Satisfied Clients" },
						{ number: "200+", label: "Master Artisans" },
					].map((stat, index) => (
						<div
							key={stat.label}
							ref={(el) => (statsRef.current[index] = el)}
							className="text-center p-8 border border-white/10 rounded-lg"
						>
							<div className="text-5xl font-black mb-4">{stat.number}</div>
							<div className="text-neutral-400">{stat.label}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
