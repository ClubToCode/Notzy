let add = document.querySelector(".add-note");
let title = document.querySelector("#note-title");
let note = document.querySelector("#note");
let box = document.querySelector(".note-box");
let edit = document.querySelector(".edit-note");
let delet = document.querySelector(".delet-note");
let close = document.querySelector(".close-note");
let noteContainer = document.querySelector(".notes-container");
let noteSlide = document.querySelector(".note-slide");
function hide(item){
    item.querySelector('.visi-slide').classList.add('note-slide');
    item.querySelector('.note-slide').classList.remove('visi-slide');
    console.log('hello');
}
function addNote() {
    let a = 1;
    const item = document.createElement("div")
    item.classList.add('note-box');
    item.innerHTML=`
    <div class="main-block">
        <h4>Title</h4>
        <p class="title">CLICK HERE TO VIEW OR EDIT NOTE</p>
    </div>
    <div class="note-slide">
        <div class="slide-title">
            <input type="text" id="note-title" placeholder="Write the title here" readonly>
            <div class="title-opt">
                <i class="fa-solid fa-pen-to-square edit-note"></i>
                <i class="fa-solid fa-trash delet-note"></i>
                <i class="fa-solid fa-circle-xmark close-note"></i>
            </div>
        </div>
        <hr />
        <div class="slide-data">
            <textarea name="note" id="note"  placeholder="Desribe the title"  readonly></textarea>
        </div>
    </div>
    `;
    noteContainer.prepend(item);
    item.querySelector('.note-slide').classList.add('visi-slide');
    item.querySelector('.visi-slide').classList.remove('note-slide');
    item.querySelector('#note-title').removeAttribute('readonly');
    item.querySelector('#note').removeAttribute('readonly');
    item.querySelector('#note-title').focus();
    item.querySelector('.edit-note').classList.add("fa-floppy-disk");
    item.querySelector('.main-block').addEventListener('click',()=>{
        item.querySelector('.note-slide').classList.add('visi-slide');
        item.querySelector('.visi-slide').classList.remove('note-slide');
        
    });

    item.querySelector('.close-note').addEventListener('click',()=>{
    hide(item);
    });

    item.querySelector('.delet-note').addEventListener('click',()=>{
        item.remove();
    });

    item.querySelector('.edit-note').addEventListener("click",() =>{
        if(a%2==0){ 
            a++;
            item.querySelector('#note-title').removeAttribute('readonly');
            item.querySelector('#note').removeAttribute('readonly');
            item.querySelector('#note-title').focus();
            item.querySelector('.edit-note').classList.add("fa-floppy-disk");
            console.log("on");
           
        }
        else {
            console.log("off");
            item.querySelector('#note-title').setAttribute('readonly','readonly');
            item.querySelector('#note').setAttribute('readonly','readonly');
            item.querySelector('.edit-note').classList.remove("fa-floppy-disk");
            a++;
            let data = item.querySelector('#note-title').value; 
            item.querySelector('.title').textContent= data;
            
        } 
    })
}

add.addEventListener("click", () => {
    addNote();
})

