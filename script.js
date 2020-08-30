let noteContainer = document.querySelector('.noteContainer');
let notesList = document.querySelector('.notesList');
let myNotes = document.querySelector(".myNotes");
let noteTitle = document.querySelector(".noteTitle");
let noteWriting = document.querySelector(".noteWriting");
let textArea = document.querySelector('#text');

let saveNote = document.querySelector(".saveNote");
let newNoteBtn = document.querySelector(".newNoteBtn");
let deleteNoteBtn = document.querySelector(".deleteNoteBtn");

// let input = document.querySelectorAll('input');

// -----------------color change--------------

function redColor(){
  myNotes.style.backgroundColor = '#FF684D';
  noteTitle.style.backgroundColor = '#FF684D';
  textArea.style.backgroundColor = '#FF684D';
  noteTitle.style.color = 'black';
  textArea.style.color = 'black';
}


function blueColor(){
  myNotes.style.backgroundColor = '#38A1C5';
  noteTitle.style.backgroundColor = '#38A1C5';
  textArea.style.backgroundColor = '#38A1C5';
  noteTitle.style.color = 'black';
  textArea.style.color = 'black';
}

function greenColor(){
  myNotes.style.backgroundColor = '#52f769';
  noteTitle.style.backgroundColor = '#52f769';
  textArea.style.backgroundColor = '#52f769';
  noteTitle.style.color = 'black';
  textArea.style.color = 'black';
}

function pinkColor(){
  myNotes.style.backgroundColor = '#ff98ea';
  noteTitle.style.backgroundColor = '#ff98ea';
  textArea.style.backgroundColor = '#ff98ea';
  noteTitle.style.color = 'black';
  textArea.style.color = 'black';
}

function purpleColor(){
  myNotes.style.backgroundColor = '#c45daf';
  noteTitle.style.backgroundColor = '#c45daf';
  textArea.style.backgroundColor = '#c45daf';
  noteTitle.style.color = 'black';
  textArea.style.color = 'black';
}

function orangeColor(){
  myNotes.style.backgroundColor = '#ff814a';
  noteTitle.style.backgroundColor = '#ff814a';
  textArea.style.backgroundColor = '#ff814a';
  noteTitle.style.color = 'black';
  textArea.style.color = 'black';
}

function blackColor(){
  myNotes.style.backgroundColor = 'rgb(0, 0, 0)';
  noteTitle.style.backgroundColor = 'rgb(0, 0, 0)';
  textArea.style.backgroundColor = 'rgb(0, 0, 0)';
  noteTitle.style.color = 'white';
  textArea.style.color = 'white';
}

function newNoteGenerate() {
  myNotes.style.display = 'none';
  //  myNotes.remove();
   myNotes = document.createElement('div');
   myNotes.classList.add('myNotes');
   let inputTag = document.createElement('input'); 
   inputTag.classList.add('noteTitle');
   inputTag.type = 'text';
   inputTag.placeholder = 'Title';
   noteWriting = document.createElement('div');
   noteWriting.classList.add('noteWriting');
   textArea = document.createElement('textarea');
   textArea.setAttribute("id", "text"); 
   noteContainer.appendChild(myNotes);
   myNotes.appendChild(inputTag);
   myNotes.appendChild(noteWriting);
   noteWriting.appendChild(textArea);
   
}

function saveNoteFn() {
  let id = 0;
  let noteListN = document.createElement('div');
  noteListN.classList.add('noteListN');
  notesList.appendChild(noteListN);
  noteListN.appendChild(noteTitle);
  id++;

}