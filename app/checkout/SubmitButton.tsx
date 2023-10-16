'use client';

import { useRouter } from 'next/navigation';
import { submitCartDeleteCookie } from './actions';

export default function SubmitButton() {
  const router = useRouter();

  const submit = async () => {
    await submitCartDeleteCookie();
    await router.push('/thankyou');
  };

  return (
    // <div className={styles['centeredContainer']}>
    <div>
      {/* <button type="button" onClick={submit}>
        Submit
      </button> */}
      <button type="button" onClick={submit}>
        Submit
      </button>
    </div>
  );
}

// 'use client';

// import { removeGoody } from './actions';

// export default function SubmitButton(props) {
//   return (
//     <div>
//       <form>
//         <button
//           formAction={() => removeGoody(props.goodyId)} // props = {goodyId: item.id}
//           data-test-id={`cart-product-remove-${props.itemId}`}
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }
