import styles from './about.module.scss';

export const metadata = {
  title: 'About |',
  description:
    'Your resident manga merch dealer. All goodies are authentic and from Japan.',
};

export default function AboutPage() {
  return (
    <div>
      <h1> Hi I'm Pauline ♥</h1>
      <div className={styles['about-me']}>
        <p>I'm a cat mama from the Philippines.</p>
        <p> I love reading & collecting japanese mangas and merch. </p>
        <p>
          The goodies in my shop are especially curated with love to bring a
          touch of joy and happiness to your life.{' '}
        </p>
      </div>
    </div>
  );
}
