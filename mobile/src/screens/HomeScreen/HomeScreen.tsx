import React, { FC, useState } from "react";
import { StyleSheet } from "react-native";

import { Text, View } from "../../../components/Themed";
import { NavigatorParamList, screens } from "../../navigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SearchBar } from "../../components/molecules/SearchBar/SearchBar";

export const HomeScreen: FC<
    NativeStackScreenProps<NavigatorParamList, screens.home>
> = () => {
    return (
        <View>
            <Text>Home screen</Text>
            <SearchBar />
        </View>
    );
};

export default HomeScreen;

// export default function TabOneScreen({
//     navigation,
// }: RootTabScreenProps<"TabOne">) {
//     const { t } = useTranslation();

//     return (
//         <View style={styles.container}>
//             <Text>Home screen</Text>
//         </View>
//     );
// }
