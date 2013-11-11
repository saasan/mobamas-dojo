/* jshint indent: 2, jquery: true */
/* global Toast, MobamasDojo */

$(function(){
  'use strict';

  /**
   * 広告を更新する
   */
  function updateAd() {
    var id = 'saasan-22';
    var data =
      [
        { asin: 'B00G3XXJEC', img: 'http://ecx.images-amazon.com/images/I/61%2B1Ba5DB2L._SX318_CR0,50,318,98_.jpg' },
        { asin: 'B00FDE78HG', img: 'http://ecx.images-amazon.com/images/I/61AaaBB1zeL._SX318_CR0,50,318,98_.jpg' },
        { asin: '4758007780', img: 'http://ecx.images-amazon.com/images/I/61NbWZWKnGL._SX318_CR0,120,318,98_.jpg' },
        { asin: 'B00DW2LIJU', img: 'http://ecx.images-amazon.com/images/I/61me85tolRL._SX318_CR0,120,318,98_.jpg' },
        { asin: 'B00FB1W1UK', img: 'http://ecx.images-amazon.com/images/I/61QAChtmVUL._SX318_CR0,10,318,98_.jpg' },
        { asin: 'B00FB1W1OQ', img: 'http://ecx.images-amazon.com/images/I/61lWXcP49iL._SX318_CR0,55,318,98_.jpg' },
        { asin: 'B00FB1W1TQ', img: 'http://ecx.images-amazon.com/images/I/61rGikCSjIL._SX318_CR0,30,318,98_.jpg' },
        { asin: 'B00FB1W1UA', img: 'http://ecx.images-amazon.com/images/I/61XNzSDvwIL._SX318_CR0,40,318,98_.jpg' },
        { asin: 'B00FB1W1O6', img: 'http://ecx.images-amazon.com/images/I/61X7E11uJOL._SX318_CR0,30,318,98_.jpg' },
        { asin: 'B00DAP3R3Y', img: 'http://ecx.images-amazon.com/images/I/61AoUO6aI2L._SX350_CR25,20,318,98_.jpg' },
        { asin: 'B00DAP3R3Y', img: 'http://ecx.images-amazon.com/images/I/61AoUO6aI2L._SX318_CR0,120,318,98_.jpg' },
        { asin: 'B00FPGY5CI', img: 'http://ecx.images-amazon.com/images/I/814qJ9fFRnL._SX330_CR5,0,318,98_.jpg' },
        { asin: 'B00FPGY5CI', img: 'http://ecx.images-amazon.com/images/I/814qJ9fFRnL._SX318_CR0,86,318,98_.jpg' },
        { asin: 'B00ESECI40', img: 'http://ecx.images-amazon.com/images/I/610%2BEdxKQrL._PU35_CR80,130,318,98_.jpg' },
        { asin: 'B00E59NQ8U', img: 'http://ecx.images-amazon.com/images/I/61MZCw0Lw%2BL._SX450_CR80,30,318,98_.jpg' },
        { asin: 'B00DGIQD40', img: 'http://ecx.images-amazon.com/images/I/51ZwOLjBRHL._PU90_CR19,22,451,139_SX318_.jpg' },
        { asin: '4048919245', img: 'http://ecx.images-amazon.com/images/I/61QGkhmsBuL._SX318_CR0,100,318,98_.jpg' },
        { asin: '4758007772', img: 'http://ecx.images-amazon.com/images/I/51dUay4NeoL._SX318_CR0,30,318,98_.jpg' },
        { asin: '4758007667', img: 'http://ecx.images-amazon.com/images/I/51M0EZG0NdL._PU90_SX320_CR0,30,318,98.jpg' }
      ];

    var n = Math.floor(Math.random() * data.length);
    var html = '<a href="http://www.amazon.co.jp/exec/obidos/ASIN/' +
        data[n].asin + '/' + id +
        '/" target="_blank"><img src="' + data[n].img +
        '" width="318" height="98"></a>';

    $('#ad').html(html);
  }

  try {
    var t = new Toast('#toast', '#toastMessage');
    $('#closeToast').click(function(){ t.close(); });

    var d = new MobamasDojo(t);
    $('a.dojo-link').click(function(){ d.onclickDojoLink($(this)); });
    $('button.hide-dojo').click(function(){ d.onclickHideDojo($(this)); });
    $('#configOK').click(function(){ d.onclickConfigOK($(this)); });
    $('#configResetVisited').click(function(){ d.onclickConfigResetVisited($(this)); });
    $('#configResetHide').click(function(){ d.onclickConfigResetHide($(this)); });
    $('#configReset').click(function(){ d.onclickConfigReset($(this)); });
    $('#closeInfo').click(function(){ d.onclickCloseInfo(); });
    $('#closeBirthday').click(function(){ d.onclickCloseBirthday(); });
    $('#openConfig').click(function(){ d.onclickOpenConfig(); });
    $('#closeConfig').click(function(){ $('#config').hide(); });
    $('#configCancel').click(function(){ $('#config').hide(); });
    $('#dataInput').submit(function(){ d.onsubmitDataInput(); return false; });

    d.init();
    updateAd();
  }
  catch (e) {
    var message = '<h3>' + e.message + '</h3>';
    if (e.stack) {
      message += '<p>' + e.stack + '</p>';
    }
    t.show(message, 'info error');
  }
});
