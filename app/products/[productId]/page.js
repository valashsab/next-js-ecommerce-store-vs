import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProduct } from '../../../database/products';
import { getCookie } from '../../../util/cookies';
import productItemNumbersCookie from './actions';
import ItemNumberForm from './ItemNumberForm';

const singleProduct = getProduct(Number(params.productId));
const itemNumber = getCookie('itemNumbers');
const parsedItemNumber = JSON.parse(itemNumber);
return {


export default function ProductPage(props) {

  const product = getProductById(Number(props.params.productId));
  const productItemNumbersCookie = getCookie('productItemNumbers');

  const productItemNumbers = !productItemNumbersCookie
    ? []
    : parseJson(productItemNumbersCookie);

  const productItemNumberToDisplay = productItemNumber.find((productItemNumber) => {
    return productItemNumber.id === product.id;
  });


  return (
    <div>
      <h1>Matcha premium selection</h1>
      <h2>{singleProduct.type}</h2>

      <Image
        src={`/images/${singleProduct.type}.png`}
        alt={singleProduct.type}
        width={200}
        height={200}
      />
      <ul>
        <li>{singleProduct.price}</li>
        <li>{singleProduct.weight}</li>
      </ul>
      <ItemNumberForm />
      <div>{parsedItemNumber}</div>
    </div>
  );
}
