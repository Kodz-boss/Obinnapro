var dark = document.querySelector(".inner");
var darken = document.querySelector(".outer");
var head = document.querySelector("header")
var navv = document.querySelector("nav")
var menuh = document.querySelector(".fa-bars");
var menu = document.querySelector(".menu");
var link = document.querySelectorAll(".link");
var menuho = document.querySelector(".menuholder");
var hm = document.querySelector(".hm");
var hmm = document.querySelector(".hmm");
var sur = document.querySelector(".sur");
var job = document.querySelector(".job");
var resumed = document.querySelector(".resumed")
var surr = document.querySelector(".surr");
var jobb = document.querySelector(".jobb");
var resumedd = document.querySelector(".resumedd")
var icon = document.querySelector(".icon");
var icons = document.querySelector(".icons");
var namejob = document.querySelector(".namejob")
var firstpart = document.querySelectorAll(".firstpart");
var jss = document.querySelectorAll(".js");
var jsss = document.querySelectorAll(".jss");
var jav = document.querySelectorAll(".jav");
var exe = document.querySelectorAll(".exe");
var ski = document.querySelectorAll(".ski");
var and = document.querySelectorAll(".and");
var vidp = document.querySelectorAll(".vidp");
var foot = document.querySelector("footer");
var lastpart = document.querySelector(".lastpart");
var iconnn = document.querySelectorAll("#iconnn")
var btn = document.querySelector(".btn-btt");

dark.addEventListener("click", () =>{
    dark.classList.toggle("active");
    if(dark.classList.contains("active")){
        dark.style.backgroundColor = "rgb(65, 1, 65)"
        dark.innerHTML = `<i class="fa-solid fa-sun"></i>`
        darken.style.backgroundColor ="pink"
        head.style.backgroundColor = "#330066"
        head.style.color = "white"
        navv.style.backgroundColor = "#451688"
        navv.style.color = "white"
        dark.style.color = "white"
        menu.style.backgroundColor = "#451688"
        link.forEach(linkItem => {
            linkItem.style.color = "white";
        });
        hm.style.color = "white"
        hmm.style.color = "white"
        sur.style.color ="white"
        job.style.color ="white"
        resumed.style.backgroundColor ="white"
        surr.style.color ="white"
        jobb.style.color ="white"
        resumedd.style.backgroundColor ="white"
        resumed.style.color = "#8A64C2"
        resumedd.style.color = "#8A64C2"
        menuh.style.color = "white"
        icon.style.color = "white"
        icons.style.color = "white"
        namejob.style.borderLeft = "2px solid white"
        firstpart.forEach(firstpartItem => {
            firstpartItem.style.backgroundColor = "#330066";
        });
        jss.forEach(jssItem => {
            jssItem.style.backgroundColor = "#8a64c281";
        });
        jav.forEach(javItem => {
            javItem.style.color = "white";
        });
        exe.forEach(exeItem => {
            exeItem.style.color = "white";
        });
        ski.forEach(skiItem => {
            skiItem.style.color = "white";
        });
        and.forEach(andItem => {
            andItem.style.color = "white";
        });
        vidp.forEach(vidpItem => {
            vidpItem.style.color = "white";
        });
        jsss.forEach(jsssItem => {
            jsssItem.style.backgroundColor = "#8a64c281";
        });
        jsss.forEach(jsssItem => {
            jsssItem.style.color = "white";
        });
        foot.style.backgroundColor = "#451688";
        lastpart.style.backgroundColor = "#330066";
        lastpart.style.color = "white"
        iconnn.forEach(iconnnItem => {
            iconnnItem.style.backgroundColor = "white";
        })
        iconnn.forEach(iconnnItem => {
            iconnnItem.style.color = "#8A64C2";
        })
    }
    else{
        dark.style.backgroundColor = "pink"
        darken.style.backgroundColor = "rgb(65, 1, 65)"
        head.style.backgroundColor = "#F7F7F7"
        head.style.color = "#8A64C2"
        navv.style.backgroundColor = "#EAEAEA"
        navv.style.color = "#8A64C2"
        dark.innerHTML = `<i class="fa-solid fa-moon"></i>`
        dark.style.color = "#8A64C2"
        menu.style.backgroundColor = "#EAEAEA"
        link.forEach(linkItem => {
            linkItem.style.color = "#8A64C2";
        });
        hm.style.color = "#8A64C2"
        hmm.style.color = "#8A64C2"
        sur.style.color ="#8A64C2"
        job.style.color ="#8A64C2"
        resumed.style.backgroundColor ="#8A64C2"
        resumed.style.color = "white"
        surr.style.color ="#8A64C2"
        jobb.style.color ="#8A64C2"
        resumedd.style.backgroundColor ="#8A64C2"
        resumedd.style.color = "white"
        menuh.style.color = "#8A64C2"
        icon.style.color = "#8A64C2"
        icons.style.color = "#8A64C2"
        namejob.style.borderLeft = "2px solid #8A64C2"
        firstpart.forEach(firstpartItem => {
            firstpartItem.style.backgroundColor = "#F7F7F7";
        });
        jss.forEach(jssItem => {
            jssItem.style.backgroundColor = "#f7f7f7";
        });
        jav.forEach(javItem => {
            javItem.style.color = "#8A64C2";
        });
        exe.forEach(exeItem => {
            exeItem.style.color = "#8A64C2";
        });
        ski.forEach(skiItem => {
            skiItem.style.color = "#8A64C2";
        });
        and.forEach(andItem => {
            andItem.style.color = "#8A64C2";
        });
        vidp.forEach(vidpItem => {
            vidpItem.style.color = "#8A64C2";
        });
        jsss.forEach(jsssItem => {
            jsssItem.style.backgroundColor = "#f7f7f7";
        });
        jsss.forEach(jsssItem => {
            jsssItem.style.color = "rgb(19, 3, 43)";
        });
        foot.style.backgroundColor = "#EAEAEA";
        lastpart.style.backgroundColor = "white";
        lastpart.style.color = "#8A64C2"
        iconnn.forEach(iconnnItem => {
            iconnnItem.style.color = "white";
        })
        iconnn.forEach(iconnnItem => {
            iconnnItem.style.backgroundColor = "#8A64C2";
        })
    }
})

menuho.addEventListener("click", () => {
    menu.classList.toggle("activemenu");
    if (menu.classList.contains("activemenu")) {
        // menu.style.display = "block";
        menuho.innerHTML = `<i class="fa-solid fa-xmark"></i>`
    } else {
        // menu.style.display = "none";
        menuho.innerHTML = `<i class="fa-solid fa-bars"></i>`
    }
});

window.addEventListener('load', function () {
    var loaderOverlay = document.getElementById('loader-overlay');
    loaderOverlay.style.display = 'none';
  });

//   var typed = new Typed(".auto-type", {
//     strings: ["FrontEnd Developer.", "Backend Developer."],
//     typeSpeed: 150,
//     backSpeed: 150,
//     loop: true,
//   })

//   var typed = new Typed(".auto-place", {
//     strings: ["FrontEnd Developer.", "Backend Developer."],
//     typeSpeed: 150,
//     backSpeed: 150,
//     loop: true,
//   })

  var typed = new Typed(".auto-type1", {
    strings: ["OBINNA AGBOEZE", "AGBOEZE OBINNA"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
  })

  var typed = new Typed(".auto-type2", {
    strings: ["OBINNA AGBOEZE", "AGBOEZE OBINNA"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
  })

  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    loop: true,
 });

