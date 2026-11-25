/**
 * 表格横向滚动包装（2026-11-25）
 * 目的：正文宽度收窄到 720px 后，8 列表格会被挤成竖排。
 * 做法：给 #article-container 里每个 table 外面套一层 .table-wrap，让表格自身横向滚动。
 * 影响范围：只在文章页生效；不改主题源码，不改 DOM 语义。
 * 回滚：删掉这个文件 + 从 inject.bottom 移除引用。
 */
(function () {
  'use strict';

  function wrapTables() {
    var container = document.getElementById('article-container');
    if (!container) return;

    var tables = container.querySelectorAll('table');
    for (var i = 0; i < tables.length; i++) {
      var table = tables[i];
      // 已经包过就跳过，避免 pjax 重复执行时套两层
      if (table.parentNode && table.parentNode.classList.contains('table-wrap')) continue;

      var wrap = document.createElement('div');
      wrap.className = 'table-wrap';
      table.parentNode.insertBefore(wrap, table);
      wrap.appendChild(table);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', wrapTables);
  } else {
    wrapTables();
  }

  // Butterfly 的 pjax 若启用，页面切换后需要重新执行；pjax 关闭时这段不会触发
  document.addEventListener('pjax:complete', wrapTables);
})();
