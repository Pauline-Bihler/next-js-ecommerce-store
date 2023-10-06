import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getGoody } from '../../../database/goodies';
// import SetCookieForm from '../../cookies/SetCookieForm';
import GoodyQuantityForm from './GoodyQuantityForm';

// export const metadata = {
//   title: 'Goody |',
//   description:
//     'Your resident manga merch dealer. All goodies are authentic and from Japan.',
// };

export function generateMetadata({ params }) {
  const singleGoody = getGoody(Number(params.goodyId));

  return {
    title: singleGoody ? singleGoody.goodyName : '',
  };
}

export default function GoodyPage(props) {
  const singleGoody = getGoody(Number(props.params.goodyId));

  if (!singleGoody) {
    return notFound();
  }

  // console.log('check: ', singleGoody);
  return (
    <div>
      This is my single goody page
      <h1>{singleGoody.goodyName}</h1>
      <Image
        src={`/images/${singleGoody.goodyName}.jpg`}
        alt={singleGoody.goodyName}
        width={400}
        height={350}
      />
      <div>
        {singleGoody.type}
        <br />
        Price: {singleGoody.price} euros
        {/* <SetCookieForm /> */}
        <GoodyQuantityForm goodyId={props.params.goodyId} />
      </div>
    </div>
  );
}
