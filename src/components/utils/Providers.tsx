"use client";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MantineProvider } from '@mantine/core';
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
        <MantineProvider>
        <QueryClientProvider client={queryClient}>
            {/* <Nprogress /> */}
            <Toaster
                    richColors
                    theme="dark"
                    position="top-center"
                />
            {children}
        </QueryClientProvider></MantineProvider>
    )
};

export default Providers;
