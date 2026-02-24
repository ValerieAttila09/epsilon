import { brands } from "@/lib/constants";
import { Marquee } from "../ui/marquee";
import Image from "next/image";

const Brands = () => {
    return (
        <section className="py-12 bg-background">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Our Brands</h2>
                <Marquee>
                    {brands.map((brand, index) => (
                        <div key={index} className="flex items-center justify-center mx-4">
                            <Image src={brand.logo} alt={brand.name} width={100} height={50} />
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default Brands;
