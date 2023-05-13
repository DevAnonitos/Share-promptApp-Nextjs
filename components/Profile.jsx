import React from 'react';
import  PromptCard  from './PromptCard';

const Profile = ({ name, desc, data , handleEdit, handleDelete }) => {
    return (
        <section className='w-full flex-center flex-col'>
            <h1 className='head_text text-center flex flex-center items-center'>
                <span className='blue_gradient'>
                    {name} Profile
                </span>
            </h1>
            <p className='desc text-center flex flex-center items-center'>
                {desc}
            </p>

            <div className='mt-10 prompt_layout'>
                {data.map((post) => (
                    <PromptCard
                        key={post._id}
                        post={post}
                        handleEdit={() => handleEdit && handleEdit(post)}
                        handleDelete={() => handleDelete && handleDelete(post)}
                    />
                ))}
            </div>
        </section>
    );
};

export default Profile;
