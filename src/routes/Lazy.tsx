import React, { lazy, Suspense } from "react";
import Loading from "@components/loading/Loading";

const lazyFn = (importFunc: any) => {
  const LazyComponent = lazy(() => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(importFunc()), 1000);
    });
  });

  return (
    <Suspense fallback={<Loading />}>
      <LazyComponent />
    </Suspense>
  );
};

export default lazyFn;
