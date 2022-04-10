import { useRef } from "react";

// I didn't deal with the search button yet!
function SearchContacts( {doSearch} ) {

    const searchBox = useRef(null);

    const search = function(){
        doSearch(searchBox.current.value)
    }

    return(
        <form className="d-flex">
            <input ref={searchBox} onKeyUp={search} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
    )
}

export default SearchContacts;