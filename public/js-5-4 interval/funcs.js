
 var points = 0;
 var main;
 var statusbar;

 var bugs = [ 
    { name: "ant", points: 1, alive: true }, 
    { name: "fly", points: 3, alive: true },
    { name: "bee", points: -10, alive: true },
    { name: "roach", points: 5, alive: true },
    { name: "spider", points: 2, alive: true },
    { name: "scorpion", points:-15, alive: true}
   ];
 
 
 
 function move(bug) {
    bug.elem.style.left = Math.random() * 800;
    bug.elem.style.top = Math.random() * 450;
 }
 function moveAll() {
    for (let bug of bugs) 
       move(bug);
 }
 function relive() {
   for (let bug of bugs) 
     if (!bug.alive) {
        main.appendChild(bug.elem);
        move(bug);
        bug.alive = true;
     }
 }
 
 
 function createBug (bug) {
    let sec = document.createElement("SECTION");
    sec.innerHTML = bug.name;
    sec.onclick = function() { kill(bug); }
    bug.elem = sec;
    main.appendChild(sec);
 }
 

 window.onload = function() {
   main = document.getElementById("main");
   statusbar = document.getElementById("statusbar");      
   for (let bug of bugs) 
      createBug(bug);
   moveAll();
   setInterval(moveAll,2000);
   setInterval(relive,10000);
 }
 
 function kill(bug) {
    bug.elem.remove();
    points += bug.points;
    bug.alive = false;
    statusbar.innerHTML = "<h2>Points: "+points+"</h2>";
 }
 
 