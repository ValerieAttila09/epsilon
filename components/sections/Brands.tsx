import { brands } from "@/lib/constants";
import { Marquee } from "../ui/marquee";
import Image from "next/image";

const Brands = () => {
	return (
		<section className="w-full py-12 md:py-20 bg-background">
			<div className="container mx-auto flex flex-col items-center justify-center gap-6 text-center px-4 sm:px-6 lg:px-8">
				<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">
					Top Brands, Endless Style
				</h2>
				<p className="max-w-2xl text-md md:text-lg text-neutral-700">
					From iconic fashion houses to emerging designers, we bring you a curated selection of brands that represent the best in quality, style, and craftsmanship. Discover your new favorite.
				</p>
			</div>
			<div className="relative mt-8 md:mt-12">
				<Marquee pauseOnHover className="[--duration:40s]">
					{brands.map((brand, index) => (
						<div key={index} className="flex items-center justify-center mx-4 sm:mx-6">
							<Image
								src={brand.logo}
								alt={`${brand.name} logo`}
								width={100}
								height={50}
								className="object-contain aspect-[2/1] transition-all duration-300 hover:grayscale-0 sm:w-[120px] sm:h-[60px]"
							/>
						</div>
					))}
				</Marquee>
				<div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-background to-transparent"></div>
				<div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-background to-transparent"></div>
			</div>
		</section>
	);
};

export default Brands;
