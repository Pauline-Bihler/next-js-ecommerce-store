// import { getCookie } from './cookies';

export default function getTotalItems(cart) {
  let cartTotal = 0;

  cart.forEach((p) => {
    cartTotal += p.quantity;
  });
  return cartTotal;
}

export function getTotalSum(cart) {
  let cartSum = 0;

  cart.forEach((p) => {
    cartSum += p.price * p.quantity;
  });
  return cartSum;
}

export function getGoodiesInCart(cart, goodiesFromDatabase) {
  try {
    // Get goody info depending on which product is in cart
    const goodiesInCart = cart
      .map((cartItem) => {
        const goodyFromDatabase = goodiesFromDatabase.find(
          (databaseProduct) =>
            Number(databaseProduct.id) === Number(cartItem.id),
        );
        if (!goodyFromDatabase) {
          return null;
        }
        const quantity = parseInt(cartItem.quantity);
        const subtotal = (
          parseFloat(goodyFromDatabase.price) * quantity
        ).toFixed(2);

        return {
          id: goodyFromDatabase.id,
          name: goodyFromDatabase.name,
          price: goodyFromDatabase.price,
          quantity: quantity,
          total: parseFloat(subtotal),
        };
      })
      .filter(Boolean);

    return goodiesInCart;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export async function updateGoodyCookie(goodyId, quantity, cookieData) {
  // find the goody(object) whose quantity is to be updated in the Array
  const goodyInCart = await cookieData.find((item) => {
    return item.id === goodyId;
  });

  // Convert the quantity inside of the matched item to an integer/number
  if (goodyInCart) {
    const updatedQuantity = goodyInCart.quantity + quantity;
    goodyInCart.quantity = updatedQuantity;
  } else {
    cookieData.push({
      id: goodyId,
      quantity: quantity,
    });
  }

  return cookieData;
}
