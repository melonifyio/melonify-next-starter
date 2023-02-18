import Vendor from "./vendor";
import Spinner from "../spinner";
import useVendors from "./use-vendors";

type VendorsProps = {
  categoryId?: string;
};

export default function Vendors({ categoryId }: VendorsProps) {
  const [restaurants, loading] = useVendors({ categoryId });

  if (loading) return <Spinner />;

  return (
    <div className="mx-auto max-w-2xl py-16 sm:py-14 lg:max-w-none lg:py-20">
      <h2 className="text-2xl font-bold text-gray-900">Vendors</h2>

      <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
        {restaurants.map((restaurant) => (
          <Vendor key={restaurant._id} {...restaurant} />
        ))}
      </div>
    </div>
  );
}
