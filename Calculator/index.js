let x=document.getElementsByClassName("number");
for(let i=0; i<x.length; i++){
    x[i].addEventListener("click",fun);
}
function fun(event){
    let el=event.target;
    let expression=document.querySelector("#expressionShows");
    let expressionString=expression.value;//hey i did not do enter i did ; it is cmg like this u got a? what i told
    expressionString+=el.innerHTML;
    expression.value=expressionString;
};
let body=document.querySelector("body");
body.addEventListener("keyup",(event)=>{
    let key=event.key;
    let bool=false;
    let expression=document.querySelector("#expressionShows");
    if(key>='0' && key<='9' ){
        bool=true;
    }else if(key=='+' || key=='-' || key=='*' || key=='/' || key=='(' || key==')'){
        bool=true;
    }else if(key=="Backspace"){
        backSpace();
    }
    if(bool==true){
        let str=expression.value;
        str+=key;
        expression.value=str;
    }

});
let expression=document.querySelector("#expressionShows");
function backSpace(){
    let str=expression.value.split('');
    str.pop();
    expression.value=str.join('');
}
function clearFun(){
    expression.value="";
}
function calculate(){
    let expressionString=expression.value;
    console.log(expressionString);
}