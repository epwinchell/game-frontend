import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';
//import { DocumentHead } from '@builder.io/qwik-city';
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
      <p class="attribution" >
        <a href="https://www.freepik.com/free-photo/abstract-smooth-empty-grey-studio-well-use-as-background-business-report-digital-website-template-backdrop_16788215.htm#query=light%20grey%20background&position=3&from_view=keyword">Image by benzoix</a> on Freepik
      </p>
   </>
  );
});