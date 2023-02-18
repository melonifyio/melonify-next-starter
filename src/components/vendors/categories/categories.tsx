import Image from "next/image";
import { collection, orderBy, query } from "firebase/firestore";
import useFirestoreQuery from "@/hooks/useFirestoreQuery";
import firestore from "@/services/firebase/firestore";
import Category, { CategoryProps } from "./category";

type CategoriesProps = {
  restaurantId?: string;
  onItemClick: (id: string) => void;
};

export default function Categories({
  restaurantId,
  onItemClick,
}: CategoriesProps) {
  const [categories] = useFirestoreQuery<CategoryProps>(
    ["categories"],
    query(
      collection(firestore, `Restaurants/${restaurantId}/Categories`),
      orderBy("createdAt", "desc")
    )
  );

  return (
    <div className="mx-auto my-12 max-w-2xl">
      <Category _id="" title="Show all" onClick={onItemClick} />
      {categories.map((category) => (
        <Category key={category._id} {...category} onClick={onItemClick} />
      ))}
    </div>
  );
}
