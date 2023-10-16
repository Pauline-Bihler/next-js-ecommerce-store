import styles from './contact.module.scss';

export const metadata = {
  title: 'Contact |',
  description:
    'Your resident manga merch dealer. All goodies are authentic and from Japan.',
};

export default function ContactPage() {
  return (
    <div>
      <h1> Feel free to contact me when you need help ♥</h1>
      <div className={styles['contact']}>
        <p>Email: fangirlingwithpauline@gmail.com</p>
        <p> Mobile Number: +12 345 6789 000 </p>
        <p>Twitter & Instagram: @fangirlingwitpauline</p>
      </div>
    </div>
  );
}
