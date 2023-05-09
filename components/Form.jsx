import Link from "next/link";
import React from 'react';

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
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
            </section>
        </>
    );
};

export default Form;
