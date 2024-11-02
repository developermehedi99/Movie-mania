{
    type ArNumbers ={
        height:number;
        width:number;
    }

    type ArStings = {
        [key in keyof ArNumbers ] : string
    }

    type AreaString<T> = {
        [key in keyof T]: T[key];
    }

    const area: AreaString<{width:number; heigth:string}>= {
        width:23,
        heigth:'miter'
    }
}