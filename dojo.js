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

  function changeButtonState(thresholdTimes, id, times) {
    if (times > thresholdTimes) times = thresholdTimes;

    var classes = {
      1: ['btn-primary', 'btn-danger'],
      3: ['btn-primary', 'btn-success', 'btn-warning', 'btn-danger']
    };

    $('#' + id).removeClass(classes[thresholdTimes][times - 1]).addClass(classes[thresholdTimes][times]);
    $('#d' + id).removeClass(classes[thresholdTimes][times - 1]).addClass(classes[thresholdTimes][times]);
  }

  function onclickDojoLink(eventObject, config) {
    var id = eventObject.attr('id');
    config.visited[id] = (config.visited[id] == null /* null or undefined */ ? 1 : ++config.visited[id]);
    changeButtonState(config.thresholdTimes, id, config.visited[id])
  }

  function updateButtonStateAll(config) {
    $('a.btn-success').removeClass('btn-success').addClass('btn-primary');
    $('button.btn-success').removeClass('btn-success').addClass('btn-primary');
    $('a.btn-warning').removeClass('btn-warning').addClass('btn-primary');
    $('button.btn-warning').removeClass('btn-warning').addClass('btn-primary');
    $('a.btn-danger').removeClass('btn-danger').addClass('btn-primary');
    $('button.btn-danger').removeClass('btn-danger').addClass('btn-primary');
    for (id in config.visited) {
      changeButtonState(config.thresholdTimes, id, config.visited[id])
    }
  }

  function updateUI(config) {
    updateButtonStateAll(config);
    if (config.sameTab) {
      $('a[target].dojo-link').removeAttr('target');
    }
    else {
      $('a:not([target]).dojo-link').attr('target', '_blank');
    }
    $('#sameTab').attr('checked', config.sameTab);
    $('#autoHide').attr('checked', config.autoHide);
    $('#thresholdTimes').val(config.thresholdTimes);
  }

  function resetConfig(config) {
    var configDefault = {
      visited: {},
      sameTab: false,
      autoHide: false,
      thresholdTimes: 1
    };
    for (var key in configDefault) {
      if (typeof config[key] === 'undefined') config[key] = configDefault[key];
    }
  }

  function init() {
    var storage = new Storage(true, 'mobamas-dojo');
    var config = storage.get('config', {});
    resetConfig(config);

    var i, id;
    var now = new Date();
    var resetTime = getResetTime();

    if (config.lastTime < resetTime && resetTime <= now) {
      config.visited = {};
    }

    config.lastTime =  now;

    updateUI(config);

    $('#sameTab').change(function(){
      config.sameTab = $(this).is(':checked');
      updateUI(config);
    });
    $('#autoHide').change(function(){ config.autoHide = $(this).is(':checked'); });
    $('#thresholdTimes').change(function(){
      config.thresholdTimes = $(this).val();
      updateButtonStateAll(config)
    });
    $('#resetOptions').click(function(){
      config = {};
      resetConfig(config);
      updateUI(config);
    });
    $('a.dojo-link').click(function(){ onclickDojoLink($(this), config); });
    $(window).on('beforeunload', function(){
      if (!$('#noSave').is(':checked')) storage.set('config', config);
    });
  }

  init();
});
