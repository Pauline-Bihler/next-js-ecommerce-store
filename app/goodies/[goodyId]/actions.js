'use server';
import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';

// import { parseJson } from '../../../util/json';

export async function addQuantity(goodyId, quantity) {
  // get the current cookie
  const goodyQuantities = getCookie('cart');
  // parse the cookie value, when cookie is undefined create an empty array
  // const addedQuantities = !goodyQuantityCookie
  //   ? []
  //   : parseJson(goodyQuantityCookie);

  // edit the cookie value & get the object
  const goodyQuantityToUpdate = goodyQuantities.find((addedQuantity) => {
    return addedQuantity.id === goodyId;
  });

  // search for the id, if id is there, then change the quantity, if not push id to the array
  if (goodyQuantityToUpdate) {
    goodyQuantityToUpdate.quantity += parseInt(quantity); // to add quantity whenever the user adds the same item
  } else {
    goodyQuantities.push({
      id: goodyId,
      quantity: quantity,
    });
  }
  // overwrite the cookie, add the new quantity to the cart, as a new value is pushed to the cookie array of quantities
  await cookies().set('cart', JSON.stringify(goodyQuantities));
}
// export async function addQuantity(id, quantity) {
//   await cookies().set(
//     'goodyQuantity',
//     JSON.stringify([{ id: id, quantity: quantity }]),
//   );
// }
