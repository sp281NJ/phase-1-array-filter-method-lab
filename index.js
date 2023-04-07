// Code your solution here

function findMatching(name,cb){
let newdrivers = [];

for (const driver of name){
        if (driver === cb || driver === cb.toLowerCase()){
            newdrivers.push(driver);
            
        }

    }
return newdrivers;
}



function fuzzyMatch(fname,ltr){
let newmatch = [];

//console.log(ltr);
    for (const driver of fname){
       
       //if (driver.indexOf(ltr) >= 0 || driver.find(ltr,3)){
        if (driver.indexOf(ltr) === 0){
            //narray = fname.indexOf(ltr);
            
          newmatch.push(driver);
            
        }
//console.log(newmatch);
    }
    
return newmatch;
}

function matchName(narray,str){
let ndriver = [];


for (const drivers of narray){
//console.log(drivers.name);
   if(str === drivers.name){
   
        ndriver.push(drivers);

    }

//console.log(ndriver);
}
return ndriver;



}


