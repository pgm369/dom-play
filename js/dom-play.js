//alert("Hi from DOM Play!");


/*

    Create an app that on click actors lines are highlighted

    With a single click, highlight (bold or otherwise) all lines for a specific actor in a play
    Un-highlight (normal or otherwise) all lines from all other actors in the play
   
    The function(s) created to do the work must accommodate any number of actors, and any number of additional lines added to the page
   
    HTML "hooks" may be added to the page for proper operation

*/

//document.querySelector(".hamlet").style.backgroundColor = "pink"

function highlight(el){
    
    if(el.style.backgroundColor == 'white'){//hotpink
        el.style.backgroundColor='hotpink';
    }else{//white
        el.style.backgroundColor='white';
    }

}

function myAlert(){
    alert("I'm clicked!");
}

function highlightActor(actor){
    //alert("Hi, I'm " + actor);
    for(const mySpan of spans){
        if(actor == mySpan.dataset.actor){//current actor
            mySpan.style.backgroundColor='hotpink';
        }else{//other actor
            mySpan.style.backgroundColor='white';
        }
    }
}

const spans = document.querySelectorAll("#play span");
console.log(spans);

for(const mySpan of spans){
    //mySpan.addEventListener("click",myAlert);
    mySpan.addEventListener("click",function(ev){
        highlightActor(mySpan.dataset.actor);
    });
    //alert(mySpan.dataset.actor);
}
