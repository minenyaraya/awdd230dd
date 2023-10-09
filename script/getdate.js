let date = new Date ();
console.log(date);
let year = date.getFullYear();
console.log(year);
document.querySelector(".year").textContent = year
let currentdate = document.lastModified;
console.log(currentdate);
document.querySelector(".highlight").textContent=currentdate