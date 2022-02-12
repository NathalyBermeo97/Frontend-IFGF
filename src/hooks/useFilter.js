import { useState } from "react";
import { useEffect } from "react";

export const useFilter = (items, propertyToBeFiltered) => {
  const [newItems, setNewItems] = useState(items);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const filteredItems = items?.filter((item) =>
      item[propertyToBeFiltered].toLowerCase().includes(keyword.toLowerCase())
    );
    setNewItems(filteredItems);
  }, [keyword, items, propertyToBeFiltered]);

  const registerInput = (name) => {
    return {
        name,
        value: keyword,
        onChange: ({target}) => setKeyword(target.value)
    }
  }

  return {newItems, registerInput}
};
