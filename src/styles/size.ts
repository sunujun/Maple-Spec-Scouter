import {
    responsiveScreenWidth,
    responsiveScreenHeight,
    responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';

const DESIGN_SCREEN_WIDTH = 360;
const DESIGN_SCREEN_HEIGHT = 640;

export const standardWidth = (width: number) => {
    const percentage = (width / DESIGN_SCREEN_WIDTH) * 100;

    return responsiveScreenWidth(percentage);
};

export const standardHeight = (height: number) => {
    const percentage = (height / DESIGN_SCREEN_HEIGHT) * 100;

    return responsiveScreenHeight(percentage);
};

export const standardFontSize = (fontSize: number) => {
    const percentage = fontSize * 0.135;

    return responsiveScreenFontSize(percentage);
};
