; (function($){
    $.fn.tab=function(options){
        var opts=$.extend({},$.fn.tab.defaults,options);
        return this.each(function(){
            var obj=$(this);
            $(obj).find('.tab_header li').on("click",function(){
                $(obj).find('.tab_)header li').removeClass('active');

            })






        })
    }
})(jQuery);
















