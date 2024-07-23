/*var a = 2;  
var b = 1 ;
num = ++a - b-- + a++ - ++b
      
console.log(num)*/

/*var a  = prompt("Enter the language : ")
var b =  prompt("Enter the second language : ")
if(a==="HTML"){
    if(b == "JAVASCRIPT")
   alert("You are hired")
else{
    alert("You are not hired")
}
}
else if(a ==="CSS") {
        
   alert("You are hired but on half salary")
}
else{
    alert("Not hired")
}

var a = prompt("enter number");
if(a >= 0 ){
    alert("number is positive")
}else{
    alert("number is negative")
}   
*/
//var student = ["Ahsan","Hasan","Abdullah","Muhammad","Jawad","Muneeb","Sharjeel"]
//console.log(student[1]," ",student[0])
//alert(student[1]," ",student[0]) 
//var name = "ahsan";
//alert(name[0])
 //alert(student.length)
 //var students = [["Ahsan",["Ahmed","Ali"]],["Abdullah","Jawad"]]
 //alert(students[0][1][1]
 
//  var names = ["Ahsan","Hasan","Jawad","Abdullah","Muhammad","Ali"]
 //console.log(names)
 //names.pop();
 //names.push("Brother")
 //names.shift();
//names.unshift("Aina");

//names.splice(1,2)
//var fruits = ["apple","banana","grapes","orange"]
//alert(fruits.slice(3,4))

//var arr = [1,9,8,7,6,5]
//arr.sort()
//console.log(arr)
// var arr = ["Ahsan","Mehmood"]
// var arr = ["Ahsan","Hassan",["Abdullah","Muahmmad","ALi"]]
// for(var i = 0 ; i < arr.length ; i++){
// if(typeof arr[i] == "object" ){

//     for(var j =  0 ; j < arr[2].length ; j++){
//         console.log(arr[i][j]) 

//     }
        
// }


// // } 
// var a = "ahsanmehmood"
// console.log(a.toUpperCase())

// var str = "ahsan mehmood"
// a = str[0].toUpperCase();
// b = str[6].toUpperCase();
// console.log(a+str.slice(1,5)+b+str.slice(7))

// var str = prompt("Enter your name");
// // var str = "ahsan  mehmood"
// for(var i = 0; i < str.length; i++)
// {console.log(str.slice(i,i+1))
//     if(str.slice(i,i+2)==="  ")
//     {
//     alert("No double spaces!")
  
// }
//}
//---------- PROGRAM FOR CHANGING LAST NAME FIRST NAME MIDDLE NAME---------------
// var a = prompt("Enter Your Name")
// console.log(a)
// var r = prompt("Enter word you want to replace")
// var g = a.indexOf(r)
// if(g!== -1){
//   var  fisrtname = a.slice(0,g)
//   var e = r.length;
//   var  lastname = a.slice(g + e)
//   var  v = prompt("Enter word you want to enter")
//   var d = fisrtname +" " + v +" " + lastname  
//   console.log(d) 
// } else {
//          alert("Word to replace not found in the input string.");
//        }
//--------------------------------------END---------------------------------------------------------    

//----------------------PROGRAM TO CAPATILIZE FIRST LETTER OF EVERY WORD----------------------------

// var str = prompt("Enter Your Word")
// var a = str.split(" ")
// var arr = []
// for(var i = 0; i < a.length; i++){
//     var result = a[i][0].toUpperCase() + a[i].slice(1)
//     arr.push(result)

// }
// console.log(arr.join(" "))

//---------------------------------------------END---------------------------------------------------
//-------------------------------------SIMPLE HEADS TAILS TOSS PROGRAM---------------------------------
// alert("Welcome to HEADS TAILS Toss")
//  var player_1  = prompt("Enter Your Name : ")
//  var player_2 = prompt("Enter Your Name : ")
//  alert("Player 1 name is : " + player_1)
//  alert("Player 2 name is : " + player_2)
//  var toss = prompt("What do you want to take HEADS or TAILS")
//  alert("player 1 chooses " + toss)
//  alert("for starting toss press ok")
//  var a = Math.random()* 9
// var b = Math.round(a) 
// alert(b)
// if(b %2 == 0 && toss == "heads"){
//     alert("player 1 " + player_1 + " won the toss")
//        swal("player 1", "You won the toss !", "success");
// }else{
//     alert("player 2 " + player_2 + " won the toss")
//     swal("player 2", "You won the toss !", "success");
//  }
//---------------------------------------------END---------------------------------------------------

// var today = new Date(); 
// console.log(today)
// console.log(today.getDay())
// arr = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
// console.log(arr[today.getDay()])

// var today = new Date()
// var a = today.toString()
// a.indexOf("")    

//------------------------SIMPLE AGE CALCULATOR------------------------------------------------------

// var birthDateString = prompt("Enter Your Birth Date");
// var birthDate = new Date(birthDateString);
// var currentDate = new Date();
// var age = currentDate.getFullYear() - birthDate.getFullYear();
// alert(" Your are " + age + " old"); 

//----------------------------------------END------------------------------------------------------


















