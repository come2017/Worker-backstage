/**
 * Created by Administrator on 2016/11/17.
 */
layui.use("layer",function(){
   //创建弹出层对象
    var layer = layui.layer;

    //创建页面级对象
    var timeRefresh = {
        //初始化
        init : function(){
            //弹出层
            var timeRefreshA = $(".timeRefreshA");
            var _this = this;
            timeRefreshA.on("click",function(){
                _this.createPop();
            })

            //解决功能区换行 导致details下移的问题。
            $(".fun").funBr();
        },

        //创建弹出层
        createPop : function( index ){
            //创建弹出层
            layer.open({
                type :1,//弹窗的类型
                title: '合并预览',
                content: '可以填写任意的layer代码',
                area : ["600px","600px"], //弹窗的宽高
                resize : true, //是否可以拉伸
                shade: 0.4, //是否有遮罩层
                maxmin : true, //显示最大化 和 最小化
                moveOut : true, //是否可以拖坠到窗口外
                id : 'pop' // id存在的时候   不管是什么类型的弹出层，只允许出现一个。
            });
        }
    };
    timeRefresh.init();
});