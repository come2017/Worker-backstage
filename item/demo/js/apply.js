/**
 * Created by Administrator on 2016/11/23.
 */
layui.use("laypage",function(){
    //创建分页对象
    var laypage = layui.laypage;

    //创建页面级对象
    var apply = {
        //初始化
        init : function(){
            //分页
            this.page();
        },

        //加入分页
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

    //初始化执行
    apply.init();
})