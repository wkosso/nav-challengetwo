import { changePage } from "../model/model.js";

function route() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");

  if(pageID == "icon"){
    myFunction();
  }else{
    changePage(pageID);

    console.log("route", pageID);
  }
 
}

function initSite() {
  $(window).on("hashchange", route);
  route();
}

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

$(document).ready(function () {
  changePage("home");
  initSite();
});
