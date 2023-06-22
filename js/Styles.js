var Final_Project = document.getElementsByClassName("Welcome");
setInterval(function() {
    Final_Project[0].style.color = "red";
    Final_Project[1].style.color = "blue";
    
    setTimeout(function() {
        Final_Project[0].style.color = "black";
        Final_Project[1].style.color = "black";
        
    }, 500);
}, 1000);
