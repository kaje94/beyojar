/* eslint-disable */
// TODO: need to remove
import fonts from "../src/assets/fonts";
import { Text, TextProps } from "./Themed";

export function MonoText(props: TextProps) {
    return (
        <Text {...props} style={[props.style, { fontFamily: fonts.light }]} />
    );
}
