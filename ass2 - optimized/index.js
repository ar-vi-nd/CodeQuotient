let input = document.getElementById("input")
let tasks = document.getElementById("tasks")

// input.addEventListener("keypress",function(event){
//     if(event.key === "Enter"){
//         let task = document.createElement("div")
//         task.setAttribute("class","row")

//         let text = document.createElement("div")
//         text.setAttribute("class","col-10")
//         let checkbox = document.createElement("div")
//         checkbox.setAttribute("class","col-1")

//         let button = document.createElement("div")
//         button.setAttribute("class","col-1")


//         text.textContent = input.value
//         input.value = ""

//         let check = document.createElement("INPUT")
//         check.setAttribute("type","checkbox")

//         check.setAttribute("style", "color:black;")

//         let del = document.createElement("label")
//         del.innerHTML = "&#10006"
//         del.setAttribute("onclick","delfn(this.parentNode.parentNode)")


//         checkbox.appendChild(check)
//         button.appendChild(del)

//         task.appendChild(text)
//         task.appendChild(checkbox)
//         task.appendChild(button)

//         tasks.appendChild(task)

//     }
// }

// )
// function delfn(node){
// node.remove();

// }

input.addEventListener("keypress",keyps)

function keyps(event){
    console.log(event)
        if(event.key === "Enter"){

            if(input.value==="" || input.value==="\n"){
                alert("you must write something")
            }

            else{
        let task = document.createElement("div")
        task.setAttribute("class","row")

        let text = document.createElement("div")
        text.setAttribute("class","col-9 text-break")

        let checkbox = document.createElement("div")
        checkbox.setAttribute("class","col-1")

        let button = document.createElement("div")
        button.setAttribute("class","col-1")

        let edit = document.createElement("div")
        edit.setAttribute('class',"col-1")



        text.textContent = input.value
        input.value = "";

        let check = document.createElement("INPUT")
        check.setAttribute("type","checkbox")
        check.setAttribute("onclick","checkfn(this.parentNode.parentNode)")


        check.setAttribute("style", "color:orange;")

        let del = document.createElement("label")
        del.innerHTML = "&#10006"
        del.setAttribute("onclick","delfn(this.parentNode.parentNode)")

        let ed = document.createElement("label")
        ed.innerHTML = "&#128393"
        ed.setAttribute("onclick", "editfn(this.parentNode.parentNode)")


        checkbox.appendChild(check)
        button.appendChild(del)
        edit.appendChild(ed)

        task.appendChild(text)
        task.appendChild(checkbox)
        task.appendChild(edit)
        task.appendChild(button)

        tasks.appendChild(task)
            }

    }
    input.clean
}
function delfn(node){
node.remove();
}

function checkfn(node){
    if (node.style.textDecoration != "line-through") {
        node.setAttribute("style", "text-decoration:line-through");
    } else { node.setAttribute("style", "text-decoration:none") }
}

function editfn(node){


}