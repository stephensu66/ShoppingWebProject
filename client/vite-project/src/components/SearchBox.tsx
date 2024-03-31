import React, { useMemo, useRef, useState } from "react";

export const SearchBox = () => {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
//   const inputRef = useRef();

  const filteredItems = useMemo(() => {
    return items.filter((item: string) => {
      return item.toLowerCase().includes(query.toLowerCase());
    })
  }, [items, query]);

//   function onSubmit(e) {
//     e.preventDefault();

//     const value = inputRef.current.value;
//     if(value === '') return(
//         setItems(prev => {
//             return [...prev, value]
//         })
//     )
//     inputRef.current.value = "";
//   }
  

  return (
    <div>
      <input value={query} onChange={(e) => e.target.value} type="search" />
      {filteredItems.map((item => (<div>{item}</div>)))}
    </div>
  );
};
