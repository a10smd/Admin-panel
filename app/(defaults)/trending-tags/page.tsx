import TrendingTags from '@/components/trending-tags/trending-tags';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Trending Tags',
};

const Trendingtags = () => {
    return <TrendingTags />;
};

export default Trendingtags;
