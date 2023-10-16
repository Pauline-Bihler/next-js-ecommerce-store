'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
// import { getGoody } from '../../../database/goodies';
import { addQuantity } from './actions';

export default function GoodyQuantityForm(props) {
  // ({ goodyId })
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  // console.log(`Added ${quantity} to cart`);

  const handleAddToCart = async () => {
    await addQuantity(props.goodyId, quantity);

    // Redirect to the cart page with cart data as a query parameter
    router.push({
      pathname: '/cart',
      query: { goodyId: props.goodyId, quantity },
    });
  };

  return (
    <form>
      <div>
        <button type="button" onClick={handleDecrease}>
          -
        </button>
        <span>{quantity}</span>
        <button
          type="button"
          onClick={handleIncrease}
          data-test-id="product-quantity"
        >
          +
        </button>
      </div>
      <button
        formAction={async () => await addQuantity(props.goodyId, quantity)}
        data-test-id="product-add-to-cart"
      >
        Add to cart
      </button>
      {/* <button onClick={handleAddToCart}>Add to cart</button> */}
      <Link href="/cart">
        <div>
          <button>View cart</button>
        </div>
      </Link>
    </form>
  );
}

// ------------------------------------
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
