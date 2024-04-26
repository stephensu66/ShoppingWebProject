import  { ReactNode, createContext, useContext, useEffect, useMemo, useState } from 'react';
import storeItems from "../database/items.json";

const FilteredItemsContext =  createContext({} as FilteredItemsContext);

export const useFilteredItems = () => useContext(FilteredItemsContext);

type FilteredItemsContextProps= {
    children: ReactNode;
}

type Item = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  category: string;
  stock: number;
};

type FilteredItemsContext = {
    filteredItems: Item[];
    setQuery: any;
    query: any;
    selectedCategory: any;
    setSelectedCategory: any;
}
export const FilteredItemsProvider = ({children}: FilteredItemsContextProps) => {
    const [query, setQuery] = useState("");
    const [selectedCategory, setSelectedCategory]= useState("");
    const [filteredItems, setFilteredItems] = useState<Item[]>([]);
   

    const filteredItemsMemo =useMemo(() => {
        if (!query.trim() && !selectedCategory)  return storeItems;
        else {
        return storeItems.filter(item => {
          return (

            item.category.toLowerCase().includes(selectedCategory.toLowerCase()) &&
            (item.name.toLowerCase().includes(query.toLowerCase()) ||
            item.price.toString().includes(query.toLowerCase()) ||
            item.category.toString().includes(query.toLowerCase())
            )
          );
        });
      
      }
      }, [storeItems, query, selectedCategory]);

      useEffect(() => {
        setFilteredItems(filteredItemsMemo);
    }, [filteredItemsMemo]);

  return (
    <FilteredItemsContext.Provider value={{filteredItems, setQuery, query, selectedCategory, setSelectedCategory}}>
        {children}
    </FilteredItemsContext.Provider>
  )
}
