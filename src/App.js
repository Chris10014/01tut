import Header from './HeaderComponent';
import AddItem from './AddItemComponent';
import SearchItem from "./SearchItemComponent";
import Content from './ContentComponent';
import Footer from './FooterComponent';
import { useState, useEffect } from 'react';

const App = () => {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem("shoppinglist")) || []); //OR Verknüpfung mit leerem Array wird benötigt, falls die shoppinglist bei Start icht existiert. Das würde zu einem Fehler führen.

  const [newItem, setNewItem] = useState("")
  const [search, setSearch] = useState("")

  useEffect(() => {
    console.log("render")
    localStorage.setItem("shoppinglist", JSON.stringify(items));
  }, [items]) //items als Dependency triggert die Ausführung von useEffect nur bei Änderungen am state items

  //Wird nicht mehr benötigt, da shoppinglist in useEffect gespeichert wird wenn mit setItems() der State geändert wird
  // const setAndSaveItems = (newItems) => {
  //   setItems(newItems);
  //   localStorage.setItem("shoppinglist", JSON.stringify(newItems));    
  // }

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [ ...items, myNewItem ];
    setItems(listItems);
  }

   const handleCheck = (id) => {
     const listItems = items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item));
     setItems(listItems);
   };

   const handleDelete = (id) => {
     const listItems = items.filter((item) => item.id !== id); //Creates a new object only with item where item.id !== id
     setItems(listItems);
   };

   const handleSubmit = (e) => {
    e.preventDefault();
    if(!newItem) return;
    console.log(newItem)
    addItem(newItem)
    setNewItem("");
   }

  return (
    <div className="App">
      <Header title="Groceries List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <Content
          items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
          handleCheck={handleCheck}
          handleDelete={handleDelete} 
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
