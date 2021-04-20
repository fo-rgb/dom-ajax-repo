let Api = "https://api.github.com/users/codeyourfuture/repos "

const btn = document.querySelector("#btn1")

//**************************************************/

function addText(event, texto) {
  event.preventDefault()
  let inputElement = document.getElementById('text11').value
  let p = document.createElement('p')
  p.innerText = texto
  inputElement.innerText = `{{url}}/https://api.github.com/users/codeyourfuture/repos   `
  
  console.log(inputElement)
  
}
let texto = Api

function reposGit() {
  Api = `{{url}}/https://api.github.com/users/codeyourfuture/repos `
}



btn.addEventListener('click', event => {
  addText(event, '')
  reposGit()
})

// btn.addEventListener('click',reposGit)


 btn.addEventListener('click', () =>{

   console.log("soy el principito")
 alert("ooppp ca marche")
 })


//**************************************************/

