"use-client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Navbar = () => {

    const isUserLoggedIn = true;

    return (
        <>
            <nav className='flex-between w-full mb-16 pt-3'>
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

                {/* Mobile navigation */}
                <div className='sm:flex hidden'>
                    {isUserLoggedIn ? (
                        <div className='flex gap-3 md:gap-5'>
                            <Link
                                href="/create-prompt"
                                className='black_btn'
                            >
                                Create Post
                            </Link>
                        </div>
                    ) : (
                        <>

                        </>
                    )}
                </div>
            </nav>
        </>
    );
};

export default Navbar;
