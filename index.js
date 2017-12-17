; (function($){
    $.fn.tab=function(options){
        var opts=$.extend({},$.fn.tab.defaults,options);
        console.log(this);//  tab  jq 对象
        return this.each(function(){
            console.log(this);// tab js 对象
            var obj=$(this);
            console.log($(this));// tab  jq 对象
            $(obj).find('.tab_header li').on("click",function(){
                $(obj).find('.tab_header li').removeClass('active');
                $(this).addClass('active');
                console.log($(this));// li 的jq 对象
                $(obj).find('.tab_content div').hide();
                $(obj).find('.tab_content div').eq($(this).index()).show();
            })
        })
    }

    $.fn.tab.defaults={

    };
})(jQuery);
