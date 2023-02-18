import * as React from "react";
import { collection, orderBy, query, where } from "firebase/firestore";
import useFirestoreQuery from "@/hooks/useFirestoreQuery";
import firestore from "@/services/firebase/firestore";
import { VendorProps } from "./vendor";

type useVendorsProps = {
  restaurantId?: string;
  categoryId?: string;
};

const useVendors = (props: useVendorsProps) => {
  const { categoryId } = props;

  const constraints = [];

  if (categoryId) {
    constraints.push(where("category._id", "==", categoryId));
  }

  const q = collection(firestore, `Restaurants`);

  const res = useFirestoreQuery<VendorProps>(
    props,
    query(q, orderBy("createdAt"), ...constraints)
  );

  return res;
};

export default useVendors;
