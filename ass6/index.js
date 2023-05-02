let lang = document.getElementById("lsel")

let compile = document.getElementById("compileb")

let txted = document.getElementById("textar")

console.log(txted)

let consol = document.getElementById("otextar")

compile.addEventListener("click",compilef)

function compilef(){

    let code = txted.value
    let langId = lang.value

    console.log(code)
    // console.log(langid)

    let obj={code,langId}
    console.log(obj)

    outputf(obj);

}

function outputf(obj){

    let xmlobj = new XMLHttpRequest();
    // let proxy = "https://thingproxy.freeboard.io/fetch/"
    // let proxy = "https://api.allorigins.win/raw?url="
    // let proxy = "https://cors-anywhere.herokuapp.com/"
    let api ="https://codequotient.com/api/executeCode"
    // let api = "https://www.jdoodle.com/compiler-api/"
    // let url =proxy+api
    let url =api
    xmlobj.open("POST",api)
    // console.log(url)
    xmlobj.setRequestHeader("Content-Type","application/json");
    // console.log(obj)
    // console.log(JSON.stringify(obj))

    let dataobj = JSON.stringify(obj)
    console.log(dataobj)
    console.log(obj)
    xmlobj.send(JSON.stringify(obj));

  
    xmlobj.addEventListener("load",function(){
      let restext = JSON.parse(xmlobj.responseText)
      console.log(restext.codeId)
      let codeid = restext.codeId
      let newxmlobj = new XMLHttpRequest();
      newxmlobj.open("GET",`https://codequotient.com/api/codeResult/${codeid}`)

      setTimeout(newf,2000)

      function newf(){
        newxmlobj.send()
      newxmlobj.addEventListener("load",function(){


          console.log(newxmlobj.responseText)
          let out =JSON.parse(newxmlobj.responseText)
          console.log(JSON.parse(out.data))

          printout(JSON.parse(out.data));

        
      })

          
      

     
    }
  })
}

function printout(output){
  if(output.errors==""){
    let otextar = document.getElementById("otextar")
    otextar.innerHTML = output.output
  }
  else{
    let otextar = document.getElementById("otextar")
    otextar.innerHTML = output.errors



  }

}
