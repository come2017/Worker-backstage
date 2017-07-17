$(function(){
//基础管理——安全文档页面
	//新建
	$('.S_title_a').on('click', function(){
		layer.open({
			type: 2,
			title: ['新建安全文件数据','background:#1F578C;color:#fff;border-radius:4px'],
			maxmin: true, //最大化按钮
			shadeClose: true, //点击遮罩关闭层
			area : ['770px' , '500px'], //定义宽高
			content: ['basics_secudocument_layer.html','no'] //弹出页面
		});
	});
	
	//修改
	$('.S_title_b').on('click', function(){
		if ($('input:checkbox').attr("checked")) {
			layer.open({
				type: 2,
				title: ['修改安全文件数据','background:#1F578C;color:#fff;border-radius:4px'],
				maxmin: true, //最大化按钮
				shadeClose: true, //点击遮罩关闭层
				area : ['770px' , '600px'], //定义宽高
				content: 'basics_secudocument_layer.html' //弹出页面
			});
		}else{
			alert('请选择要修改的内容');
		};
	});			
	
	//废除
	$('.S_title_c').on('click', function(){
		if ($('input:checkbox').attr("checked")) {
			alert('废除');
		}else{
			alert('请选择要废除的内容')
		};
	});			
	
	//归档
	$('.S_title_d').on('click', function(){
		if ($('input:checkbox').attr("checked")) {
			alert('归档');
		}else{
			alert('请选择要归档的内容');
		};
	});			
	
	//查看
	$('.S_title_e').on('click', function(){
		if ($('input:checkbox').attr("checked")) {
			layer.open({
				type: 2,
				title: ['修改安全文件数据','background:#1F578C;color:#fff;border-radius:4px'],
				maxmin: true, //最大化按钮
				shadeClose: true, //点击遮罩关闭层
				area : ['770px' , '600px'], //定义宽高
				content: 'basics_secudocument_layer.html' //弹出页面
			});
		}else{
			alert('请选择要查看的内容');
		};
	});
	
//日常管理——安全奖惩页面
	$('#good-cha').on('click', function(){
		layer.open({
			type: 2,
			title: ['查看奖惩信息','background:#1F578C;color:#fff;border-radius:4px'],
			maxmin: true, //最大化按钮
			shadeClose: true, //点击遮罩关闭层
			area : ['1000px' , '540px'], //定义宽高
			content: ['../daily/daily_good_layer.html',"no"] //弹出页面
		});
	});
//日常管理——安全事件页面
	$('.secu_layer').on('click', function(){
		layer.open({
			type: 2,
			title: ['查看事故信息','background:#1F578C;color:#fff;border-radius:4px'],
			maxmin: true, //最大化按钮
			shadeClose: true, //点击遮罩关闭层
			area : ['1050px' , '500px'], //定义宽高
			content: ['../daily/daily_secu_layer.html','no'] //弹出页面
		});
	});
	
//基础管理——安全生产标准化
	$('#biaozhu_cha').on('click', function(){
		layer.open({
			type: 2,
			title: ['编辑数据','background:#1F578C;color:#fff;border-radius:4px'],
			maxmin: true, //最大化按钮
			shadeClose: true, //点击遮罩关闭层
			area : ['1000px' , '640px'], //定义宽高
			content: ['basics_biaozhun_layer.html','no'], //弹出页面
		});
	});
	
	//新建
	$('#biaozhu_new').on('click', function(){
		parent.parent.layer.open({
			type: 2,
			title: ['新增记录','background:#1F578C;color:#fff;border-radius:4px'],
			maxmin: true, //最大化按钮
			shadeClose: true, //点击遮罩关闭层
			area : ['970px' , '600px'], //定义宽高
			content: 'basics_biaozhun_tan01_new.html' //弹出页面
		});
	});
	//修改
	$('#biaozhu_xiu').on('click', function(){
		if ($('input:checkbox').attr("checked")) {
			alert('修改');
		}else{
			alert('请选择要修改的内容');
		};
	});			
	
	//废除
	$('#biaozhu_fei').on('click', function(){
		if ($('input:checkbox').attr("checked")) {
			alert('废除');
		}else{
			alert('请选择要废除的内容')
		};
	});
})
