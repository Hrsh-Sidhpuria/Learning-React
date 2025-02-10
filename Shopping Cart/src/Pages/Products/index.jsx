import React, { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import ProductCard from "../../Components/ProductCard";
import ProductCardSkeleton from "../../Components/ProductCard/ProductCardSkeleton";

function Products() {
  const { listofproduct } = useContext(ShoppingCartContext);

  console.log(listofproduct);

  return (
    <div>
      <div className="flex justify-center mt-4 mb-4 ">
        <div className="text-4xl font-bold font-sans text-zinc-900">
          Products
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {listofproduct.length === 0
          ? Array.from({ length: 8 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))
          : listofproduct.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
}

export default Products;
