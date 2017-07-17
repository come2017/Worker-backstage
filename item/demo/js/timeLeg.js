/**
 * Created by Administrator on 2016/11/17.
 */
layui.use(['layer','laypage'],function(){
    //创建弹窗对象
    var layer = layui.layer;
    //常见分页对象
    var laypage = layui.laypage;

    //创建页面级对象
    var timeLeg = {
        //初始化
        init : function(){
            //分页
            this.page();

            //新增
            this.add();

            //解决功能区换行 导致details下移的问题。
            $(".fun").funBr();
        },

        //新增
        add : function(){
            var timeLegAdd = $(".timeLegAdd");
            timeLegAdd.on("click",function(){
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
            })

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

    //初始化执行
    timeLeg.init();

});