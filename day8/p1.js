async function orderfood(name,time){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Order" + name + "Prepared");
        },time);
    });
}

async function restaurant(){
    console.log("Order Placed");
    const pizza=await orderfood("pizza",1000);
    console.log(pizza);
    const burger=await orderfood("burger",2000);
    console.log(burger);
    const noodles=await orderfood("noodles",3000);
    console.log(noodles);
    console.log("All Order Served");
}

restaurant();