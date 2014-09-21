// TODO actually recognize syntax of TypeScript constructs
var floop = false;
CodeMirror.defineMode("xn", function(config, parserConfig) {
 


  function chaosnotesTokenBase(stream, state){
	// needs improvement
	var matchURL = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)(:[0-9]+)?((?:\/[\+~%\/.\w-_\(\)\:]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[.\!\/\w\=]*))?)/;

  	var startOfLine = stream.sol();

  	if(startOfLine){
  		var forceBlankLine = stream.match(/^\s*$/, true) ; // white space line is a blank line
		if(forceBlankLine){
			return blankLine(state);
		}else{
			// nonblankline
			state.blankLinesAbove = state.blankLineCount
			state.blankLineCount = 0; 
		}
		var deepnessClass = " ";
	  	if(window.cm){
	  		var indent = stream.indentation()/window.cm.options.tabSize;
	  		//console.log(indent)
	  		// state.lineage 
	  		//var deepness = state.lineage.length;
	  		if(indent >= state.deepness+2){
	  			// child has too many indentations
	  			// Two ways to address this problem:
	  			if(_CONFIG.hierarchy.strictIndentation){
	  				// 1) break the entire hierarchy. no new hierarchies until a new line starts from 0 indent
					state.deepness = -1;
				}else{
					// break the hierarchy until the next properly indented line
				}
	  			deepnessClass = " line-background-xn-hierarchy-broken";
	  		}else if (indent == 0){
	  			// reset hierarchy
	  			state.deepness = 0;
	  			deepnessClass = " line-background-xn-hierarchy-0 ";
	  		}else if(indent == state.deepness+1){
	  			// child node  
	  			if(_CONFIG.hierarchy.strictBlankLines && state.blankLinesAbove > 0){
	  				// blank lines between parent and child
		  			// strict rule: break hierarchy
	  				state.deepness = -1;
	  				deepnessClass = " line-background-xn-hierarchy-broken";
		  		}else{
		  			state.deepness = indent;
		  			deepnessClass = " line-background-xn-hierarchy line-background-xn-hierarchy-" + indent;
		  		}
	  		}else if(indent == state.deepness){
	  			// sibling node  
	  			state.deepness = indent;
	  			deepnessClass = "line-background-xn-hierarchy line-background-xn-hierarchy-" + indent;
	  		}else if(indent < state.deepness){
	  			// returning up the hierarchy by any amount
	  			state.deepness = indent;
	  			deepnessClass = "line-background-xn-hierarchy line-background-xn-hierarchy-" + indent;
	  		}
	  	}
  	}

  		//console.log(getOptions("tabSize"))
  	
  	//var tabSize = 
  	//console.log(indent, tabSize);
	var ch = stream.next();

  	var style = "";
  	var newIdeaFlag = startOfLine && state.blankLinesAbove>=2;
  	// normal behavior: two blank lines separate ideas

	// test if tags are preceded by whitespace or newline
	if( ch == "#" || ch =="~" || ch=="@" || ch=="<"){
		if(!startOfLine){
			stream.backUp(1);
			stream.backUp(1);
			es = stream.eatSpace();
			if(es){
				stream.next();
			}else{
				stream.next();
				stream.next();
				return; // tag is not preceded by whitespace or newline, return
			}
		}
		// yes indeed, this tag is preceded by whitespace
		if (ch == "#") {
			stream.eatWhile(/[A-Za-z0-9-_]/);
			//var word = stream.current();
			newIdeaFlag = startOfLine && state.blankLinesAbove>=1; // #hashtag starts line after 1 one blank line => new idea
			if(stream.current().length==1){ // just ~
				style="xn-hashtag-incomplete" 
			}else{
				style = "xn-hashtag";
			}
		}else if (ch == "~") {
			stream.eatWhile(/[A-Za-z0-9-_@\.]/);
			//var word = stream.current();
			newIdeaFlag = startOfLine && state.blankLinesAbove>=1; // ~person starts line after 1 blank line => new idea
			if(stream.current().length==1){ // just ~
				style="xn-persontag-incomplete" 
			}else{
				style = "xn-persontag";
			}
		}else if (ch == "@") {
			stream.eatWhile(/[A-Za-z0-9-_]/);
			//var word = stream.current();
			newIdeaFlag = startOfLine && state.blankLinesAbove>=1; // @map starts line after 1 blank line => new idea
			if(stream.current().length==1){ // just ~
				style="xn-maptag-incomplete" 
			}else{
				style = "xn-maptag";
			}
		}else if(ch=="<") {
			if(stream.eatWhile(">")){
				if(stream.eatWhile(/[A-Za-z0-9-_]/) //base64 with -_ as 62 and 63
				&& stream.eatWhile(/[\"]/) 
				&& stream.eatWhile(/[^\"]/)
				&& stream.eatWhile(/[\"]/)){
					style="xn-relatestag"
					
				}else{
					if(stream.current().length==2){ // just <>
						style="xn-relatestag-incomplete" 
					}else{
						style = "xn-relatestag-incomplete"
					}
				}
			}else{
				style = ""
			}
		}
	}else if(ch == " "){
		style = ""
	}else if(stream.match(matchURL, true)){
		style = "xn-link";
	}else{
		// regular old boringly interesting non-formatted text
		style = "" 
	}
	if(newIdeaFlag){
		state.ideaCount++;
		state.alternate = (state.ideaCount%2)==0?"a":"b"; 
	}
	if(startOfLine){
		// every other idea gets an alternating css class
		return "line-background-xn-" + (newIdeaFlag?"newidea-line ":"currentidea-line ") + "line-background-xn-"+state.alternate + deepnessClass + " " + style;
	}
	return style
  };

  function blankLine(state){
  	// mark this line as blank
  	state.blankLineCount = state.blankLineCount + 1;

    if(state.blankLineCount>=3){
  		return "xn-blankline line-background-xn-empty-line-3 " + "line-background-xn-"+state.alternate;
  	}else if(state.blankLineCount==2){
  		return "xn-blankline line-background-xn-empty-line-2 " + "line-background-xn-"+state.alternate;
    }else{
  		return "xn-blankline line-background-xn-empty-line-1 " + "line-background-xn-"+state.alternate;
  	}
  }
  
  return { 
	startState: function(basecolumn){
	    return {
			tokenize: chaosnotesTokenBase,
	        blankLineCount: 0, 
	        blankLinesAbove: 0, // number of blank lines above current line
	        ideaCount: 0, // how many ideas down we are (separated by blank line(s))
	        alternate: "a", // alternating ideas are "a" or "b"
			lastType: null,
			deepness: -1 // how deep in the hierarchy
			//lineage: [] // if in a hierarchy, this is athelist of line numbers which mark this line's parent, grandparent, etc  
		};
	},
	blankLine: blankLine,

	token: function(stream, state){
		return state.tokenize(stream, state);
	}
  
  };
});


