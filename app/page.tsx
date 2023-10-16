import Link from 'next/link';
import { getGoodies } from '../database/goodies';
import LocalStorage from './LocalStorage';
import styles from './page.module.scss';
import { ViewAllButton } from './ViewAllButton';

// import { ViewAllButton } from './ViewAllButton';

export default async function Home() {
  const goodies = await getGoodies();
  const firstThreeGoodies = goodies.slice(0, 3);
  return (
    <main>
      <LocalStorage />
      <h1>Hello lovely people!</h1>
      <br />
      <div>
        <img src="/images/header.jpg" alt="header" width={1425} height={250} />
      </div>
      <br />
      <h2>Featured Goodies</h2>
      <div className={styles['grid-container']}>
        {firstThreeGoodies.map((goody) => (
          <div
            key={`goody-div-${goody.id}`}
            className={styles['goodies-container']}
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
      </div>
      <br />
      <div>
        {/* <Link href="/goodies">View all</Link> */}
        <ViewAllButton />
      </div>
    </main>
  );
}

// export default async function HomePage() {
//   const goodies = await getGoodies();
//   return (
//     <div>
//       This is my Home page
//       <div className={styles['grid-container']}>
//         {goodies.map((goody) => (
//           <div
//             key={`goody-div-${goody.id}`}
//             className={styles['goodies-container']}
//           >
//             <Link href={`/goodies/${goody.id}`}>{goody.goodyName}</Link>
//             <br />
//             <img
//               src={`/images/${goody.goodyName}.jpg`}
//               alt={goody.goodyName}
//               width={400}
//               height={350}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
