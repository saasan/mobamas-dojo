$(function(){
  var RESET_HOUR = 5;
  var RESET_MINUTE = 0;

  function getResetTime() {
    var resetTime = new Date();
    resetTime.setHours(RESET_HOUR);
    resetTime.setMinutes(RESET_MINUTE);
    resetTime.setSeconds(0);
    resetTime.setMilliseconds(0);
    return resetTime;
  }

  var storage = new Storage(true, 'dojo');
  var i, id;
  var now = new Date();
  var resetTime = getResetTime();
  var lastTime = new Date(storage.get('lastTime'));
  var visited;

  if (lastTime < resetTime && resetTime <= now) {
    storage.remove('visited');
  }
  else {
    visited = storage.get('visited');
    if (visited != null) { // not (null or undefined)
      for (i in visited) {
        $('#' + i).removeClass('btn-primary').addClass('btn-danger');
        $('#d' + i).removeClass('btn-primary').addClass('btn-danger');
      }
    }
  }

  if (visited == null) { // null or undefined
    visited = {};
  }

  storage.set('lastTime', now);

  $('a.dojo-link').click(function(){
    var id = $(this).attr("id");
    $(this).removeClass('btn-primary').addClass('btn-danger');
    $('#d' + id).removeClass('btn-primary').addClass('btn-danger');
    var times = visited[id];
    if (times == null) { // null or undefined
      times = 0;
    }
    visited[id] = ++times;
    storage.set('visited', visited);
  });
});
