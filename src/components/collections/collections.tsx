import Image from "next/image";
import { collection, orderBy, query } from "firebase/firestore";
import useFirestoreQuery from "@/hooks/useFirestoreQuery";
import firestore from "@/services/firebase/firestore";
import Collection, { CollectionProps } from "./collection";
import Spinner from "../spinner";

export default function Collections() {
  const [categories, loading] = useFirestoreQuery<CollectionProps>(
    ["collection"],
    query(collection(firestore, "Categories"), orderBy("createdAt", "desc"))
  );

  if (loading) return <Spinner />;

  return (
    <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
      <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

      <div className="mt-6 space-y-12 lg:grid lg:grid-cols-5 lg:gap-x-6 lg:space-y-0">
        {categories.map((category) => (
          <Collection key={category._id} {...category} />
        ))}
      </div>
    </div>
  );
}
