import React from "react";

function ProductCardSkeleton() {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
      <div className="p-8 rounded-t-lg bg-gray-300 animate-pulse h-48"></div>
      <div className="px-5 pb-5">
        <div className="h-6 bg-gray-300 rounded-md animate-pulse w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-300 rounded-md animate-pulse w-1/2 mb-4"></div>
        <div className="flex items-center mt-2.5 mb-5">
          <div className="w-20 h-5 bg-gray-300 rounded-md animate-pulse"></div>
        </div>
        <div className="flex items-center justify-between">
          <div className="h-8 w-24 bg-gray-300 rounded-md animate-pulse"></div>
          <div className="h-10 w-28 bg-gray-300 rounded-lg animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

export default ProductCardSkeleton;
