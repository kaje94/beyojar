import React, { FC } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Box } from "@src/components/atoms";
import { CardItem } from "@src/components/molecules";
import { NavigatorParamList } from "@src/navigator";
import { Screens } from "@src/utils/constants";

export const EditNoteScreen: FC<NativeStackScreenProps<NavigatorParamList, Screens.editNote>> = () => {
    return (
        <Box backgroundColor="red" padding={0} margin={0}>
            <CardItem />
        </Box>
    );
};
