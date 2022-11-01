import React, { FC, useCallback, useEffect, useRef, useState } from "react";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useTranslation } from "react-i18next";
import AppIntroSlider from "react-native-app-intro-slider";
import { Transitioning, TransitioningView } from "react-native-reanimated";
import { useTheme } from "styled-components";

import { FontFamily } from "@src/assets/fonts";
import { LogoIcon, StarFilledIcon, TagsIcon, ThemeIcon } from "@src/assets/icons";
import { IsMobile, Screens } from "@src/common/constants";
import { delay, setNavigationTheme } from "@src/common/helpers";
import { IconProps } from "@src/common/interfaces";
import { FontSize, IconSize, Spacing } from "@src/common/theme";
import { getTransition } from "@src/common/transitions";
import { Box, SafeAreaBox, Text } from "@src/components/atoms";
import { Button } from "@src/components/molecules";
import { NavigatorParamList } from "@src/navigation";
import { useSettingsStore } from "@src/store";

/** Welcome slider item */
interface SliderDataItem {
    /** Icon to be displayed */
    Icon: React.FC<IconProps>;
    /** Unique key of the item */
    key: string;
    /** Sub title or description of the slide item */
    subTitle: string;
    /** Title to be shown in the slide item */
    title: string;
}

/** Welcome screen provide an introduction about the application for first time users */
export const WelcomeScreen: FC<NativeStackScreenProps<NavigatorParamList, Screens.welcome>> = ({
    navigation: { replace },
}) => {
    const { pallette, mode } = useTheme();
    const { t } = useTranslation();

    const sliderData: SliderDataItem[] = [
        {
            Icon: LogoIcon,
            key: "welcome",
            subTitle: t("screens.welcome.slides.welcome.subTitle"),
            title: t("screens.welcome.slides.welcome.title"),
        },
        {
            Icon: TagsIcon,
            key: "labels",
            subTitle: t("screens.welcome.slides.labels.subTitle"),
            title: t("screens.welcome.slides.labels.title"),
        },
        {
            Icon: StarFilledIcon,
            key: "favorite",
            subTitle: t("screens.welcome.slides.favorite.subTitle"),
            title: t("screens.welcome.slides.favorite.title"),
        },
        {
            Icon: ThemeIcon,
            key: "themes",
            subTitle: t("screens.welcome.slides.themes.subTitle"),
            title: t("screens.welcome.slides.themes.title"),
        },
    ];

    const sliderRef = useRef<AppIntroSlider<SliderDataItem> | null>();
    const transitionRef = useRef<TransitioningView | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    /** Is user viewing the last slide item */
    const isLastIndex = activeIndex + 1 === sliderData.length;

    useEffect(() => transitionRef.current?.animateNextTransition(), [isLastIndex]);

    const { setIntroViewed } = useSettingsStore();

    /** Function to be called when next button is pressed */
    const onNextPress = useCallback(() => {
        sliderRef.current?.goToSlide(activeIndex + 1);
        setActiveIndex(activeIndex + 1);
    }, [activeIndex]);

    /** Function to be called when get started button is pressed */
    const onGetStartedPress = useCallback(async () => {
        setIntroViewed(true);
        replace(Screens.drawer);
        await delay(500);
        setNavigationTheme(mode);
    }, [mode]);

    return (
        <SafeAreaBox p={Spacing.medium}>
            <AppIntroSlider
                activeDotStyle={{ backgroundColor: pallette.primary.main }}
                data={sliderData}
                endFillColor={pallette.secondary.dark}
                keyExtractor={(item) => item.key}
                onSlideChange={(index) => setActiveIndex(index)}
                ref={(ref) => {
                    sliderRef.current = ref;
                }}
                renderItem={({ item: { title, subTitle, Icon, key } }) => (
                    <Box
                        key={key}
                        alignItems="center"
                        flex={1}
                        justifyContent="center"
                        mt={IsMobile ? 0 : "100%"}
                        p={Spacing.medium}
                    >
                        <Icon color={pallette.primary.dark} size={IconSize.massive} />
                        <Text
                            color={pallette.primary.dark}
                            fontFamily={FontFamily.bold}
                            fontSize={FontSize.huge}
                            mt={Spacing.medium}
                        >
                            {title}
                        </Text>
                        <Text color={pallette.secondary.main} mt={Spacing.medium} textAlign="center">
                            {subTitle}
                        </Text>
                    </Box>
                )}
                showDoneButton={false}
                showNextButton={false}
            />
            <Box pb={Spacing.medium}>
                <Transitioning.View ref={transitionRef} transition={getTransition("fade")}>
                    {isLastIndex ? (
                        <Button
                            key="0"
                            accessibilityHint={t("screens.welcome.getStartedButtonA11yHint")}
                            accessibilityLabel={t("screens.welcome.getStartedButtonA11yLabel")}
                            bg={pallette.primary.dark}
                            flex={null}
                            onPress={onGetStartedPress}
                            text={t("screens.welcome.getStartedButtonText")}
                        />
                    ) : (
                        <Button
                            key="1"
                            accessibilityHint={t("screens.welcome.nextButtonA11yHint", {
                                slideCount: sliderData.length,
                                slideNo: activeIndex + 2,
                            })}
                            accessibilityLabel={t("screens.welcome.nextButtonA11yLabel")}
                            bg={pallette.primary.main}
                            flex={null}
                            onPress={onNextPress}
                            text={t("screens.welcome.nextButtonText")}
                        />
                    )}
                </Transitioning.View>
            </Box>
        </SafeAreaBox>
    );
};
