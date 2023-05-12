"use client"

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

import { Profile } from '@/components';

const MyProfile = () => {

    const router = useRouter();
    const { data: session } = useSession();

    const [myPosts, setMyPosts] = useState([]);

    useEffect(() => {

    }, []);

    const handleEdit = (post) => {
        router.push(`/update-prompt?id=${post._id}`);
    };

    const handleDelete = async (post) => {

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
