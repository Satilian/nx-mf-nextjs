import React, { Suspense } from "react";
import { CropperDemo } from "./CropperDemo";
import cn from "./style.module.css";

const Button = React.lazy(() => import("rc/Button"));

export const App = () => {
  return (
    <div className={cn.app}>
      <h1>Home Page</h1>

      <Suspense fallback={"loading..."}>
        <Button>button</Button>
      </Suspense>

      <div className={cn.cropperDemo}>
        <CropperDemo />
      </div>
    </div>
  );
};
