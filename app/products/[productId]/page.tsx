import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductById } from '../../../database/products';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';
import AddToCartForm from './AddToCartForm';

type Props = {
  params: {
    productId: string;
  };
};

export default async function SingleProductPage(props: Props) {
  // it's a string therefore need to convert to a number
  const singleProduct = await getProductById(Number(props.params.productId));
  // cookies

  // error if page is not found
  if (!singleProduct) {
    return notFound();
  }

  const productsCookie = getCookie('products');

  const products = !productsCookie ? [] : parseJson(productsCookie);
  // parseJson(productsCookie) || []; alternative to always have an array type

  const productToDisplay = products?.find((product) => {
    return product.id === singleProduct.id;
  });

  return (
    <div>
      <h1>{singleProduct.type}</h1>
      <div>
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

          <li>Quantity: {productToDisplay?.quantity}</li>
          <li data-test-id="product-quantity">
            <AddToCartForm productId={singleProduct.id} />
          </li>
        </ul>
      </div>
    </div>
  );
}
