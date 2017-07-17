$().ready(function(){
	window._body = $(document.body);
	
	//加载模型
	window.mods=_body.attr('mods');
	var mod, i=-1;
	if(mods!=undefined){
		mods=mods.split(',');
		while((mod=mods[++i])!=undefined){
			switch(mod){
				//下拉列表选中
				case 'selectValue' : {
					_body.find("select[_value]").each(function(){$(this).val($(this).attr("_value"));});
				}; break;
				//单选选中
				case 'radioSelected' : {
					var selectedConfig = _body.attr('selectedConfig');
					if(selectedConfig!=undefined && selectedConfig!=''){
						selectedConfig = eval('({'+selectedConfig+'})');
						for(var n in selectedConfig) {
							_body.find("input[type='radio'][name='"+n+"'][value='"+selectedConfig[n]+"']").prop("checked",true);
						}
					}
				}; break;
				//单选
				case 'radio' : {
					_body.find('i.radio').click(function(){
						$(this).prev().prop("checked",true);
					});
				}; break;
				//多选
				case 'checkbox' : {
					_body.find('i.checkbox').click(function(){
						var checkbox=$(this).prev();
						if(checkbox.is(":checked")){
							checkbox.prop("checked",false);
						}else {
							checkbox.prop("checked",true);
						}
					});
				}; break;
			}
		}
	}
});
//默认删除
function _del(lnk,param,id,call){
	if(!confirm(lnk==null?'确认删除选中项目吗？':'确定删除此信息吗？')){return false}
	$.post('admin.php?'+param,{id:id},function(data){_body.append(data)
		if(call!=undefined){
			call(data);
			return;
		}
		if(data=='del-success'){
			if(lnk != null) $(lnk).parent().parent().remove();
			else {
				var ids=id.split(','), idslen=ids.length;
				for(var i=0;i<idslen;i++){
					$("[name='_ids'][value='"+ids[i]+"']").closest("tr").remove();
				}
			}
			_prompt('删除成功！',1);
		}else {
			_prompt('删除失败！');
		}
	});
}
//验证函数
function _formCheck(form, ckr){
try{
	var form=$(form), num=0, isright=true, inps=form.find("[name]").each(function() {
		var name=$(this).attr("name"), val=$(this).val(), r=ckr[name], tmp;
		if(r!=undefined){
			if((tmp=r['none'])==false){
				if(val==''){
					return _formCheck_prompt($(this),r['noneerr']==undefined?r['label']+'不能为空！':r['noneerr']);
				}
			}
			if((tmp=r['novalue'])!=undefined && val==tmp){
				_formCheck_prompt($(this),r['novalueerr']==undefined?"请输入"+r['label']+"！":r['novalueerr']); return false;
			}
			if((tmp=r['smalllen'])!=undefined && val.length<tmp){
				_formCheck_prompt($(this),r['lenerr']==undefined?r['label']+"长度不能小于"+tmp+"字,应至少再输入"+(tmp-val.length)+"字！":r['lenerr']); return false;
			}
			if((tmp=r['maxlen'])!=undefined && val.length>tmp){
				_formCheck_prompt($(this),r['lenerr']==undefined?r['label']+"长度超过最大限制"+tmp+"字,已超出"+(val.length-tmp)+"字！":r['lenerr']); return false;
			}
			if((tmp=r['length'])!=undefined && val.length!=tmp){
				_formCheck_prompt($(this),r['lenerr']==undefined?r['label']+"长度必须为"+tmp+"字，请核对后重试！":r['lenerr']); return false;
			}
			if((tmp=r['reg'])!=undefined && val!=''&& !tmp.test(val)){
				_formCheck_prompt($(this),r['regerr']); return false;
			}
			if((tmp=r['func'])!=undefined && !r['func']($(this))){
				return false;
			}
		}
		num++;
	});
	if(inps.length!=num) return false;
}catch(e){alert(">< 出错了:"+e); return false}
return true;
}
//验证提示错误
function _formCheck_prompt(inp,txt,istrue){
try{
	_prompt(txt);
	inp.select();
}catch(e){alert(">< 出错了:"+e)}finally{return false}
}
//顶部提示信息框
	var zIndex = 100;
	
	// 消息框
	var $message;
	var messageTimer;
	$.message = function() {
		var message = {};
		if ($.isPlainObject(arguments[0])) {
			message = arguments[0];
		} else if (typeof arguments[0] === "string" && typeof arguments[1] === "string") {
			message.type = arguments[0];
			message.content = arguments[1];
		} else {
			return false;
		}
		
		if (message.type == null || message.content == null) {
			return false;
		}
		
		if ($message == null) {
			$message = $('<div class="info_box_' + message.type + '"><i></i><\/div>');
			if (!window.XMLHttpRequest) {  // ??
				$message.append('<iframe class="messageIframe"><\/iframe>');
			}
			$message.appendTo("body");
		}
		
		$message.children("div").removeClass("info_box_sucess info_box_fail info_box_warn").addClass('info_box_' + message.type).html('<i class="ico"></i>'+html);
		$message.css({'left':($(window).width()-228)/2+'px', 'top':($(window).height()-49)/2*0.6+'px', 'z-index': zIndex ++}).show(); //位置设置
		
		clearTimeout(messageTimer);
		messageTimer = setTimeout(function() {
			$message.hide();
		}, 3000);
		return $message;
	};

