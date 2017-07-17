/**
 * Created by Administrator on 2016/10/17.
 */
$(function(){
    //$("body").css("height" , viewH + "px");//控制视图高度固

var landing = {

    init : function(){
        //登陆页面背景移动
         this.beMove();
    },
    oBody : $(".loading_body"),
    //登陆页面背景移动
    beMove : function(){
        var _this = this,
            timer = null,
            distance = 600;
        timer = setInterval(function(){
            distance > -1200 ? distance-- : distance = viewW;
            _this.oBody.css("backgroundPosition" , distance );
        },100)
    }

};
landing.init();


});

