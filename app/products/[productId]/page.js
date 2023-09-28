import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProduct } from '../../../database/products';
import ItemNumberForm from './ItemNumberForm';

export function generateMetadata({ params }) {
  const singleProduct = getProduct(Number(params.productId));
  const itemNumber = getCookie('itemNumbers');
  const parsedItemNumber = JSON.parse(itemNumber);
  return {
    title: singleProduct ? singleProduct.slug : '',
  };
}

export default function ProductPage(props) {
  // it's a string therefore need to convert to a number
  const singleProduct = getProduct(Number(props.params.productId));

  if (!singleProduct) {
    return notFound();
  }

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