//条目批量选择
function _select_ids(type,inp){
	switch(type){
		case 'all' : $("[name='_ids']").prop("checked",true); break;
		case 'wu'  : $("[name='_ids']").prop("checked",false); break;
		case 'fan' : $("[name='_ids']").each(function(){
			if($(this).is(":checked")) $(this).prop("checked",false);
			else $(this).prop("checked",true);
		}); break;
		case 'auto' : {
			var ids=$("[name='_ids']");
			if($(inp).is(":checked")) $("[name='_ids']").prop("checked",true);
			else $("[name='_ids']").prop("checked",false);
		}; break;
	}
}
//获取选中的id
function _select_ids_get(){
	var inps = $("[name='_ids'][value!='']:checked");
	var ids = '';
	inps.each(function(){
		ids += ','+$(this).val();
	});
	return ids.substr(1);
}
//批量删除
function _dels(obj, param){
	var ids = _select_ids_get();
	if(ids == '') {
		_prompt("请至少选择一项删除项目!");
		return false;
	}
	_del(obj,param,ids)
}
//页面跳转
function _page_go(input, event){
	var e = event || window.event || arguments.callee.caller.arguments[0];
	if(e && e.keyCode==13){
		window.location = window.location.href+'&page='+input.value;
	}
}
//自动切换筛选
function _toggleFilter(bar){
	var bar=$(bar), itms=bar.nextAll("dl");
	itms.stop().slideToggle(200,"easeOutQuint",function(){
		var d;
		if(bar.hasClass('toggle')) d=bar;
		else d=bar.prev();
		if(itms.is(":visible")) {
			d.removeClass('showIco');
		}else d.addClass('showIco');
	});
}
//自动选中单、复选框
function autoChecked(conf){
	if(conf!=undefined && typeof(conf)=='object'){
		for(var n in conf){
			var val=conf[n];
			if(val.indexOf(",")==-1) $("[name='"+n+"'][value='"+val+"']").prop("checked",true);
			else {
				for(var vals=val.split(","), inps=$("[name='"+n+"']"), vallen=vals.length, i=0; i<vallen; i++){
					inps.filter("[value='"+vals[i]+"']").prop("checked",true)
				}
			}
		}
	}
}
//图片选择 - 文本编辑器
function imageSelectEditor(button, upname) {
	window.imageSelect_name = upname;
	window.imageSelect_out_button = $(button);
	var imgup = imageSelect_out_button.parent().parent();
	window.imageSelect_view = imgup.find(".view-image[upload='"+upname+"']");
	window.imageSelect_out_url = imgup.find("[name='"+window.imageSelect_name+"']");
	
	if(window.imageSelect_editor==undefined){
		window.imageSelect_editor = UE.getEditor(_body.append('<div class="hide"><textarea id="imageSelectEditor"></textarea></div>').find("#imageSelectEditor").get(0));
		window.imageSelect_editor.ready(function(){
			window.imageSelect_editor.addListener('beforeInsertImage', function(t, arg) {
				window.imageSelect_out_url.val(arg[0].src);
				window.imageSelect_view = _body.find('div.view-image[upload="'+window.imageSelect_name+'"]');
				if(window.imageSelect_view.length==0){
					window.imageSelect_view=$('<div class="view-image" upload="'+window.imageSelect_name+'"></div>');
					imageSelect_out_button.parent().after(window.imageSelect_view);
				}
				window.imageSelect_view.html('<img src="'+arg[0].src+'" />');
				window.imageSelect_view.show();
				return false;
			});
		});
		setTimeout(function(){imageSelectEditor(button, upname)},200);
		return false;
	}
	window.imageSelect_editor.getDialog("insertimage").open();
}
//图片选择 - 图片预览
function imageSelect_view(){
	
}
function input_clear(input){
	if(input.value==input.getAttribute('novalue')) input.value='';
}
function input_fill(input){
	if(input.value=='') input.value=input.getAttribute('novalue');
}
//板块展开收起
function sectionToggle(bar){
	$(bar).next().stop().toggle(300,'easeOutQuint');
}
/*标签门*/
function _tab(tabs, datas){
	tabs.each(function(i){
		$(this).click(function(){
			tabs.removeClass('selected').eq(i).addClass('selected');
			datas.hide().eq(i).show();
		})
	});
}