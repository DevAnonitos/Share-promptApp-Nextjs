"use client";

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

import { Profile } from '@/components';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyProfile = () => {

    const router = useRouter();
    const { data: session } = useSession();

    const [myPosts, setMyPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(`/api/users/${session?.user.id}/posts`);
                const data  = await response.json();
    
                setMyPosts(data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        if(session?.user.id) fetchPosts();

    }, [session?.user.id]);

    const handleEdit = (post) => {
        router.push(`/update-prompt?id=${post._id}`);
    };

    const handleDelete = async (post) => {
        const hasConfirm = await confirm(
            "Are you sure want to delete this prompt",
            {
                confirmationText: 'Delete',
                cancellationText: 'Cancel',
                title: 'Delete Confirmation'
            },
        );

        if(hasConfirm) {
            try {
                await fetch(`/api/prompt/${post._id.toString()}`, {
                    method: 'DELETE',
                });

                const filteredPosts = myPosts.filter((item) => item._id !== post._id);

                toast.success('Post deleted successfully');
                setMyPosts(filteredPosts);
            } catch (error) {
                console.log(error);
                toast.error('Post deleted fail');
            }
        }
    };

    return (
        <div>
            <Profile
                name='My'
                desc='Welcome to your personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination'
                data={myPosts}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />
        </div>
    );
};

export default MyProfile;
