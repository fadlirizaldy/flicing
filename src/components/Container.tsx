import React from "react";

const Container = ({
  children,
  className,
  maxWidth,
}: {
  children: React.ReactNode;
  className?: string;
  maxWidth?: string;
}) => {
  return (
    <div className={className}>
      <div className={`mx-auto max-w-[${maxWidth ?? "1240"}px]`}>{children}</div>
    </div>
  );
};

export default Container;
