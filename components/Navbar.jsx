"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Navbar = () => {

    const isUserLoggedIn = true;

    // const [providers, setProviders] = useState(null);

    // useEffect(() => {
    //     (
    //         async () => {
    //             const res = await getProviders();
    //             setProviders(res);
    //         }
    //     )();
    // }, []);

    return (
        <>
            <nav className='flex items-center flex-between w-full mb-16 pt-3'>
                <Link href="/" className='flex gap-2 flex-center'>
                    <Image
                        src="./assets/images/logo.svg"
                        alt='logo'
                        width={30}
                        height={30}
                        className='object-contain'
                    />
                    <p className='logo_text'>PromptApp</p>
                </Link>

                {/* Desktop navigation */}
                <div className='sm:flex hidden'>
                    {isUserLoggedIn ? (
                        <div className='flex gap-3 md:gap-5'>
                            <Link
                                href="/create-prompt"
                                className='black_btn'
                            >
                                Create Post
                            </Link>

                            <button
                                type='button'
                                // onClick={signOut}
                                className='outline_btn'
                            >
                                SignOut
                            </button>

                            <Link href="/profile">
                                <Image
                                    src="/assets/images/logo.svg"
                                    width={37}
                                    height={37}
                                    className='rounded-full ring-2 bottom-2'
                                    alt='profile'
                                />
                            </Link>
                        </div>
                    ) : (
                        <>
                            {/* {providers && Object.values(providers).map((provider) => (
                                <button
                                    type='button'
                                    key={provider.name}
                                    onClick={() => {
                                        signIn(provider.id)
                                    }}
                                    className='black_btn'
                                >
                                    SignIn
                                </button>
                            ))} */}
                        </>
                    )}
                </div>
            </nav>
        </>
    );
};

export default Navbar;
