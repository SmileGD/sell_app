function creatList(t,e){t.forEach(function(t,i,n){var c=new Object;c.text=t.name,c.value=i,e.push(c)})}if($(".search").length>0&&($(".search").focus(function(){$(this).css("padding-left","1rem"),$(".icon-search").css("left","0.6rem")}),$(".search").blur(function(){0==$(this).val().length&&($(this).css("padding-left","7.8rem"),$(".icon-search").css("left","7.4rem"))})),$(".btn-announce").each(function(){$(this).on("click",function(){$(".announce").css("display","block")})}),$(".city-list").length>0){var lis=$(".city-list").children(),l=lis.length%3;if(0==l)for(var i=0;i<3;i++)lis[lis.length-i-1].style.marginBottom="2.2rem";else for(var i=0;i<l;i++)lis[lis.length-i-1].style.marginBottom="2.2rem"}if($(".info-check").each(function(){$(this).on("click",function(){$(this).find(".icon-check").toggle()})}),$(".info-radio").on("click",function(){$(this).siblings(".info-radio").find(".icon-check").hide(),$(this).find(".icon-check").show()}),$(".date").each(function(){$(this).on("change",function(){$(this).siblings(".time-container").html($(this).val())})}),$(".gender").each(function(){$(this).on("change",function(){$(this).siblings(".gender-container").html($(this).val())})}),$('script[src="./node_modules/swiper/dist/js/swiper.min.js"]').length>0)var swiper=new Swiper(".swiper-container",{pagination:".swiper-pagination",slidesPerView:1,paginationClickable:!0,spaceBetween:30,loop:!0});if($(".button").on("click",function(){$(this).toggleClass("button-on"),$(".icon-tool").toggle(),$(".icon-worker").toggle()}),$(".menu").on("click",function(){$(".menu-wrapper").fadeIn()}),$(".close").on("click",function(){$(".menu-wrapper").fadeOut()}),$(".select").on("click",function(){$(".city-select").toggle()}),$('script[src="./js/single.js"]').length>0){var data1=[{text:"5成新",value:1},{text:"6成新",value:2},{text:"7成新",value:3},{text:"8成新",value:4},{text:"9成新",value:5}],picker1El=document.getElementById("picker1"),picker2El=document.getElementById("picker2"),picker1=new Picker({data:[data1]});picker1.on("picker.select",function(t,e){picker1El.innerText=data1[e[0]].text}),picker1El.addEventListener("click",function(){picker1.show()});var picker2=new Picker({data:[data1]});picker2.on("picker.select",function(t,e){picker2El.innerText=data1[e[0]].text}),picker2El.addEventListener("click",function(){picker2.show()})}if($('script[src="./js/city.js"]').length>0){var nameEl=document.getElementById("city-picker");nameEl.addEventListener("click",function(){picker.show()});var first=[],second=[],third=[],selectedIndex=[0,0,0],checked=[0,0,0];creatList(city,first),city[selectedIndex[0]].hasOwnProperty("sub")?creatList(city[selectedIndex[0]].sub,second):second=[{text:"",value:0}],city[selectedIndex[0]].sub[selectedIndex[1]].hasOwnProperty("sub")?creatList(city[selectedIndex[0]].sub[selectedIndex[1]].sub,third):third=[{text:"",value:0}];var picker=new Picker({data:[first,second,third],selectedIndex:selectedIndex,title:"地址选择"});picker.on("picker.select",function(t,e){var i=first[e[0]].text,n=second[e[1]].text,c=third[e[2]]?third[e[2]].text:"";nameEl.innerText=i+" "+n+" "+c}),picker.on("picker.change",function(t,e){0===t?function(){second=[],third=[],checked[0]=e;var t=city[e];if(t.hasOwnProperty("sub")){creatList(t.sub,second);var i=city[e].sub[0];i.hasOwnProperty("sub")?creatList(i.sub,third):(third=[{text:"",value:0}],checked[2]=0)}else second=[{text:"",value:0}],third=[{text:"",value:0}],checked[1]=0,checked[2]=0;picker.refillColumn(1,second),picker.refillColumn(2,third),picker.scrollColumn(1,0),picker.scrollColumn(2,0)}():1===t&&function(){third=[],checked[1]=e;var t=checked[0];city[t].sub[e].hasOwnProperty("sub")?(creatList(city[t].sub[e].sub,third),picker.refillColumn(2,third),picker.scrollColumn(2,0)):(third=[{text:"",value:0}],checked[2]=0,picker.refillColumn(2,third),picker.scrollColumn(2,0))}()}),picker.on("picker.valuechange",function(t,e){})}var rating=function(){function t(t,e){var i=function(){};i.prototype=e.prototype,t.prototype=new i,t.prototype.constructor=t}var e=function(t,e){this.$el=$(t),this.$items=this.$el.find(".rating-item"),this.opts=e,this.add=1,this.selectEvent="mouseover"};e.prototype.init=function(){this.lightOn(this.opts.num),this.bindEvent()},e.prototype.lightOn=function(t){t=parseInt(t),this.$items.each(function(e){e<t?$(this).css("background-image","url(./images/Star_light.png)"):$(this).css("background-image","url(./images/Star_off.png)")})},e.prototype.bindEvent=function(){var t=this,e=t.$items.length;t.$el.on(t.selectEvent,".rating-item",function(i){var n=$(this),c=0;t.select(i,n),c=n.index()+t.add,t.lightOn(c),"function"==typeof t.opts.select&&t.opts.select.call(this,c,e)}).on("click",".rating-item",function(){t.opts.num=$(this).index()+t.add,"function"==typeof t.opts.chosen&&t.opts.chosen.call(this,t.opts.num,e)}).on("mouseout",function(){t.lightOn(t.opts.num)})},e.prototype.select=function(){throw new Error("子类必须重写select方法")},e.prototype.unbindEvent=function(){this.$el.off()};var i=function(t,i){e.call(this,t,i),this.selectEvent="mouseover"};t(i,e),i.prototype.lightOn=function(t){e.prototype.lightOn.call(this,t)},i.prototype.select=function(){self.add=1};var n=function(t,i){e.call(this,t,i),this.selectEvent="mousemove"};t(n,e),n.prototype.lightOn=function(t){var i=parseInt(t);isHalf=i!==t,e.prototype.lightOn.call(this,i),isHalf&&this.$items.eq(i).css("background-position","0 -90px")},n.prototype.select=function(t,e){t.pageX-e.offset().left<e.width()/2?this.add=.5:this.add=1};var c={mode:"lightEntire",num:0,readOnly:!1,select:function(){},chosen:function(){}},o={lightEntire:i,lightHalf:n},s=function(t,e){var i=$(t),n=i.data("rating"),s=$.extend({},c,"object"==typeof e&&e);o[s.mode]||(s.mode="lightEntire"),n||(i.data("rating",n=new o[s.mode](t,s)),n.init()),"string"==typeof e&&n[e]()};return $.fn.extend({rating:function(t){return this.each(function(){s(this,t)})}}),{init:s}}();$("#rating").rating({mode:"lightEntire",num:0}),$("#rating-1").rating({mode:"lightEntire",num:4}),$("#rating-2").rating({mode:"lightEntire",num:3}),$("#rating-3").rating({mode:"lightEntire",num:5});