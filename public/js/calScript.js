document.addEventListener('DOMContentLoaded', function() {
$.get("/api/events", (eventsData) => {
    console.log(eventsData)

   

    var calendarEl = document.getElementById('calendar');
  
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      initialDate: '2020-07-07',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      events: [...eventsData.events]
    // 
    });
  
    calendar.render();
    
  });
});

