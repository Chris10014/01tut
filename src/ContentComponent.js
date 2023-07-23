const ContentComponent = () => {

    const handleNameChange = () => {
        const names = ["Christoph", "Thomas", "Kerstin"];
        const int = Math.floor(Math.random() * 3);
        return names[int];
    }

    const handleClick = () => {
      console.log("You clicked it.")
    }

    const handleClick2 = (name) => {
      console.log(`${name} was clicked.`)
    }

    const handleClick3 = (e) => {
      console.log(e.target.innerText)
    }

  return (
    <main>
      <p onDoubleClick={handleClick}>Hello {handleNameChange()}!</p>
      <button onClick={handleClick}>Click it 1</button> {/* Adding an easy function */}
      <button onClick={() => handleClick2("Christoph")}>Click it 2</button> {/* Adding an anonymous function with param */}
      <button onClick={(e) => handleClick3(e)}>Click it 3</button>
    </main>
  );
}

export default ContentComponent