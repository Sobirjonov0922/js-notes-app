let addBtn = document.querySelector('.btn'),
    notesEl = document.querySelector('.notes')

function createNote(title, text) {
  let noteEl = document.createElement('div')

  noteEl.classList.add('note__card')
  noteEl.innerHTML = `
    <div class="note__header">
      <h2 id="note__title" class="note__title">${title}</h2>
      <input id="note__input" class="note__input hidden" value="${title}">
      <div class="note__actions">
        <button class="note__edit"><i class="fa-solid fa-pen-to-square"></i></button>
        <button class="note__delete"><i class="fa-solid fa-trash"></i></button>
      </div>
    </div>
    <div class="note__body">
      <p id="note__text">${text}</p>
      <textarea id="note__textarea" class="note__textarea hidden">${text}</textarea>
    </div>
  `
  
  let editBtn = noteEl.querySelector('.note__edit'),
      deleteBtn = noteEl.querySelector('.note__delete'),
      noteTitle = noteEl.querySelector('#note__title'),
      noteText = noteEl.querySelector('#note__text'),
      noteInput = noteEl.querySelector('.note__input'),
      noteTextarea = noteEl.querySelector('.note__textarea')

  editBtn.addEventListener('click', function (e) {
    noteTitle.classList.toggle('hidden')
    noteText.classList.toggle('hidden')
    noteInput.classList.toggle('hidden')
    noteTextarea.classList.toggle('hidden')
  })

  deleteBtn.addEventListener('click', function () {
    noteEl.remove()
  })
  
  noteInput.addEventListener('input', function (e) {
    noteTitle.innerText = e.target.value
  })
  
  noteTextarea.addEventListener('input', function (e) {
    noteText.innerText = e.target.value
  })

  return noteEl
}

addBtn.addEventListener('click', function (e) {
  let element = createNote("Заголовок", "Ваш текст")

  notesEl.append(element)
})