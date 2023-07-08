import { products } from "@/lib/utaill/mockup";
import { StaticImageData } from "next/image";
import ProductCard from "@/views/ProductCard";
const getProduct = (category: string) => {
  return products.filter((Product) => Product.category === category);
};

export default function Page({ params }: { params: { slug: string } }) {
  const result = getProduct(params.slug);

  return (
    <div className="flex justify-evenly mt-10 py-10 flex-wrap flex-col md:flex-row items-center ">
      {result.map((product) => (
        <ProductCard
          key={product.id}
          title={product.name}
          price={product.price}
          Image={product.image as StaticImageData}
          category={product.category}
          id={product.id}
        />
      ))}
      ;
    </div>
  );
}
