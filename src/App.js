import HeaderComponent from './HeaderComponent';
import ContentComponent from './ContentComponent';
import FooterComponent from './FooterComponent';
import { useState } from 'react';

function App() {

  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "One beer for me.",
    },
    {
      id: 2,
      checked: false,
      item: "Item 2",
    },
    {
      id: 3,
      checked: false,
      item: "Item 3",
    },
  ]);

   const handleCheck = (id) => {
     const listItems = items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item));
     setItems(listItems);
     localStorage.setItem("shoppinglist", JSON.stringify(listItems));
   };

   const handleDelete = (id) => {
     const listItems = items.filter((item) => item.id !== id); //Creates a new object only with item where item.id !== id
     setItems(listItems);
     localStorage.setItem("shoppinglist", JSON.stringify(listItems));
   };

  return (
    <div className="App">
      <HeaderComponent title="Groceries List" />
      <ContentComponent
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete} 
      />
      <FooterComponent length={items.length} />
    </div>
  );
}

export default App;
