import React, { FC } from "react";
import { DrawerScreenProps } from "@react-navigation/drawer";

import { Screens } from "@src/common/constants";
import { SafeAreaBox } from "@src/components/atoms";
import { CardItem, FloatingButton, SearchBar } from "@src/components/molecules";
import { NavigatorParamList } from "@src/navigator";

export const HomeScreen: FC<DrawerScreenProps<NavigatorParamList, Screens.home>> = ({ navigation }) => {
    return (
        <SafeAreaBox>
            <SearchBar />
            <CardItem onPress={() => navigation.navigate(Screens.editNote)} />
            <CardItem disabled />
            {/** todo: Show add button only when search is disabled */}
            <FloatingButton />
        </SafeAreaBox>
    );
};
