document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  var title = document.getElementById('titleInput').value;
  var content = document.getElementById('contentInput').value;
  
  var note = document.createElement('li');
  note.innerHTML = '<h2>' + title + '</h2><p>' + content + '</p>';
  
  // Adiciona um botão de exclusão à nota
  var deleteButton = document.createElement('button');
  deleteButton.innerText = 'Excluir';
  deleteButton.addEventListener('click', function() {
    note.remove(); // Remove a nota ao clicar no botão de exclusão
  });
  note.appendChild(deleteButton);
  
  document.getElementById('notesList').appendChild(note);
  
  document.getElementById('titleInput').value = '';
  document.getElementById('contentInput').value = '';
});
