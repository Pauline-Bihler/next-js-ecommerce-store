'use client';

import { useRouter } from 'next/navigation';

export default function CheckoutButton() {
  const router = useRouter();

  const checkout = async () => {
    await router.push('/checkout');
  };

  return (
    // <div className={styles['centeredContainer']}>
    <div>
      <button type="button" onClick={checkout}>
        Checkout
      </button>
    </div>
  );
}

/* <button
className={styles['checkoutButton']}
type="button"
onClick={viewAll}
> */
