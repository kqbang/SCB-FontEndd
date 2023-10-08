$(document).ready(function() {
    $('#addTask').click(function() {
      const taskText = $('#taskInput').val();
      if (taskText.trim() !== '') {
        const listItem = $('<li>').text(taskText);
        const deleteIcon = $('<span class="delete-icon">❌</span>');
        listItem.append(deleteIcon);
        $('#taskList').append(listItem);
        $('#taskInput').val('');
      } else {
        alert('Please enter a task.');
      }
    });
  
    $('#taskList').on('click', 'li', function() {
      $(this).toggleClass('completed');
    });
  
    $('#taskList').on('click', '.delete-icon', function(event) {
      event.stopPropagation();
      $(this).parent().remove();
    });
  });
  