import { useState } from "react";

const ContentComponent = () => {

  const [name, setName] = useState("Christoph"); //default value for the state in ()
  const [count, setCount] = useState(0);

    const handleNameChange = () => {
        const names = ["Christoph", "Thomas", "Kerstin"];
        const int = Math.floor(Math.random() * 3);
        setName(names[int]); //handleNameChange() now sets the state of name
    }

    const handleClick = () => {
      setCount(count + 1)
      //the state isn't changed within a function
      //count stays like it was passes into the function althought setCount was called.
      //The change occurs in the next iteration.
      console.log(count)
    }

    const handleClick2 = () => {
      console.log(count)
    }

  return (
    <main>
      <p onDoubleClick={handleClick}>Hello {name}!</p>
      <button onClick={handleNameChange}>Change Name!</button> {/* Calls handleNameChange to change the state */}
      <button onClick={handleClick}>Click it</button>
      <button onClick={handleClick2}>Click it</button>
    </main>
  );
}

export default ContentComponent