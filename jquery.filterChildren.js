(function ($) {
    $.fn.filterChildren = function (options) {
        var settings = $.extend({
            childSelector: "> *"
        }, options);

        $(this).each(function () {
            var $thisInput;
            var $this = $(this);//.addClass("datasource");
            
            $this.wrap("<div class='filterChildren'></div>");

            if(settings.$filterInput instanceof $){
              $thisInput = settings.$filterInput;//.keyup(filterFuntion);
            }else{
              $thisInput = $('<input type="text" placeholder="Filter" class="search" />').insertBefore($this);
            }
            
            console.log($thisInput);

            var filterFuntion = function () {
              $this.find(settings.childSelector).show().filter(function (index) {
                  return $(this).text().toLowerCase().indexOf($thisInput.val().toLowerCase()) === -1;
              }).hide();
            };
            
            $thisInput.keyup(filterFuntion);
        });
        return this;
    };
}(jQuery));
