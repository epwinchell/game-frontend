import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import data from "../consts/instructions.json";

export default component$(() => {
  return (
    <div>
    <h1><center>Welcome to the DevOps Journey Card Game</center></h1>
    <div class="instructions">
      <header>Instructions</header><br />
      {/*Hello! DevOps Journey Card Game*/}
      {data.instructions.map((el)=> (
        <div class="section">
        <div class="subtitle">{el.name}</div>
        <ol>{el.instructions?.map((ins)=>(
          <li>{ins}</li>
        ))}</ol>
        </div>

      ))}
      <Link class="button" href="/new-game/">Start a new game</Link>
    </div>
    </div>
  );
});

