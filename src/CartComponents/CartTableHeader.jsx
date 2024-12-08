export const CartTableHeader = () => {
  return (
    <div className="mb-5 mt-10 flex">
      <h3 className="w-2/5 text-xs font-semibold uppercase text-gray-600">
        Product Details
      </h3>
      <h3 className="w-1/5 text-center text-xs font-semibold uppercase text-gray-600">
        Quantity
      </h3>
      <h3 className="w-1/5 text-center text-xs font-semibold uppercase text-gray-600">
        Price
      </h3>
      <h3 className="w-1/5 text-center text-xs font-semibold uppercase text-gray-600">
        Total
      </h3>
    </div>
  );
};
