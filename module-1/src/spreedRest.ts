// spreed operator
{
const frind1:string[] = ['katappa','vallal','mountain'];
const firnd2:string[] = ['black','horse','dew'];
// frind1.push(...firnd2)

const firndList:string[] = [...frind1,...firnd2];
console.log(firndList)

// rest operator
const addNumber=(...frinds:string[])=>{
    frinds.forEach((frind:String)=> console.log(frind))
}
addNumber('abul','babul','kabul')

}