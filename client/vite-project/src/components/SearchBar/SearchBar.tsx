

import { useFilteredItems } from "../../context/FilteredItemsContext";


export function SearchBar() {
  
  const { setQuery, query} = useFilteredItems();
  

  return (
    <div >
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="search"
        placeholder="Search Products..."
        style={{ width: "100%" }}
      />
      
    </div>
  );
}


