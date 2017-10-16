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

//点击播放按钮 切换播放图标
$('.play').each(function(){
    $(this).on('click',function(){
        var i=$(this).find('i')[0];
        if($(i).hasClass('icon-Triangle')){
            $(i).removeClass('icon-Triangle');
            $(i).addClass('icon-pause');
        }else{
            $(i).removeClass('icon-pause');
            $(i).addClass('icon-Triangle');
        }
    })
})

//点击选中勾选
$('.info-check').each(function(){
    $(this).on('click',function(){
        $(this).find('.icon-check').toggle();
    })
})

//时间选择
$('.date').each(function(){
    $(this).on('change',function(){
        $(this).siblings('.time-container').html($(this).val());
    })
})

//轮播图
if ($('script[src="./node_modules/swiper/dist/js/swiper.min.js"]').length > 0){
    var swiper = new Swiper('.swiper-container',{
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        loop: true,
    });
}

//picker
if ($('script[src="./js/single.js"]').length > 0){
    var data1 = [
        {
            text: '1件',
            value: 1
        }, {
            text: '2件',
            value: 2
        },
        {
            text: '3件',
            value: 3
        },
        {
            text: '4件',
            value: 4
        },
        {
            text: '5件',
            value: 5
        },
        {
            text: '6件',
            value: 6
        },
        {
            text: '7件',
            value: 7
        }, {
            text: '8件',
            value: 8
        },
        {
            text: '9件',
            value: 9
        },
        {
            text: '10件',
            value: 10
        }
    ];

    var data2 = [
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
    var picker3El = document.getElementById('picker3');
    var picker4El = document.getElementById('picker4');

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
        data: [data2]
    });

    picker2.on('picker.select', function (selectedVal, selectedIndex) {
        picker2El.innerText = data2[selectedIndex[0]].text;
    });

    picker2El.addEventListener('click', function () {
        picker2.show();
    });

    var picker3 = new Picker({
        data: [data1]
    });

    picker3.on('picker.select', function (selectedVal, selectedIndex) {
        picker3El.innerText = data1[selectedIndex[0]].text;
    });

    picker3El.addEventListener('click', function () {
        picker3.show();
    });

    var picker4 = new Picker({
        data: [data2]
    });

    picker4.on('picker.select', function (selectedVal, selectedIndex) {
        picker4El.innerText = data2[selectedIndex[0]].text;
    });

    picker4El.addEventListener('click', function () {
        picker4.show();
    });
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
        console.log(selectedVal);
        console.log(selectedIndex);
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

