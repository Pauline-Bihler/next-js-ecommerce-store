'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../util/cookies';

export async function submitCartDeleteCookie() {
  // get cookie
  const cartCookie = await getCookie();

  // Check if the cart cookie exists
  if (cartCookie) {
    // Delete the cart cookie by setting it to an empty value and setting an expiry date in the past
    cookies().set('cart', '', { expires: new Date(0) });

    // confirm that the cookie has been deleted
    console.log('Cart cookie deleted');
  }
}
