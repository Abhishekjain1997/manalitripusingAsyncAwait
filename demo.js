function buycar (){
    return new Promise((res,rej) =>{
    setTimeout(() => {
        res('buy a car')
    },5000)
 } )
}
function plaintrip(){
    return new Promise((res,rej)=>{

        setTimeout(() =>{
            res('lets go to manali')
        },2000)
    })
}
function reachmanali(){
    return new Promise((res,rej) =>{
        setTimeout(()=>{
            res('reach manali')
        },1000)
    })
}
function gotofamousmountain(){
    return new Promise((res,rej)=>{
        setTimeout(() =>{
            res('reached mountain')
        },1000)
    })
}
async function fun1(){
    const msg=await buycar();
    console.log(msg)
    const msg2=await plaintrip();
    console.log(msg2)
    const msg3=await reachmanali();
    console.log(msg3);
    const msg4=await gotofamousmountain();
    console.log(msg4)
}
fun1();