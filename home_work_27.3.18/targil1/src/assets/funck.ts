
export function MakeRundomNum(small: number, big: number): number {
    if (small > big) {
        let temp: number = small;
        small = big;
        big = temp;
    }
    let randum_num: number = Math.round(Math.random() * (big - small) + small)
    return randum_num;
}

