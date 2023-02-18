import Image from "next/image";
import Link from "next/link";

export type CollectionProps = {
  _id: string;
  title: string;
  image: string;
};

export default function Collection(props: CollectionProps) {
  const { _id, title, image } = props;

  return (
    <div className="group relative">
      <Link href={`/vendors`}>
        <div className="relative overflow-hidden h-40 w-full rounded-xl ring-2 ring-white group-hover:opacity-75">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <h3 className="mt-6 text-center font-semibold text-gray-700">
          <span className="absolute inset-0" />
          {title}
        </h3>
      </Link>
    </div>
  );
}
