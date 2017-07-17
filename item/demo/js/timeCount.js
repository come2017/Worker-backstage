/**
 * Created by Administrator on 2016/11/17.
 */
$(function(){
   //创建页面级对象
    var timeCount = {
        //初始化
        init : function(){
            //切换
            this.tab();

            //解决功能区换行 导致details下移的问题。
            $(".fun").funBr();
        },
        tab : function(){
            var timeCountTabHeadList = $(".timeCountTabHead>li"),
                timeCountTagText = $(".timeCountTagText");

            timeCountTabHeadList.on("click",function(){
                var index = $(this).index();
                $(this).addClass("active").siblings().removeClass("active")
                timeCountTagText.eq(index).show().siblings(".timeCountTagText").hide();
            });

        }
    };

    //执行初始化
    timeCount.init();

});