import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          variant === "primary" &&
            "bg-primary text-white shadow-sm hover:bg-primary-hover",
          variant === "secondary" &&
            "bg-charcoal text-white shadow-sm hover:bg-slate",
          variant === "outline" &&
            "border-2 border-primary text-primary hover:bg-primary-light",
          variant === "ghost" &&
            "text-primary hover:bg-primary-light",
          size === "sm" && "px-3 py-1.5 text-sm",
          size === "md" && "px-5 py-2.5 text-base",
          size === "lg" && "px-7 py-3 text-lg",
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
export { Button };
