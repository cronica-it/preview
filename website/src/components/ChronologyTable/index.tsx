// import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';


export type ChronologyEvent = {
  interval: string,
  description: JSX.Element
}


function ChronologyRow({interval, description}: ChronologyEvent) {
  return (
    <tr>
      <td>{interval}</td>
      <td>{description}</td>
    </tr>
  )
}

export function ChronologyTable({ items }): JSX.Element {
  return (
    <section className={styles.chronology}>
      <div className="container">
        <Heading as="h3">Evenimente, în ordine invers cronologică</Heading>
        <table class="chronology">
          <thead>
            <tr>
              <td>Dată</td>
              <td>Eveniment</td>
            </tr>
          </thead>
          <tbody>
            {
              items.map((props, idx) => (
                <ChronologyRow key={idx} {...props} />
              ))
            }
          </tbody>
        </table>
        <p class="chronology_length">({items.length} evenimente)</p>
      </div>
    </section>
  );
}
