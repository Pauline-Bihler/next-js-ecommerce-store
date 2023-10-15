'use client';

import { removeGoody } from './actions';

export default function RemoveButton(props) {
  return (
    <div>
      <form>
        <button
          formAction={() => removeGoody(props.goodyId)} // props = {goodyId: item.id}
          data-test-id={`cart-product-remove-${props.itemId}`}
        >
          Delete
        </button>
      </form>
    </div>
  );
}

// export default function RemoveButton() {
//   return (
//     <div>
//       <form>
//         <button>Delete</button>
//       </form>
//     </div>
//   );
// }

// function RemoveButton({ itemId, removeFromCart }) {
//   const handleRemove = () => {
//     // Call the remove function with the item ID
//     removeFromCart(itemId);
//   };

//   return <button onClick={handleRemove}>Remove</button>;
// }

// export default RemoveButton;

// import React, { useEffect, useState } from 'react';

// function RemoveButton({ itemId, cart, setCart }) {
//   const removeFromCart = () => {
//     // Remove the item with the specified itemId from the cart
//     const updatedCart = cart.filter((item) => item.id !== itemId);
//     setCart(updatedCart);
//   };

//   return <button onClick={removeFromCart}>Remove</button>;
// }

// export default function CartPage() {
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     async function fetchCartData() {
//       try {
//         const response = await fetch('your-api-endpoint-for-cart-data');
//         if (response.ok) {
//           const data = await response.json();
//           setCart(data);
//         } else {
//           console.error('Failed to fetch cart data');
//         }
//       } catch (error) {
//         console.error('Error fetching cart data:', error);
//       }
//     }

//     // Call the async function and handle potential errors
//     fetchCartData().catch((error) => {
//       console.error('An error occurred while fetching cart data:', error);
//     });
//   }, []);

//   return (
//     <>
//       <h1>Your cart</h1>
//       <ul>
//         {cart.map((item) => (
//           <li key={item.id}>
//             <h3>Item: {item.name}</h3>
//             <p>Quantity: {item.quantity}</p>
//             <RemoveButton itemId={item.id} cart={cart} setCart={setCart} />
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }
