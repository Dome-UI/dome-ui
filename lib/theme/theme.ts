import Colors from "@lib/theme/colors/colors.json";
import Typograph from "@lib/theme/typograph/typograph.json";

export const colors = { ...Colors };
export const typograph = { ...Typograph };

export type ColorProps = typeof colors;
export type TypographProps = typeof typograph;
