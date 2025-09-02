import * as React from "react";

function cx(...classes: Array<string | undefined | false | null>) {
  return classes.filter(Boolean).join(" ");
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cx(
          "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export default Input;
