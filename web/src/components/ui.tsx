import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

const base =
  "inline-flex min-h-[3.25rem] w-full items-center justify-center rounded-2xl px-6 text-[1.0625rem] font-medium transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-45 sm:w-auto";

const variants = {
  primary: "bg-lamp text-night hover:bg-lamp-strong active:bg-lamp",
  secondary: "border border-line bg-transparent text-paper hover:border-fog hover:bg-dusk",
  quiet: "min-h-11 bg-transparent px-2 text-fog underline-offset-4 hover:text-paper hover:underline",
};

type Variant = keyof typeof variants;

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ComponentProps<"button"> & { variant?: Variant }) {
  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />;
}

export function ButtonLink({
  variant = "primary",
  className = "",
  ...props
}: ComponentProps<typeof Link> & { variant?: Variant }) {
  return <Link className={`${base} ${variants[variant]} ${className}`} {...props} />;
}

export function Page({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <main id="main" className={`mx-auto w-full max-w-[34rem] px-5 pb-10 pt-6 sm:pt-10 ${className}`}>
      {children}
    </main>
  );
}

export function Title({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h1
      className={`font-serif text-[1.75rem] leading-[1.2] font-medium tracking-[-0.01em] text-paper sm:text-[2rem] ${className}`}
    >
      {children}
    </h1>
  );
}
