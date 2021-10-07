

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('schedule');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth'
  });
  calendar.render();
});

