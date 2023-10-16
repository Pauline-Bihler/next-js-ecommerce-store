import Link from 'next/link';
// import { getAllGoodiesFromDatabase } from '../../database/connect';
// import getGoodies from '../../database/goodies';
import { getGoodies } from '../../database/goodies';
import styles from './page.module.scss';

export const metadata = {
  title: 'Goodies |',
  description:
    'Your resident manga merch dealer. All goodies are authentic and from Japan.',
};

export default async function GoodiesPage() {
  const goodies = await getGoodies();
  console.log('Check: ', goodies);
  // console.log(
  //   getAllGoodiesFromDatabase().then((singleGoody) => console.log(singleGoody)),
  // );
  return (
    <div>
      <h1>All goodies are curated with love ♥</h1>
      <div className={styles['grid-container']}>
        {goodies.map((goody) => (
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
              className={styles['zoom-image']}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// export default function GoodiesPage() {
//   const goodies = getGoodies();
//   return (
//     <div>
//       This is my product page
//       {goodies.map((goody) => {
//         return (
//           <div key={`goody-div-${goody.id}`}>
//             <div className="goodies-container">
//               <Link href={`/goodies/${goody.id}`}>{goody.goodyName}</Link>
//               <br />
//               <img
//                 src={`/images/${goody.goodyName}.jpg`}
//                 alt={goody.goodyName}
//                 width={400}
//                 height={350}
//               />
//               {/* <br />
//               <Link href={`/goodies/${goody.id}`}>{goody.goodyName}</Link> */}
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
