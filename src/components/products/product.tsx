import * as React from "react";
import Image from "next/image";
import ProductModal from "./product-modal";

export type ProductProps = {
  _id: string;
  title: string;
  image: string;
  description: string;
  price: number;
};

export default function Product(props: ProductProps) {
  const { _id, title, image, description, price } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div className="group relative">
        <div className="relative overflow-hidden h-60 w-full rounded-xl ring-2 ring-white group-hover:opacity-75">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="font-semibold text-gray-700">
              <div className="cursor-pointer" onClick={() => setOpen(true)}>
                <span aria-hidden="true" className="absolute inset-0" />
                {title}
              </div>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{description}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">{price}</p>
        </div>
      </div>

      <ProductModal open={open} onClose={() => setOpen(false)} {...props} />
    </>
  );
}
