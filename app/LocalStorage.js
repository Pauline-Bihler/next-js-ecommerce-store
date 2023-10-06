'use client';
import React, { useEffect, useState } from 'react';

export default function LocalStorage() {
  const [darkMode, setDarkMode] = useState('');

  useEffect(() => {
    setDarkMode(window.localStorage.getItem('darkMode'));
  }, []);
  return <div>{darkMode ? darkMode : ''}</div>;
}

// cart ~

// export function getCartData() {
//   if (typeof window !== 'undefined') {
//     const cartData = JSON.parse(localStorage.getItem('cart')) || [];
//     return cartData;
//   }
//   return [];
// }

// export function setCartData(cartData) {
//   if (typeof window !== 'undefined') {
//     // Check if window (browser environment) is defined
//     localStorage.setItem('cart', JSON.stringify(cartData));
//   }
// }
