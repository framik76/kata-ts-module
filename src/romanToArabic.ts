
const chart : Record<string, number> = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
};
export const romanToArabic = (input: string): number => {
    return input
        .toUpperCase()
        .split('')
        .reduce(
            (acc, romanLetter) => {
                let negativeOffset = 0;
                const arabicValue = chart[romanLetter];
                if (acc[1] < arabicValue) {
                    negativeOffset = -(acc[1] * 2);
                }
                return [(acc[0] += arabicValue + negativeOffset), arabicValue];
            },
            [0, 0]
        )[0];
};