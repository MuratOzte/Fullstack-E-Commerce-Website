import React from 'react';
import Burger from './Burger';
import './navbar.css'

const Search = () => {
    return (
        <>
            <div className="flexbox">
                <div className="search">
                    <div>
                        <input
                            type="text"
                            placeholder="Search . . ."
                            required
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Search;
