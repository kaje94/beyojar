import React, { FC } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { SafeAreaBox } from "@src/components/atoms";
import { CardItem, FloatingButton, SearchBar } from "@src/components/molecules";
import { NavigatorParamList } from "@src/navigator";
import { Screens } from "@src/utils/constants";

export const HomeScreen: FC<NativeStackScreenProps<NavigatorParamList, Screens.home>> = ({ navigation }) => {
    return (
        <SafeAreaBox>
            <SearchBar />
            <CardItem onPress={() => navigation.navigate(Screens.editNote)} />
            <CardItem disabled />
            {/** Show add button only when search is disabled */}
            <FloatingButton />
        </SafeAreaBox>
    );
};
