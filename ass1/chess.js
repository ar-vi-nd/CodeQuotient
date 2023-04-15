
function print(data){
let newtag = document.createElement("label");
newtag.innerText = data;
document.body.append(newtag);


}



function newline(){
    let newline = document.createElement("br");
    
    document.body.append(newline);
}


let board_size = prompt("enter chess board size");


for(let i = 0 ; i< board_size;i++){
    for(let j= 0; j< board_size;j++){
        if((i+j)%2==0){
            print("*");

        }
        else
        print("#")
    }
    newline();
}