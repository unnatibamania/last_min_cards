import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input"> & {
    startContent?: React.ReactNode;
  }
>(({ className, type, startContent, ...props }, ref) => {
  return (
    <div className="relative z-10 flex items-center">
      {startContent && (
        <div className="absolute z-20 text-gray-400 left-3 flex items-center max-w-[20px]">
          {startContent}
        </div>
      )}
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-xl bg-white focus:ring-1 focus:ring-gray-200 transition-colors duration-500 ease-in-out border border-input focus:outline-none px-3 py-1 text-base shadow-sm file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          startContent && "pl-9",
          className
        )}
        ref={ref}
        {...props}
      />
    </div>
  );
});
Input.displayName = "Input";

export { Input };
