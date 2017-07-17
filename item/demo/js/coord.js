/**
 * Created by Administrator on 2016/10/28.
 */
layui.use('form', function(){

//创建的form验证对象
var form = layui.form();

//页面级对象
var coord = {

    //初始化程序
    init : function(){
        //初始化的时候去 手动重新渲染一下select，防止切换页面出现bug
        form.render('select');
        //执行 添加TR事件
        this.coord_add();
        //执行 表单提交事件
        this.coord_submit();
        //执行 添加验证方法
        this.coord_submitFun();

        //解决功能区换行 导致details下移的问题。
        $(".fun").funBr();

    },

    //添加tr事件
    coord_add : function(){
         $("a[data-Table]").on("click",function(){
             var options = $(this).attr("data-Table");
             $(this).Tables({
                 options : options
             });

             //重新渲染layUi.form - select下拉框
             form.render('select');
         })
    },

    //数据提交事件
    coord_submit : function(){
        form.on('submit(*)', function(data){
            console.log(data.elem) //被执行事件的元素DOM对象，一般为button对象
            console.log(data.form) //被执行提交的form对象，一般在存在form标签时才会返回
            console.log(data.field) //当前容器的全部表单字段，名值对形式：{name: value}
            return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
        });
    },

    //增加验证方法
    coord_submitFun : function(){
        form.verify({

            //前两位数字，后三位为字母
            twoDigitNumver: function(value){
                var reg = /^\d{2}[a-z]{3}$/i;
                if(!reg.test(value)){
                    return "前两位数字，后三位字母"
                };
            }
        });
    }


};

//初始化执行
coord.init();


});


