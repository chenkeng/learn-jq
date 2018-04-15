; (function ($) {
    $.fn.tab = function (options) {
        var opts = $.extend({}, $.fn.tab.defaults, options);
        // console.log(this);//  tab  jq 对象
        return this.each(function (index, ele) {
            // each 内的this，就是指 ele 这个js对象元素。
            // 需要将其转为jq 对象，才能使用jq 的方法
            $(ele).find('.tab_header li').on(opts.event_type, function () {
                $(ele).find('.tab_header li').removeClass('active');
                $(this).addClass('active');
                // 此处的this 指代找到的li 的js对象，需要将其转为jq对象
                //console.log(this)
                // console.log($(this));
                $(ele).find('.tab_content div').hide();
                $(ele).find('.tab_content div').eq($(this).index()).show();
            })
        })
    }

    $.fn.tab.defaults = {
        event_type: "click", // 可以设置默认为 click ，mouseover， mouseenter 等事件
    };
})(jQuery);


