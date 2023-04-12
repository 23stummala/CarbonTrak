
const q0 = document.querySelector(".q0");
const q1 = document.querySelector(".q1");
const q2 = document.querySelector(".q2");
const q3 = document.querySelector(".q3");
const q4 = document.querySelector(".q4");
const q5 = document.querySelector(".q5");
const q6 = document.querySelector(".q6");
const q7 = document.querySelector(".q7");
const q8 = document.querySelector(".q8");
const q9 = document.querySelector(".q9");
const q10 = document.querySelector(".q10");
const q11 = document.querySelector(".q11");
const q12 = document.querySelector(".q12");
const landingpage = document.querySelector(".landingpage");

const next0 = document.getElementById("next0");
const next1 = document.getElementById("next1");
const next2 = document.getElementById("next2");
const next3 = document.getElementById("next3");
const next4 = document.getElementById("next4");
const next5 = document.getElementById("next5");
const next6 = document.getElementById("next6");
const next7 = document.getElementById("next7");
const next8 = document.getElementById("next8");
const next9 = document.getElementById("next9");
const next10 = document.getElementById("next10");
const next11 = document.getElementById("next11");
const next12 = document.getElementById("next12");


const back1 = document.getElementById("back1");
const back2 = document.getElementById("back2");
const back3 = document.getElementById("back3");
const back4 = document.getElementById("back4");
const back5 = document.getElementById("back5");
const back6 = document.getElementById("back6");
const back7 = document.getElementById("back7");
const back8 = document.getElementById("back8");
const back9 = document.getElementById("back9");
const back10 = document.getElementById("back10");
const back11 = document.getElementById("back11");
const back12 = document.getElementById("back12");
const back13 = document.getElementById("back13");



let totalCarbonFootprint = 0;
 //variables for questions
let householdMembers = 1; 
let milesPerGal = 5;
let milesPerDay;
let dietType=0;
//question 6
let kiloWatts = 5; //numerical
//question 6 if response = idk, kiloWatts = 0
let lbsTrash = 0;
let recycle;
let hoursHeating; //slider
let monthsAC; //slider
let hoursAC; //slider

let response1 = "- You are doing an amazing job recycling. The Earth thanks you!"
let response2 = "- Recycling is a small effort with a big impact. Try to recycle more to make a difference!"
let response3 = "- Focus on recycling more. It's very important!!"

let gresponse = "- Your carbon footprint is greater than the average!!!"
let lresponse = "- Your carbon footprint is less than the average!!!"

next0.addEventListener("click", function() {
    q0.style.display = "none";
    q1.style.display = "block";
    next0.style.display = "none";
    next1.style.display = "block";
    back1.style.display = "block";
});

back1.addEventListener("click", function() {
    q0.style.display = "block";
    q1.style.display = "none";
    next0.style.display = "block";
    next1.style.display = "none";
    back1.style.display = "none";
});


next1.addEventListener("click", function() {
    q1.style.display = "none";
    q2.style.display = "block";
    next1.style.display = "none";
    next2.style.display = "block";
    back2.style.display = "block";
    back1.style.display = "none";
    householdMembers = parseInt(document.getElementById("Number1").value);
});

back2.addEventListener("click", function() {
    q1.style.display = "block";
    q2.style.display = "none";
    next1.style.display = "block";
    next2.style.display = "none";
    back1.style.display = "block";
    back2.style.display = "none";
    householdMembers = 1;
});

let evYes = document.getElementById("Number2-1");
let evNo = document.getElementById("Number2-2");

evYes.addEventListener("click", function() {
    milesPerGal = 1;
    milesPerDay = 1;
});

evNo.addEventListener("click", function() {
    milesPerGal = 1000;
    milesPerDay = 0;
});


next2.addEventListener("click", function() {
    if(milesPerGal === 1000){
        q2.style.display = "none";
        q3.style.display = "block";
        next2.style.display = "none";
        next3.style.display = "block";
        back3.style.display = "block";
        back2.style.display = "none";
    }
    else{
        q2.style.display = "none";
        q5.style.display = "block";
        next2.style.display = "none";
        next5.style.display = "block";
        back5.style.display = "block";
        back2.style.display = "none";
    }
    
});

back3.addEventListener("click", function() {
    q2.style.display = "block";
    q3.style.display = "none";
    next2.style.display = "block";
    next3.style.display = "none";
    back2.style.display = "block";
    back3.style.display = "none";
});

