import './globals.scss';
import { Inter } from 'next/font/google';
import Link from 'next/link';

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
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <h1>Layout title</h1> */}
        <div className="navContainer">
          <header>
            <nav className="navHeader">
              {/* <a href="/#" className={styles.hyperComplyLogo}>
                        <Logo />
                      </a> */}
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/goodies">Goodies</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
                {/* <Link href="/cart">Cart</Link> */}
              </ul>
              <ul>
                <li>
                  <Link href="/cart">Cart</Link>
                </li>
              </ul>
            </nav>
            {/* <nav className="navCart">
              <Link href="/cart">Cart</Link> */}
            {/* <Link href="/#" className={styles.requestDemoButton}>
                      Request a Demo
                </Link> */}
            {/* </nav> */}
          </header>
        </div>

        {/* <section>
          <div className={styles.heroSection}>
            <div className={styles.container}>
              <header>
                <nav>
                  <a href="/#" className={styles.hyperComplyLogo}>
                    <Logo />
                  </a>
                  <ul>
                    <li>
                      <a href="/#">Product</a>
                    </li>
                    <li>
                      <a href="/#">Pricing</a>
                    </li>
                    <li>
                      <a href="/#">Company</a>
                    </li>
                    <li>
                      <a href="/#">Learn more</a>
                    </li>
                  </ul>
                  <div className={styles.linksContainer}>
                    <a href="/#" className={styles.signInButton}>
                      Sign in
                    </a>
                    <a href="/#" className={styles.requestDemoButton}>
                      Request a Demo
                    </a>
                  </div>
                </nav>
              </header> */}
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
