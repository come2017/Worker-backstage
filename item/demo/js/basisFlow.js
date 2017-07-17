/**
 * Created by Administrator on 2016/11/23.
 */
layui.use("laypage",function(){
    //创建分页对象
    var laypage = layui.laypage;

    //创建页面级对象
    var basisFlow = {
        //初始化
        init : function(){

            //表格
            this.table();
        },

        //表格相关操作
        table : function(){
            var w = 0;
            jQuery("#list2").jqGrid(
                {
                    url : 'js/data/JSONData.json',//获取数据的地址
                    datatype : "json", //从服务器端返回的数据类型，默认xml。可选类型：xml，local，json，jsonnp，script，xmlstring，jsonstring，clientside
                    mtype : "get" ,//ajax提交方式。POST或者GET，默认GET
                    colNames : ['操作', '航班号', '班期', '标记','航站1', '离站','到站','航站2', '离站','到站','航站3', '离站','到站','航站4', '离站','到站','航站5', '机型','类型','有效期','备注' ], //列显示名称，是一个数组对象
                    colModel : [
                        {name : 'operation',index : 'operation',width : 80 , align:'center' , formatter:'actions',
                            formatoptions:{keys:true}}, //操作
                        {name : 'FlightId',index : 'FlightId',width : 80 , align : "center", editable : true ,sorttype:'int' , number : true}, //航班号
                        {name : 'Days',index : 'Days',width : 80 , align : "center" , editable : true},  //班期
                        {name : 'sign',index : 'sign',width : 80,align : "center", editable : true}, //标记
                        {name : 'AP1_four',index : 'AP1_four',width : 80,align : "center", editable : true}, //航站1
                        {name : 'total',index : 'total',width : 80,align : "center", editable : true}, //离站
                        {name : 'note',index : 'note',width : 80, align : "center" , sortable : false, editable : true}, //到站
                        {name : 'AP2_four',index : 'AP2_four',width : 80, align : "center" , sortable : false, editable : true}, //航站2
                        {name : '11',index : '11',width : 80, align : "center" , sortable : false, editable : true}, //离站
                        {name : '22',index : '22',width : 80, align : "center" , sortable : false, editable : true}, //到站
                        {name : 'AP3_four',index : 'AP3_four',width : 80, align : "center" , sortable : false},  //航站3
                        {name : '33',index : '33',width : 80, align : "center" , sortable : false}, //离站
                        {name : '44',index : '44',width : 80, align : "center" , sortable : false}, //到站
                        {name : 'AP4_four',index : 'AP4_four',width : 80, align : "center" , sortable : false}, //航站4
                        {name : '55',index : '55',width : 80, align : "center" , sortable : false}, //离站
                        {name : '66',index : '66',width : 80, align : "center" , sortable : false}, //到站
                        {name : 'AP5_four',index : 'AP5_four',width : 80, align : "center" , sortable : false}, //航站5
                        {name : 'Aircraft_Type',index : 'Aircraft_Type',width : 80, align : "center" , sortable : false}, //机型
                        {name : 'Property',index : 'Property',width : 80, align : "center" , sortable : false}, //类型
                        {name : 'VALIDPeriodBegin',index : 'VALIDPeriodBegin',width : 140, align : "center" , sortable : false}, //有效期
                        {name : 'beizhu',index : 'beizhu',width : 140, align : "center" , sortable : false} //备注
                    ],  //常用到的属性：name 列显示的名称；index 传到服务器端用来排序用的列名称；width 列宽度；align 对齐方式；sortable 是否可以排序
                    autowidth : true,//如果为ture时，则当表格在首次被创建时会根据父元素比例重新调整表格宽度。如果父元素宽度改变，为了使表格宽度能够自动调整则需要实现函数：setGridWidth
                    rowNum : 10, //在grid上显示记录条数，这个参数是要被传递到后台
                    rowList : [ 10, 20, 30 ], //	一个下拉选择框，用来改变显示记录数，当选择时会覆盖rowNum参数传递到后台
                    pager : '#pager2', //定义翻页用的导航栏，必须是有效的html元素。翻页工具栏可以放置在html页面任意位置
                    sortname : 'FlightId',  //默认的排序列。可以是列名称或者是一个数字，这个参数会被提交到后台
                    viewrecords : true, // 是否要显示总记录数
                    shrinkToFit: false, //此属性用来说明当初始化列宽度时候的计算类型，如果为ture，则按比例初始化列宽度。如果为false，则列宽度使用colModel指定的宽度
                    forceFit : true ,// 当为ture时，调整列宽度不会改变表格的宽度。当shrinkToFit 为false时，此属性会被忽略
                    height : '411', //表格高度，可以是数字，像素值或者百分比
                    hoverrows : true, //当为false时mouse hovering会被禁用
                    loadonce : true ,//如果为ture则数据只从服务器端抓取一次，之后所有操作都是在客户端执行，翻页功能会被禁用
                    multiselect : true ,//定义是否可以多选
                    viewrecords : true, //是否要显示总记录数
                    gridComplete : function() { //当表格所有数据都加载完成而且其他的处理也都完成时触发此事件，排序，翻页同样也会触发此事件
                        var ids = $("#list2").jqGrid('getDataIDs');
                        /*for ( var i = 0; i < ids.length; i++) {
                            var cl = ids[i];
                            be = "<a class='blue f18' href='#' onclick=\"$('#list2').editRow('" + cl + "');\" ><i class='icon-zoom-in'></i></a>";
                            se = "<a class='green f18 mx10' href='#' onclick=\"$('#list2').saveRow('" + cl + "');\" ><i class='icon-pencil'></i></a>";
                            ce = "<a class='red f18' href='#' onclick=\"$('#list2').restoreRow('" + cl + "');\" ><i class='icon-trash'></i></a>";
                            $("#list2").jqGrid('setRowData', ids[i],
                                {
                                    operation : be + se + ce
                                });
                        }*/
                    },
                    loadComplete : function(){ //当从服务器返回响应时执行，xhr：XMLHttpRequest 对象

                        //修改分页的样式
                        updatePagerIcons(this);

                    }


                });

            //自定义菜单按钮
            $("#list2").jqGrid('navGrid', '#pager2',
                { 	//navbar 初始化设置
                    edit: true,
                    editicon : 'icon-pencil blue f18 scale',
                    add: true,
                    addicon : 'icon-plus-sign purple f18 scale',
                    del: true,
                    delicon : 'icon-trash red f18 scale',
                    search: true,
                    searchicon : 'icon-search orange f18 scale',
                    refresh: true,
                    refreshicon : 'icon-refresh green f18 scale',
                    view: true,
                    viewicon : 'icon-zoom-in grey f18 scale'
                }
            );

            //分页替换默认样式
            function updatePagerIcons(table) {
                var replacement =
                {
                    'ui-icon-seek-first' : 'icon_page_first', //第一页
                    'ui-icon-seek-prev' : 'icon_page_prev',  //上一页
                    'ui-icon-seek-next' : 'icon_page_next', //下一页
                    'ui-icon-seek-end' : 'icon_page_last' //最后一页
                };
                //分页 - 翻页按钮 添加类名
                $('.ui-pg-table:not(.navtable) > tbody > tr > .ui-pg-button > .ui-icon').each(function(){
                    var icon = $(this);
                    var $class = $.trim(icon.attr('class').replace('ui-icon', ''));
                    if($class in replacement) icon.attr('class', 'ui-icon '+replacement[$class]);
                });
                //分页 - input输入框 添加类名
                $('.ui-pg-table:not(.navtable) > tbody > tr .ui-pg-input').attr("class" , "ui-pg-input icon_page_ipt")
            }
            


        }
    };
    basisFlow.init();
});