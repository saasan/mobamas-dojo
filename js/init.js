/* jshint indent: 2, jquery: true */
/* global MobamasDojo */

$(function(){
  'use strict';

  try {
    var d = new MobamasDojo();

    $('a.dojo-link').click(function(){ d.onclickDojoLink($(this)); });
    $('button.hide-dojo').click(function(){ d.onclickHideDojo($(this)); });
    $('#configOK').click(function(){ d.onclickConfigOK($(this)); });
    $('#configResetVisited').click(function(){ d.onclickConfigResetVisited($(this)); });
    $('#configResetHide').click(function(){ d.onclickConfigResetHide($(this)); });
    $('#configReset').click(function(){ d.onclickConfigReset($(this)); });
    $('#closeInfo').click(function(){ d.onclickCloseInfo(); });
    $('#closeBirthday').click(function(){ d.onclickCloseBirthday(); });
    $('#closeToast').click(function(){ d.onclickCloseToast(); });
    $('#openConfig').click(function(){ d.onclickOpenConfig(); });
    $('#closeConfig').click(function(){ $('#config').hide(); });
    $('#configCancel').click(function(){ $('#config').hide(); });
    $('#dataInput').submit(function(){ d.onsubmitDataInput(); return false; });

    d.init();
  }
  catch (e) {
    $('#toastText').text(e.message);
    $('#toast').removeClass('success').addClass('error').show();
  }
});
