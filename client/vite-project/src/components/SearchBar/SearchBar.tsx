

import { useFilteredItems } from "../../context/FilteredItemsContext";


export function SearchBar() {
  
  const { setQuery, query} = useFilteredItems();
  

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="search"
        placeholder="search for a character"
      />
      
    </div>
  );
}


