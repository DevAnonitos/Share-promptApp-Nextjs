"use-client";

import React, { useState, useEffect } from 'react';
import PromptCard from "./PromptCard";
import { findDOMNode } from 'react-dom';

const PromptCardList = ({ data, handleTagClick }) => {
    return (
        <div className='mt-16 prompt_layout'>
            {data.map((post) => (
                <PromptCard
                    key={post._id}
                    post={post}
                    handleTagClick={handleTagClick}
                />
            ))}
        </div>
    );
};

const Feed = () => {
    // Fetch AllPosts
    const [allPosts, setAllPosts] = useState([]);

    const [searchText, setSearchText] = useState("");
    const [searchedResults, setSearchedResults] = useState([]);
    const [searchTimeout, setSearchTimeout] = useState(null);

    // Handle Logic state
    const fetchPosts = async () => {
        const response = await fetch("/api/prompt");
        const data = await response.json();

        setAllPosts(data);
    };

    useEffect(() => {
        fetchPosts();
    },[]);

    const filterPrompt = (searchtext) => {
        const regex = new RegExp(searchtext, "i");
        return allPosts.filter(
            (item) =>
                regex.test(item.creator.username) ||
                regex.test(item.tag) ||
                regex.test(item.prompt)
        );
    };

    const handleSearchChange = (e) => {

    };

    const handleTagClick = (tagName) => {
        setSearchText(tagName);
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
            {/* Prompt Card list */}
            {searchText ? (
                <>
                    <PromptCardList
                        data={searchedResults}
                        handleTagClick={handleTagClick}
                    />
                </>
            ) : (
                <>
                    <PromptCardList
                        data={allPosts}
                        handleTagClick={handleTagClick}
                    />
                </>
            )}
        </section>
    );
};

export default Feed;
