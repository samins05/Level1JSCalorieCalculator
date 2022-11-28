
appPCount=0;
appFCount=0;
appCCount=0;
entPCount=0;
entFCount=0;
entCCount=0;
desPCount=0;
desFCount=0;
desCCount=0;
appCal=0;
entCal=0;
desCal=0;
totalCalCount=0;

function initialize(){
    app = document.getElementById("appetizer");
    appProtein = document.getElementById("appPro");
    appFats = document.getElementById("appFat");
    appCarbs = document.getElementById("appCar");
    
    ent = document.getElementById("entree");
    entProtein = document.getElementById("entPro");
    entFats = document.getElementById("entFat");
    entCarbs = document.getElementById("entCar");

    des = document.getElementById("dessert");
    desProtein = document.getElementById("desPro");
    desFats = document.getElementById("desFat");
    desCarbs = document.getElementById("desCar");

    totalCal = document.getElementById("total");
}


function addProtein(name){
    if (name=='A')
    {
        appPCount++;
        appCal=appCal+4;
        app.innerHTML = "Appetizer: " +appCal +" calories";
appProtein.innerHTML = "Protein: " +appPCount +"g";
    }
    else if (name=='E'){
        entPCount++;
        entCal=entCal+4;
        ent.innerHTML = "Entree: " +entCal +" calories";
        entProtein.innerHTML= "Protein: " +entPCount +"g";
    }
    else if (name=='D')
    {
        desPCount++;
        desCal=desCal+4;
        des.innerHTML = "Dessert: " +desCal +" calories";
        desProtein.innerHTML = "Protein: " +desPCount +"g";
    }
    totalCalCount=totalCalCount+4;
totalCal.innerHTML = "Total: " +totalCalCount +" calories";
}


function subProtein(name){
    removable=true;
    if (name=="A")
    {
        if (appPCount==0)
        {
            removable=false;
            alert("You cannot have lower than 0 grams of Protein.");
        }
        else{
        appPCount--;
        appCal=appCal-4;
        app.innerHTML = "Appetizer: " +appCal +" calories";
appProtein.innerHTML = "Protein: " +appPCount +"g";
        }
    }
    else if (name=="E")
    {
        if (entPCount==0)
        {
            removable=false;
            alert("You cannot have lower than 0 grams of Protein.");
        }
        else{
        entPCount--;
        entCal=entCal-4;
        ent.innerHTML = "Entree: " +entCal +" calories";
entProtein.innerHTML = "Protein: " +entPCount +"g";
        }
    }
    else if (name=="D")
    {
        if (desPCount==0)
        {
            removable=false;
            alert("You cannot have lower than 0 grams of Protein.");
        }
        else{
        desPCount--;
        desCal=desCal-4;
        des.innerHTML = "Dessert: " +desCal +" calories";
desProtein.innerHTML = "Protein: " +desPCount +"g";
        }
    }
    if (removable){
        totalCalCount=totalCalCount-4;
        totalCal.innerHTML = "Total: " +totalCalCount +" calories";
    }

}

function addFat(name){
    if (name=='A')
    {
        appFCount++;
        appCal=appCal+9;
        app.innerHTML = "Appetizer: " +appCal +" calories";
appFats.innerHTML = "Fats: " +appFCount +"g";
    }
    else if (name=='E'){
        entFCount++;
        entCal=entCal+9;
        ent.innerHTML = "Entree: " +entCal +" calories";
        entFats.innerHTML= "Fats: " +entFCount +"g";
    }
    else if (name=='D')
    {
        desFCount++;
        desCal=desCal+9;
        des.innerHTML = "Dessert: " +desCal +" calories";
        desFats.innerHTML = "Fats: " +desFCount +"g";
    }
    totalCalCount=totalCalCount+9;
totalCal.innerHTML = "Total: " +totalCalCount +" calories";
}

function subFat(name){
    removable=true;
    if (name=="A")
    {
        if (appFCount==0)
        {
            removable=false;
            alert("You cannot have lower than 0 grams of Fats.");
        }
        else{
        appFCount--;
        appCal=appCal-9;
        app.innerHTML = "Appetizer: " +appCal +" calories";
appFats.innerHTML = "Fats: " +appFCount +"g";
        }
    }
    else if (name=="E")
    {
        if (entFCount==0)
        {
            removable=false;
            alert("You cannot have lower than 0 grams of Fats.");
        }
        else{
            entFCount--;
            entCal=entCal-9;
            ent.innerHTML = "Entree: " +entCal +" calories";
    entFats.innerHTML = "Fats: " +entFCount +"g";
        }
    }
    else if (name=="D")
    {
        if (desFCount==0)
        {
            removable=false;
            alert("You cannot have lower than 0 grams of Fats.");
        }
        else{
            desFCount--;
            desCal=desCal-9;
            des.innerHTML = "Dessert: " +desCal +" calories";
    desFats.innerHTML = "Fats: " +desFCount +"g";
        }
    }
    if (removable){
        totalCalCount=totalCalCount-9;
        totalCal.innerHTML = "Total: " +totalCalCount +" calories";
    }

}

