(function ($) {
  $.fn.filterChildren = function (options) {
    var settings = $.extend({
      childSelector: "> *"
    }, options);

    $(this).each(function () {
      var $thisList = $(this).addClass("datasource");
      $thisList.wrap("<div class='filterChildren'></div>");
      $('<input type="text" placeholder="Filter" class="search" />').keyup(function () {
        var $thisInput = $(this);
        $thisList.find(settings.childSelector).show().filter(function (index) {
          return $(this).text().toLowerCase().indexOf($thisInput.val().toLowerCase()) === -1;
        }).hide();
      }).insertBefore($thisList);
    });
    return this;
  };
}(jQuery));
