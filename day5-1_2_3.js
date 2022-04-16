/1.Do the below programs in anonymous function & IIFE

//a.Print odd numbers in an array

//anonymous function

var res=function(arr){

    var temp=[]

    for (let i in arr){

        if (arr[i]%2==1){

            temp.push(arr[i])

        }

    }

    return temp

}

 

console.log(res([11,12,13,14]))

 

//IIFE

(function(arr){

    var temp=[]

      for (let i in arr){

        if (arr[i]%2==1){

            temp.push(arr[i])

        }

    }

    console.log(temp)

    })([11,12,13,14])

 

//b.Convert all the strings to title caps in a string array

//anonymous function

var res=function(str){

    str=str.charAt(0).toUpperCase()+str.slice(1)

    return str

}

 

console.log(res("hello"))

 

//IIFE

(function(str){

    str=str.charAt(0).toUpperCase()+str.slice(1)

    console.log(str)

})("hello")

 

//c.Sum of all numbers in an array

//anonymous function

var res=function(arr){

    var temp=0

    for (let i in arr){

        temp=temp+arr[i]

    }

    return temp

}

 

console.log(res([11,12,13,14]))

 

//IIFE

(function(arr){

    var temp=0

    for (let i in arr){

        temp=temp+arr[i]

    }

    console.log(temp)

})([11,12,13,14])

 

//d.Return all the prime numbers in an array

//anonymous function

let Prime=function(arr){

    arr=arr.filter((num)=>{

    for (let i=2; i<=Math.sqrt(num);i++){

        if( num%i==0)

        return false

        }

        return true

    })

    return arr

}

       

console.log(Prime([11,12,13,14]))

 

//IIFE

(function(arr){

    arr=arr.filter((num)=>{

    for (let i=2; i<=Math.sqrt(num);i++){

        if( num%i==0)

        return false

        }

      return true

    })

    console.log(arr)

})([11,12,13,14])

 

//e.Return all the palindromes in an array

//anonymous function

let Palindrome=function(arr){

    arr=arr.filter((str)=>{

    for (let i=0; i<=str.length/2;i++){

        if( str[i]!= str[str.length-1-i]) return false

        }

        return true

    })

    return arr 

}

       

console.log(Palindrome(["11011","madam","382","racecar","friend"]))

 

//IIFE

 

(function(arr){

    arr=arr.filter((str)=>{

    for (let i=0; i<=str.length/2;i++){

        if( str[i]!= str[str.length-1-i]) return false

        }

        return true

    })

    console.log(arr)

})(["11011","madam","382","racecar","friend"])

 

//f.Return median of two sorted arrays of the same size

//anonymous function

let median=function(arr1,arr2){

    if (arr1.length==arr2.length){

        arr1.sort()

        arr2.sort()

        let m1=arr1[parseInt(arr1.length/2)]

        let m2=arr2[parseInt(arr2.length/2)]

        return [m1, m2]

    }

}

      

console.log(median([12,11,15,14,13],[19,17,20,16,18]))

 

//IIFE

(function(arr1,arr2){

    if (arr1.length==arr2.length){

        arr1.sort()

        arr2.sort()

        let m1=arr1[parseInt(arr1.length/2)]

        let m2=arr2[parseInt(arr2.length/2)]

        console.log(m1,m2)

    }

})([12,11,15,14,13],[19,17,20,16,18])

 

//g.Remove duplicates from an array

//anonymous function

let dup=function(arr){

    let uniqueelements = [];

    arr.forEach((c) => {

        if (!uniqueelements.includes(c)) {

        uniqueelements.push(c);

        }

    })

    return uniqueelements

}

   

console.log(dup([1,3,3,5,4,2,4,5,7,6,2,8]))

 

//IIFE

(function(arr){

    let uniqueelements = [];

    arr.forEach((c) => {

        if (!uniqueelements.includes(c)) {

        uniqueelements.push(c);

        }

    })

    console.log(uniqueelements)

})([1,3,3,5,4,2,4,5,7,6,2,8])

 

//h.Rotate an array by k times

//anonymous function

let rotate=function(arr,k){

    for (let i=0; i<k; i++){

        arr.unshift(arr.pop())

    }

    return arr

}

   

console.log(rotate([1,3,3,5,4,2,4,5,7,6,2,8],5))

 

//IIFE

(function(arr,k){

    for (let i=0; i<k; i++){

        arr.unshift(arr.pop())

    }

    console.log(arr)

})([1,3,3,5,4,2,4,5,7,6,2,8],5)

 

//2.

//a.Write a function called “addFive”.

var num = 10;

function addFive(num) {

    return num+5

}

var result=addFive(num)

 

//b.Write a function called “getOpposite”.

var num = -5;

function getOpposite(num) {

    return -(num)

}

var result=getOpposite(num)

 

//c.Fill in your code that takes an number minutes and converts it to seconds.

var min = 2;

function toSeconds(min) {

    return min*60

}

var secs = toSeconds(min)

 

//d.Create a function that takes a string and returns it as an integer.

var mystr = "5";

function toInteger(mystr) {

    return parseInt(mystr)

}

var myint = toInteger(mystr)

 

//e.Create a function that takes a number as an argument, increments the number by +1 and returns the result.

var myint = 9;

function nextNumber(myint) {

    return myint+1

}

var myNextint = nextNumber(myint)

 

//3.Do the below programs in arrow functions

//a.Print odd numbers in an array

var res=(arr)=>{

    var temp=[]

      for (let i in arr){

          if (arr[i]%2==1){

              temp.push(arr[i])

        }

    }

    return temp

}

 

console.log(res([11,12,13,14]))

 

//b.Convert all the strings to title caps in a string array

var res=(str)=>{

    str=str.charAt(0).toUpperCase()+str.slice(1)

    return str

}

 

console.log(res("hello"))

 

//c.Sum of all numbers in an array

var res=(arr)=>{

    var temp=0

    for (let i in arr){

      temp=temp+arr[i]

    }

    return temp

}

 

console.log(res([11,12,13,14]))

 

//d.Return all the prime numbers in an array

var res=(arr)=>{

    arr=arr.filter((num)=>{

        for (let i=2; i<=Math.sqrt(num);i++){

            if( num%i==0)

            return false

        }

        return true

    })

    return arr

}

 

console.log(res([11,12,13,14]))

 

//e.Return all the palindromes in an array

var res=(arr)=>{

    arr=arr.filter((str)=>{

      for (let i=0; i<=str.length/2;i++){

          if( str[i]!= str[str.length-1-i]) return false

        }

        return true

    })

    return arr 

}

 

console.log(res(["11011","madam","382","racecar","friend"]))

 