function addCarbs(name){
    if (name=='A')
    {
        appCCount++;
        appCal=appCal+4;
        app.innerHTML = "Appetizer: " +appCal +" calories";
appCarbs.innerHTML = "Carbs: " +appCCount +"g";
    }
    else if (name=='E'){
        entCCount++;
        entCal=entCal+4;
        ent.innerHTML = "Entree: " +entCal +" calories";
        entCarbs.innerHTML= "Carbs: " +entCCount +"g";
    }
    else if (name=='D')
    {
        desCCount++;
        desCal=desCal+4;
        des.innerHTML = "Dessert: " +desCal +" calories";
        desCarbs.innerHTML = "Carbs: " +desCCount +"g";
    }
    totalCalCount=totalCalCount+4;
totalCal.innerHTML = "Total: " +totalCalCount +" calories";
} 


function subCarbs(name){
    removable=true;
    if (name=="A")
    {
        if (appCCount==0)
        {
            removable=false;
            alert("You cannot have lower than 0 grams of Fats.");
        }
        else{
        appCCount--;
        appCal=appCal-4;
        app.innerHTML = "Appetizer: " +appCal +" calories";
appCarbs.innerHTML = "Carbs: " +appCCount +"g";
        }
    }
    else if (name=="E")
    {
        if (entCCount==0)
        {
            removable=false;
            alert("You cannot have lower than 0 grams of Fats.");
        }
        else{
            entCCount--;
            entCal=entCal-4;
            ent.innerHTML = "Entree: " +entCal +" calories";
    entCarbs.innerHTML = "Carbs: " +entCCount +"g";
        }
    }
    else if (name=="D")
    {
        if (desCCount==0)
        {
            removable=false;
            alert("You cannot have lower than 0 grams of Fats.");
        }
        else{
            desCCount--;
            desCal=desCal-4;
            des.innerHTML = "Dessert: " +desCal +" calories";
    desCarbs.innerHTML = "Carbs: " +desCCount +"g";
        }
    }
    if (removable){
        totalCalCount=totalCalCount-4;
        totalCal.innerHTML = "Total: " +totalCalCount +" calories";
    }

}

function appReset(){
    appPCount=0;
    appFCount=0;
    appCCount=0;
    totalCalCount= totalCalCount-appCal;
    appCal=0;
    app.innerHTML = "Appetizer: " +appCal +" calories";
    appProtein.innerHTML="Protein: " +appPCount +"g";
    appFats.innerHTML="Fats: " +appFCount +"g";
    appCarbs.innerHTML="Carbs: " +appCCount +"g";
    totalCal.innerHTML = "Total: " +totalCalCount +" calories";
}

function entReset(){
    entPCount=0;
    entFCount=0;
    entCCount=0;
    totalCalCount= totalCalCount-entCal;
    entCal=0;
    ent.innerHTML = "Entree: " +entCal +" calories";
    entProtein.innerHTML="Protein: " +entPCount +"g";
    entFats.innerHTML="Fats: " +entFCount +"g";
    entCarbs.innerHTML="Carbs: " +entCCount +"g";
    totalCal.innerHTML = "Total: " +totalCalCount +" calories";
}

function desReset(){
    desPCount=0;
    desFCount=0;
    desCCount=0;
    totalCalCount= totalCalCount-desCal;
    desCal=0;
    des.innerHTML = "Dessert: " +desCal +" calories";
    desProtein.innerHTML="Protein: " +desPCount +"g";
    desFats.innerHTML="Fats: " +desFCount +"g";
    desCarbs.innerHTML="Carbs: " +desCCount +"g";
    totalCal.innerHTML = "Total: " +totalCalCount +" calories";
}

function totalReset(){
    appPCount=0;
    appFCount=0;
    appCCount=0;
    totalCalCount= totalCalCount-appCal;
    appCal=0;
    app.innerHTML = "Appetizer: " +appCal +" calories";
    appProtein.innerHTML="Protein: " +appPCount +"g";
    appFats.innerHTML="Fats: " +appFCount +"g";
    appCarbs.innerHTML="Carbs: " +appCCount +"g";
    entPCount=0;
    entFCount=0;
    entCCount=0;
    totalCalCount= totalCalCount-entCal;
    entCal=0;
    ent.innerHTML = "Entree: " +entCal +" calories";
    entProtein.innerHTML="Protein: " +entPCount +"g";
    entFats.innerHTML="Fats: " +entFCount +"g";
    entCarbs.innerHTML="Carbs: " +entCCount +"g";
    desPCount=0;
    desFCount=0;
    desCCount=0;
    totalCalCount= totalCalCount-desCal;
    desCal=0;
    des.innerHTML = "Dessert: " +desCal +" calories";
    desProtein.innerHTML="Protein: " +desPCount +"g";
    desFats.innerHTML="Fats: " +desFCount +"g";
    desCarbs.innerHTML="Carbs: " +desCCount +"g";
    totalCal.innerHTML = "Total: " +totalCalCount +" calories";

}