//搜索框
if($('.search').length > 0) {
    $('.search').focus(function(){
        $(this).css("padding-left",'1rem');
        $('.icon-search').css('left','0.6rem');
    })
    $('.search').blur(function(){
        if($(this).val().length == 0){
            $(this).css("padding-left",'7.8rem');
            $('.icon-search').css('left','7.4rem');
        }
    })
}

//弹出弹框
$('.btn-announce').each(function(){
    $(this).on('click',function(){
        $('.announce').css('display','block');
    })
})

//弹出框
if($('script[src="./js/bootstrap.min.js"]').length > 0){
    $('[data-toggle="popover"]').popover().on('show.bs.popover',function(){
        setTimeout(function(){
            $('[data-toggle="popover"]').popover('hide')
        },3000)
    })
}


//点击播放按钮 切换播放图标
// $('.play').each(function(){
//     $(this).on('click',function(){
//         var i=$(this).find('i');
//         var voice = $('.preloader_1');
//         if(i.hasClass('icon-Triangle')){
//             i.removeClass('icon-Triangle triangle');
//             i.addClass('icon-center icon-pause');
//         }else if(i.hasClass('icon-pause')){
//             i.removeClass('icon-center icon-pause');
//             i.addClass('icon-Triangle triangle');
//         }else if(i.hasClass('icon-speak')){
//             i.hide();
//             voice.show();
//             $('.text-explain-1').hide();
//             $('.text-explain-2').show();
//         }
//         if(voice){
//             $(this).on('click',function(){
//                 voice.hide();
//                 $('.recode').hide();
//                 $('.play_and_remark').show();
//                 $('.icon-speak').show();
//             })
//         }
//     })
// })

//除以3的余数的li设置margin-bottom
// if($('.city-list').length > 0){
//     var lis = $('.city-list').children();
//     var l = lis.length % 3;
//     if(l == 0) {
//         for( var i = 0; i < 3; i++){
//             lis[lis.length-i-1].style.marginBottom=2.2+'rem';
//         }
//     }else {
//         for( var i = 0; i < l; i++){
//             lis[lis.length-i-1].style.marginBottom=2.2+'rem';
//         }
//     }
// }

//点击选中勾选
$('.info-check').each(function(){
    $(this).on('click',function(){
        $(this).find('.icon-check').toggle();
    })
})

//点击单选
$('.info-radio').on('click',function(){
    $(this).siblings('.info-radio').find('.icon-check').hide();
    $(this).find('.icon-check').show();
})

//问题报修选中状态
$('.info-p-i').on('click',function(){
    $(this).siblings('.info-p-i').removeClass('selected').css('borderBottom','1px solid #e5e5e5');
    $(this).prev('.info-p-i').css('borderBottom','0');
    $(this).addClass('selected');
})

//报修问题选择
$('.problem-item').on('click',function(){
    $(this).toggleClass('btn-active');
})

//时间选择
$('.date').each(function(){
    $(this).on('change',function(){
        $(this).siblings('.time-container').html($(this).val());
        $(this).siblings('.container-s').html($(this).val());
    })
})

//精确到秒的时间选择
if ($('script[src="./js/jquery-ui-timepicker-addon.min.js"]').length > 0){
    $('.date-picker').datetimepicker({
        lang: "ch",
        timeFormat: "HH:mm:ss",
        dateFormat: "yy-mm-dd",
        dayNamesMin: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
        monthNamesShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        changeMonth: true,
        changeYear: true,
    });
}

//性别选择
$('.gender').each(function(){
    $(this).on('click',function(){
        $(this).siblings('.gender-container').html($(this).find("option[selected='selected']").val());
    })
    $(this).on('change',function(){
        $(this).siblings('.gender-container').html($(this).val());
    })
})

// //轮播图
if ($('script[src="./js/swiper.min.js"]').length > 0){
    var swiper = new Swiper('.swiper-container',{
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        loop: true
    });
}

//点击小图 查看大图
var pswpElement = document.querySelectorAll('.pswp')[0];
var items = [
    {
        src: './images/company-1@3x.png',
        w: 600,
        h: 400
    },
    {
        src: './images/company-2@3x.png',
        w: 600,
        h: 400
    },
    {
    src: './images/company-3.png',
        w: 600,
        h: 400
    },
        {
        src: './images/company-4.png',
        w: 600,
        h: 400
    }
];
$('.img-container > li').on('click',function(){
    var options = {
        index: $(this).index()
    };
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items,options);
    gallery.init();
})

