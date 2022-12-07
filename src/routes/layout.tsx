import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';
import { DocumentHead } from '@builder.io/qwik-city';
// import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <section>
          <Slot />
        </section>
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Qwik Flower',
};