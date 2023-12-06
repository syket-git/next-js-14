const ProductDetails = ({ params }: { params: { productId: number } }) => {
  console.log({ params });
  return <div>Details of the product {params.productId}</div>;
};

export default ProductDetails;
