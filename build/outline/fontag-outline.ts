export type FontagOutlineId =
  | "wheat"
  | "tractor"
  | "cow";

export type FontagOutlineKey =
  | "Wheat"
  | "Tractor"
  | "Cow";

export enum FontagOutline {
  Wheat = "wheat",
  Tractor = "tractor",
  Cow = "cow",
}

export const FONTAG_OUTLINE_CODEPOINTS: { [key in FontagOutline]: string } = {
  [FontagOutline.Wheat]: "61697",
  [FontagOutline.Tractor]: "61698",
  [FontagOutline.Cow]: "61699",
};
