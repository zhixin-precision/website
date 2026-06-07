/**
 * 百度自动推送 - URL主动提交
 * 当用户访问页面时自动向百度提交URL，加速收录
 */
(function() {
  'use strict';

  var SITE = 'www.zhixin-precision.com';
  var TOKEN = 'L73YAWHjHK6xUwiY';
  var BAIDU_PUSH_URL = 'https://data.zz.baidu.com/urls?site=' + SITE + '&token=' + TOKEN;

  // 自动推送当前页面URL
  if (typeof window.navigator.sendBeacon === 'function') {
    try {
      var currentUrl = window.location.href.split('#')[0];
      window.navigator.sendBeacon(BAIDU_PUSH_URL, currentUrl);
    } catch (e) {
      // Silent fail
    }
  }
})();
