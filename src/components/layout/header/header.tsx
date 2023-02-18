import * as React from "react";
import Navigation from "../navigation/navigation";

type HeaderProps = {};

export default function Header(props: HeaderProps) {
  return (
    <header className="relative bg-white">
      <Navigation />
    </header>
  );
}
