function manualInputFlag (flag) {
    const flagArr = flag
        .toString(2)
        .split('')
        .reverse()
        .map((i, index) => {if (i == 1) return index+1})
        .filter(i => i)

    return flagArr
}

module.exports = manualInputFlag