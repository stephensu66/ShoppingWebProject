import React, { useMemo, useRef, useState } from "react";
import storeItems from "../../data/items.json";

import { useFilteredItems } from "../../context/FilteredItemsContext";


export function SearchBar() {
  // const [query, setQuery] = useState("");
  const { setQuery, query} = useFilteredItems();
  // const items = filteredItems(query)

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