next3.addEventListener("click", function() {
    q3.style.display = "none";
    q4.style.display = "block";
    next3.style.display = "none";
    next4.style.display = "block";
    back4.style.display = "block";
    back3.style.display = "none";
    milesPerGal = parseInt(document.getElementById("Number3").value);
});

back4.addEventListener("click", function() {
    q3.style.display = "block";
    q4.style.display = "none";
    next3.style.display = "block";
    next4.style.display = "none";
    back3.style.display = "block";
    back4.style.display = "none";
    milesPerGal = 0;
});

next4.addEventListener("click", function() {
    q4.style.display = "none";
    q5.style.display = "block";
    next4.style.display = "none";
    next5.style.display = "block";
    back5.style.display = "block";
    back4.style.display = "none";
    milesPerDay = parseInt(document.getElementById("Number4").value);
});

back5.addEventListener("click", function() {
    q4.style.display = "block";
    q5.style.display = "none";
    next4.style.display = "block";
    next5.style.display = "none";
    back4.style.display = "block";
    back5.style.display = "none";
    milesPerDay = 0;
});

let heavymeat = document.getElementById("Number5-1");
let avgmeat = document.getElementById("Number5-2");
let vegetarian = document.getElementById("Number5-3");
let vegan = document.getElementById("Number5-4");

heavymeat.addEventListener("click", function() {
    dietType = 5.5;
});

avgmeat.addEventListener("click", function() {
    dietType = 3.3;
});

vegetarian.addEventListener("click", function() {
    dietType = 1.8;
});

vegan.addEventListener("click", function() {
    dietType = 1.5;
});



next5.addEventListener("click", function() {
    q5.style.display = "none";
    q6.style.display = "block";
    next5.style.display = "none";
    next6.style.display = "block";
    back6.style.display = "block";
    back5.style.display = "none";
   
});

back6.addEventListener("click", function() {
    q5.style.display = "block";
    q6.style.display = "none";
    next5.style.display = "block";
    next6.style.display = "none";
    back5.style.display = "block";
    back6.style.display = "none";
    dietType = 0;
});

let idk = document.getElementById("Number6-2");
//kiloWatts = document.getElementById("Number6-1");
idk.addEventListener("click", function() {
    kiloWatts = 0;
});

/*kiloWatts.addEventListener("click", function(){
    kiloWatts = document.getElementById("Number6-1");
})*/

next6.addEventListener("click", function() {
    if(kiloWatts===0){
        q6.style.display = "none";
        q7.style.display = "block";
        next6.style.display = "none";
        next7.style.display = "block";
        back7.style.display = "block";
        back6.style.display = "none";
    }
    else{
        q6.style.display = "none";
        q8.style.display = "block";
        next6.style.display = "none";
        next8.style.display = "block";
        back8.style.display = "block";
        back6.style.display = "none";
        kiloWatts = parseInt(document.getElementById("Number6-1").value);
    }
    
});

back7.addEventListener("click", function() {
    q6.style.display = "block";
    q7.style.display = "none";
    next6.style.display = "block";
    next7.style.display = "none";
    back6.style.display = "block";
    back7.style.display = "none";
    kiloWatts = 0
});

let heavyelec = document.getElementById("Number7-1");
let avgelec = document.getElementById("Number7-2");
let minelec = document.getElementById("Number7-3");

heavyelec.addEventListener("click", function() {
    kiloWatts = 50;
});

avgelec.addEventListener("click", function() {
    kiloWatts = 30;
});

minelec.addEventListener("click", function() {
    kiloWatts = 10;
});


next7.addEventListener("click", function() {
    q7.style.display = "none";
    q8.style.display = "block";
    next7.style.display = "none";
    next8.style.display = "block";
    back8.style.display = "block";
    back7.style.display = "none";
});

back8.addEventListener("click", function() {
    q7.style.display = "block";
    q8.style.display = "none";
    next7.style.display = "block";
    next8.style.display = "none";
    back7.style.display = "block";
    back8.style.display = "none";
    kiloWatts = 0;
});

next8.addEventListener("click", function() {
    q8.style.display = "none";
    q9.style.display = "block";
    next8.style.display = "none";
    next9.style.display = "block";
    back9.style.display = "block";
    back8.style.display = "none";
    lbsTrash = parseInt(document.getElementById("Number8").value)/householdMembers;
});

