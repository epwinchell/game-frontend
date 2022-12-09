import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import data from "../consts/instructions.json";

export default component$(() => {
  return (
    <div>
      Hello! DevOps Journey Card Game
      {data.instructions.map((el)=> (
        <div>
        <div>{el.name}</div>
        <div>{el.instructions?.map((ins)=>(
          <div>{ins}</div>
        ))}</div>
        </div>
      ))}
      <Link href="/new-game/">Start a new game</Link>
    </div>
  );
});
