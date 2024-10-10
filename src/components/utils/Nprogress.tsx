"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export const Nprogress = () => {
  return (
    <ProgressBar
      height='2px'
      color='#fff'
      options={{ showSpinner: false }}
      shallowRouting
    />
  );
};
