"use client"
import React, { useState, useEffect } from 'react';
import Feed from "../components/Feed"
import { Chat } from '@/components';

const page = () => {

    const [showFeed, setShowFeed] = useState(false);

    useEffect(() => {
        setShowFeed(true);
    }, [])

    return (
        <>
            <section className='w-full flex-center flex-col'>
                <h1 className='head_text text-center'>
                    Discover & Share
                    <br className='max-md:hidden' />
                    <span className='orange_gradient text-center'>
                        AI-Prompts GPT
                    </span>
                </h1>

                <p className='desc text-center'>
                    PromptApp is an open-source AI prompting tool for modern world to
                    discover, create and share creative prompts
                </p>

                <Feed />
                <Chat />
            </section>
        </>
    );
};

export default page;
