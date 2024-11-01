"use strict";
{
    let anything;
    anything = 'next level web development';
    anything = 324;
    // (anything as number)
    // (anything as string)
    const kgToGm = (value) => {
        if (typeof value === "string") {
            const convertedToValue = parseFloat(value) * 1000;
            return `this is converted value: ${convertedToValue}`;
        }
        if (typeof value === "number") {
            return value * 1000;
        }
    };
    const result1 = kgToGm(1000);
    const result2 = kgToGm('2000');
}
