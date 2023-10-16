import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProductById } from '../../../database/products';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';
import AddToCartForm from './AddToCartForm';
import styles from './page.module.scss';

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

  const productsCookie = getCookie('cart');

  const products = !productsCookie ? [] : parseJson(productsCookie);
  // parseJson(productsCookie) || []; alternative to always have an array type

  const productToDisplay = products?.find((product) => {
    return product.id === singleProduct.id;
  });

  console.log(productToDisplay);

  return (
    <div className={styles.productPage}>
      <h1>{singleProduct.type}</h1>
      <div className={styles.productInfoContainer}>
        <div className={styles.productImage}>
          <Image
            data-test-id="product-image"
            src={`/images/${singleProduct.type}.png`}
            alt={singleProduct.type}
            width={200}
            height={200}
          />
        </div>
        <ul className={styles.productDetails}>
          <li data-test-id="product-price">Price: {singleProduct.price}€</li>
          <li>Weight: {singleProduct.weight}</li>
          <li>DESCRIPTION</li>
        </ul>
      </div>
      <div className={styles.quantityInput}>
        <li>Quantity: {productToDisplay?.quantity}</li>
        <li data-test-id="product-quantity">
          <AddToCartForm productId={singleProduct.id} />
        </li>
      </div>
      <div className={styles.buttonContainer}>
        <Link href="/products">
          <div>
            <button className={styles.continueShoppingButton}>
              Continue shopping
            </button>
          </div>
        </Link>
        <Link href="/cart">
          <div>
            <button className={styles.cartButton}>Go to cart</button>
          </div>
        </Link>
      </div>
    </div>
  );
}
