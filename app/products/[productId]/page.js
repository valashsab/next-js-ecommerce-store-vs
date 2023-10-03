import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductById } from '../../../database/products';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';
import AddToCartForm from './AddToCartForm';

export default function SingleProductPage(props) {
  // it's a string therefore need to convert to a number
  const singleProduct = getProductById(Number(props.params.productId));
  // cookies
  const productsCookie = getCookie('products');

  const products = !productsCookie ? [] : parseJson(productsCookie);

  const productToDisplay = products.find((product) => {
    return product.id === singleProduct.id;
  });
  console.log(productToDisplay);
  //

  // error if page is not found
  if (!singleProduct) {
    return notFound();
  }

  return (
    <div>
      <h1>{singleProduct.type}</h1>

      <Image
        data-test-id="product-image"
        src={`/images/${singleProduct.type}.png`}
        alt={singleProduct.type}
        width={200}
        height={200}
      />
      <ul>
        <li data-test-id="product-price">{singleProduct.price}</li>
        <li>{singleProduct.weight}</li>
      </ul>
      <div>Quantity: {productToDisplay?.quantity}</div>
      <AddToCartForm productId={singleProduct.id} />
    </div>
  );
}
