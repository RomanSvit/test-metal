import React, {useState} from 'react';

import "./Search.scss";

const Search = ({ data }) => {
    const [isSearch, setSearch] = useState(false);
    return (
        <div className="search">
            <input
                type="text"
                className={
                    !isSearch
                        ? "search-text nonvisible"
                        : "search-text visible"
                }
                placeholder={data.search}
            ></input>
            <button
                className="search-btn"
                onClick={() => setSearch(!isSearch)}
            ></button>
        </div>
    );
}

export default Search;