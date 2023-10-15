import './globals.scss';
import { Inter } from 'next/font/google';
import Link from 'next/link';
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
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <h1>Layout title</h1> */}
        <div className="navContainer">
          <header>
            <CookieBanner />
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
        {/* <div className={global['grid-container']}>
          {goodies.map((goody) => (
            <div
              key={`goody-div-${goody.id}`}
              className={global['goodies-container']}
            >
              <Link href={`/goodies/${goody.id}`}>{goody.goodyName}</Link>
              <br />
              <img
                src={`/images/${goody.goodyName}.jpg`}
                alt={goody.goodyName}
                width={400}
                height={350}
              />
            </div>
          ))}
        </div> */}
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
