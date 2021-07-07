var img = document.createElement("img"); 

img.src = "https://www.catsbest.de/wp-content/uploads//katzenbaby-von-der-mutter-trennen-4-1024x684.jpg"; 
img.style.filter = 'grayscale(0%) saturate(88%) sepia(0%) invert(0%) contrast(83%) brightness(90%) blur(0px) hue-rotate(0deg)'

var src = document.getElementById("img_div"); 
 
src.appendChild(img);



function setParams(name) {
    var gs = document.getElementById("grayscale").value;
    var st = document.getElementById("saturate").value;
    var sp = document.getElementById("sepia").value;
    var inv = document.getElementById("invert").value;
    var ct = document.getElementById("contrast").value;
    var bt = document.getElementById("brightness").value;
    var bl = document.getElementById("blur").value;
    var hr = document.getElementById("hue-rotate").value;
    return img.style.filter=
        `grayscale(${gs}%)
        saturate(${st}%)
        sepia(${sp}%)
        invert(${inv}%) 
        contrast(${ct}%)
        brightness(${bt}%)
        blur(${bl}px)
        hue-rotate(${hr}deg)`;
}
const pars= document.querySelectorAll('p');

for (const par of pars) {
  par.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log(par);
    console.log(par.nextElementSibling);
    par.nextElementSibling.classList.toggle('visible');
  })
}