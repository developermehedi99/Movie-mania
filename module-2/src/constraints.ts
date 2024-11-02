{
    // constraints type extends
    const ourEducations = <T extends {id:number; name:string; email:string}> (students:T)=>{
        return students;
    }

    const result1 = ourEducations({id:12, name:'katappa',email:'k@gmail.com'})

    const result2 = ourEducations({
        id:22,
        name:'januyary',
        email:'j@gmail.com',
        positon:'nothing'})
    const result3 = ourEducations({
        id:22,
        name:'januyary',
        email:'j@gmail.com',
        obasta:'kichui nai'
        })
}

