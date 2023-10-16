import { expect, test } from '@jest/globals';
import { updateGoodyCookie } from '../functions';

test('Test setProductQuantityInCart. Add set amount of quantity of a product to cart cookie', async () => {
  const cartObject = [
    {
      id: 1,
      quantity: 1,
    },
    {
      id: 2,
      quantity: 10,
    },
  ];
  const quantity = 1;
  const productId = 1;
  expect(
    await updateGoodyCookie(productId, quantity, cartObject),
  ).toStrictEqual([
    {
      id: 1,
      quantity: 2,
    },
    {
      id: 2,
      quantity: 10,
    },
  ]);
});
