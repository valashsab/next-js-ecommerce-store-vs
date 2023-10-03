import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';

export default function ProductsPage() {
  const products = getProducts();
  return (
    <div>
      <h1>Matcha selection and traditional matcha sets</h1>

      <span className="listedProducts">
        {products.map((product) => {
          return (
            <div key={`product-div-${product.id}`}>
              <Link href={`/products/${product.id}`}>{product.type}</Link>
              <Image
                src={`/images/${product.type}.png`}
                alt={product.type}
                width={200}
                height={200}
              />
            </div>
          );
        })}
      </span>
    </div>
  );
}
