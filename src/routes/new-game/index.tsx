import { component$ } from '@builder.io/qwik';
import data from '../../consts/companies.json';
// import type { DocumentHead } from '@builder.io/qwik-city';
// import { Link } from '@builder.io/qwik-city';

export default component$(() => {

  return (
    <div>
      Choose your company
      <div>
        {data.companies.map((com)=>(
            <>
            <div>{com.name}</div>
            <div>{`Industry: ${com.industry}`}</div>
            <div>{`Stage: ${com.stage}`}</div>
            <div>{`Size: ${com.size}`}</div>
            <div>{com.description}</div>
            <div>{`Motto: ${com.motto}`}</div>
            <div>{`Initial DevOps Pipeline: ${com['initial-devops-pipeline']}`}</div>
            </>
        ))}
      </div>
      <button onClick$={ () => history.back() }>Back to Instructions</button>
    </div>
  );
});
