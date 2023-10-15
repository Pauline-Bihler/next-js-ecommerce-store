import { cookies } from 'next/headers';

export function getCookie() {
  const cookie = cookies().get('cart');
  // console.log('cookie inside getCookie:', cookie);
  // console.log('type of cookie inside getCookie:', typeof cookie);
  return cookie ? (cookie.value ? JSON.parse(cookie.value) : []) : [];
}
// getCookie explanation
// if (cookies !== undefined) {
//   if (cookies.value !== undefined) {
//     return JSON.parse(cookie.value);
//   } else {
//     return []
//   }
// } else {
//   return []
// }
