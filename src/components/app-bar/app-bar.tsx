import * as React from "react";

type AppBarProps = {
  children: React.ReactNode;
};

export default function AppBar(props: AppBarProps) {
  const { children } = props;

  return <div className="bg-white">{children}</div>;
}
