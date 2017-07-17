/**
 * Created by Administrator on 2016/11/15.
 */
layui.use(['layer','laypage'],function(){

//创建弹窗对象
var layer = layui.layer;
//创建分页对象
var laypage = layui.laypage;

//创建页面级对象
var dailyDaily = {
    //初始化
    init : function(){
        //计划对比
        this.comparison();
        //添加
        this.addData();

        //分页
        this.page();

        //解决功能区换行 导致details下移的问题。
        $(".fun").funBr();
    },

    //点击查看 - 计划对比
    comparison : function(){
        var dailyd_comparison = $(".dailyd_comparison");
        //创建弹窗
        dailyd_comparison.on("click",function(){

            layer.open({
                type :1,//弹窗的类型
                title: '计划对比',
                content: '可以填写任意的layer代码',
                area : ["60%","60%"], //弹窗的宽高
                resize : true, //是否可以拉伸
                shade: 0, //是否有遮罩层
                maxmin : true, //显示最大化 和 最小化
                moveOut : true, //是否可以拖坠到窗口外
                id : 'dailyd' // id存在的时候   不管是什么类型的弹出层，只允许出现一个。
            });
        });
    },

    //点击添加 - 创建弹窗
    addData : function(){
        var dailyd_add = $(".dailyd_add");
        dailyd_add.on("click",function(){
            layer.open({
                type :1,//弹窗的类型
                title: '添加计划',
                content: '可以填写任意的layer代码',
                area : ["400px","400px"], //弹窗的宽高
                resize : true, //是否可以拉伸
                shade: 0.4, //是否有遮罩层
                maxmin : true, //显示最大化 和 最小化
                moveOut : true, //是否可以拖坠到窗口外
                id : 'dailyd' // id存在的时候   不管是什么类型的弹出层，只允许出现一个。
            });
        });
    },

    //分页
    page : function(){
        laypage({
            cont : $("td.page"),//添加的容器
            pages: 50, //总页数
            groups : 3, //连续分页数
            skin : "#3681C0",//控制分页颜色
            first: "1",//首页
            last: 10, //尾页
            skip : true,
            prev: '<em>上一页</em>',
            next: '<em>下一页</em>',
            jump: function(obj, first){
                //得到了当前页，用于向服务端请求对应数据
                var curr = obj.curr;
            }
        });
    }



};

//页面对象初始化执行
dailyDaily.init();

});