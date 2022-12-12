import { component$ } from "@builder.io/qwik";
import comp from "~/consts/companies.json";
import data from "../../../../consts/scenarios.json";
import { useLocation } from "@builder.io/qwik-city";
// import {
//   PFAccordionItem,
//   PFAccordionContent,
//   PFAccordionToggle,
// } from "~/components/modal/modal";

export default component$(() => {
  const location = useLocation();
  // const expanded = useSignal(['']);
  const company = comp.companies[Number(location.params.companyId) - 1];
  // const toggle$ = (id: string) => {
  //   const index = expanded.indexOf(id);
  //   const newExpanded: string[] =
  //     index >= 0 ? [...expanded.slice(0, index), ...expanded.slice(index + 1, expanded.length)] : [...expanded, id];
  //   expanded.value = newExpanded;
  // };

  return (
    <div>
      <div class="title">
        <h1>{`${company.name}'s initial DevOps Pipeline`}</h1>
        <br />
      </div>
      {/* <div class="cards">
        {company["initial-devops-pipeline"].map((pipe) => (
          <PFAccordionItem>
            <PFAccordionToggle
              onClick$={() => {
                toggle$(`${pipe.id}`);
              }}
              isExpanded={expanded.include(`${pipe.id}`)}
              id={`${pipe.id}`}
            >
              {pipe.name}
            </PFAccordionToggle>
            <PFAccordionContent id="def-list-expand1" isHidden={!expanded.include(`${pipe.id}`)}>
              {pipe.description}
            </PFAccordionContent>
          </PFAccordionItem>
        ))}
      </div> */}
      <div class="cards add-margin">
        <div class="card scenario">
          <div class="card__header scenario">
            <h2>Scenario</h2>
          </div>
          <div class="card__body scenario">
            {
              data.scenarios[Math.floor(Math.random() * (36 - 0 + 1)) + 0]
                .scenario
            }
          </div>
          <div class="footer-buttons">
            <button class="footer-button">Dealt with</button>
            <button class="footer-button">Backlog</button>
          </div>
        </div>
      </div>
    </div>
  );
});
