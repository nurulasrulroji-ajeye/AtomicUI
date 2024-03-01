import clsx from "clsx";
import { ColorVariants } from "../utils";

export type ButtonVariants = "base" | "outlined";
export type ButtonSizes = "sm" | "md" | "lg" | "xl";

export const baseStyles =
  "transition-all ease-in-out duration-500 shadow-md font-semibold border hover:shadow-lg";

export const variants = (color?: ColorVariants, variant?: ButtonVariants) => {
  switch (color) {
    case "Almond": {
      const almondBgStyles =
        "bg-colorAlmond border-colorAlmond text-colorCharlestonGreen hover:bg-colorAlmond/80";
      const almondOutlinedStyles =
        "border-colorAlmond hover:bg-colorAlmond text-colorAlmond hover:text-colorCharlestonGreen";

      return variant === "base"
        ? clsx(baseStyles, almondBgStyles)
        : variant === "outlined"
        ? clsx(baseStyles, almondOutlinedStyles)
        : "";
    }

    case "AreBlue": {
      const fillStyles =
        "bg-colorAreBlue border border-colorAreBlue hover:text-colorAreBlue hover:bg-transparent text-colorBrightGray";
      const outlineStyles =
        "border-colorAreBlue bg-transparent text-colorAreBlue hover:bg-colorAreBlue hover:text-colorBrightGray";

      return clsx(
        variant === "base"
          ? fillStyles
          : variant === "outlined"
          ? outlineStyles
          : "",
        baseStyles
      );
    }

    case "Arsenic": {
      const fillStyles =
        "bg-colorArsenic border border-colorArsenic hover:text-colorArsenic hover:bg-transparent text-colorBrightGray";
      const outlineStyles =
        "border-colorArsenic bg-transparent text-colorArsenic hover:bg-colorArsenic hover:text-colorBrightGray";

      return clsx(
        variant === "base"
          ? fillStyles
          : variant === "outlined"
          ? outlineStyles
          : "",
        baseStyles
      );
    }

    case "BrightGray": {
      const fillStyles =
        "bg-colorBrightGray border border-colorBrightGray hover:text-colorBrightGray hover:bg-transparent text-colorCharlestonGreen";
      const outlineStyles =
        "border-colorBrightGray bg-transparent text-colorBrightGray hover:bg-colorBrightGray hover:text-colorCharlestonGreen";

      return clsx(
        variant === "base"
          ? fillStyles
          : variant === "outlined"
          ? outlineStyles
          : "",
        baseStyles
      );
    }

    case "Carmine": {
      const fillStyles =
        "bg-colorCarmine border border-colorCarmine hover:text-colorCarmine hover:bg-transparent text-colorBrightGray";
      const outlineStyles =
        "border-colorCarmine bg-transparent text-colorCarmine hover:bg-colorCarmine hover:text-colorBrightGray";

      return clsx(
        variant === "base"
          ? fillStyles
          : variant === "outlined"
          ? outlineStyles
          : "",
        baseStyles
      );
    }

    case "CetaceanBlue": {
      const fillStyles =
        "bg-colorCetaceanBlue border border-colorCetaceanBlue hover:text-colorCetaceanBlue hover:bg-transparent text-colorBrightGray";
      const outlineStyles =
        "border-colorCetaceanBlue bg-transparent text-colorCetaceanBlue hover:bg-colorCetaceanBlue hover:text-colorBrightGray";

      return clsx(
        variant === "base"
          ? fillStyles
          : variant === "outlined"
          ? outlineStyles
          : "",
        baseStyles
      );
    }

    case "CharlestonGreen": {
      const fillStyles =
        "bg-colorCharlestonGreen border border-colorCharlestonGreen hover:text-colorCharlestonGreen hover:bg-transparent text-colorBrightGray";
      const outlineStyles =
        "border-colorCharlestonGreen bg-transparent text-colorCharlestonGreen hover:bg-colorCharlestonGreen hover:text-colorBrightGray";

      return clsx(
        variant === "base"
          ? fillStyles
          : variant === "outlined"
          ? outlineStyles
          : "",
        baseStyles
      );
    }

    case "Cultured": {
      const fillStyles =
        "bg-colorCultured border border-colorCultured hover:text-colorCultured hover:bg-transparent text-colorCharlestonGreen";
      const outlineStyles =
        "border-colorCultured bg-transparent text-colorCultured hover:bg-colorCultured hover:text-colorCharlestonGreen";

      return clsx(
        variant === "base"
          ? fillStyles
          : variant === "outlined"
          ? outlineStyles
          : "",
        baseStyles
      );
    }

    case "Feldgrau": {
      const fillStyles =
        "bg-colorFeldgrau border border-colorFeldgrau hover:text-colorFeldgrau hover:bg-transparent text-colorBrightGray";
      const outlineStyles =
        "border-colorFeldgrau bg-transparent text-colorFeldgrau hover:bg-colorFeldgrau hover:text-colorBrightGray";

      return clsx(
        variant === "base"
          ? fillStyles
          : variant === "outlined"
          ? outlineStyles
          : "",
        baseStyles
      );
    }

    case "Ferrari": {
      const fillStyles =
        "bg-colorFerrari border border-colorFerrari hover:text-colorFerrari hover:bg-transparent text-colorBrightGray";
      const outlineStyles =
        "border-colorFerrari bg-transparent text-colorFerrari hover:bg-colorFerrari hover:text-colorBrightGray";

      return clsx(
        variant === "base"
          ? fillStyles
          : variant === "outlined"
          ? outlineStyles
          : "",
        baseStyles
      );
    }

    case "HookersGreen": {
      const fillStyles =
        "bg-colorHookersGreen border border-colorHookersGreen hover:text-colorHookersGreen hover:bg-transparent text-colorBrightGray";
      const outlineStyles =
        "border-colorHookersGreen bg-transparent text-colorHookersGreen hover:bg-colorHookersGreen hover:text-colorBrightGray";

      return clsx(
        variant === "base"
          ? fillStyles
          : variant === "outlined"
          ? outlineStyles
          : "",
        baseStyles
      );
    }

    case "Jonquil": {
      const fillStyles =
        "bg-colorJonquil border border-colorJonquil hover:text-colorJonquil hover:bg-transparent text-colorCharlestonGreen";
      const outlineStyles =
        "border-colorJonquil bg-transparent text-colorJonquil hover:bg-colorJonquil hover:text-colorCharlestonGreen";

      return clsx(
        variant === "base"
          ? fillStyles
          : variant === "outlined"
          ? outlineStyles
          : "",
        baseStyles
      );
    }

    case "MauveBlue": {
      const fillStyles =
        "bg-colorMauveBlue border border-colorMauveBlue hover:text-colorMauveBlue hover:bg-transparent text-colorBrightGray";
      const outlineStyles =
        "border-colorMauveBlue bg-transparent text-colorMauveBlue hover:bg-colorMauveBlue hover:text-colorBrightGray";

      return clsx(
        variant === "base"
          ? fillStyles
          : variant === "outlined"
          ? outlineStyles
          : "",
        baseStyles
      );
    }

    case "NeonBlue": {
      const fillStyles =
        "bg-colorNeonBlue border border-colorNeonBlue hover:text-colorNeonBlue hover:bg-transparent text-colorBrightGray";
      const outlineStyles =
        "border-colorNeonBlue bg-transparent text-colorNeonBlue hover:bg-colorNeonBlue hover:text-colorBrightGray";

      return clsx(
        variant === "base"
          ? fillStyles
          : variant === "outlined"
          ? outlineStyles
          : "",
        baseStyles
      );
    }

    case "PastelBlue": {
      const fillStyles =
        "bg-colorPastelBlue border border-colorPastelBlue hover:text-colorPastelBlue hover:bg-transparent text-colorBrightGray";
      const outlineStyles =
        "border-colorPastelBlue bg-transparent text-colorPastelBlue hover:bg-colorPastelBlue hover:text-colorBrightGray";

      return clsx(
        variant === "base"
          ? fillStyles
          : variant === "outlined"
          ? outlineStyles
          : "",
        baseStyles
      );
    }

    case "Sunny": {
      const fillStyles =
        "bg-colorSunny border border-colorSunny hover:text-colorSunny hover:bg-transparent text-colorCharlestonGreen";
      const outlineStyles =
        "border-colorSunny bg-transparent text-colorSunny hover:bg-colorSunny hover:text-colorCharlestonGreen";

      return clsx(
        variant === "base"
          ? fillStyles
          : variant === "outlined"
          ? outlineStyles
          : "",
        baseStyles
      );
    }

    case "Tiffany": {
      const fillStyles =
        "bg-colorTiffany border border-colorTiffany hover:text-colorTiffany hover:bg-transparent text-colorBrightGray";
      const outlineStyles =
        "border-colorTiffany bg-transparent text-colorTiffany hover:bg-colorTiffany hover:text-colorBrightGray";

      return clsx(
        variant === "base"
          ? fillStyles
          : variant === "outlined"
          ? outlineStyles
          : "",
        baseStyles
      );
    }

    case "VioletBlue": {
      const fillStyles =
        "bg-colorVioletBlue border border-colorVioletBlue hover:text-colorVioletBlue hover:bg-transparent text-colorBrightGray";
      const outlineStyles =
        "border-colorVioletBlue bg-transparent text-colorVioletBlue hover:bg-colorVioletBlue hover:text-colorBrightGray";

      return clsx(
        variant === "base"
          ? fillStyles
          : variant === "outlined"
          ? outlineStyles
          : "",
        baseStyles
      );
    }
    default: {
      return undefined;
    }
  }
};

export const sizeStyles = (sizeStyle?: ButtonSizes) => {
  switch (sizeStyle) {
    case "sm": {
      const btnSmStyles = "text-sm py-2 px-6";
      return btnSmStyles;
    }
    case "md": {
      const btnMdStyles = "px-8 py-2 text-base lg:text-lg";
      return btnMdStyles;
    }
    case "lg": {
      const btnLgStyles = "px-10 py-3 text-lg lg:text-xl";
      return btnLgStyles;
    }
    case "xl": {
      const btnXlStyles = "px-10 py-3 text-xl lg:text-2xl";
      return btnXlStyles;
    }
    default: {
      return "px-8 py-2 text-base lg:text-lg";
    }
  }
};
