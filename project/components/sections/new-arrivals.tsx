"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

export function NewArrivals() {
	const sectionRef = useRef(null);
	const headingRef = useRef(null);
	const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

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

			cardsRef.current.forEach((card, index) => {
				gsap.from(card, {
					scrollTrigger: {
						trigger: card,
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
		<section ref={sectionRef} className="min-h-screen bg-white py-32">
			<div className="max-w-7xl mx-auto px-4">
				<h2
					ref={headingRef}
					className="text-6xl font-black uppercase mb-16 tracking-tight"
				>
					New Arrivals
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{[
						{
							title: "The Modern Suit",
							description: "Tailored perfection for the contemporary gentleman",
							price: "$899",
							image:
								"https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80",
						},
						{
							title: "Evening Collection",
							description: "Elegance for special occasions",
							price: "$599",
							image:
								"https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80",
						},
						{
							title: "Casual Luxury",
							description: "Refined comfort for everyday style",
							price: "$299",
							image:
								"https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80",
						},
					].map((item, index) => (
						<div
							key={item.title}
							ref={(el) => (cardsRef.current[index] = el)}
							className="group relative overflow-hidden rounded-lg"
						>
							<div className="aspect-[3/4] overflow-hidden">
								<img
									src={item.image}
									alt={item.title}
									className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
								/>
							</div>
							<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<div className="absolute bottom-0 left-0 right-0 p-6 text-white">
									<h3 className="text-2xl font-bold mb-2">{item.title}</h3>
									<p className="text-sm mb-4">{item.description}</p>
									<p className="text-xl font-bold mb-4">{item.price}</p>
									<Button
										variant="default"
										className="bg-white text-black hover:bg-white/90"
									>
										Shop Now
									</Button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
