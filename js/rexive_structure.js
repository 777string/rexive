(function (window, define, factory, undefined) {
  "use strict";

  if (define !== undefined) {
    define(factory);
  } else {
    factory();
  }
}(
  this,
  this.define,
  function () {
    "use strict";

    var win
      , header
      , headerHeight
      , content;

    function setContentHeight() {
      headerHeight = header.outerHeight(true);
      content.css('height', win.height() - headerHeight);
    }

    $(function () {
      win = $(window);
      header = $('#header');
      content = $('#body');
      content.css('overflow-y','scroll');

      setContentHeight();
      win.on('resize', setContentHeight);
    });
  }
));
