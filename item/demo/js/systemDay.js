/**
 * Created by Administrator on 2016/11/23.
 */
layui.use(['laypage','laydate'],function(){
    //创建分页对象
    var laypage = layui.laypage;

    //创建页面级对象
    var basisFlow = {
        //初始化
        init : function(){
            //分页
            this.page();

            //时间
            this.date();

            //解决功能区换行 导致details下移的问题。
            $(".fun").funBr();
        },

        //创建分页
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
        },

        //时间日期
        date : function(){
            $(".date").on("click",function(){
                laydate({
                    elem: this, //需显示日期的元素选择器
                    event: 'click', //触发事件
                    format: 'YYYY-MM-DD', //日期格式
                    istime: false, //是否开启时间选择
                    isclear: true, //是否显示清空
                    istoday: true, //是否显示今天
                    issure: true,// 是否显示确认
                    festival: true, //是否显示节日
                    fixed: false, //是否固定在可视区域
                    zIndex: 1 //css z-index
                })
            })
        }
    };
    basisFlow.init();
});