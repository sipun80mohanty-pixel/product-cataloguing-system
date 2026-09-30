import React, { useContext } from 'react';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';

const Product = () => {

  const { products } = useContext(ShopContext);

  const { productId } = useParams();

  const product = products.find(
    (e) => e.id === Number(productId)
  );

  // Products API se load hone tak
  if (products.length === 0) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "100px" }}>
        Loading...
      </h2>
    );
  }

  // Agar product nahi mila
  if (!product) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "100px" }}>
        Product Not Found
      </h2>
    );
  }

  return (
    <div>

      <ProductDisplay product={product} />

      <DescriptionBox />

      <RelatedProducts />

    </div>
  );
};

export default Product;