//切换按钮
$('.button').on('click',function(){
    $(this).toggleClass('button-on');
    $('.icon-tool').toggle();
    $('.icon-worker').toggle();
})

//菜单按钮弹框
$('.menu').on('click',function(){
    $('.menu-wrapper').fadeIn();
})

//关闭菜单按钮
$('.close').on('click',function(){
    $('.menu-wrapper').fadeOut();
})

//定位下拉列表
$('.select').on('click',function(){
    $('.city-select').slideToggle(1000);
})

//关闭地区下拉框
$('.map').on('click',function(){
    $('.city-select').slideUp(1000);
})

//切换接单类型
if($('.neutral-header').length > 0){
    (function(index){
        var aAll = document.querySelectorAll("a");
        for(var i = 0;i < aAll.length;i++){
            if(i == index){
                aAll[i].classList.add("neutral-active");
                var firstTarget = aAll[i].dataset["target"];
                document.querySelector("#"+firstTarget).style.display = "block";
            }
            aAll[i].onclick = function(){
                var prevA = document.querySelector(".neutral-active");
                prevA.classList.remove("neutral-active");
                var prevTarget = prevA.dataset["target"];
                document.querySelector("#"+prevTarget).style.display = "none";
                this.classList.add("neutral-active");
                var target = this.dataset["target"];
                document.querySelector("#"+target).style.display = "block";
            }
        }
    })(0)
}

//input 宽度自适应设置
if($('.remoney').length > 0){
    $('.remoney').on('change',function(){
        var len = $('.remoney').val().length;
        console.log(len);
        if(len < 1){
            $('.remoney').css('width','3.1rem');
        }else if(len < 10){
            $('.remoney').css('width',len*.9+'rem');
        }else {
            $('.remoney').css('width','9.2rem');
        }
    })
}

//用户信息的显示与隐藏
if($('.user-wrapper').length > 0) {
//点击显示和隐藏用户信息
    $('.user-control').on('click',function(){
        console.log(123);
        $('.user-wrapper').addClass('user-show');
        $('.user-mask').fadeIn(1000);
    })
    $('.user-mask').on('click',function(){
        $('.user-wrapper').removeClass('user-show');
        $('.user-mask').fadeOut(1000);
    })

//侧滑显示与隐藏用户信息菜单
    var startX = 0;
    var moveX;
    var distanceX;
    document.addEventListener("touchstart",function(e){
        startX = e.targetTouches[0].clientX;
    })
    document.addEventListener("touchmove",function(e){
        moveX = e.targetTouches[0].clientX;
        distanceX = moveX - startX;
    })
    document.addEventListener("touchend",function(e){
        if(distanceX > 100) {
            $('.user-wrapper').addClass('user-show');
            $('.user-mask').fadeIn(1000);
        }else if(distanceX < -100) {
            $('.user-wrapper').removeClass('user-show');
            $('.user-mask').fadeOut(1000);
        }
    })
}

//地址选择
if($('.city-list').length > 0){
    var lis = $('.city-list').children();
    lis.on('click',function(){
        $(this).siblings('li').removeClass('city-selected');
        $(this).addClass('city-selected');
        $('.current-location').text($(this).text());
    })
}

//几成新选择
if ($('.oldAndNew').length > 0){
    var data1 = [
        {
        text: '5成新',
         value: 1
        }, {
        text: '6成新',
        value: 2
        },
        {
         text: '7成新',
         value: 3
        },
        {
         text: '8成新',
         value: 4
        },
        {
         text: '9成新',
         value: 5
        }
    ];

    var picker1El = document.getElementById('picker1');
    var picker2El = document.getElementById('picker2');

    var picker1 = new Picker({
        data: [data1]
    });

    picker1.on('picker.select', function (selectedVal, selectedIndex) {
        picker1El.innerText = data1[selectedIndex[0]].text;
    });

    picker1El.addEventListener('click', function () {
        picker1.show();
    });

    var picker2 = new Picker({
        data: [data1]
    });

    picker2.on('picker.select', function (selectedVal, selectedIndex) {
        picker2El.innerText = data1[selectedIndex[0]].text;
    });

    picker2El.addEventListener('click', function () {
        picker2.show();
    });
}

