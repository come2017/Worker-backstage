/**
 * Created by Administrator on 2016/10/28.
 */
/*
*
*
* */
$(function(){

//生成表格对象，jquery创建
    $.fn.Tables = function( options ){
        var _this = this;

        //需要添加的内容
        _this.content = null;

        //配置参数
        _this.settings = {
            options : null ,
            //如果第一个tr里面有input或者select等， 新创建的tr的input，select的value是否继承
            isInheritFocus : false,
            //是否是在table的最下面添加还是在选中的当前行添加
            isLastAdd : true ,
            //回调函数
            callback : function(){}

        };
        $.extend( _this.settings , options );
        var id = _this.settings.options.split("~")[1],
            type = _this.settings.options.split("~")[0],
            table = $("#"+id);
        //初始化
        _this.init = function(){

            if( type == "add" ){ //新增
                _this.add();
            }else if( type == "operation"){

            }else{
                return;
            }
        };
        //新增
        _this.add = function(){
            var obj;
            if( _this.settings.isLastAdd ){ //最后添加
                obj = table.find("tbody>tr:last");
            }else{//当前行后面添加
                obj = _this.parents("tr").first();
            };
            var content = _this.content( obj , _this.settings.isInheritFocus );
            obj.after(content);
        };

        //初始化生成表格
        this.production = function(){

        }

        //获取具体tr里面是什么内容
        _this.content = function(){
            var isInheritFocus = arguments[1],
                tr = arguments[0],
                str = $("<tr></tr>");
            var td = tr.children();

            //如果为真为继承
            if(isInheritFocus){
                str.html( tr.html() );
            }else{//不继承
                str.html( tr.html() );
                str.find("input,textarea").val("");
            }
            //console.log( str )
            return str;
        }
        _this.init();
        return _this;
    };


});


//新表格控件
/*
(function($){
    $.fn.FlyTable = function( options ){
        this.settings = $.extend({
            data : false,//生成表格的地址
            isAdd: true ,//是否有添加按钮
            striped : true , //是否添加斑马线
            hover : true,//鼠标悬停hover效果
            sort : true, //是否排序
            drag : true, //是否拖动
            future : false,//表头固定
            coml : false //表头内容
        },options);

        //初始化
        this.init = function(){

            if( this.settings.data == false || typeof this.settings.data != "object"){
                return alert("数据有错误")
            };
            if( this.settings.coml == false || typeof this.settings.coml != "object"){
                return alert("表头数据呢!")
            };

            //生成表格
            this.create()

        };

        //先生成表头
        this.head = function(){

        };

        //再生成身体
        this.body = function(){

        };

        //生成表格
        this.create = function(){
            //头尾相接
            this.head();
            this.body();

        };

        //初始化执行
        this.init();
        return this;
    };
})(jQuery);*/
