import React, { Suspense, ReactNode } from "react";


interface SuspenseBoundaryProps {
  children: ReactNode;
}

function SuspenseBoundary({ children }:SuspenseBoundaryProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {children}
    </Suspense>
  );
}

export default SuspenseBoundary;
