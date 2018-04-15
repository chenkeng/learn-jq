/** 
 * javascript 
 * @Author: superhan
 * @Date: 2018-04-12 010:54:22 
 * @Desc:  waterMark is a jquery plugin , used for generate digit mark .
 */

; (function ($, window, document, undefined) {
    // 定义WATERMARK构造函数
    var WATERMARK = function (el, opt) {
        this.$element = el,
        //默认属性配置
        this.defaults = {
            'width': 160,
            'height': 240,
            'color': 'red',
            'alpha': .2,
            'font': '20px Arial',
            'text': '400200199007221234'
        },
        // 将自定义属性和默认属性合并到一个空对象参数上
        this.options = $.extend({}, this.defaults, opt)
    }
    // 定义WATERMARKD的方法
    WATERMARK.prototype = {
        _watermark: function () {
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');
            canvas.width = this.options.width;
            canvas.height = this.options.height;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.globalAlpha = this.options.alpha;
            ctx.font = this.options.font;
            ctx.textAlign = 'left';
            ctx.textBaseline = 'bottom';
            ctx.translate(canvas.width * .1, canvas.height * .9);
            ctx.rotate(-Math.PI / 4);
            ctx.fillStyle = this.options.color;
            ctx.fillText(this.options.text, 4, -10);
            return canvas.toDataURL();
        }
    }
    // 在插件中使用WATERMARK对象
    $.fn.watermark = function (options) {
        //创建一个WATERMARK的实例
        var wm = new WATERMARK(this, options);
        //调用其方法
        return this.css({'background':'url(' + wm._watermark() + ')'});
    }

})(jQuery, window, document)







