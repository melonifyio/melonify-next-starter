import * as React from "react";

type FooterProps = {};

export default function Footer(props: FooterProps) {
  return (
    <div className="mx-auto max-w-2xl py-16 sm:py-14 lg:max-w-none lg:py-20">
      &copy; 2023 Melonify
    </div>
  );
}
