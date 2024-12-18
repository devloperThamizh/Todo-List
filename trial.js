const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")


function addTask(){
 
   if(inputBox.value == ''){
    alert("Enter Somethings")
   } 

   else{
     let li = document.createElement("li")
     li.innerHTML = inputBox.value
     listContainer.appendChild(li)
     let span= document.createElement("span") 
     span.innerHTML = "x"
     span.className="close"
     li.appendChild(span) 


   }

   inputBox.value = ""
   addLocal()

}

listContainer.addEventListener("click",function(e){

if(e.target.tagName ==="LI"){
  
   e.target.classList.toggle("checked") 
   addLocal()


}

else if(e.target.tagName ==="SPAN" ){

    e.target.parentElement.remove()
    addLocal()

}

})


function addLocal(){

    localStorage.setItem("data",listContainer.innerHTML)

}

function showLocal(){
    listContainer.innerHTML = localStorage.getItem("data")
}

showLocal()





