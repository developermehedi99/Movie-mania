{
    const programmers = <T>(param:T)=>{
        return [param]
    }
    const result =  programmers<string>('javascript devleper');

    const createTupleFunc = <T, Q>(num1:T, num2:Q) : [T,Q] => {
        return [num1, num2];
    }
    const result2 = createTupleFunc<string,number>('Asia', 11);
}