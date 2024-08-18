"use client";
import { usePageNavigation } from "@/context/PageNavigationContext";
import React from "react";
import { Icon } from "@iconify/react";

const MainLayout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { nextPage, prevPage, currentPageIndex, pages } = usePageNavigation();

  return (
    <div className={className}>
      {children}
      <div
        onClick={prevPage}
        className="flex items-center gap-2 fixed left-5 bottom-5 bg-gray-300 hover:bg-gray-200 transition-all border border-slate-300 p-2 rounded-lg shadow-sm cursor-pointer opacity-25 hover:opacity-100"
      >
        <Icon icon="carbon:previous-filled" />
        <p>Prev</p>
      </div>
      <div
        onClick={nextPage}
        className="flex items-center gap-2 fixed right-5 bottom-5 bg-gray-300 hover:bg-gray-200 transition-all border border-slate-300 p-2 rounded-lg shadow-sm cursor-pointer opacity-25 hover:opacity-100"
      >
        <p>Next</p>
        <Icon icon="carbon:next-filled" />
      </div>
    </div>
  );
};

export default MainLayout;
