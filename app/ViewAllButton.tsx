'use client';

import { useRouter } from 'next/navigation';
import styles from './ViewAllButton.module.scss';

export function ViewAllButton() {
  const router = useRouter();

  const viewAll = async () => {
    await router.push('/goodies');
  };

  return (
    <div className={styles['centeredContainer']}>
      <button
        className={styles['viewAllButton']}
        type="button"
        onClick={viewAll}
      >
        View All
      </button>
    </div>
  );
}

// export function ViewAllButton() {
//   return (

//     <div>
//       <button>View all</button>
//       {/* <Link href="/goodies">View all</Link> */}
//     </div>
//   );
// }
