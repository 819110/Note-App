const addbtn = document.querySelector("#addbtn")
const main = document.querySelector("#main")
const input=document.querySelector("#search")
const btn=document.querySelector(".btn")
const dark=document.querySelector(".dark")

addbtn.addEventListener("click",
    function () {
        addnote()
    }
)

const saveNote = () => {
    const notes = document.querySelectorAll(".note textarea");
    const data = [];
    notes.forEach(
        (note) => {
        data.push(note.value)

    }
    )
    if (data.length  === 0) {
        localStorage.removeItem("notes")
    }
    else {
        localStorage.setItem("notes", JSON.stringify(data))
    }
}




const addnote = (text = '') => {
    const note = document.createElement("div");
    note.classList.add("note")
    note.innerHTML = `
    <div class="tool">
                <i class=" trash fas fa-trash"></i>
                <i class=" save fas fa-save"></i>
            </div> 
            <textarea>${text}</textarea>`;
    // note.querySelector(".save").addEventListener('click')
    note.querySelector(".trash").addEventListener("click",
        function () {
            note.remove()
            saveNote()
        }

    )
    note.querySelector(".save").addEventListener('click', function () {
        saveNote()
    }
    )
    note.querySelector("textarea").addEventListener(
        "focusout",
        function () {
            saveNote()
        }
    )
    main.appendChild(note);
saveNote()
}



(function () {
    const notes = JSON.parse(localStorage.getItem("notes"));
    if (notes === null) {
        addnote()
    }
    else {
        notes.forEach((notes) => {
            addnote(notes)
        })
    }
}
)()

btn.addEventListener("click",
     function (){
     onSearch()
     }
    )
    
const onSearch=()=>{
    const filter=input.value.toUpperCase();
    console.log(filter)
    const list=document.querySelectorAll(".note");
    list.forEach((el)=>{
    const num = el.textContent.toUpperCase();
    el.style.display=num.includes(filter)?" ":'none';

    });
}

let color="white"
const changeColor=()=>{
    if(color==="white"){
        color="dark"
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
    }
     else{
        color='white'
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
     }
}
dark.addEventListener("click", 
    function(){
    changeColor()
})


