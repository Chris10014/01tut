import ItemList from "./ItemListComponent";

const ContentComponent = ({ items, handleCheck, handleDelete }) => {
  
  return (
    <main>
      {items.length ? (
      <ItemList
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      ) : (
        <p style={{ marginTop: "2rem" }}>Deine Liste ist leer</p>
      )}
    </main>
  );
}

export default ContentComponent