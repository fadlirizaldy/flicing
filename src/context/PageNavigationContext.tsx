"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";

interface PageNavigationContextProps {
  pages: string[];
  currentPageIndex: number;
  nextPage: () => void;
  prevPage: () => void;
}

const PageNavigationContext = createContext<
  PageNavigationContextProps | undefined
>(undefined);

export const PageNavigationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const router = useRouter();

  const pages = ["/", "/nexcent", "/real-estate", "/furniro"];

  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const nextPage = () => {
    if (currentPageIndex < pages.length - 1) {
      setCurrentPageIndex((prevIndex) => prevIndex + 1);
      router.push(pages[currentPageIndex + 1]);
      return;
    }
    setCurrentPageIndex(0);
    router.push(pages[0]);
  };

  const prevPage = () => {
    if (currentPageIndex === 0) {
      setCurrentPageIndex(pages.length - 1);
      router.push(pages[pages.length - 1]);
      return;
    }
    setCurrentPageIndex((prevIndex) => prevIndex - 1);
    router.push(pages[currentPageIndex - 1]);
  };

  return (
    <PageNavigationContext.Provider
      value={{ pages, currentPageIndex, nextPage, prevPage }}
    >
      {children}
    </PageNavigationContext.Provider>
  );
};

export const usePageNavigation = () => {
  const context = useContext(PageNavigationContext);
  if (!context) {
    throw new Error(
      "usePageNavigation must be used within a PageNavigationProvider"
    );
  }
  return context;
};
