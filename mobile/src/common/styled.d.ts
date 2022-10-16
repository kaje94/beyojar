import { ITheme } from "@src/common/interfaces";

import "styled-components";

/** The default styled components theme interface to be overwritten by custom theme interface */

type CustomTheme = typeof ITheme;

declare module "styled-components" {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    export interface DefaultTheme extends ITheme {}
}
