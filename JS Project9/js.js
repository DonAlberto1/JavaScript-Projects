// A task 1:1funkcyan,..
//2 tarber zangvatsnerum hnaravor che oktagorcel
// let a=[5,51,6,9];
// let b=[5,51,6,9];
// let foo=function(arr){
//     let i=0
//     while(i<arr.length){alert(a[i])
//     i++}
// };
// foo(a)
// foo(b)

//A task 2:
// let forEach=function(arr, fun)
// {
//     let i=0
//     while(i<arr.length){
//         fun(arr[i],i)
//         i++
//     }
// }
// forEach([5,3,4],function(val,i){
//     alert("great"+val+"in index"+i)
// });
// forEach([8,9,10],function(val,i){
//     alert("great"+val+"in index"+i)
// });

//A task 3:
// let a=[5,51,6,9]
// a.forEach(function(val,i){
//     alert("great"+val+"in index"+i)
// })
// [5,20,8].forEach(function(val,i){
//     alert("great"+val+"in index"+i)
// })

//A task 4:
// let a=[1,2,3,4,5,6,7,8,9,10]
// a.forEach(function(val,i){
//     alert("great"+val+"in index"+i,)
// })
// [0,1,2,3,4,5,6,7,8,9].forEach(function(val,i){
//     alert("great"+val+"in index"+i)
//     alert(val+i)
// })

//A task 5:
// let x=[5,"barev",true,false,[1,7,8,99]]
// alert(x[4][1])

//A task 6:
// let arr=[[5,7 h,9],[8,6,4],[1,3,2]]
// let arr2=[]
// let s=0;
// for(let i=0;i<arr.length;i++){
// s=0
// for(let j=0;j<arr[i].length;j++){
//     s=s+arr[i][j]
// }
// arr2.push(s)
// }
// alert(arr2)

// let y={}
// y["age"]=110
// y["name"]="Ara"
// y["phone"]=+37498888888
// y["adress"]={}
// y["adress"]["city"]="Armavir"
// y["adress"]["street"]="Erevanyan"
// alert(y["adress"]["city"])
// alert(y["age"])

//A task 1
// let x=function(y)
// {alert (y+1)}
// x(6)
// x(60)

//A task 2
// let aa=function(a,s){
//     alert(a+s)
// }
// aa(6,90,5)

//A task 3
// let aa=function(k,d){
// return(k+d)
// }
// alert(r(10,9))
// let l=r(100,9)
// alert(l)

//A task 4
// let isEven=function(j){
//     return(j%2===0)
// }
// alert(isEven(7))

// let isEven=function(j){
//     return(+(j%2===0))
// }
// alert(isEven)

// //A task 5
// console.log("start")
// setTimeout(function(){
//     console.log("hello")
// },500)
// for(let f=0;f<5000;f++){
//     console.log("wating")
// }
// console.log("end")

//A task 6
// console.log("start")
// setTimeout(function(){
//     console.log("hello")
// },0)
// setTimeout(function(){
//     console.log("h")
// },0)
// console.log("end")

//A task 7
// console.log("start")
// let rw = (function () {
//     console.log("hello")
// }, 500)
// clearTimeout(rw);
// setTimeout(function () {
//     console.log("h")
// }, 200)
// console.log("end")

let arrImg=document.querySelectorAll("img")
console.log(arrImg)
for(let i=0;i<arrImg.length;i++){
    arrImg[i].addEventListener("click",myImg)
}  
let i=document.querySelector("p")
function myImg(){
    document.getElementById("sev").style.top="0%"
    document.getElementById("nkar").src=this.src
}
i.addEventListener("click" , function(){
    document.getElementById("sev").style.top="-100%"

})

