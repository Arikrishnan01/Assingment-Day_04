1.Comparing two JSON objects:

// Create two objects

let obj1={name:"Person 1",age:5};
let obj2={age:5,name:"Person 1"};
let person_deta=(obj1)=>{       //create function_01
    console.log(obj1);
}
person_deta(obj1);
let person_deta_02=(obj2)=>{    //create function_02
    console.log(obj2);
}
person_deta_02(obj2);
if(obj1[person_deta] == obj2[person_deta_02]) //check the condition of comparing two objects
{
    console.log("true");
}
else{
    console.log("false");
}

//Output :

{ name: 'Person 1', age: 5 }
{ age: 5, name: 'Person 1' }
true

2. Display the all the country flags :

//Using  XMLHTTPREQUEST method:

let xhr = new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v2/all");
let obj1;
xhr.onload=function(){
    if(xhr.status>=200 && xhr.status<300)
    {
         obj1=JSON.parse(this.response);
        country_flags(obj1);
    }

}
xhr.send();
function country_flags(obj1){   //create function
    for(const flog of obj1)     // using for of loop
    {
        console.log(`${flog.flags}`)
    }
}

//Output :

// I got the all country flags on browser given some example flags:

{svg: 'https://flagcdn.com/ax.svg', png: 'https://flagcdn.com/w320/ax.png'}

png:"https://flagcdn.com/w320/ax.png"
svg:"https://flagcdn.com/ax.svg"


3. Print the all Name, Region, Sub-Region and population in country:

//Using  XMLHTTPREQUEST method:

let xhr = new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v2/all");
let obj1;
xhr.onload=function(){
    if(xhr.status>=200 && xhr.status<300)
    {
         obj1=JSON.parse(this.response);
         country_flags(obj1);
    }

}
xhr.send();
function country_flags(obj1){       //create function
    for(const flog of obj1)         // using for of loop
    {
        console.log(`
        Names: ${flog.name}
        Region: ${flog.region}
        Sub-Region: ${flog.subregion}
        Population: ${flog.population}
        `);
        
    }
}

//Output :

// I got the all countries name, region, sub-region and population on the browser:

Names: Yemen
Region: Asia
Sub-Region: Western Asia
Population: 29825968
 
Names: Zambia
Region: Africa
Sub-Region: Eastern Africa
Population: 18383956

