"use client"

import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import { Form } from "../../components";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreatePrompt = () => {

    const router = useRouter();
    const { data: session } = useSession();

    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        prompt: "",
        tag: "",
    });

    const createPrompt = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const response = await fetch("/api/prompt/new", {
                method: "POST",
                body: JSON.stringify({
                    prompt: post.prompt,
                    userId: session?.user.id,
                    tag: post.tag,
                })
            });

            if(response.ok) {
                toast.success('🦄 Create prompt in success!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    draggablePercent: 60,
                });
                router.push("/");
            } else {
                toast.error('🦄 Oops, Create prompt fail!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    draggablePercent: 60,
                });
            }


        } catch (error) {
            console.log(error.message);
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <div>
            <Form
                type="Create"
                post={post}
                setPost={setPost}
                submitting={submitting}
                handleSubmit={createPrompt}
            />
        </div>
    );
};

export default CreatePrompt;
