(function ($) {
  $.fn.filterChildren = function (options) {
    var settings = $.extend({
      childSelector: "> *",
      filterClass: 'filtered'
    }, options);

    $(this).each(function () {
      var $thisInput;
      var $this = $(this);//.addClass("datasource");
      
      $this.wrap("<div class='filterChildren'></div>");

      if(settings.$filterInput instanceof $){
        $thisInput = settings.$filterInput;//.keyup(filterFuntion);
      }else{
        $thisInput = $('<input type="text" placeholder="Filter" class="filter" />').insertBefore($this);
      }

      var filterFuntion = function () {
        $this.find(settings.childSelector).removeClass(settings.filterClass).filter(function (index) {
          return $(this).text().toLowerCase().indexOf($thisInput.val().toLowerCase()) === -1;
        }).addClass(settings.filterClass);
      };
      
      $thisInput.keyup(filterFuntion);
    });
    return this;
  };
}(jQuery));
