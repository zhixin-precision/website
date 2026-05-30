/**
 * 百度自动推送 - URL主动提交
 * 当用户访问页面时自动向百度提交URL，加速收录
 * 文档: https://ziyuan.baidu.com/linksubmit/
 */
(function() {
  'use strict';

  // 百度推送API地址（需替换为实际token）
  var BAIDU_PUSH_URL = 'https://data.zz.baidu.com/urls?site=https://www.zhixin-precision.com&token=YOUR_BAIDU_TOKEN';

  // 仅在正式域名下推送（避免localhost测试时推送）
  if (window.location.hostname === 'www.zhixin-precision.com' ||
      window.location.hostname === 'zhixin-precision.com') {
    var currentUrl = window.location.href.split('#')[0]; // Remove hash

    // 百度自动推送（新版接口）
    if (typeof window.navigator.sendBeacon === 'function') {
      try {
        window.navigator.sendBeacon(BAIDU_PUSH_URL, currentUrl);
      } catch (e) {
        // Silent fail - push is best-effort
      }
    }
  }
})();
