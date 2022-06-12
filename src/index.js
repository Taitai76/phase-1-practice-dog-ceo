console.log('%c HI', 'color: firebrick')
const list =  document.querySelector("dog-image-container");
console.log(list);

fetch("https://dog.ceo/api/breeds/image/random/4")
.then(r => r.json())
.then(data => {
    console.log(data);
    list.innerHTML=`
    <img src=${data} alt="Italian Trulli">
    `
})