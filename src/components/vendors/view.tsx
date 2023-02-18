import * as React from "react";
import Image from "next/image";
import { doc } from "firebase/firestore";

import useFirestoreDoc from "@/hooks/useFirestoreDoc";
import firestore from "@/services/firebase/firestore";
import { VendorProps } from "@/components/vendors/vendor";
import Categories from "./categories/categories";
import Products from "../products/products";
import Spinner from "../spinner";

type VendorViewProps = {
  id: string;
};

export default function VendorView({ id }: VendorViewProps) {
  const [categoryId, setCategoryId] = React.useState("");

  const [vendor, loading] = useFirestoreDoc<VendorProps>(
    ["vendor", id],
    doc(firestore, `Restaurants/${id}`)
  );

  if (loading) return <Spinner />;

  return (
    <div className="grid grid-cols-12 py-12">
      <div className="col-span-2">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {vendor?.title}
          </h2>
          <div className="relative overflow-hidden h-14 w-14 rounded ring-2 ring-white group-hover:opacity-75">
            <Image
              src={vendor?.image || ""}
              alt={vendor?.title || ""}
              fill
              className="object-cover"
            />
          </div>
        </div>
        <Categories restaurantId={id as string} onItemClick={setCategoryId} />
      </div>
      <div className="col-span-10">
        <Products
          restaurantId={id as string}
          gridCols={3}
          categoryId={categoryId}
        />
      </div>
    </div>
  );
}
