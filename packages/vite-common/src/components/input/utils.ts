import clsx from "clsx";
import { ColorVariants } from "../utils";

export type variant = "line" | "primary" | "retro";
export type InputSizes = "sm" | "md" | "lg";
export const baseStyles = "outline-none py-3 px-4 leading-none font-semibold";

export const variants = (variant?: variant, colors?: ColorVariants) => {
  switch (variant) {
    case "line": {
      const lineStyles =
        "border-b disabled:cursor-not-allowed transition-all ease-in-out duration-500";

      return clsx(
        lineStyles,
        colors === "CharlestonGreen"
          ? "border-b-colorCharlestonGreen/60 disabled:border-b-colorCharlestonGreen/40 hover:border-b-colorCharlestonGreen/80 focus:border-b-colorCharlestonGreen"
          : colors === "Almond"
          ? "border-b-colorAlmond disabled:border-b-colorAlmond/40 hover:border-b-colorAlmond/80 focus:border-b-colorAlmond"
          : colors === "AreBlue"
          ? "border-b-colorAreBlue disabled:border-b-colorAreBlue/40 hover:border-b-colorAreBlue/80 focus:border-b-colorAreBlue"
          : colors === "Arsenic"
          ? "border-b-colorArsenic disabled:border-b-colorArsenic/40 hover:border-b-colorArsenic/80 focus:border-b-colorArsenic"
          : colors === "BrightGray"
          ? "border-b-colorBrightGray disabled:border-b-colorBrightGray/40 hover:border-b-colorBrightGray/80 focus:border-b-colorBrightGray"
          : colors === "Carmine"
          ? "border-b-colorCarmine disabled:border-b-colorCarmine/40 hover:border-b-colorCarmine/80 focus:border-b-colorCarmine"
          : colors === "CetaceanBlue"
          ? "border-b-colorCetaceanBlue disabled:border-b-colorCetaceanBlue/40 hover:border-b-colorCetaceanBlue/80 focus:border-b-colorCetaceanBlue"
          : colors === "Cultured"
          ? "border-b-colorCultured disabled:border-b-colorCultured/40 hover:border-b-colorCultured/80 focus:border-b-colorCultured"
          : colors === "Feldgrau"
          ? "border-b-colorFeldgrau disabled:border-b-colorFeldgrau/40 hover:border-b-colorFeldgrau/80 focus:border-b-colorFeldgrau"
          : colors === "Ferrari"
          ? "border-b-colorFerrari disabled:border-b-colorFerrari/40 hover:border-b-colorFerrari/80 focus:border-b-colorFerrari"
          : colors === "HookersGreen"
          ? "border-b-colorHookersGreen disabled:border-b-colorHookersGreen/40 hover:border-b-colorHookersGreen/80 focus:border-b-colorHookersGreen"
          : colors === "Jonquil"
          ? "border-b-colorJonquil disabled:border-b-colorJonquil/40 hover:border-b-colorJonquil/80 focus:border-b-colorJonquil"
          : colors === "MauveBlue"
          ? "border-b-colorMauveBlue disabled:border-b-colorMauveBlue/40 hover:border-b-colorMauveBlue/80 focus:border-b-colorMauveBlue"
          : colors === "NeonBlue"
          ? "border-b-colorNeonBlue disabled:border-b-colorNeonBlue/40 hover:border-b-colorNeonBlue/80 focus:border-b-colorNeonBlue"
          : colors === "PastelBlue"
          ? "border-b-colorPastelBlue disabled:border-b-colorPastelBlue/40 hover:border-b-colorPastelBlue/80 focus:border-b-colorPastelBlue"
          : colors === "Sunny"
          ? "border-b-colorSunny disabled:border-b-colorSunny/40 hover:border-b-colorSunny/80 focus:border-b-colorSunny"
          : colors === "Tiffany"
          ? "border-b-colorTiffany disabled:border-b-colorTiffany/40 hover:border-b-colorTiffany/80 focus:border-b-colorTiffany"
          : colors === "VioletBlue"
          ? "border-b-colorVioletBlue disabled:border-b-colorVioletBlue/40 hover:border-b-colorVioletBlue/80 focus:border-b-colorVioletBlue"
          : undefined
      );
    }
    case "primary": {
      const primaryStyles =
        "border-[1.5px] bg-transparent shadow-md disabled:cursor-not-allowed focus:shadow-lg transition-all ease-in-out duration-500";
      return clsx(
        primaryStyles,
        colors === "CharlestonGreen"
          ? "border-colorCharlestonGreen/60 disabled:border-colorCharlestonGreen/40 hover:border-colorCharlestonGreen/80 focus:border-colorCharlestonGreen"
          : colors === "Almond"
          ? "border-colorAlmond disabled:border-colorAlmond/40 hover:border-colorAlmond/80 focus:border-colorAlmond"
          : colors === "AreBlue"
          ? "border-colorAreBlue disabled:border-colorAreBlue/40 hover:border-colorAreBlue/80 focus:border-colorAreBlue"
          : colors === "Arsenic"
          ? "border-colorArsenic disabled:border-colorArsenic/40 hover:border-colorArsenic/80 focus:border-colorArsenic"
          : colors === "BrightGray"
          ? "border-colorBrightGray disabled:border-colorBrightGray/40 hover:border-colorBrightGray/80 focus:border-colorBrightGray"
          : colors === "Carmine"
          ? "border-colorCarmine disabled:border-colorCarmine/40 hover:border-colorCarmine/80 focus:border-colorCarmine"
          : colors === "CetaceanBlue"
          ? "border-colorCetaceanBlue disabled:border-colorCetaceanBlue/40 hover:border-colorCetaceanBlue/80 focus:border-colorCetaceanBlue"
          : colors === "Cultured"
          ? "border-colorCultured disabled:border-colorCultured/40 hover:border-colorCultured/80 focus:border-colorCultured"
          : colors === "Feldgrau"
          ? "border-colorFeldgrau disabled:border-colorFeldgrau/40 hover:border-colorFeldgrau/80 focus:border-colorFeldgrau"
          : colors === "Ferrari"
          ? "border-colorFerrari disabled:border-colorFerrari/40 hover:border-colorFerrari/80 focus:border-colorFerrari"
          : colors === "HookersGreen"
          ? "border-colorHookersGreen disabled:border-colorHookersGreen/40 hover:border-colorHookersGreen/80 focus:border-colorHookersGreen"
          : colors === "Jonquil"
          ? "border-colorJonquil disabled:border-colorJonquil/40 hover:border-colorJonquil/80 focus:border-colorJonquil"
          : colors === "MauveBlue"
          ? "border-colorMauveBlue disabled:border-colorMauveBlue/40 hover:border-colorMauveBlue/80 focus:border-colorMauveBlue"
          : colors === "NeonBlue"
          ? "border-colorNeonBlue disabled:border-colorNeonBlue/40 hover:border-colorNeonBlue/80 focus:border-colorNeonBlue"
          : colors === "PastelBlue"
          ? "border-colorPastelBlue disabled:border-colorPastelBlue/40 hover:border-colorPastelBlue/80 focus:border-colorPastelBlue"
          : colors === "Sunny"
          ? "border-colorSunny disabled:border-colorSunny/40 hover:border-colorSunny/80 focus:border-colorSunny"
          : colors === "Tiffany"
          ? "border-colorTiffany disabled:border-colorTiffany/40 hover:border-colorTiffany/80 focus:border-colorTiffany"
          : colors === "VioletBlue"
          ? "border-colorVioletBlue disabled:border-colorVioletBlue/40 hover:border-colorVioletBlue/80 focus:border-colorVioletBlue"
          : undefined
      );
    }
    case "retro": {
      const retroStyles =
        "border bg-transparent disabled:cursor-not-allowed disabled:shadow-none hover:shadow-retro focus:shadow-retro transition-all ease-in-out duration-500";

      return clsx(
        retroStyles,
        colors === "CharlestonGreen"
          ? "border-colorCharlestonGreen/60 hover:shadow-colorCharlestonGreen focus:shadow-colorCharlestonGreen disabled:border-colorCharlestonGreen/40 hover:border-colorCharlestonGreen/80 focus:border-colorCharlestonGreen"
          : colors === "Almond"
          ? "border-colorAlmond hover:shadow-colorAlmond focus:shadow-colorAlmond disabled:border-colorAlmond/40 hover:border-colorAlmond/80 focus:border-colorAlmond"
          : colors === "AreBlue"
          ? "border-colorAreBlue hover:shadow-colorAreBlue focus:shadow-colorAreBlue disabled:border-colorAreBlue/40 hover:border-colorAreBlue/80 focus:border-colorAreBlue"
          : colors === "Arsenic"
          ? "border-colorArsenic hover:shadow-colorArsenic focus:shadow-colorArsenic disabled:border-colorArsenic/40 hover:border-colorArsenic/80 focus:border-colorArsenic"
          : colors === "BrightGray"
          ? "border-colorBrightGray hover:shadow-colorBrightGray focus:shadow-colorBrightGray disabled:border-colorBrightGray/40 hover:border-colorBrightGray/80 focus:border-colorBrightGray"
          : colors === "Carmine"
          ? "border-colorCarmine hover:shadow-colorCarmine focus:shadow-colorCarmine disabled:border-colorCarmine/40 hover:border-colorCarmine/80 focus:border-colorCarmine"
          : colors === "CetaceanBlue"
          ? "border-colorCetaceanBlue hover:shadow-colorCetaceanBlue focus:shadow-colorCetaceanBlue disabled:border-colorCetaceanBlue/40 hover:border-colorCetaceanBlue/80 focus:border-colorCetaceanBlue"
          : colors === "Cultured"
          ? "border-colorCultured hover:shadow-colorCultured focus:shadow-colorCultured disabled:border-colorCultured/40 hover:border-colorCultured/80 focus:border-colorCultured"
          : colors === "Feldgrau"
          ? "border-colorFeldgrau hover:shadow-colorFeldgrau focus:shadow-colorFeldgrau disabled:border-colorFeldgrau/40 hover:border-colorFeldgrau/80 focus:border-colorFeldgrau"
          : colors === "Ferrari"
          ? "border-colorFerrari hover:shadow-colorFerrari focus:shadow-colorFerrari disabled:border-colorFerrari/40 hover:border-colorFerrari/80 focus:border-colorFerrari"
          : colors === "HookersGreen"
          ? "border-colorHookersGreen hover:shadow-colorHookersGreen focus:shadow-colorHookersGreen disabled:border-colorHookersGreen/40 hover:border-colorHookersGreen/80 focus:border-colorHookersGreen"
          : colors === "Jonquil"
          ? "border-colorJonquil hover:shadow-colorJonquil focus:shadow-colorJonquil disabled:border-colorJonquil/40 hover:border-colorJonquil/80 focus:border-colorJonquil"
          : colors === "MauveBlue"
          ? "border-colorMauveBlue hover:shadow-colorMauveBlue focus:shadow-colorMauveBlue disabled:border-colorMauveBlue/40 hover:border-colorMauveBlue/80 focus:border-colorMauveBlue"
          : colors === "NeonBlue"
          ? "border-colorNeonBlue hover:shadow-colorNeonBlue focus:shadow-colorNeonBlue disabled:border-colorNeonBlue/40 hover:border-colorNeonBlue/80 focus:border-colorNeonBlue"
          : colors === "PastelBlue"
          ? "border-colorPastelBlue hover:shadow-colorPastelBlue focus:shadow-colorPastelBlue disabled:border-colorPastelBlue/40 hover:border-colorPastelBlue/80 focus:border-colorPastelBlue"
          : colors === "Sunny"
          ? "border-colorSunny hover:shadow-colorSunny focus:shadow-colorSunny disabled:border-colorSunny/40 hover:border-colorSunny/80 focus:border-colorSunny"
          : colors === "Tiffany"
          ? "border-colorTiffany hover:shadow-colorTiffany focus:shadow-colorTiffany disabled:border-colorTiffany/40 hover:border-colorTiffany/80 focus:border-colorTiffany"
          : colors === "VioletBlue"
          ? "border-colorVioletBlue hover:shadow-colorVioletBlue focus:shadow-colorVioletBlue disabled:border-colorVioletBlue/40 hover:border-colorVioletBlue/80 focus:border-colorVioletBlue"
          : undefined
      );
    }
    default: {
      return "border-colorCharlestonGreen/60 disabled:border-colorCharlestonGreen/40 hover:border-colorCharlestonGreen/80 focus:border-colorCharlestonGreen";
    }
  }
};

export const sizeVariant = (size?: InputSizes) => {
  const defaultSizeStyles = "py-3 px-4";
  const smStyles = "py-2 px-3 text-sm placeholder:text-sm";
  const lgStyles = "py-4 px-6 text-lg placeholder:text-lg";
  switch (size) {
    case "sm": {
      return smStyles;
    }
    case "md": {
      return defaultSizeStyles;
    }
    case "lg": {
      return lgStyles;
    }
    default: {
      return defaultSizeStyles;
    }
  }
};
