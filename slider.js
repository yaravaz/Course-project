const requestURL = "to_slider.xml"; 

function Open(){
const xhr = new XMLHttpRequest(); 
 
xhr.open('GET',requestURL , false); 
xhr.send(); 
 
let xmlData = xhr; 
xmlData = (new DOMParser()).parseFromString(xhr.responseText, "text/xml"); 

let hashA = window.location.hash.substring(1);
let stock = xmlData.getElementById(hashA); 

document.getElementById('textimg').textContent=stock.getElementsByTagName('toimg')[0].textContent;
document.getElementById('text1').textContent=stock.getElementsByTagName('description')[0].textContent;
document.getElementById('text2').textContent=stock.getElementsByTagName('price')[0].textContent;
document.getElementById('text3').textContent=stock.getElementsByTagName('code')[0].textContent;

let pictures = document.querySelectorAll('[class^="img"]');
let newImage = stock.getElementsByTagName('pic')[0].textContent;
pictures[0].src = newImage;
console.log(xmlData);
}
window.addEventListener('hashchange', Open);

Open();