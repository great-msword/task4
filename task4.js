function toggleNavbar() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}
function myFunction(){
                alert("Message Sent")
            }
const noteForm = document.getElementById('note-form');
const noteInput = document.getElementById('note-input');
const notesList = document.getElementById('notes-list');
document.addEventListener('DOMContentLoaded', loadNotes);
noteForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const noteText = noteInput.value.trim();

    if (noteText !== '') {
        addNoteToDOM(noteText);
        saveNoteToLocalStorage(noteText);
        noteInput.value = ''; 
    }
});
function addNoteToDOM(note) {
    const li = document.createElement('li1');
    li.textContent = note;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function() {
        li.remove();
        deleteNoteFromLocalStorage(note);
    };

    li.appendChild(deleteBtn);
    notesList.appendChild(li);
}
function saveNoteToLocalStorage(note) {
    let notes = getNotesFromLocalStorage();
    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes));
}
function getNotesFromLocalStorage() {
    let notes = localStorage.getItem('notes');
    return notes ? JSON.parse(notes) : [];
}
function deleteNoteFromLocalStorage(noteToDelete) {
    let notes = getNotesFromLocalStorage();
    notes = notes.filter(note => note !== noteToDelete);
    localStorage.setItem('notes', JSON.stringify(notes));
}
function loadNotes() {
    const notes = getNotesFromLocalStorage();
    notes.forEach(note => addNoteToDOM(note));
}
