
let files=[

"media/001.jpg",
"media/002.jpg",
"media/video01.mp4"

];


let index=0;


let img=document.getElementById("image");
let video=document.getElementById("video");


function show(){

let file=files[index];


video.style.display="none";
img.style.display="none";


if(file.endsWith(".mp4")){

video.src=file;
video.style.display="block";
video.play();

}

else{

img.src=file;
img.style.display="block";

}

}



function next(){

index++;

if(index>=files.length)
index=0;


show();

}



function prev(){

index--;

if(index<0)
index=files.length-1;


show();

}


show();
