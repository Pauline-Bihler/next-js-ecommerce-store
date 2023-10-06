'use client';

import { useState } from 'react';
// import { getGoody } from '../../../database/goodies';
import { addQuantity } from './actions';

export default function GoodyQuantityForm(props) {
  // ({ goodyId })
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  // console.log(`Added ${quantity} to cart`);

  // const handleAddToCart = async () => {
  //   await addQuantity(quantity);
  //   // After adding to cart, you can redirect to the cart page
  //   window.location.href = '/cart'; // Change the URL to your cart page
  // };

  // preventDefault is not needed in next.js
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(`Added ${quantity} to cart`);
  // };

  return (
    <form>
      <div>
        <button type="button" onClick={handleDecrease}>
          -
        </button>
        <span>{quantity}</span>
        <button type="button" onClick={handleIncrease}>
          +
        </button>
      </div>
      <button
        formAction={async () => await addQuantity(props.goodyId, quantity)}
      >
        Add to cart
      </button>
    </form>
  );
}

//   const handleAddToCart = () => {
//     // Create an object representing the item and its quantity
//     const item = {
//       id: goodyId,
//       quantity: quantity,
//     };

//     // Check if a shopping cart already exists in local storage
//     const existingCart = localStorage.getItem('cart');

//     if (existingCart) {
//       // If a cart exists, parse it and add the item to it
//       const cart = JSON.parse(existingCart);
//       cart.push(item);
//       localStorage.setItem('cart', JSON.stringify(cart));
//     } else {
//       // If no cart exists, create a new one with the item
//       const cart = [item];
//       localStorage.setItem('cart', JSON.stringify(cart));
//     }

//     // Redirect to the cart page
//     window.location.href = '/cart';
//   };

//   return (
//     <form>
//       <div>
//         <button type="button" onClick={handleDecrease}>
//           -
//         </button>
//         <span>{quantity}</span>
//         <button type="button" onClick={handleIncrease}>
//           +
//         </button>
//       </div>
//       <button onClick={handleAddToCart}>Add to cart</button>
//     </form>
//   );
// }

// Lukas' example
// export default function GoodyQuantityForm() {
//   const[comment,setComment] = useState('');
//   return (
//     <form>
//       <textarea
//       value={comment}
//       onChange={(event) => setComment(event.currentTarget.value)}
//       />
//       <button formAction={async () => await createOrUpdateComment(comment)}>Add to cart</button>
//     </form>
//   );
// }
