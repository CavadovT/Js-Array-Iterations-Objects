/*1 Ededlerden ibaret bir array verilir.
 Hemin arrayi boyukden ededden kiciye  dogru sort elemek.*/
function Sort(){
let arrnumbers=[5,2,8,16,9];
arrnumbers.sort(function(a,b){
    return a-b;
})
arrnumbers.reverse();
console.log(arrnumbers);

}
Sort();



/*
 3) ["Yanvar","Fevral","Mart","Aprel"]  - 
 bu arrayi parametr kimi qebul eden bir function yazirsiz.
 Hemin function geriye yeni bir array qaytarir. 
 Yeni yaranan arrayda hemin aylarin necenci ay oldugu yazilmalidir. 
 Cavab bele olmlalidir: ["Yanvar -1","Fevral-2","Mart-3","Aprel-4"]. */

 
 let arr1=["Yanvar","Fevral","Mart","Aprel"];

 function WichMonth(arr1){
    let newarr=[]
    for (let i = 0; i < arr1.length; i++) {
       newarr.push(arr1[i]+"-"+(i+1))
    }
    return newarr;
 }
 console.log( WichMonth(arr1));

/*
 4)String qebul eden bir function yaziriq. 
 Hemin function yeni bir array qaytaracaq,
  hemin arrayin elementleri functiona gelen stringin sozlerinin herflerinin cemine beraber olmalidir.
 Meselen: Functiona gelen string - 
 "Salam olsun hamiya", hemin functionun qaytardiqi array ise - [5,5,6] olacaq.*/

 let string="Salam olsun hamiya";
  
 function Count(word){
     let arr=word.split(" ");
     console.log(arr);

     
     for (let i = 0; i < arr.length; i++) {
      arr[i]=(arr[i].length);  
     }
  
     return arr;
 }
 console.log(Count(string));