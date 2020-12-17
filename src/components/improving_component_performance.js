import React, { useState, memo } from "react";
const Cat = ({ name }) => {
  console.log(`rendering ${name}`);
  return <p>{name}</p>;
};
function App() {
  const [cats, setCats] = useState(["Biscuit", "Jungle", "Outlaw"]);
  return (
    <>
      {cats.map((name, i) => (
        <Cat key={i} name={name} />
      ))}
      <button onClick={() => setCats([...cats, prompt("Name a cat")])}>
        Add a Cat
      </button>
    </>
  );
}



// ***********************************************************************************


const Cat = ({ name }) => {
console.log(`rendering ${name}`);
return <p>{name}</p>;
};
const PureCat = memo(Cat);


cats.map((name, i) => <PureCat key={i} name={name} />);



const Cat = memo(({ name, meow = f => f }) => {
console.log(`rendering ${name}`);
return <p onClick={() => meow(name)}>{name}</p>;
});

<PureCat key={i} name={name} meow={name => console.log(`${name} has
meowed`)} />




const RenderCatOnce = memo(Cat, () => true);
const AlwaysRenderCat = memo(Cat, () => false);

const PureCat = memo(
Cat,
(prevProps, nextProps) => prevProps.name === nextProps.name
);
