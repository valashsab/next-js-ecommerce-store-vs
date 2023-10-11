// 'use client';
// import Link from 'next/link';
// import calculateTotalQuantity from './totalQuantity';

// export default function Header({ productsWithQuantity }) {
//   const totalQuantity = calculateTotalQuantity(productsWithQuantity);

//   return (
//     <nav>
//       <ul>
//         <li className="navHome">
//           <Link className="headerLinks" href="/">
//             Home
//           </Link>
//         </li>
//         <li className="navProductsAbout">
//           <Link className="headerLinks" href="/products">
//             Products
//           </Link>
//         </li>
//         <li>
//           <Link className="headerLinks" href="/about">
//             About us
//           </Link>
//         </li>
//         <li className="navCart">
//           <Link className="headerLinks" href="/cart">
//             Cart
//           </Link>
//         </li>
//         {totalQuantity}
//       </ul>
//     </nav>
//   );
// }
