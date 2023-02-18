import * as React from "react";
import {
  DocumentData,
  DocumentSnapshot,
  DocumentReference,
  onSnapshot,
} from "firebase/firestore";

const useFirestoreDoc = <T extends DocumentData>(
  keys: any,
  docRef: DocumentReference
): [T | null, boolean, Error | null] => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<Error | null>(null);
  const [doc, setDoc] = React.useState<T | null>(null);

  React.useEffect(() => {
    const unsubscribe = onSnapshot(
      docRef,
      (snapshot: DocumentSnapshot) => {
        setIsLoading(false);
        if (!snapshot.exists) return null;
        setDoc({
          _id: snapshot.id,
          ...(snapshot.data() as T),
        });
      },
      (err: Error) => {
        setError(err);
      }
    );

    return () => unsubscribe();
  }, [JSON.stringify(keys)]);

  return [doc, isLoading, error];
};

export default useFirestoreDoc;
