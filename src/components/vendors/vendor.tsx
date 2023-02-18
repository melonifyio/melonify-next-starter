import Image from "next/image";
import Link from "next/link";

export type VendorProps = {
  _id: string;
  title: string;
  image: string;
  cover: string;
  address: string;
};

export default function Vendor(props: VendorProps) {
  const { _id, title, image, cover, address } = props;

  return (
    <div key={_id} className="group relative">
      <Link href={`/vendors/${_id}`}>
        <div className="relative overflow-hidden h-60 w-full rounded-2xl">
          <Image src={cover} alt={title} fill className="object-cover" />
        </div>

        <div className="absolute w-full left-0 bottom-0 p-4 bg-gradient-to-t from-gray-900 rounded-2xl">
          <div className="relative overflow-hidden h-14 w-14 rounded ring-2 ring-white group-hover:opacity-75">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>
          <h3 className="mt-4 font-semibold text-gray-100">
            <span className="absolute inset-0" />
            {title}
          </h3>
          <p className="text-base text-sm text-gray-300">{address}</p>
        </div>
      </Link>
    </div>
  );
}
