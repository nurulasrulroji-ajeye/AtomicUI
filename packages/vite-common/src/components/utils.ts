export type ColorVariants =
  | "CharlestonGreen"
  | "Arsenic"
  | "Tiffany"
  | "BrightGray"
  | "PastelBlue"
  | "Almond"
  | "Jonquil"
  | "Feldgrau"
  | "Cultured"
  | "Sunny"
  | "HookersGreen"
  | "AreBlue"
  | "NeonBlue"
  | "MauveBlue"
  | "CetaceanBlue"
  | "VioletBlue"
  | "Carmine"
  | "Ferrari";

export type GlobalRounded =
  | "classic"
  | "4"
  | "6"
  | "8"
  | "12"
  | "16"
  | "24"
  | "full";

export const roundedStyles = (rounded?: GlobalRounded) => {
  switch (rounded) {
    case "classic":
      return "rounded-none";
    case "4":
      return "rounded";
    case "6":
      return "rounded-md";
    case "8":
      return "rounded-lg";
    case "12":
      return "rounded-xl";
    case "16":
      return "rounded-2xl";
    case "24":
      return "rounded-3xl";
    case "full":
      return "rounded-full";
    default:
      return "rounded-full";
  }
};