back9.addEventListener("click", function() {
    q8.style.display = "block";
    q9.style.display = "none";
    next8.style.display = "block";
    next9.style.display = "none";
    back8.style.display = "block";
    back9.style.display = "none";
    lbsTrash = 0;
});

let maxrecycle = document.getElementById("Number9-1");
let avgrecycle = document.getElementById("Number9-2");
let minrecycle = document.getElementById("Number9-3");

maxrecycle.addEventListener("click", function() {
    recycle = 3;
});

avgrecycle.addEventListener("click", function() {
    recycle = 2;
});

minrecycle.addEventListener("click", function() {
    recycle = 1;
});

next9.addEventListener("click", function() {
    q9.style.display = "none";
    q10.style.display = "block";
    next9.style.display = "none";
    next10.style.display = "block";
    back10.style.display = "block";
    back9.style.display = "none";
});

back10.addEventListener("click", function() {
    q9.style.display = "block";
    q10.style.display = "none";
    next9.style.display = "block";
    next10.style.display = "none";
    back9.style.display = "block";
    back10.style.display = "none";
    recycle = 0;
});

next10.addEventListener("click", function() {
    q10.style.display = "none";
    q11.style.display = "block";
    next10.style.display = "none";
    next11.style.display = "block";
    back11.style.display = "block";
    back10.style.display = "none";
    hoursHeating = parseInt(document.getElementById("Number10").value);
    
});

back11.addEventListener("click", function() {
    q10.style.display = "block";
    q11.style.display = "none";
    next10.style.display = "block";
    next11.style.display = "none";
    back10.style.display = "block";
    back11.style.display = "none";
    hoursHeating = 0;
});



next11.addEventListener("click", function() {
    q11.style.display = "none";
    q12.style.display = "block";
    next11.style.display = "none";
    next12.style.display = "block";
    back12.style.display = "block";
    back11.style.display = "none";
    monthsAC = parseInt(document.getElementById("Number11").value);
    
});

back12.addEventListener("click", function() {
    q11.style.display = "block";
    q12.style.display = "none";
    next11.style.display = "block";
    next12.style.display = "none";
    back11.style.display = "block";
    back12.style.display = "none";
    monthsAC = 0
});


next12.addEventListener("click", function() {
    q12.style.display = "none";
    landingpage.style.display = "block";
    next12.style.display = "none";
    back13.style.display = "block";
    back12.style.display = "none";
    hoursAC = parseInt(document.getElementById("Number12").value);

    totalCarbonFootprint += ((0.0968)/(milesPerGal*milesPerDay));
    totalCarbonFootprint += (lbsTrash * 0.00385);
    totalCarbonFootprint += ((24.336*monthsAC*hoursAC)/(2000*householdMembers));
    totalCarbonFootprint += dietType;
    totalCarbonFootprint += (0.25*hoursHeating);
    totalCarbonFootprint += (kiloWatts*0.0000409);
    document.getElementById("totalCarbonFootprint").innerHTML = totalCarbonFootprint;
    Math.round(100 * totalCarbonFootprint)/100;
    
    

    if(recycle === 1)
    {
        document.getElementById("recycle").innerHTML = response3;
    }
    else if(recycle === 2)
    {
        document.getElementById("recycle").innerHTML = response2;
    }
    else
    {
        document.getElementById("recycle").innerHTML = response1;
    } 

    if(totalCarbonFootprint >= 4)
    {
        document.getElementById("response").innerHTML = gresponse;
    }
    else
    {
        document.getElementById("response").innerHTML = lresponse;
    }
});

back13.addEventListener("click", function() {
    q0.style.display = "block";
    q1.style.display = "none";
    landingpage.style.display = "none";
    next0.style.display = "block";
    back11.style.display = "none";
    back12.style.display = "none";
    back13.style.display = "none";

    totalCarbonFootprint = 0;
 //variables for questions
    householdMembers = 0; 
    milesPerGal = 5;
    milesPerDay = 0;
    dietType=0;
//question 6
    kiloWatts = 5; //numerical
//question 6 if response = idk, kiloWatts = 0
    lbsTrash = 0;
    recycle;
    hoursHeating = 0; //slider
    monthsAC = 0; //slider
    hoursAC = 0; //slider

});
