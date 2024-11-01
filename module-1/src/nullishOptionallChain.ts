{
const authentication = undefined;
const user = authentication ?? 'ghust';
// console.log(user);

type job ={
    name: string;
    job:string;
    job2?:string
}
const chakri:job={
    name:'goverment',
    job:'permanent'
}
const optionalJob = chakri?.job2 ?? 'this job sobai pare na';
console.log(optionalJob)
}