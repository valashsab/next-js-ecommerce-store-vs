import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProductById } from '../../../database/products';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';
import AddToCartForm from './AddToCartForm';
import styles from './page.module.scss';

export const metadata = {
  title: 'Premium matcha',
  description:
    'A diverse selection of matcha powder to create your drink & food mixed with matcha.',
};

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
          <div className={styles.priceContainer}>
            <span className={styles.priceLabel}>Price:</span>
            <li data-test-id="product-price" className={styles.productPrice}>
              {singleProduct.price}
            </li>
            <span>€</span>
          </div>
          {/* <li>Weight: {singleProduct.weight}</li> */}
          <li className={styles.productDetailItem}>
            <span className={styles.detailLabel}>Weight:</span>
            <span>{singleProduct.weight}</span>
          </li>
          {/* <li>DESCRIPTION</li> */}
        </ul>
      </div>
      <div className={styles.quantityInput}>
        <li>Quantity in cart: {productToDisplay?.quantity}</li>
        <li>
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
