import { Metadata } from 'next';
import PostCard from '@/components/posts/post-card';
import React from 'react';

export const metadata: Metadata = {
    title: 'Posts',
};

const Users = () => {
    return (
        <div className='grid grid-cols-3 gap-x-10 gap-y-5'>
            {[...Array(8)].map((i) => ( 
                <PostCard id={i} key={i} />
             ))} 
        </div>
    );
};

export default Users;
