import React from 'react';
import  PromptCard  from './PromptCard';

const Profile = ({ name, desc, data , handleEdit, handleDelete }) => {
    return (
        <section className='w-full'>
            <h1 className='head_text text-center'>
                <span className='blue_gradient'>
                    {name} Profile
                </span>
            </h1>
        </section>
    );
};

export default Profile;
