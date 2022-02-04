export type LottieAssetName =
    'example'

export const lottieLibrary: Record<LottieAssetName, any> = {
    example: require('./loader.json'),
};

export default lottieLibrary;