$(function(){
	$.each( $('.chart'), function(key, obj) {
	
		var width = $(obj).css('width').replace('px','');
		var height = $(obj).css('height').replace('px','');
		var content = $(obj).html();
	
		if( $(obj).hasClass('qr') ){
			url = 'http://chart.googleapis.com/chart?cht=qr&chl=' + encodeURI(content) + '&chs=' + width + 'x' + height;
			
		}else if( $(obj).hasClass('pie') ){
			var arr = content.split("\n");
			var params1 = [];
			var params2 = [];
			for(i=1;i<(arr.length-1);i++){
				var item = arr[i].split(':');
				params1[i-1] = encodeURI(item[0]);
				params2[i-1] = item[1];
			}
			url = 'http://chart.googleapis.com/chart?cht=p&chd=t:'+params2.join(',') + '&chl='+params1.join('|') +'&chs=' + width + 'x' + height;
			
		}else if( $(obj).hasClass('bars') ){
			var arr = content.split("\n");
			var params1 = [];
			var params2 = [];
			for(i=1;i<(arr.length-1);i++){
				var item = arr[i].split(':');
				params1[i-1] = encodeURI(item[0]);
				params2[i-1] = item[1];
			}
			url = 'http://chart.googleapis.com/chart?cht=lc&chxt=x%2Cy&chdl='+params1.join('|')+'&chd=t:'+params2.join('|')+'&chs=' + width + 'x' + height;
		}
		
		$(obj).html('<img src="'+url+'">');
		
	});
});