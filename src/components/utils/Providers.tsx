"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MantineProvider } from "@mantine/core";
import React from "react";
import { Toaster } from "../ui/Sonner";
import { LocalizationProvider } from "@/providers/localization-provider";
const Providers = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();

  return (
    <MantineProvider>
      <LocalizationProvider>
        <QueryClientProvider client={queryClient}>
          <Toaster richColors theme="dark" position="top-center" />
          {children}
        </QueryClientProvider>
      </LocalizationProvider>
    </MantineProvider>
  );
};

export default Providers;
