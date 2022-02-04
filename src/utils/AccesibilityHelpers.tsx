export const makeAccesibility = (text: string) => {
  return {
    testID: text,
    accessibilityLabel: text,
  };
};
