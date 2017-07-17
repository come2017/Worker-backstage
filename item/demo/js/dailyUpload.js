/**
 * Created by Administrator on 2016/11/15.
 */
layui.use(['form','upload'],function(){
    var form = layui.form(),
        upload = layui.upload;
    form.render();

    //创建页面级对象
    var dailyUpload = {

        //初始化
        init : function(){


            //解决功能区换行 导致details下移的问题。
            $(".fun").funBr();
        }

    };

    //初始化执行
    dailyUpload.init();
})