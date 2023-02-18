import Image from "next/image";

export type CategoryProps = {
  _id: string;
  title: string;
  onClick: (id: string) => void;
};

export default function Category(props: CategoryProps) {
  const { _id, title, onClick } = props;

  return (
    <div className="group relative cursor-pointer" onClick={() => onClick(_id)}>
      <h3 className="my-2 font-semibold text-gray-700">
        <span className="absolute inset-0" />
        {title}
      </h3>
    </div>
  );
}
