/**
 * Created by Administrator on 2016/11/16.
 */
layui.use(['layer','laypage','laydate'],function(){
    //创建弹出层对象
    var layer = layui.layer;
    //创建分页对象
    var laypage = layui.laypage;

    //页面级对象
    var dailyApply = {
        //初始化方法
        init : function(){

            //执行切换方法
            this.tab();

            //添加方法
            this.add();

            //分页
            this.page();

            //时间
            this.date();

            //解决功能区换行 导致details下移的问题。
            $(".fun").funBr();

        },

        //tab切换
        tab : function(){
            var tabHeadList = $(".dailyApplyTabHead>li"),
                tabBodyList = $(".dailyApplyTabBody>div");
            //默认第一个显示
            tabHeadList.eq(0).addClass("active");
            tabBodyList.eq(0).show();

            tabHeadList.on("click",function(){
                var index = $(this).index();

                $(this).addClass("active").siblings("li").removeClass("active");
                tabBodyList.eq(index).show().siblings("div").hide();

            });
        },

        //添加功能
        add : function(){
            var add = $(".dailyApplyAdd");
            add.on("click",function(){
                layer.open({
                    type :1,//弹窗的类型
                    title: '添加',
                    content: '可以填写任意的layer代码',
                    area : ["600px","400px"], //弹窗的宽高
                    resize : true, //是否可以拉伸
                    shade: 0, //是否有遮罩层
                    maxmin : true, //显示最大化 和 最小化
                    moveOut : true, //是否可以拖坠到窗口外
                    id : 'add' // id存在的时候   不管是什么类型的弹出层，只允许出现一个。
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

    }

    //初始化执行
    dailyApply.init();

})