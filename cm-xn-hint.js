(function() {
  "use strict";

  var Pos = CodeMirror.Pos;

  CodeMirror.xnHint = function(cm, options) {
    var tags = options && options.tags;
	var cur = cm.getCursor(), token = cm.getTokenAt(cur);
	var list1 = [], list2 = [], result = [], replaceToken = true;
	var string = token.string.slice(1);
	if(!token || !token.type){ 
		return; 
	}
	if(token.type.indexOf("xn-hashtag")>-1){
		for (var name in tags) if (tags[name].indexOf(string)!=-1){
			if(tags[name].indexOf(string)==0){
				list1.push("#" + tags[name]);
			}else{
				list2.push("#" + tags[name]);
			}
		}
		result = list1.concat(list2);
	}else if(token.type.indexOf("xn-persontag")>-1){
		for (var name in tags) if (tags[name].indexOf(string)!=-1){
			if(tags[name].indexOf(string)==0){
				list1.push("~" + tags[name]);
			}else{
				list2.push("~" + tags[name]);
			}
		}
		result = list1.concat(list2);
		
	}else if(token.type.indexOf("xn-maptag")>-1){
		for (var name in tags) if (tags[name].indexOf(string)!=-1){
			if(tags[name].indexOf(string)==0){
				list1.push("@" + tags[name]);
			}else{
				list2.push("@" + tags[name]);
			}
		}
		result = list1.concat(list2);
		
	}else if(token.type.indexOf("xn-relatestag")>-1){
		string = token.string.slice(2)
		for (var name in tags) if (tags[name].indexOf(string)!=-1){
			var id = name // convert to base64 if necessary
			var completion = {
				text: "<>"+id+"\""+tags[name]+"\"",
				displayText: tags[name]
			};
			if(tags[name].indexOf(string)==0){
				list1.push(completion);
			}else{
				list2.push(completion);
			}
		}
		result = list1.concat(list2);
		
	}
    return {
      list: result,
      from: replaceToken ? Pos(cur.line, token.start) : cur,
      to: replaceToken ? Pos(cur.line, token.end) : cur
    };
  };
})();