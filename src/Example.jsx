import { useState } from "react";
import { useId } from "./base";

function Example(props) {
  const { generateId } = useId();
  const [items, setItems] = useState([{ id: generateId() }]);
  const list = [
    { id: generateId() },
    { id: generateId() },
  ];


  console.log("items: ", items);
  console.log("list: ", list);
  console.log("==========================")
  return (

    <>
      <h1 onClick={() => {
        setItems(prev => [{
          id: generateId()
        },
        {
          id: generateId()
        },
        {
          id: generateId()
        },
        {
          id: generateId()
        },

        ])
      }}>INcrease</h1>


    </>
  );
}

export default Example;