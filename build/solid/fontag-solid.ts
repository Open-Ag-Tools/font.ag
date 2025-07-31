export type FontagSolidId =
  | "wheat"
  | "tractor"
  | "cow";

export type FontagSolidKey =
  | "Wheat"
  | "Tractor"
  | "Cow";

export enum FontagSolid {
  Wheat = "wheat",
  Tractor = "tractor",
  Cow = "cow",
}

export const FONTAG_SOLID_CODEPOINTS: { [key in FontagSolid]: string } = {
  [FontagSolid.Wheat]: "61697",
  [FontagSolid.Tractor]: "61698",
  [FontagSolid.Cow]: "61699",
};
