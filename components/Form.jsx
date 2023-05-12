"use client"

import Link from "next/link";
import React, { useState, useEffect } from 'react';

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {

    const [placeholderIndex, setPlaceholderIndex] = useState(0);

    const placeholder = "Write Your Prompt Here...";
    const typingSpeed = 250;

    useEffect(() => {
        const interval = setInterval(() => {
        setPlaceholderIndex((index) =>
            index >= placeholder.length ? 0 : index + 1
        );
        }, typingSpeed);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <section
                className="w-full max-w-full flex-center flex-col"
            >
                <h1 className="head_text text-center">
                    <span className="text-gradient-alt animate-gradient">{type} Post </span>
                </h1>
                <p className="desc text-center max-w-md">
                    {type} and share amazing prompts with the world, and let your
                    imagination run wild with any AI-powered platform
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="mt-10 w-full max-w-2xl
                    flex flex-col gap-7 glassmorphism shadow-xl"
                >
                    <label>
                        <span
                            className="font-satoshi font-semibold text-base text-gray-700"
                        >
                            Your AI Prompt
                            <textarea
                                value={post.prompt}
                                onChange={(e) =>
                                setPost({
                                        ...post,
                                        prompt: e.target.value,
                                    })
                                }
                                placeholder={placeholder.substring(0, placeholderIndex)}
                                required
                                className="form_textarea"
                                onKeyPress={() => setPlaceholderIndex(0)}
                                onFocus={() => setPlaceholderIndex(0)}
                                onBlur={() => setPlaceholderIndex(0)}
                            ></textarea>
                        </span>
                    </label>

                    <label>
                        <span
                            className='font-satoshi font-semibold text-base text-gray-700'
                        >
                            Field of Prompt{" "}
                            <span className='font-normal'>
                                (#Product, #Webdevelopment, #Idea, etc.)
                            </span>
                        </span>
                        <input
                            value={post.tag}
                            onChange={(e) =>
                                setPost({
                                    ...post,
                                    tag: e.target.value
                                }
                            )}
                            type='text'
                            placeholder='#Tag'
                            required
                            className='form_input'
                        />
                    </label>

                    {/* Button */}
                    <div className="flex-end mx-3 mb-5 gap-4">
                        <Link
                            href="/"
                            className="text-gray-500 text-sm"
                        >
                            Cancel
                        </Link>
                        <button
                            type="submit"
                            disabled={submitting}
                            className="px-5 py-1.5 text-sm
                            bg-primary-orange rounded-full text-white"
                        >
                            {submitting ? `${type}ing...` : type}
                        </button>
                    </div>
                </form>
            </section>
        </>
    );
};

export default Form;
