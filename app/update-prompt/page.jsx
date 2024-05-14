"use client";

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Form from "../../components/Form";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdatePrompt = () => {

    const router = useRouter();
    const searchParams = useSearchParams();
    const promptId = searchParams.get("id");

    const { status } = useSession();

    useEffect(() => {
        if(status === "unauthenticated") {
            router.push("/");
        }
    }, [status, router]);

    const [post, setPost] = useState({
        prompt: "",
        tag: "",
    });
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        const getPromptDetails = async () => {
            const response = await fetch(`/api/prompt/${promptId}`);
            const data = await response.json();

            setPost({
                prompt: data.prompt,
                tag: data.tag,
            });
        };

        if(promptId) getPromptDetails();
    },[promptId]);

    const updatePrompt = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        if(!promptId) {
            return toast.error("Missing PromptId!");
        };

        try {
            const response = await fetch(`/api/prompt/${promptId}`, {
                method: "PATCH",
                body: JSON.stringify({
                    prompt: post.prompt,
                    tag: post.tag,
                }),
                cache: "no-store",
            });

            if(response.ok) {
                toast.success("Update Prompt successfully");
                router.push("/");
            } else {
                toast.error("Update Prompt failed");
            }
        } catch (error) {
            console.log(error);
            toast.error("SomeThing went wrong!");
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
                type='Edit'
                post={post}
                setPost={setPost}
                submitting={submitting}
                handleSubmit={updatePrompt}
            />
        </div>
    );
};

export default UpdatePrompt;
