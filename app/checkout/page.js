import CheckoutForm from './CheckOutForm';

export const metadata = {
  title: 'Checkout |',
  description:
    'Your resident manga merch dealer. All goodies are authentic and from Japan.',
};

export default function CheckoutPage() {
  return (
    <div>
      {/* <h1>Checkout</h1> */}
      <CheckoutForm />
    </div>
  );
}
