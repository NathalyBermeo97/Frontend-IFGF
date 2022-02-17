import { useState } from "react";
import { useEffect } from "react";

export const useFilter = (items, initialSelectsState = {}) => {
  const [selects, setSelects] = useState(initialSelectsState);
  const [newItems, setNewItems] = useState(items);

  useEffect(() => {
    const filteredItems = items?.filter((item) => {
      const everySelectKeywordTested = Object.entries(selects).every(([key, value]) => {
        return item[key]
          .toLowerCase()
          .includes(value.toLowerCase());
      });
      return everySelectKeywordTested;
    });
    setNewItems(filteredItems);
  }, [selects, items]);

  const onChange = (e) => {
    e.persist();
    setSelects((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const registerInput = (name) => {
    return {
      name,
      value: selects[name] || "",
      onChange,
    };
  };

  return { newItems, registerInput, selects };
};
