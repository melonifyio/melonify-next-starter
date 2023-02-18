import * as React from "react";
import {
  collection,
  collectionGroup,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import useFirestoreQuery from "@/hooks/useFirestoreQuery";
import firestore from "@/services/firebase/firestore";
import { ProductProps } from "./product";

type UseProductsProps = {
  restaurantId?: string;
  categoryId?: string;
};

const useProducts = (props: UseProductsProps) => {
  const { categoryId, restaurantId } = props;

  const constraints = [];

  if (categoryId) {
    constraints.push(where("category._id", "==", categoryId));
  }

  const q = restaurantId
    ? collection(firestore, `Restaurants/${restaurantId}/Menu`)
    : collectionGroup(firestore, "Menu");

  const res = useFirestoreQuery<ProductProps>(
    props,
    query(q, orderBy("createdAt"), ...constraints)
  );

  return res;
};

export default useProducts;
