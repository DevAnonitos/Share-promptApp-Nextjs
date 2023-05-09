"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {

    const { data: session } = useSession();

    const [toggleDropdown, setToggleDropdown] = useState(false);
    const [providers, setProviders] = useState(null);

    useEffect(() => {
        const setUpProviders = async () => {
            const res = await getProviders();

            setProviders(res);
        }

        setUpProviders();
    }, []);

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
                    {session?.user ? (
                        <div className='flex gap-3 md:gap-5'>
                            <Link
                                href="/create-prompt"
                                className='black_btn'
                            >
                                Create Post
                            </Link>

                            <button
                                type='button'
                                onClick={signOut}
                                className='outline_btn'
                            >
                                SignOut
                            </button>

                            <Link href="/profile">
                                <Image
                                    src={session?.user.image}
                                    width={37}
                                    height={37}
                                    className='rounded-full ring-2 bottom-2'
                                    alt='profile'
                                />
                            </Link>
                        </div>
                    ) : (
                        <>
                            {providers && Object.values(providers).map((provider) => (
                                <button
                                    type='button'
                                    key={provider.name}
                                    onClick={() => signIn(provider.id)
                                    }
                                    className='black_btn'
                                >
                                    SignIn
                                </button>
                            ))}
                        </>
                    )}
                </div>

                {/* Mobile navigation */}
                <div className='sm:hidden flex relative'>
                    {session?.user ? (
                        <div className='flex'>
                            <Image
                                src={session?.user.image}
                                width={37}
                                height={37}
                                className='rounded-full ring-2 bottom-2 cursor-pointer'
                                alt='profile'
                                onClick={() => setToggleDropdown(!toggleDropdown)}
                            />
                            {/* Toggle DropDown */}

                            {toggleDropdown && (
                                <div className='dropdown z-50'>
                                    <Link
                                        href="/profile"
                                        className='dropdown_link border-animation '
                                        onClick={() => setToggleDropdown(false)}
                                    >
                                        My Profile
                                    </Link>
                                    <Link
                                        href="/create-prompt"
                                        className='dropdown_link border-animation '
                                        onClick={() => setToggleDropdown(false)}
                                    >
                                        Create Prompt
                                    </Link>
                                    <button
                                        type='button'
                                        onClick={() => {
                                            setToggleDropdown(false);
                                            signOut();
                                        }}
                                        className='mt-5 w-full black_btn'
                                    >
                                        SignOut
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
                            {providers && Object.values(providers).map((provider) => (
                                <button
                                    type='button'
                                    key={provider.name}
                                    onClick={() => signIn(provider.id)
                                    }
                                    className='black_btn'
                                >
                                    SignIn
                                </button>
                            ))}
                        </>
                    )}
                </div>
            </nav>
        </>
    );
};

export default Navbar;
