import {describe, test, expect} from "@jest/globals";
import {romanToArabic} from "../src/romanToArabic";

describe('roman to arabic', () => {

    test('arabic version for roman I is 1', () => {
        const ret = romanToArabic("I")
        expect(ret).toBe(1)
    })

    test('arabic version for roman II is 2', () => {
        const ret = romanToArabic("II")
        expect(ret).toBe(2)
    })

    test('arabic version for roman III is 3', () => {
        const ret = romanToArabic("III")
        expect(ret).toBe(3)
    })

    test('arabic version for roman IV is 4', () => {
        const ret = romanToArabic("IV")
        expect(ret).toBe(4)
    })

    test('arabic version for roman MMXXIV is 2024', () => {
        const ret = romanToArabic("MMXXIV")
        expect(ret).toBe(2024)
    })

    test('arabic version for roman DXLV is 545', () => {
        const ret = romanToArabic("DXLV")
        expect(ret).toBe(545)
    })

})