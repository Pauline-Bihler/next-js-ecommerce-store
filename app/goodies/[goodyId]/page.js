import Image from 'next/image';
import { notFound } from 'next/navigation';
// import { getGoody } from '../../../database/goodies';
import { getGoodyById } from '../../../database/goodies';
// import SetCookieForm from '../../cookies/SetCookieForm';
import GoodyQuantityForm from './GoodyQuantityForm';
import styles from './page.module.scss';

// export const metadata = {
//   title: 'Goody |',
//   description:
//     'Your resident manga merch dealer. All goodies are authentic and from Japan.',
// };

export async function generateMetadata({ params }) {
  const singleGoody = await getGoodyById(Number(params.goodyId));

  return {
    title: singleGoody ? singleGoody.goodyName : '',
  };
}

export default async function GoodyPage(props) {
  const singleGoody = await getGoodyById(Number(props.params.goodyId));
  console.log(singleGoody);

  if (!singleGoody) {
    return notFound();
  }

  // console.log('check: ', singleGoody);
  return (
    <div>
      This is my single goody page
      <div className={styles['goodyContainer']}>
        <div className={styles['imageContainer']}>
          <Image
            src={`/images/${singleGoody.goodyName.toLowerCase()}.jpg`}
            alt={singleGoody.goodyName}
            width={600}
            height={550}
            data-test-id="product-image"
          />
        </div>
        <div className={styles['infoContainer']}>
          <h1>{singleGoody.goodyName}</h1>
          <br />
          {singleGoody.type}
          <br />
          <span data-test-id="product-price">
            Price: {singleGoody.price} euros{' '}
          </span>
          <br />
          <br />
          <GoodyQuantityForm goodyId={props.params.goodyId} />
        </div>
      </div>
    </div>
  );
}
