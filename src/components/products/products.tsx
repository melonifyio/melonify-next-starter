import Spinner from "../spinner";
import Product from "./product";
import useProducts from "./use-products";

type ProductsProps = {
  restaurantId?: string;
  gridCols?: number;
  categoryId?: string;
};

export default function Products(props: ProductsProps) {
  const { restaurantId, gridCols = 4, categoryId } = props;

  const [products, loading] = useProducts({
    restaurantId,
    categoryId,
  });

  if (loading) return <Spinner />;

  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        Products
      </h2>
      <div
        className={`mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-${gridCols} xl:gap-x-8`}
      >
        {products.map((product) => (
          <Product key={product._id} {...product} />
        ))}
      </div>
    </div>
  );
}