//公司信息选择
if ($('.infoSelect').length > 0){
    var data1 = [
        {
        text: '纺织服装类加工企业',
         value: 1
        }, {
        text: '加工个体户',
        value: 2
        }
    ];

    var data2 = [
        {
        text: '内销',
         value: 1
        }, {
        text: '外销',
        value: 2
        }
    ];
    var picker1El = document.getElementById('picker1');
    var picker2El = document.getElementById('picker2');


   if(picker1El){
        var picker1 = new Picker({
            data: [data1]
        });

        picker1.on('picker.select', function (selectedVal, selectedIndex) {
            picker1El.innerText = data1[selectedIndex[0]].text;
        });

        picker1El.addEventListener('click', function () {
            picker1.show();
        });
   }

    if(picker2El){
        var picker2 = new Picker({
            data: [data2]
        });

        picker2.on('picker.select', function (selectedVal, selectedIndex) {
            picker2El.innerText = data2[selectedIndex[0]].text;
        });

        picker2El.addEventListener('click', function () {
            picker2.show();
        });
    }
}
//三级联动
if($('script[src="./js/city.js"]').length > 0){
    var nameEl = document.getElementById('city-picker');
    nameEl.addEventListener('click', function () {
        picker.show();
    });

    var first = [];
    var second = [];
    var third = [];
    var selectedIndex = [0, 0, 0];
    var checked = [0, 0, 0];
    function creatList(obj, list){
        obj.forEach(function(item, index, arr){
        var temp = new Object();
        temp.text = item.name;
        temp.value = index;
        list.push(temp);
        })
    }

    creatList(city, first);

    if (city[selectedIndex[0]].hasOwnProperty('sub')) {
        creatList(city[selectedIndex[0]].sub, second);
    } else {
        second = [{text: '', value: 0}];
    }

    if (city[selectedIndex[0]].sub[selectedIndex[1]].hasOwnProperty('sub')) {
        creatList(city[selectedIndex[0]].sub[selectedIndex[1]].sub, third);
    } else {
        third = [{text: '', value: 0}];
    }

    var picker = new Picker({
        data: [first, second, third],
        selectedIndex: selectedIndex,
        title: '地址选择'
    });

    picker.on('picker.select', function (selectedVal, selectedIndex) {
        var text1 = first[selectedIndex[0]].text;
        var text2 = second[selectedIndex[1]].text;
        var text3 = third[selectedIndex[2]] ? third[selectedIndex[2]].text : '';

        nameEl.innerText = text1 + ' ' + text2 + ' ' + text3;
    });

    picker.on('picker.change', function (index, selectedIndex) {
        if (index === 0){
            firstChange();
        } else if (index === 1) {
            secondChange();
        }

    function firstChange() {
        second = [];
        third = [];
        checked[0] = selectedIndex;
        var firstCity = city[selectedIndex];
        if (firstCity.hasOwnProperty('sub')) {
            creatList(firstCity.sub, second);

            var secondCity = city[selectedIndex].sub[0]
            if (secondCity.hasOwnProperty('sub')) {
                creatList(secondCity.sub, third);
            } else {
                third = [{text: '', value: 0}];
                checked[2] = 0;
            }
        } else {
            second = [{text: '', value: 0}];
            third = [{text: '', value: 0}];
            checked[1] = 0;
            checked[2] = 0;
        }

        picker.refillColumn(1, second);
        picker.refillColumn(2, third);
        picker.scrollColumn(1, 0)
        picker.scrollColumn(2, 0)
    }

    function secondChange() {
        third = [];
        checked[1] = selectedIndex;
        var first_index = checked[0];
        if (city[first_index].sub[selectedIndex].hasOwnProperty('sub')) {
            var secondCity = city[first_index].sub[selectedIndex];
            creatList(secondCity.sub, third);
            picker.refillColumn(2, third);
            picker.scrollColumn(2, 0)
        } else {
            third = [{text: '', value: 0}];
            checked[2] = 0;
            picker.refillColumn(2, third);
            picker.scrollColumn(2, 0)
        }
    }
});
    picker.on('picker.valuechange', function (selectedVal, selectedIndex) {
        // console.log(selectedVal);
        // console.log(selectedIndex);
    });

}

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
                $(this).css('background-image','url(./images/Star_light.png)');
            }else{
                $(this).css('background-image','url(./images/Star_off.png)');
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
//初始化星级评分
$('#rating').rating({
    mode:'lightEntire',
    num:0
})

$('#rating-1').rating({
    mode:'lightEntire',
    num:4
})

$('#rating-2').rating({
    mode:'lightEntire',
    num:3
})

$('#rating-3').rating({
    mode:'lightEntire',
    num:5
})

