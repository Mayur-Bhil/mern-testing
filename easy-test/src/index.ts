const sum = (a:number, b:number): number => {
  return a + b;
};  

const test1 = sum(2, 3);
if(test1 === 5 ){
    console.log("test Pass"); 
}else{
    console.log("test Failed");
}