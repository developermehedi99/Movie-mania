{
    // generic intersection
    interface Developer<T,X= null>{
        name:string;
        computer:{
            brand:string;
            hardix:string;
            money:number
        },
        smartWatch: T,
        bike?:X
    }
    type poorWatch ={
        brand:string;
        processor:string;
    }
    const poorDeveloper:Developer<poorWatch> = {
        name:'rana',
        computer:{
            brand:'hp',
            hardix:'good',
            money:23452,
        },
        smartWatch:{
            brand:'vivo',
            processor:'corai'
        }
    }

    interface richWatch{
        brand:string;
        processor:string; 
        price:number
    }

    interface bikeZone {
        brand:string,
        licen:boolean
    }

    const richDeveloper:Developer<richWatch, bikeZone> = {
        name:'mehedi',
        computer:{
            brand:'dell',
            hardix:'good',
            money:34343,
        },
        smartWatch:{
            brand:'vivo',
            processor:'corai',
            price:11344,
        },
        bike:{
            brand:'zixcerr',
            licen:true
        }
    }
}