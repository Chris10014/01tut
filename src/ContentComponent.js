const ContentComponent = () => {

    const handelNameChange = () => {
        const names = ["Christoph", "Thomas", "Kerstin"];
        const int = Math.floor(Math.random() * 3);
        return names[int];
    }
  return (
    <main>
        <p>
            Hello {handelNameChange()}!
        </p>        
    </main>
  )
}

export default ContentComponent