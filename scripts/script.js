/* Button Selectors */
var projBtn = document.querySelector("#proj");
var homeBtn = document.querySelector("#home");
var aboutBtn = document.querySelector("#about");
var skillsBtn = document.querySelector("#skills");
var bujoProj = document.querySelector(".project");
var closeBtn = document.querySelector(".close");

/* Button Events */
homeBtn.addEventListener('click', function() {
    let item = document.querySelector(".padding");
    item.scrollIntoView({behavior: "smooth"});
});

aboutBtn.addEventListener('click', function() {
    let item = document.querySelector("#abt");
    item.scrollIntoView({behavior: "smooth"});
})

skillsBtn.addEventListener('click', function() {
    let item = document.querySelector("#skl");
    item.scrollIntoView({behavior: "smooth"});
});

projBtn.addEventListener('click', function() {
    let item = document.querySelector("#ptag");
    item.scrollIntoView({behavior: "smooth"});
});

bujoProj.addEventListener('click', function() {  
    document.body.className = "singleProject";
    history.pushState({page: "singleProject"}, "", "#BulletJournal");
});

closeBtn.addEventListener('click', function() {
    history.back(); // Go back so can return to project section
});

/* Routing for back and forward */
window.onpopstate = function(event) {
    if(event.state) {
        document.body.className = event.state.page;
    }
    else {
        document.body.className = "def";
    }
}

/* Refreshing stays on same page */
if (window.location.href.indexOf("BulletJournal") > -1) {
    document.body.className = "singleProject";
} else {
    document.body.className = "def";
}