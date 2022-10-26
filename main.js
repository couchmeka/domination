



setImage('image-1', "https://www.citywd.org/vertical/Sites/%7B17E1C147-3A18-4562-88BF-7B40051DC932%7D/uploads/trees.jpg")
setImage('image-2', "https://www.citywd.org/vertical/Sites/%7B17E1C147-3A18-4562-88BF-7B40051DC932%7D/uploads/trees.jpg")
setImage('image-3', "https://www.citywd.org/vertical/Sites/%7B17E1C147-3A18-4562-88BF-7B40051DC932%7D/uploads/trees.jpg")

removeLi();
removeLi();
addStrikeThrough();
twoStrings("48px", "happy");

//strikethrough li function
function addStrikeThrough() {

     let myItem = document.querySelector('li');
     myItem.style.textDecoration = 'line-through';     


}

//id and image url function 
function setImage(id, url){

    let imageId = document.querySelector(`#${id}`);
    imageId.src = url;
    imageId.style.height = " 300px";
}

//remove Li
function removeLi(){

    let li = document.querySelector('li');
    li.remove();
}


// function to change size and font

function twoStrings(size,id){

    let itemId = document.querySelector(`#${id}`);
    itemId.style.fontSize = size;
}



//add image
function append(element){

    let argument = document.querySelector("#arguments");
    argument.appendChild(element);
}


let newImage = document.createElement('img');
newImage.src = "https://bradaronson.com/wp-content/uploads/2013/10/happy.jpg"


append(newImage);




//image size

function imgSize(img){

    img.height = 30; 
}


imgSize(newImage);



//assign new class 

function cNames (element){

    let newItemName = document.querySelector(element);

    newItemName.className = "invisible";

}

cNames("p")


// adding li

function textAdd (str){

    let list = document.querySelector("ul");
     let newElement = document.createElement('li');
     newElement.innerText = str;
     list.appendChild(newElement);

}

textAdd("why are we doing this");


// function twoStrings


function newBee (headerSize,txt){

    let location = document.querySelector('#lorem');
    let newPlace = document.createElement(headerSize);
    newPlace.innerText = txt;
    location.appendChild(newPlace);

}

newBee('h3', "help ME !!!!!!!!!!!!!!!!!!!!");