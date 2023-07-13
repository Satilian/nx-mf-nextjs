import React, { PropsWithChildren, ReactEventHandler } from "react";
import s from "./infiniteScrolll.module.scss";
import cn from "classnames";

type Props = PropsWithChildren<{
  loadMore: () => void;
  loader?: JSX.Element;
  isLoading: boolean;
  hasMore?: boolean;
  height?: number;
  threshold?: number;
  className?: string;
}>;

export const InfiniteScroll = ({
  children,
  loadMore,
  loader,
  isLoading,
  hasMore,
  height,
  threshold = 21,
  className,
}: Props) => {
  const handleScroll: ReactEventHandler<HTMLDivElement> = (e) => {
    if (!isLoading && hasMore) {
      const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
      if (scrollTop >= scrollHeight - clientHeight - threshold) {
        loadMore();
      }
    }
  };

  return (
    <div
      className={cn(s.infiniteScroll, className)}
      onScroll={handleScroll}
      style={{ maxHeight: height }}
    >
      <div>{children}</div>
      {isLoading && loader}
    </div>
  );
};
