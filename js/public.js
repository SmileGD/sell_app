function creatList(e,t){e.forEach(function(e,i,n){var c=new Object;c.text=e.name,c.value=i,t.push(c)})}if($(".search").length>0&&($(".search").focus(function(){$(this).css("padding-left","1rem"),$(".icon-search").css("left","0.6rem")}),$(".search").blur(function(){0==$(this).val().length&&($(this).css("padding-left","7.8rem"),$(".icon-search").css("left","7.4rem"))})),$(".btn-announce").each(function(){$(this).on("click",function(){$(".announce").css("display","block")})}),$('script[src="./js/bootstrap.min.js"]').length>0&&$('[data-toggle="popover"]').popover().on("show.bs.popover",function(){setTimeout(function(){$('[data-toggle="popover"]').popover("hide")},3e3)}),$(".city-list").length>0){var l=(lis=$(".city-list").children()).length%3;if(0==l)for(var i=0;i<3;i++)lis[lis.length-i-1].style.marginBottom="2.2rem";else for(var i=0;i<l;i++)lis[lis.length-i-1].style.marginBottom="2.2rem"}if($(".info-check").each(function(){$(this).on("click",function(){$(this).find(".icon-check").toggle()})}),$(".info-radio").on("click",function(){$(this).siblings(".info-radio").find(".icon-check").hide(),$(this).find(".icon-check").show()}),$(".info-p-i").on("click",function(){$(this).siblings(".info-p-i").removeClass("selected").css("borderBottom","1px solid #e5e5e5"),$(this).prev(".info-p-i").css("borderBottom","0"),$(this).addClass("selected")}),$(".problem-item").on("click",function(){$(this).toggleClass("btn-active")}),$(".date").each(function(){$(this).on("change",function(){$(this).siblings(".time-container").html($(this).val()),$(this).siblings(".container-s").html($(this).val())})}),$('script[src="./js/jquery-ui-timepicker-addon.min.js"]').length>0&&$(".date-picker").datetimepicker({lang:"ch",timeFormat:"HH:mm:ss",dateFormat:"yy-mm-dd",dayNamesMin:["周日","周一","周二","周三","周四","周五","周六"],monthNamesShort:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],changeMonth:!0,changeYear:!0}),$(".gender").each(function(){$(this).on("change",function(){$(this).siblings(".gender-container").html($(this).val())})}),$('script[src="./js/swiper.min.js"]').length>0)var swiper=new Swiper(".swiper-container",{pagination:".swiper-pagination",slidesPerView:1,paginationClickable:!0,spaceBetween:30,loop:!0});var pswpElement=document.querySelectorAll(".pswp")[0],items=[{src:"./images/company-1@3x.png",w:600,h:400},{src:"./images/company-2@3x.png",w:600,h:400},{src:"./images/company-3.png",w:600,h:400},{src:"./images/company-4.png",w:600,h:400}];if($(".img-container > li").on("click",function(){var e={index:$(this).index()};new PhotoSwipe(pswpElement,PhotoSwipeUI_Default,items,e).init()}),$(".button").on("click",function(){$(this).toggleClass("button-on"),$(".icon-tool").toggle(),$(".icon-worker").toggle()}),$(".menu").on("click",function(){$(".menu-wrapper").fadeIn()}),$(".close").on("click",function(){$(".menu-wrapper").fadeOut()}),$(".select").on("click",function(){$(".city-select").fadeToggle(1e3)}),$(".map").on("click",function(){$(".city-select").fadeOut(1e3)}),$(".user-wrapper").length>0){$(".user-control").on("click",function(){console.log(123),$(".user-wrapper").addClass("user-show"),$(".user-mask").fadeIn(1e3)}),$(".user-mask").on("click",function(){$(".user-wrapper").removeClass("user-show"),$(".user-mask").fadeOut(1e3)});var startX=0,moveX,distanceX;document.addEventListener("touchstart",function(e){startX=e.targetTouches[0].clientX}),document.addEventListener("touchmove",function(e){moveX=e.targetTouches[0].clientX,distanceX=moveX-startX}),document.addEventListener("touchend",function(e){distanceX>100?($(".user-wrapper").addClass("user-show"),$(".user-mask").fadeIn(1e3)):distanceX<-100&&($(".user-wrapper").removeClass("user-show"),$(".user-mask").fadeOut(1e3))})}if($(".city-list").length>0){var lis=$(".city-list").children();lis.on("click",function(){$(this).siblings("li").removeClass("city-selected"),$(this).addClass("city-selected"),$(".current-location").text($(this).text())})}if($(".oldAndNew").length>0){var data1=[{text:"5成新",value:1},{text:"6成新",value:2},{text:"7成新",value:3},{text:"8成新",value:4},{text:"9成新",value:5}],picker1El=document.getElementById("picker1"),picker2El=document.getElementById("picker2");(picker1=new Picker({data:[data1]})).on("picker.select",function(e,t){picker1El.innerText=data1[t[0]].text}),picker1El.addEventListener("click",function(){picker1.show()}),(picker2=new Picker({data:[data1]})).on("picker.select",function(e,t){picker2El.innerText=data1[t[0]].text}),picker2El.addEventListener("click",function(){picker2.show()})}if($(".infoSelect").length>0){var data1=[{text:"纺织服装类加工企业",value:1},{text:"加工个体户",value:2}],data2=[{text:"内销",value:1},{text:"外销",value:2}],picker1El=document.getElementById("picker1"),picker2El=document.getElementById("picker2");if(picker1El){var picker1=new Picker({data:[data1]});picker1.on("picker.select",function(e,t){picker1El.innerText=data1[t[0]].text}),picker1El.addEventListener("click",function(){picker1.show()})}if(picker2El){var picker2=new Picker({data:[data2]});picker2.on("picker.select",function(e,t){picker2El.innerText=data2[t[0]].text}),picker2El.addEventListener("click",function(){picker2.show()})}}if($('script[src="./js/city.js"]').length>0){var nameEl=document.getElementById("city-picker");nameEl.addEventListener("click",function(){picker.show()});var first=[],second=[],third=[],selectedIndex=[0,0,0],checked=[0,0,0];creatList(city,first),city[selectedIndex[0]].hasOwnProperty("sub")?creatList(city[selectedIndex[0]].sub,second):second=[{text:"",value:0}],city[selectedIndex[0]].sub[selectedIndex[1]].hasOwnProperty("sub")?creatList(city[selectedIndex[0]].sub[selectedIndex[1]].sub,third):third=[{text:"",value:0}];var picker=new Picker({data:[first,second,third],selectedIndex:selectedIndex,title:"地址选择"});picker.on("picker.select",function(e,t){var i=first[t[0]].text,n=second[t[1]].text,c=third[t[2]]?third[t[2]].text:"";nameEl.innerText=i+" "+n+" "+c}),picker.on("picker.change",function(e,t){0===e?function(){second=[],third=[],checked[0]=t;var e=city[t];if(e.hasOwnProperty("sub")){creatList(e.sub,second);var i=city[t].sub[0];i.hasOwnProperty("sub")?creatList(i.sub,third):(third=[{text:"",value:0}],checked[2]=0)}else second=[{text:"",value:0}],third=[{text:"",value:0}],checked[1]=0,checked[2]=0;picker.refillColumn(1,second),picker.refillColumn(2,third),picker.scrollColumn(1,0),picker.scrollColumn(2,0)}():1===e&&function(){third=[],checked[1]=t;var e=checked[0];city[e].sub[t].hasOwnProperty("sub")?(creatList(city[e].sub[t].sub,third),picker.refillColumn(2,third),picker.scrollColumn(2,0)):(third=[{text:"",value:0}],checked[2]=0,picker.refillColumn(2,third),picker.scrollColumn(2,0))}()}),picker.on("picker.valuechange",function(e,t){})}var rating=function(){function e(e,t){var i=function(){};i.prototype=t.prototype,e.prototype=new i,e.prototype.constructor=e}var t=function(e,t){this.$el=$(e),this.$items=this.$el.find(".rating-item"),this.opts=t,this.add=1,this.selectEvent="mouseover"};t.prototype.init=function(){this.lightOn(this.opts.num),this.bindEvent()},t.prototype.lightOn=function(e){e=parseInt(e),this.$items.each(function(t){t<e?$(this).css("background-image","url(./images/Star_light.png)"):$(this).css("background-image","url(./images/Star_off.png)")})},t.prototype.bindEvent=function(){var e=this,t=e.$items.length;e.$el.on(e.selectEvent,".rating-item",function(i){var n=$(this),c=0;e.select(i,n),c=n.index()+e.add,e.lightOn(c),"function"==typeof e.opts.select&&e.opts.select.call(this,c,t)}).on("click",".rating-item",function(){e.opts.num=$(this).index()+e.add,"function"==typeof e.opts.chosen&&e.opts.chosen.call(this,e.opts.num,t)}).on("mouseout",function(){e.lightOn(e.opts.num)})},t.prototype.select=function(){throw new Error("子类必须重写select方法")},t.prototype.unbindEvent=function(){this.$el.off()};var i=function(e,i){t.call(this,e,i),this.selectEvent="mouseover"};e(i,t),i.prototype.lightOn=function(e){t.prototype.lightOn.call(this,e)},i.prototype.select=function(){self.add=1};var n=function(e,i){t.call(this,e,i),this.selectEvent="mousemove"};e(n,t),n.prototype.lightOn=function(e){var i=parseInt(e);isHalf=i!==e,t.prototype.lightOn.call(this,i),isHalf&&this.$items.eq(i).css("background-position","0 -90px")},n.prototype.select=function(e,t){e.pageX-t.offset().left<t.width()/2?this.add=.5:this.add=1};var c={mode:"lightEntire",num:0,readOnly:!1,select:function(){},chosen:function(){}},s={lightEntire:i,lightHalf:n},o=function(e,t){var i=$(e),n=i.data("rating"),o=$.extend({},c,"object"==typeof t&&t);s[o.mode]||(o.mode="lightEntire"),n||(i.data("rating",n=new s[o.mode](e,o)),n.init()),"string"==typeof t&&n[t]()};return $.fn.extend({rating:function(e){return this.each(function(){o(this,e)})}}),{init:o}}();$("#rating").rating({mode:"lightEntire",num:0}),$("#rating-1").rating({mode:"lightEntire",num:4}),$("#rating-2").rating({mode:"lightEntire",num:3}),$("#rating-3").rating({mode:"lightEntire",num:5});