document.getElementById("age").onclick = function() {
    let x = document.getElementById("agesubmit").value;
    if(x > 17) 
    {
        alert("You can see a R rated movie!");
    }
    
    else if(x > 13)
    {
        alert("You can see a PG-13 movie!");
    }
    
    else 
    {
        alert("You can see a G rated movie!");
    }
};