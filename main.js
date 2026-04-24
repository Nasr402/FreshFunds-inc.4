
// 100.21.toFixed();// تقريب بس بطلع سترينغ
// Math.round(100.12);// تقريب
// Math.trunc(123.2323);// بتكب
// Math.floor(123.2323);// بتكب
// Math.ceil(123.2323);// بترفع
// "  131  ".trim();// بتقصقص الفراغات
// "".indexOf("");
// "".slice("");
// "".repeat;
// "".split
// "".substring();
// "".substr();
// "".includes(""); //true
// "".startsWith("");
// [].unshift();// array add first
// [].shift; // array delete first
// [].push; // array add last
// [].pop; // array delete last
// "".splice(Start, delete count, "new items" )
// "".concat(oldArray, anotherOldArray, "new quetu")
// "".join()
// let IgnoreNumbers = "elz123ero";
// let st = "";
// alert()
// confirm()
// prompt()
// setTimeout(method, timeout, argument);
// clearTimeout(timer name)
// setInterval(method, timeout, argument);
// clearInterval(timer name)
// location.replace("new url") //clear history
// location.assign("new url") // donr clear history



let btn = document.querySelector(".btn");
/** @type {HTMLElement} */
let side = document.querySelector(".sidebar");
btn.addEventListener("click", function(){document.body.classList.toggle("collapse")})


let up = document.querySelector(".up") ;
up.addEventListener("click", function(){window.scrollTo({top : 0 , left : 0, behavior : "smooth"})});
window.onscroll = function(){
if (this.scrollY <= 400) {
    up.style.display = "none";
} else {
    up.style.display = "block";
}
}

let theme = document.querySelector("#checkbox");
theme.addEventListener('change', (event) => {
    event.target.checked ? window.localStorage.setItem("color", "light") : window.localStorage.setItem("color", "night");
})
if(window.localStorage.getItem("color") == "light"){
    document.querySelector("#checkbox").checked = true ;
} else{
    document.querySelector("#checkbox").checked = false;
}
