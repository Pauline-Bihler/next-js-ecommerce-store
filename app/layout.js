import './globals.scss';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { getCookie } from '../util/cookies';
import getTotalItems from '../util/functions';
// import { totalItems } from './cart/page';
// import CartItemCount from './cart/CartItemCount';
import CookieBanner from './cookies/CookieBanner';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Home | Fangirling with Pauline',
    template: '%s Fangirling with Pauline',
  },
  description:
    'Your resident manga merch dealer. All goodies are authentic and from Japan.',
};

export default function RootLayout({ children }) {
  // const goodies = await getGoodies();
  const cart = getCookie();

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <h1>Layout title</h1> */}
        <div className="navContainer">
          <header>
            <CookieBanner />
            <nav className="navHeader">
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link data-test-id="products-link" href="/goodies">
                    Goodies
                  </Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
                {/* <Link href="/cart">Cart</Link> */}
              </ul>
              <ul>
                <li>
                  <Link data-test-id="cart-link" href="/cart">
                    Cart
                  </Link>
                </li>
                <li data-test-id="cart-total-items">
                  : {getTotalItems(cart)}{' '}
                </li>
              </ul>
            </nav>
          </header>
        </div>
        {children}
      </body>
    </html>
  );
}

// without ul
// <nav>
//     // <a href="/">Home</a>
//     // <a href="/about">About</a>
//     // <a href="/goodies">Goodies</a>
//     // <a href="/contact">Contact</a>
//     // </nav>
