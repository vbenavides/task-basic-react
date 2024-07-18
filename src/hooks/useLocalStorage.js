import { useEffect, useState } from 'react';

function useLocalStorage(key, initialValue) {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(key);
        let parsedItem;

        if (!localStorageItem) {
          localStorageItem.setItem(key, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    }, 2000);
  }, [key, initialValue]);

  const saveItem = (newItem) => {
    localStorage.setItem(key, JSON.stringify(newItem));
    setItem(newItem);
  };

  return { item, saveItem, loading, error };
}

export { useLocalStorage };
