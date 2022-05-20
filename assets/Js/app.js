/*1 Ededlerden ibaret bir array verilir.
 Hemin arrayi boyukden ededden kiciye  dogru sort elemek.*/
 let numbers=[5,2,8,16,9];
 function Sort(){
console.log(numbers.sort(function(a,b){ return b-a;}))
}
Sort();



/*
 3) ["Yanvar","Fevral","Mart","Aprel"]  - 
 bu arrayi parametr kimi qebul eden bir function yazirsiz.
 Hemin function geriye yeni bir array qaytarir. 
 Yeni yaranan arrayda hemin aylarin necenci ay oldugu yazilmalidir. 
 Cavab bele olmlalidir: ["Yanvar -1","Fevral-2","Mart-3","Aprel-4"]. */

 
 let arr1=["Yanvar","Fevral","Mart","Aprel"];

 function WichMonth(arr){
     console.log(arr.map((value,index)=>value=value+"-"+(index+1)));
 }

WichMonth(arr1)

/*
 4)String qebul eden bir function yaziriq. 
 Hemin function yeni bir array qaytaracaq,
  hemin arrayin elementleri functiona gelen stringin sozlerinin herflerinin cemine beraber olmalidir.
 Meselen: Functiona gelen string - 
 "Salam olsun hamiya", hemin functionun qaytardiqi array ise - [5,5,6] olacaq.*/

 let str="Salam olsun hamiya";
  
 function Count(word){
    console.log(word.split(" ").map(value=>value.length));  
 }
 Count(str);
