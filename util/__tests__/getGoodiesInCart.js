import { expect, test } from '@jest/globals';
import { getGoodiesInCart } from '../functions';

test('Test getGoodiesInCart. Retrieve Data from Cart and Database, then combine them.', async () => {
  const cartObjects = [
    {
      id: 1,
      quantity: 1,
    },
    {
      id: 2,
      quantity: 5,
    },
  ];
  const databaseObjects = [
    {
      id: 1,
      name: 'test1',
      price: 20,
      description: 'description1',
    },
    {
      id: 2,
      name: 'test2',
      price: 15,
      description: 'description2',
    },
  ];

  expect(await getGoodiesInCart(cartObjects, databaseObjects)).toStrictEqual([
    {
      id: 1,
      name: 'test1',
      price: 20,
      quantity: 1,
      total: 20,
    },
    {
      id: 2,
      name: 'test2',
      price: 15,
      quantity: 5,
      total: 75,
    },
  ]);
});
