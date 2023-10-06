import postgres from 'postgres';

const sql = postgres(
  'postgres://next_js_ecommerce_store:next_js_ecommerce_store@localhost/next_js_ecommerce_store',
);
console.log(
  await sql`
      SELECT * FROM goodies;
  `,
);
