$(function(){
  var STORAGE_PREFIX = 'dojo_';
  var RESET_HOUR = 5;
  var RESET_MINUTE = 0;
  var THRESHOLD_TIMES = 0;
  var STORAGE = localStorage;

  function getItem(key) {
    return STORAGE.getItem(STORAGE_PREFIX + key);
  }

  function setItem(key, value) {
    STORAGE.setItem(STORAGE_PREFIX + key, value);
  }

  function removeItem(key) {
    STORAGE.removeItem(STORAGE_PREFIX + key);
  }

  function getResetTime() {
    var resetTime = new Date();
    resetTime.setHours(RESET_HOUR);
    resetTime.setMinutes(RESET_MINUTE);
    resetTime.setSeconds(0);
    resetTime.setMilliseconds(0);
    return resetTime;
  }

  var i, id;
  var now = new Date();
  var resetTime = getResetTime();
  var lastTime = new Date(getItem('lastTime'));
  var visited;

  if (lastTime < resetTime && resetTime <= now) {
    removeItem('visited');
  }
  else {
    visited = getItem('visited');
    if (!(visited === null)) {
      visited = JSON.parse(getItem('visited'));

      for (i in visited) {
        $('#' + i).addClass('visited');
      }
    }
  }

  if (visited == null) { // null or undefined
    visited = {};
  }

  setItem('lastTime', now);

  $('a.dojos').click(function(){
    var id = $(this).attr("id");
    $(this).addClass('visited');
    var times = visited[id];
    if (times == null) { // null or undefined
      times = 0;
    }
    visited[id] = ++times;
    setItem('visited', JSON.stringify(visited));
  });
});
