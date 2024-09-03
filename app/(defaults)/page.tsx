import ComponentsDashboardAnalytics from '@/components/dashboard/component-dashboard-analytics';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Sales Admin',
};

const Analytics = () => {

    return <ComponentsDashboardAnalytics />;
};

export default Analytics;
