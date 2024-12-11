let x=document.getElementsByClassName("musicItem");
// x.forEach((el)=>{
//     el.addEventListner("click",fun());
// });
for(let i=0; i<x.length; i++){
    x[i].addEventListener("click",fun);// fun is like the reference, fun() is the function call
}
function fun(event){
    const el=event.target;//event.target is the reference to the original element which is called
    console.log(el.id);
    let audio=new Audio('./sounds/'+el.id+".mp3");
    audio.play();
};
let body=document.getElementsByTagName("body")[0];
body.addEventListener("keyup",keyup);
function keyup(event){
    console.log(event.key);
    let letter=event.key;
    let audio="";
    if(letter=='a'){
        audio="crash.mp3";
    }else if(letter=='b'){
        audio="kick.mp3";
    }else if(letter=='c'){
        audio="snare.mp3";
    }else if(letter=='d'){
        audio="tom1.mp3";
    }else if(letter=='e'){
        audio="tom2.mp3";
    }else if(letter=='f'){
        audio="tom3.mp3";
    }else {
        audio="tom4.mp3";
    }
    let music=new Audio('./sounds/'+audio);
    music.play();
}


//Dom will monitor the elements which event listener added and it will call some funtion by passing the event as a parameter
// and the event has all information related to event ex: time of event,target of event and some extra information