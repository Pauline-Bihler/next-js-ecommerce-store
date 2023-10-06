export default function CartPage() {
  return <div> This is my cart page</div>;
}
export const metadata = {
  title: 'Cart |',
  description:
    'Your resident manga merch dealer. All goodies are authentic and from Japan.',
};
// export default function CartPage() {
//   // Retrieve the cart data from cookies
//   const cookieData = document.cookie
//     .split('; ')
//     .find((row) => row.startsWith('goodyQuantity='));
//   // Parse the cart data if it exists
//   const cartData = cookieData ? JSON.parse(cookieData.split('=')[1]) : [];
//   return (
//     <div>
//       <h1>Your Cart</h1>
//       {cartData.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <ul>
//           {cartData.map((item) => (
//             <li key={`user-${item.id}`}>
//               <div>
//                 <p>Product ID: {item.id}</p>
//                 <p>Quantity: {item.quantity}</p>
//                 {/* Display other item details */}
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// code that can add to cart
// 'use client';
// import { useEffect, useState } from 'react';
// import { getCartData } from '../LocalStorage';

// // export const metadata = {
// //   title: 'Cart |',
// //   description:
// //     'Your resident manga merch dealer. All goodies are authentic and from Japan.',
// // };

// export default function CartPage() {
//   const [cartData, setCartData] = useState([]);

//   useEffect(() => {
//     const data = getCartData();
//     setCartData(data);
//   }, []); // Runs only on the client side

//   return (
//     <div>
//       <h1>Your Cart</h1>
//       {cartData.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <ul>
//           {cartData.map((item) => (
//             <li key={`user-${item.id}`}>
//               <div>
//                 <p>Product ID: {item.goodyName}</p>
//                 <p>Quantity: {item.quantity}</p>
//                 {/* Display other item details */}
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }
