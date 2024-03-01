import clsx from "clsx";
import { forwardRef, InputHTMLAttributes } from "react";
import {
  baseStyles,
  InputSizes,
  sizeVariant,
  variant,
  variants,
} from "./utils";
import { ColorVariants, GlobalRounded, roundedStyles } from "../utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: variant;
  color?: ColorVariants;
  rounded?: GlobalRounded;
  sizes?: InputSizes;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ rounded = "classic", variant, color, className, sizes, ...attr }, ref) => {
    return (
      <input
        ref={ref}
        className={clsx(
          baseStyles,
          variant === "line" ? "" : roundedStyles(rounded),
          variants(variant, color),
          sizeVariant(sizes),
          className
        )}
        {...attr}
      />
    );
  }
);

Input.displayName = "Input";
export default Input;
