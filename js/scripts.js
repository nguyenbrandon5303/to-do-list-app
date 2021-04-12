function newItem() {
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(document.createTextNode(inputValue));

  if(inputValue === '') {
    alert("You must write something!");
  } else {
    let list = $('#list');
    list.append(li);
  }

  function crossOut() {
    li.toggleClass('strike');
  }

  li.on('dblclick', function () {
    crossOut();
  });

  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  crossOutButton.on('click', function () {
    deleteListItem();
  });

  function deleteListItem() {
    li.addClass('delete');
  }

  $('#list').sortable();
}
