import React, { FC } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaBox } from "@src/components/atoms";
import { CardItem, SearchBar } from "@src/components/molecules";
import { NavigatorParamList, screens } from "@src/navigator";

export const HomeScreen: FC<
    NativeStackScreenProps<NavigatorParamList, screens.home>
> = () => {
    return (
        <SafeAreaBox>
            <SearchBar />
            <CardItem />
            <CardItem />
        </SafeAreaBox>
    );
};

export default HomeScreen;
