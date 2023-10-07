const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");
const saveNotes = () => {
  const notes = document.querySelectorAll(".note textarea");
  console.log(notes);
  const data = [];
  notes.forEach((note) => data.push(note.value));
  console.log(data);
};
addBtn.addEventListener("click", function () {
  addnote();
});
const addnote = () => {
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `
  <div class="note">
  <div class="tool">
      <i class=" save fas fa-save"></i>
      <i class=" trash fas fa-trash"></i>
  </div>
  <textarea></textarea>
</div>
  `;
  note.querySelector(".trash").addEventListener("click", function () {
    note.remove();
  });
  note.querySelector(".save").addEventListener("click", function () {
    saveNotes();
  });
  main.appendChild(note);
};
