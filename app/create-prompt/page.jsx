"use client"

import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import { Form } from "../../components";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreatePrompt = () => {

    const router = useRouter();
    const { data: session, status } = useSession();

    useEffect(() => {
        if(status === "unauthenticated") {
            router.push("/");
        }
    }, [status, router]);

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
                }),
            });

            if(response.ok) {
                toast.success('🦄 Create prompt in success!');
                router.push("/");
            } else {
                toast.error('🦄 Oops, Create prompt fail!');
            }


        } catch (error) {
            console.log(error.message);
        } finally {
            setSubmitting(false);
        }
    }

    if(status === "loading") {
        return <div>Loading...</div>;
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
