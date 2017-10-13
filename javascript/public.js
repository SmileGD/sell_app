// window.$$=window.Zepto = Zepto;

//搜索框
// if($('.search').length > 0) {
//     var search = $('.search')[0];
//     var icon = $('.icon-search')[0];

//     search.focus(function(){
//         console.log(1);
//         $(this).css("padding-left",'1rem');
//         $(icon).css('left','0.6rem');
//     })

//     search.blur(function(){
//         console.log(1);
//         if($(this).val().length == 0){
//             $(this).css("padding-left",'7.8rem');
//             $(icon).css('left','7.4rem');
//         }
//     })
// }
var search = $('.search')[0];
var icon = $('.icon-search')[0];
search.onfocus = function(){
    $(this).css("padding-left",'1rem');
    $(icon).css('left','0.6rem');
}
search.onblur = function(){
    if($(this).val().length == 0){
        $(this).css("padding-left",'7.8rem');
        $(icon).css('left','7.4rem');
    }
}
//弹出弹框
$('.btn-announce').each(function(){
    $(this).on('click',function(){
        $('.announce').css('display','block');
    })
})

// $('.n-new').each(function(){
//     $(this).on('click',function(){
//         $('#select-wrapper').css('display','block');
//     })
// })
// $('#cancle').on('click',function(){
//     $('#select-wrapper').css('display','none');
// })
// $('#sure').on('click',function(){
//     $('#select-wrapper').css('display','none');
// })

//点击播放按钮 切换播放图标
// $('.play').each(function(){
//     $(this).on('click',function(){
//         var i=$(this).find('i')[0];
//     //     if(i.hasClass('icon-Triangle')){
//     //         i.removeClass('icon-Triangle');
//     //         i.addClass('icon-pause');
//     //     }else{
//     //         i.removeClass('icon-pause');
//     //         i.addClass('icon-Triangle');
//     //     }
//     // })
// })

//星级评分
var rating=(function(){
    // 继承
    function extend(subClass,superClass){
        var F=function(){};
        F.prototype = superClass.prototype;
        subClass.prototype = new F();
        subClass.prototype.constructor = subClass;
    }
    //抽象出父类
    var light=function(el,options){
        this.$el=$(el);
        this.$items=this.$el.find('.rating-item');
        this.opts=options;
        this.add = 1;
        this.selectEvent='mouseover'
    }
    light.prototype.init=function(){
        this.lightOn(this.opts.num);
        this.bindEvent();
    }
    //点亮星星方法
    light.prototype.lightOn=function(num){
        num=parseInt(num);
        this.$items.each(function(index){
            if(index<num){
                $(this).css('background','url(./images/Star_light.png)');
            }else{
                $(this).css('background','url(./images/Star_off.png)');
            }
        })
    }
    //绑定事件方法
    light.prototype.bindEvent=function(){
        var self = this,
            itemsLength=self.$items.length;
        self.$el.on(self.selectEvent,'.rating-item',function(e){
            var $this = $(this),
                num = 0;
            self.select(e,$this);
            num = $this.index()+self.add;
            self.lightOn(num);
            (typeof self.opts.select === 'function') && self.opts.select.call(this,num,itemsLength);
        }).on('click','.rating-item',function(){
            self.opts.num=$(this).index()+self.add;
            (typeof self.opts.chosen === 'function') && self.opts.chosen.call(this,self.opts.num,itemsLength);
        }).on('mouseout',function(){
            self.lightOn(self.opts.num);
        })
    }
    light.prototype.select=function(){
        throw new Error('子类必须重写select方法');
    }
    light.prototype.unbindEvent=function(){
        this.$el.off();
    }


    //点亮整颗星星
    var lightEntire=function(el,options){
        light.call(this,el,options);
        this.selectEvent='mouseover';
    }
    extend(lightEntire,light);
    //点亮星星方法
    lightEntire.prototype.lightOn=function(num){
        light.prototype.lightOn.call(this,num);
    }
    //重写select方法
    lightEntire.prototype.select =function(){
        self.add = 1 ;
    }

    //点亮半颗星星
    var lightHalf=function(el,options){
        light.call(this,el,options);
        this.selectEvent='mousemove';
    }
    extend(lightHalf,light);
    //点亮星星方法
    lightHalf.prototype.lightOn=function(num){
        var count = parseInt(num)
        isHalf = count!==num;
        light.prototype.lightOn.call(this,count);
        if(isHalf){
            this.$items.eq(count).css('background-position','0 -90px');
        }
    }
    //重写select方法
    lightHalf.prototype.select =function(e,$this){
        if(e.pageX-$this.offset().left < $this.width()/2){ //半颗
            this.add = 0.5;
        }else{  // 整颗
            this.add = 1;
        }
    }

    //默认参数
    var defaults = {
        mode:'lightEntire',
        num:0,
        readOnly:false,
        select:function(){},
        chosen:function(){}
    }
    var mode = {
        'lightEntire':lightEntire,
        'lightHalf':lightHalf
    }
    //初始化
    var init = function(el,option){
        var $el = $(el),
            rating = $el.data('rating'),
            options = $.extend({},defaults,typeof option==='object'&&option);
        if(!mode[options.mode]){
            options.mode='lightEntire';
        }
        if(!rating) {
            $el.data('rating',(rating = new mode[options.mode](el,options)));
            rating.init();
        }
        if(typeof option ==='string')rating[option]();

    };
    $.fn.extend({
        rating:function(option){
            return this.each(function(){
                init(this,option);
            })
        }
    })
    return {
        init:init
    }
})()
    $('#rating').rating({
        mode:'lightEntire',
        num:0
    })

