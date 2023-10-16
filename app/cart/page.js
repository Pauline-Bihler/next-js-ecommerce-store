import { getGoodies } from '../../database/goodies';
import { getCookie } from '../../util/cookies';
import CheckoutButton from './CheckoutButton';
import RemoveButton from './RemoveButton';

// all items to add to the cart with quantities
export async function getAllItemsWithQuantities() {
  const cookieData = await getCookie('cart');
  // console.log('cookieDataString:', cookieDataString);
  // console.log('Type of cookieDataString:', typeof cookieDataString);
  // const cookieData = JSON.parse(cookieDataString.value);
  // console.log('cookieData:', cookieData);
  // console.log('Type of cookieData:', typeof cookieData);
  const databaseGoodies = await getGoodies();
  // console.log('databaseGoodies:', databaseGoodies);
  // console.log('Type of databaseGoodies:', typeof databaseGoodies);
  const filteredCartData = cookieData.map((cookieItem) => {
    // console.log(
    //   'ItemId:',
    //   cookieItem.id,
    //   'Item quantity:',
    //   cookieItem.quantity,
    // );
    // console.log(
    //   'Type of ItemId:',
    //   typeof cookieItem.id,
    //   'Type of Item quantity:',
    //   typeof cookieItem.quantity,
    // );
    const databaseGoody = databaseGoodies.find(
      (product) => parseInt(cookieItem.id) === product.id,
    );
    console.log('databaseProduct:', databaseGoody);
    console.log('type of databaseProduct:', typeof databaseGoody);
    const subtotal = cookieItem.quantity * databaseGoody.price;
    const databaseProductName = databaseGoody.name;
    console.log(
      'type of databaseProductName',
      typeof databaseProductName,
      'type of databaseProduct.name',
      typeof databaseGoody.name,
    );
    return {
      id: databaseGoody.id,
      name: databaseGoody.goodyName,
      type: databaseGoody.type,
      price: databaseGoody.price,
      quantity: cookieItem.quantity,
      subtotal: subtotal,
    };
  });
  console.log('Filtered array of objects:', filteredCartData);
  return filteredCartData;

  // cartItem {
  //   id: Number,  database
  //   name: string, database
  //   type: string, database
  //   price: Number, database
  //   quantity: Number, cart
  //   subtotal: Number, calculated
  // }
}

export default async function CartPage() {
  const cart = await getAllItemsWithQuantities();
  let total = 0;
  let totalItems = 0;

  return (
    <>
      <h1>Your cart</h1>
      <ul>
        {cart.map((item) => {
          if (item.quantity > 0) {
            total += item.subtotal; // Calculate the total price - current value of total and add to it the value of item.subtotal, then update total with the result.
            totalItems += item.quantity;
            return (
              <li
                key={`product-${item.id}`}
                data-test-id={`product-${item.id}`}
              >
                <h3>Goody: {item.name}</h3>
                <p>Price: {item.price}</p>
                <p>Type: {item.type}</p>
                <p>Quantity: {item.quantity}</p>
                <span data-test-id={`cart-product-quantity-${item.id}`}>
                  {item.quantity}
                </span>
                <p>Subtotal: {item.subtotal}</p>
                <RemoveButton goodyId={item.id} />{' '}
                {/* props= {goodyId:item.id}*/}
              </li>
            );
          } else {
            return null;
          }
        })}
      </ul>
      <p data-test-id="cart-total">Total Price: ${total.toFixed(2)}</p>
      <p data-test-id="cart-total-items">Total Items: {totalItems}</p>{' '}
      <CheckoutButton />
    </>
  );
}

// export default function CartPage() {
//   return <div> This is my cart page</div>;
// }
// export const metadata = {
//   title: 'Cart |',
//   description:
//     'Your resident manga merch dealer. All goodies are authentic and from Japan.',
// };

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
