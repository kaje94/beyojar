import "styled-components";
import { ITheme } from "../providers/themeProvider";

type CustomTheme = typeof ITheme;

declare module "styled-components" {
    export interface DefaultTheme extends ITheme {}
}
