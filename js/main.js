let products_delete="sabzi"
let products="bodiring";
let sum=10000;



var product=[
    {
        turi:"sabzi",
        age:3000
    },
    {
        turi:"pomidor",
        age:6000
    },
    {
        turi:"kartoshka",
        age:7000
    },
    {
        turi:"piyoz",
        age:4000
    },
    {
        turi:"bodiring",
        age:5000
    },
    {
        turi:"guruch",
        age:11000
    },
];
var summa=0;

function  deregistration(product_type){
    for(let i=0;i<product.length;i++){
        
        if(product[i].turi.toUpperCase()==product_type.toUpperCase()){
            product.splice(i,1);
        }
        console.log(product[i]);
    }
}

function product_repair(product_name,product_sum){
    for(let i=0;i<product.length;i++){
      
        if(product[i].turi.toUpperCase()==product_name.toUpperCase()){
            product[i].age=product_sum;
        }

    }
}
function product_sum(){
    for(let i=0;i<product.length;i++){
       
        summa+=product[i].age;

    }
    return summa;

}


deregistration(products_delete);
product_repair(products,sum);
console.log('Jami summa:'+product_sum()); 
console.log(product); 

