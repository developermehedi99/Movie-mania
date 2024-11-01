
{
    
    let anything: any;

    anything = 'next level web development';
    anything = 324;
    // (anything as number)
    // (anything as string)

    const kgToGm =(value: string | number): string | number | undefined=>{
        if(typeof value === "string"){
            const convertedToValue = parseFloat(value)*1000;
            return `this is converted value: ${convertedToValue}`
        }if(typeof value === "number"){
            return value * 1000
        }
    }
    const result1 = kgToGm(1000) as number;
    const result2 = kgToGm('2000') as string;
}