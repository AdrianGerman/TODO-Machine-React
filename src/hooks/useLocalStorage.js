/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = React.useReducer(
    reducer,
    initialState({ initialValue })
  );
  const { sincronizedItem, error, loading, item } = state;

  // ACTION CREATORS
  const onError = (error) =>
    dispatch({ type: actionTypes.error, payload: error });
  const onSuccess = (item) =>
    dispatch({ type: actionTypes.success, payload: item });
  const onSave = (item) => dispatch({ type: actionTypes.save, payload: item });
  const onSincronize = () => dispatch({ type: actionTypes.sincronize });

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
        }
        onSuccess(parsedItem);
      } catch (error) {
        onError(error);
      }
    }, 1000);
  }, [sincronizedItem]);
  // initialValue, itemName  estos valores estan dentro del array vacio, pero el bucle seguia
  // nomas es para depurar errores, no olvidar el arreglo de arriba o se crean bucles bien perrones
  // console.log("a");

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    onSave(newItem);
  };

  const sincronizeItem = () => {
    onSincronize();
  };

  return {
    item,
    saveItem,
    loading,
    error,
    sincronizeItem,
  };
}

const initialState = ({ initialValue }) => ({
  sincronizedItem: true,
  error: false,
  loading: true,
  item: initialValue,
});

const actionTypes = {
  error: "ERROR",
  success: "SUCCESS",
  save: "SAVE",
  sincronize: "SINCRONIZE",
};

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true,
    loading: false,
  },
  [actionTypes.success]: {
    ...state,
    loading: false,
    error: false,
    sincronizedItem: true,
    item: payload,
  },
  [actionTypes.save]: {
    ...state,
    item: payload,
  },
  [actionTypes.sincronize]: {
    ...state,
    loading: true,
    sincronizedItem: false,
  },
});

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
};

export { useLocalStorage };
