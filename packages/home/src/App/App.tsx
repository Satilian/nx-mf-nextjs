import React, { Suspense } from "react";
import { CropperDemo } from "./CropperDemo";
import cn from "./style.module.css";

const Button = React.lazy(() => import("app1/Button"));

export const App = () => {
  return (
    <div className={cn.app}>
      <Suspense fallback={"loading..."}>
        <Button>+</Button>
      </Suspense>

      <div className={cn.cropperDemo}>
        <CropperDemo />
      </div>
    </div>
  );
};
