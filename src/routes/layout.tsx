import { component$, Slot } from '@builder.io/qwik';
//import { DocumentHead } from '@builder.io/qwik-city';
// import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <main>
        <section>
          <Slot />
        </section>
      </main>
   </>
  );
});