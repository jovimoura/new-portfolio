"use client";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { Toaster } from '../ui/Sonner';
import { Nprogress } from './Nprogress';

const Providers = ({
    children
}: {
    children: React.ReactNode
}) => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <Nprogress />
            <Toaster />
            {children}
        </QueryClientProvider>
    )
};

export default Providers;
