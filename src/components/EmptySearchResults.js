import "../styles/TodoList.css";

function EmptySearchResults(props) {
    return <p className="textito">No se encontró ningún resultado
        en tu búsqueda de: {props.searchText}</p>;
}

export { EmptySearchResults };