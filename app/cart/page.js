import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import singleProduct from '../products/[productId]/page';

export default function CartData() {
  const productsCookie = getCookie('products');

  const products = !productsCookie ? [] : parseJson(productsCookie);

  const productToDisplay = products.find((product) => {
    return product.id === singleProduct.id;
  });

  return (
    <div>
      <div>Quantity: {productToDisplay?.quantity}</div>
    </div>
  );
}

// which variables do i need
// clause: quantity
// basis info needed: cookies
// KEY productId
// product.id or singleProduct.id
