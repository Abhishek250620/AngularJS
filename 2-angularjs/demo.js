var a = "  ata"

console.log(a);
console.log(a.trim());

var str='abhi'
console.log(str[3]);
console.log(str.length);
console.log(typeof(str));
arr=[1,2,3,4,5]
console.log(arr);

let demo = () => console.log("Hello world");

demo();

arr.forEach(element => {
    console.log(element);
});

let dummy=d =>{
    console.log("dummy123");
}
 let date = new Date();
 console.log(date);
 console.log(date.getDate());
 console.log(date.getDay());
 console.log(date.getMonth());
 console.log(date.getFullYear());

  const set = new Set();
 set.add(123);
 set.add("wee");
 set.add('q');
 set.add(false);
 set.add(undefined);

 console.log(set);
 set.forEach(ele=>{
    console.log(ele);
 })

 for(ele of set){
    console.log(ele);
 }