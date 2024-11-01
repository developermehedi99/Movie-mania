"use strict";
{
    function getChecking(value) {
        if (typeof value === "number") {
            let result = value * 3;
            console.log(result);
        }
        else if (typeof value === 'string') {
            console.log('mountain dew');
        }
        else {
            console.log('wrong value');
        }
    }
    getChecking(null);
}
