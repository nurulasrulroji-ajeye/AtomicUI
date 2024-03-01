import clsx from "clsx";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { ButtonSizes, ButtonVariants, variants, sizeStyles } from "./utils";
import { ColorVariants, GlobalRounded, roundedStyles } from "../utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
  size?: ButtonSizes;
  color?: ColorVariants;
  rounded?: GlobalRounded;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant, size, color, rounded, ...rest }, ref) => {
    const baseStyles = "inline-flex leading-normal font-medium";
    const disabledStyles = "disabled:cursor-not-allowed disabled:opacity-50";

    return (
      <button
        ref={ref}
        className={clsx(
          baseStyles,
          disabledStyles,
          sizeStyles(size),
          variants(color, variant),
          roundedStyles(rounded),
          className
        )}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
