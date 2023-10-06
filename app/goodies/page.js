import Link from 'next/link';
import getGoodies from '../../database/goodies';
import styles from './page.module.scss';

export const metadata = {
  title: 'Goodies |',
  description:
    'Your resident manga merch dealer. All goodies are authentic and from Japan.',
};

export default function GoodiesPage() {
  const goodies = getGoodies();
  return (
    <div>
      This is my product page
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
