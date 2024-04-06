import  { ReactNode, createContext, useContext, useMemo, useState } from 'react';
import storeItems from "../data/items.json";

const FilteredItemsContext =  createContext({} as FilteredItemsContext);

export const useFilteredItems = () => useContext(FilteredItemsContext);

type FilteredItemsContextProps= {
    children: ReactNode;
}
type FilteredItemsContext = {
    filteredItems: any;
    setQuery: any;
    query: any;
    selectedCategory: any;
    setSelectedCategory: any;
}
export const FilteredItemsProvider = ({children}: FilteredItemsContextProps) => {
    const [query, setQuery] = useState("");
    const [selectedCategory, setSelectedCategory]= useState("");
    
    const filteredItems = useMemo(() => {
        if (!query.trim() && !selectedCategory) return storeItems;
        return storeItems.filter(item => {
          return (
            item.category.toLowerCase().includes(selectedCategory.toLowerCase()) &&
            (item.name.toLowerCase().includes(query.toLowerCase()) ||
            item.price.toString().includes(query.toLowerCase()) ||
            item.category.toString().includes(query.toLowerCase())
            )
          );
        });
      }, [storeItems, query, selectedCategory]);


  return (
    <FilteredItemsContext.Provider value={{filteredItems, setQuery, query, selectedCategory, setSelectedCategory}}>
        {children}
    </FilteredItemsContext.Provider>
  )
}
