"use-client";

import React, { useState, useEffect } from 'react';
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
    return (
        <div>

        </div>
    )
};

const Feed = () => {

    const [searchText, setSearchText] = useState("");

    const handleSearchChange = (e) => {

    };

    return (
        <section className='feed'>
            <form className='relative w-full flex-center'>
                <input
                    type='text'
                    placeholder='Search for a tag or a username...'
                    value={searchText}
                    required
                    onChange={handleSearchChange}
                    className='search_input peer'
                />
            </form>
        </section>
    );
};

export default Feed;
