import { Metadata } from 'next';
import UserBox from '@/components/users/user-box';
import React from 'react';

export const metadata: Metadata = {
    title: 'Users',
};

const Users = () => {
    return (
        <div className='grid grid-cols-4'>
            {[...Array(8)].map((i) => (
                <UserBox key={i} />
            ))}
        </div>
    );
};

export default Users;
