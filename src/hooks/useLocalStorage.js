import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);

  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, [initialValue, itemName]);
  // nomas es para depurar errores, no olvidar el arreglo de arriba o se crean bucles bien perrones
  // console.log("a");

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

export { useLocalStorage };

// localStorage.removeItem('TODOS_V1');

// const defaultTodos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Terminar curso React", completed: false },
//   { text: "Chambiarle", completed: false },
//   { text: "Dormir mas de 45 horas en un solo día", completed: false },
// ];

// localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos));
