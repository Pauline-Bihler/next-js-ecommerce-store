import { expect, test } from '@jest/globals';
import { getTotalSum } from '../functions';

test('Test getTotalSum. Calculate Cart Total', () => {
  const cart = [
    {
      id: 1,
      quantity: 1,
      price: 20,
    },
    {
      id: 2,
      quantity: 5,
      price: 15,
    },
  ];

  expect(getTotalSum(cart)).toStrictEqual(95);
});
