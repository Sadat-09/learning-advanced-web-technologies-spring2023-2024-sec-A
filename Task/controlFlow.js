let age=20;

if(age>=18){
    console.log("Adult");
}
else if( age>=13){
    console.log("Teenager");
}
else{
    console.log("Minor");
}


let age2=16;
let status;

switch(true){
    case age2>=18:
    status="Adult";
    break;
    
    case age2>=13:
    status="Teenager";
    break;

    default:
        status="Minor";



}

console.log(status);

let x=['a','b','c','d','e'];
for(let c=0;c<=3;c++){
    console.log(x[i]);
}

let x2=['a','b','c','d','e'];


let j=0;

do{
    console.log(x[j]);
    j++;


}while(j<2);
