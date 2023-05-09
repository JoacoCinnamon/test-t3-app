export type Color = "blue" | "purple" | "green" | "red" | "gray" | "indigo";

const DEFAULT_UNDERLINED_COLOR = "bg-purple-600";
const UNDERLINED_COLORS = new Map<Color, string>()
  .set("blue", "bg-blue-600")
  .set("purple", "bg-purple-600")
  .set("green", "bg-green-600")
  .set("red", "bg-red-600")
  .set("gray", "bg-gray-600 dark:bg-gray-300")
  .set("indigo", "bg-indigo-600");

export const underlinedColor = (color: Color) => {
  return UNDERLINED_COLORS.get(color) ?? DEFAULT_UNDERLINED_COLOR;
};

const DEFAULT_LOADING_SPINNER_COLOR = "fill-purple-600";
const LOADING_SPINNER_COLORS = new Map<Color, string>()
  .set("blue", "fill-blue-600")
  .set("purple", "fill-purple-600")
  .set("green", "fill-green-600")
  .set("red", "fill-red-600")
  .set("gray", "fill-gray-600 dark:fill-gray-300")
  .set("indigo", "fill-indigo-600");

export const loadingSpinnerColor = (color: Color) => {
  return LOADING_SPINNER_COLORS.get(color) ?? DEFAULT_LOADING_SPINNER_COLOR;
};
