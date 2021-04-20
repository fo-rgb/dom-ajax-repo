// Write code here to communicate with Github


let myGithub = document.querySelector(".subheading");
let lista = document.querySelector("#repos-list");
let numRepos = document.querySelector("#repos-count");


numRepos.onclick = event => {
  event.preventDefault();
  console.log(document.querySelectorAll("#repos-list li:not(.sub-title)"));
  document.querySelectorAll("#repos-list li:not(.sub-title)").forEach(li => {
    li.remove();
  });
  async function dfetch() {
    const API = "https://api.github.com/users/codeyourfuture/repos";
    resolve = await fetch(API);
    data = await resolve.json();
    numRepos.innerText = data.length;
    data.forEach(rep => {
      let li = document.createElement("li");
      li.classList.add("list-group-item-warning");
      let a = document.createElement("a");
      a.innerText = rep.name;
      a.href = rep.html_url;
    //   a.innerText = rep.full_name
     
      li.append(a);
      lista.append(li);
    });
  }
  dfetch();
};






// var raw = "";

// var requestOptions = {
//   method: 'GET',
//   body: raw,
//   redirect: 'follow'
// };

// fetch("https://api.github.com/users/codeyourfuture/repos", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));






// const btn = document.querySelector("#btn1")

// //**************************************************/

// function addText(event, texto) {
//   event.preventDefault()
//   let inputElement = document.getElementById('text11').value
//   let p = document.createElement('p')
//   p.innerText = texto
//   console.log(inputElement)
  
// }
// btn.addEventListener('click', event => {
//   addText(event, '')
  
// })








// btn.addEventListener('click', () =>{

//   console.log("soy el principito")
// alert("ooppp ca marche")
// })


//**************************************************/
// console.log(document.querySelectorAll('p'))

