import React, { useRef } from "react";
// import Icon from "components/Icon";

// I didn't deal with the search button yet!
function SearchContacts( {doSearch} ) {

    const searchBox = useRef(null);

    const search = function(e){
        e.preventDefault();
        doSearch(searchBox.current.value)
    }

    return(
        
        <form className="chats_search">
            <input onChange={search} ref={searchBox} onKeyUp={search} className="form-control" type="search" placeholder="Search" aria-label="Search"></input>
        </form>
    )
}

export default SearchContacts;