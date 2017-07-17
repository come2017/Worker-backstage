/**
 * Created by Administrator on 2016/11/14.
 */
$(function(){

var login = {
        init : function(){
            //验证
            this.landing();
        },
        oForm : $("#landing"),
        //登陆验证
        landing : function (){
        var _this = this.oForm,
            user = _this.find("input[name^='user']"),
            password = _this.find("input[name^='password']"),
            verify = _this.find("input[name^='verify']"),
            submit = _this.find("input[name^='submit']"),
            off = false,
            breakOff = false,
            onOff = false;
        user.on("input blur" , function(){
            off = landForm( this );
        });
        password.on("input blur" , function(){
            breakOff = landForm( this );
        });
        verify.on("input blur" , function(){
            onOff = landForm( this  )
        });
        _this.on("submit" , function(){
        if( off == false || breakOff == false || onOff == false ){
            return false;
        };
        });
        function landForm( _this ){
            var _this = $(_this);
            if( _this.val() == '' ){
                _this.siblings("span").css({
                    visibility : "visible" ,
                    color : "#f00"
                });
                return false;
            }else{
                _this.siblings("span").css({
                    visibility : "visible" ,
                    color : "#8BF240"
                });
                return true;
            }
        };
    }
};
    login.init();
})