var button = document.getElementsByClassName("btn-ping")
var pupup = document.getElementsByClassName("pup-up")
let classes = "popup"

function handleChange(){
    button.addEventListener("click", ()=>{
        classes = "view"
     })
}
