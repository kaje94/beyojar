import { ITheme } from "../providers/themeProvider";

import "styled-components";

type CustomTheme = typeof ITheme;

declare module "styled-components" {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    export interface DefaultTheme extends ITheme {}
}
