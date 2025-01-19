import ProductsView from "@/components/ProductsView";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import Hero from "@/components/hero";
import Features from "@/components/second";
import TsQuollex from "@/components/salesbanner";




export default async function Home() {
  const products = await getAllProducts();
  const categories = await getAllCategories();
  
  return (
    <main>

      <TsQuollex/>
      <Hero />
      <Features />
      <div className="flex flex-col items-center justify-top  min-h-screen bg-gray-100 p-4">

        <ProductsView products={products} categories={categories} />
      </div>
    </main>
    
  );
}
