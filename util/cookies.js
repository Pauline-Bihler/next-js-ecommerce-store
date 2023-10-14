import { cookies } from 'next/headers';

export function getCookie(name) {
  const cookie = cookies().get(name);
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
