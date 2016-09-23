//Add a second $.getJSON( ) method. It’s another request so you have to call this method a second time.
//
//The URL for the JSON data is ../data/rooms.json
//
//The basic HTML for the finished widget will look like this:
  //<ul class="rooms">
  //<li class="full">101</li>
  //<li class="empty">102</li>
  //<li class="full">103</li>
  //<li class="full">104</li>
  //<li class="empty">105</li>
  //<li class="empty">106</li>
  //</ul>
//
//The complete HTML goes inside a div with the ID of “roomList”

$(document).ready(function () {
  $.getJSON('data/employees.json', function (data) {
    var statusHTML = '<ul class="bulleted">';
    $.each(data,function (index, employee) {
      if (employee.inoffice === true) {
        statusHTML +='<li class="in">';
      } else {
        statusHTML +='<li class="out">';
      }
      statusHTML += employee.name + '</li>';
    });
    statusHTML += '</ul>';
    $('#employeeList').html(statusHTML)
  }); // end getJSON

  $.getJSON('data/rooms.json', function (data) {
    var roomHTML = '<ul class="rooms">';
    $.each(data,function (index, room) {
      if (room.available === true) {
        roomHTML +='<li class="empty">';
      } else {
        roomHTML +='<li class="full">';
      }
      roomHTML += room.room + '</li>';
    });
    roomHTML += '</ul>';
    $('#roomList').html(roomHTML)
  }); // end getJSON
}); // end ready
