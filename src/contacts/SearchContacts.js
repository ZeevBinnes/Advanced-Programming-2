import { useRef } from "react";

// I didn't deal with the search button yet!
function SearchContacts( {doSearch} ) {

    const searchBox = useRef(null);

    const search = function(){
        doSearch(searchBox.current.value)
    }

    return(
        
        <form className="chats_search">
            <input ref={searchBox} onKeyUp={search} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button onClick={search} className="btn btn-outline-success" type="button">Search</button>
        </form>
    )
}

export default SearchContacts;