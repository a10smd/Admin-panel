import UserList from '@/components/users/user-table';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Invoice List',
};

const UserListPage = () => {
    return <UserList />;
};

export default UserListPage;
