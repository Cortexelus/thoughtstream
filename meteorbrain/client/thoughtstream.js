
/* CONFIG */
_CONFIG = {
  submitButton: "topNav", /* endOfIdea, topNav */
  hierarchy: { 
    strictIndentation: false, // if true, too many indents will break the whole hierarchy; if false, hierarchy will partial break until finds line with proper indentation
    strictBlankLines: true // blank lines between parent and child will break hierarchy
  }
};





// autocomplete 
map_tags = ["MA_State_Government","MIT","Princeton_","MIT_ADPhi","MA_State_Budget","MIT_Elections_Committee","MIT_2030","MIT_2030_Student_Center_Renovation_Ideas","Harvard","Harvard_Eliot_House","#person_jcole","Quote_Board","Hackathon_Project_Ideas","Foods_Chase_Likes","MIT_Complaints_-_Why_thought_of_transferring_out","MIT_Opportunities_-_Why_thought_of_transferring_in","MIT_People\\'s_Stories","If_I_went_to_MIT_(or_other_top_college)_I_would...","Greater_Boston_Area","MIT_SIPB","Coolest_things_in_the_world","Rice","AngelHack_Boston_2013","Aptonym","Books_for_Jacob","Del_Mar_Terrace","TZ_MIT_Hackathon","Stanford_HUMBIO_183:_Astrobiology_&amp;_Space_Exploration","Compass","Leap_Motion_Project_Ideas","Web_Dev_Resources","Greylock_Hackfest_Ideas","Foods","jmjmkj_klm","_k_k_kkmlkmlkmlmkmlkmlmlmlkmmlmlmlkmlmlkm","wutttttt","Palo_Alto","Words_that_are_Good","Jacob","Stanford_Class_Recs","testing_1_2_3\n","Suggestions_for_Asana","Meditation-inducing_thoughts","dropbox_hack_week\n","Phoenix_Dinner_Event_8\/3\/13","Idea_of_the_Day","Internet_of_Things\n","Knowledge_Structuring_Problems","Tanzania","ADHD","Quadrotor.tk","Quadrotor_Ideas","Quadrotor_Drone_Ideas","DIY_Entertainment","MIT_Classes","Harvard_Classes","Test","Test","things_you_didnt_know_existed_at_berkeley","QC_Books","Hackers@Berkeley","CS_Jobs_List","PennApps_2013_Suggestions","Idea_Mapping_People","CSM","Github","Tai_Chi","Possible_Intercontinental_Hackathon_Sponsors","africa_entrepreneurship\n","Things_you_didn\\'t_know_existed_at_Stanford","Urban_Farming","Things_Jacob_got_Better_at_This_Summer_(2013)","kodofkas","Hacker_Dojo","Collaborative_knowledge_space_tools","Cornell_POPSHOP_cs_ops","ConceptNet_Projects","Talks_by_paul_graham","St._Catz_Oxford_Suggestions","Teas","Computer_Tricks","Interfaces_to_explore_graphs","Social_Enterprise_Projects_at_Oxford","Suggestions_for_Stanford_in_Oxford","Stanford\n","Projects_related_to_ideaflow","Harvard_Public_Safety_Hackathon_Ideas","Harvard_Public_Safety_Hackathon_Ideas\n","ritik\n","toys\n","Old_Technology_Ideas_that_Should_Exist_by_Now\n","Instadefine.com\n","Dragon_NaturallySpeaking","This_tool\n","Cookies\n","W3C\n","VW_Suggestions\n","Possible_users_of_this_system\n","ideas.pikans.org","Oxford\n","heroku","Google","Apple\n","Carr\\'s","MIT_VW_Hackathon\n","Cambridge,_MA","MIT_Student_Government_and_Adminstration\n","MIT_Scripts\n","RSI\n","~jcole\n","Features_for_stickyricelove.com\n","Chocolate\n","Wire_and_String_Open_Gestalts\n","\n","kjl\n","test_\n","Testing_purposes\n","Test\n","What\n","~David\n","New_Box\n","Stickyricelove.com","~emperorcj@gmail.com","bloop"];

hash_tags = [ "aaron", "absurdity", "adam-james-davis", "adamjamesdavis", "adventure", "adventures", "advice", "aesthetics", "afterlife", "again-please-xd", "ai", "ai-bots", "ai-poetry", "ai-wisdom", "alex", "allyouisme", "ambigrams", "ambiguous-chemistry-puns", "amusement-park", "anagrams", "anarchy", "animation", "ann", "app", "ar", "arduino", "art", "art-games", "art-implausible", "artificial-brain", "astronomy", "atheism", "audience-participation", "aug", "auggling", "augment-the-animals", "augmented-reality", "awesome", "awesome-phrases", "awesomeness", "backflip-the-earth", "band-name", "beatbot", "beatbox", "beauty", "benevolent-voyeur", "billions-of-bucks", "binaural-beats", "binaural-beats-composition", "biology", "birthdayliberation", "black-holes", "blackhole", "blog", "bmichick", "bodyfunctions", "bots", "brain-control", "burningman", "business-idea", "business-propositions", "business-venture", "business-ventures", "caffeine", "cartoon", "ceachj", "cereal-boxes", "chaos", "chaos-notes", "chaosnotes", "christianity", "christmas", "clanging", "clive", "clive-wearing", "clive-wearings-journals", "clivewearing", "cognition", "cold", "colemak", "comic-book", "compression", "computation", "computer-science", "computers", "computerscience", "consciousness", "consonance", "conversation", "copyright-law", "cornstarch-monsters", "cortexelation", "cortexelus", "creativity", "cs", "cult", "culture", "cute", "cyborg", "cynicism", "dad", "daily", "damn", "dancing", "darkness", "dbd", "death-by-diction", "death-meta", "deathmeta", "deathstep", "default-world", "definitions", "desire", "detameta", "determinism", "dieyoung", "diminished-reality", "directional-sound", "dj", "dnb", "dothecamus", "dreams", "drugs", "drunk", "dsp", "dubstep", "dubstepstep", "east-west", "echonest", "economics", "economy", "edm", "education", "eeg", "ego-death", "electronic-music-aesthetic", "electronic-music-aesthetics", "eliza", "emo", "emotions", "enlightenment", "entp", "epidimelogy", "epiphanies", "epiphony", "eps-are-awesome", "evil", "evil-plans", "evolution", "exercise", "existential", "existentialism", "experience", "experiment", "experiments", "extreme-meditation", "fame", "fap", "fb-movie", "feedintothose", "feelspace", "film", "fractals", "free-will", "friends", "friendship", "fun", "fun-with-language", "fun-with-puns", "game", "games", "geek-patrol", "genesis", "get", "get-neil", "glitch-shaman", "glitching", "go", "god", "godel", "great-death", "great-fucking-questions", "guitar", "hack", "hackers", "hacks", "hair", "happiness", "hijinks", "hipsters", "history", "horrible-clomoids", "hypersispyhus", "hypersisyphus", "hyperspace", "hypnogogia", "i-am-the-mushroom", "i-dont-believe-in-guruism", "idealism", "ideas", "ideas-for-a-future", "identity", "ilovemysunshine", "imagination", "imperialism", "improv", "imreallyawesome", "information-distopia", "interacting-with-society", "interpersonality", "isaac", "jitter", "jk?", "job", "jokes", "journal", "kandi", "kav", "kayla", "kiss", "knots", "lag-music", "language", "larps", "learn", "life", "life-goal", "life-goals", "lifegoal", "light", "list-of-projects-to-do-when-im-70", "lmao", "lmfao", "logic", "lol", "lookingformorequestions", "love", "loveisthesong", "lubbiwub", "machievellianism", "mad-science", "make", "mastery", "math", "math-metal", "max", "max4live", "meaning", "media", "meditation", "mega-man", "memes", "metacognition", "metahelios", "metal", "metaprogramming", "micronaut", "mindbombs", "mom", "momental", "money", "monism", "monk", "monologue", "monotheism", "morality", "motivation", "movie", "mrsans", "muahahahaha", "much-tech", "music", "music-commune", "music-experiments", "music-hack", "music-tech", "music-video", "musical", "musictech", "mystery", "mysticism", "mythology", "narcasm", "narcism", "nate", "naughtibod", "neocortexisms", "net-label", "net-neutrality", "neuroscience", "nice", "nihilism", "nitrous", "noise", "nokids", "non-newtonian-fluid", "noosphere", "nootropic", "nootropics", "nostaligia", "not-my-jokes", "note-to-self", "notebooks", "notes", "nursery", "nz", "obscurity", "odd-jobs", "of-the-sun", "ofthesun", "on", "open-individualism", "open-sorcery", "openindividualism", "organism-environment", "organizing-life", "palindrome", "panpsychism", "parallel-dimensions", "parkour", "pbbfbbjgb", "peanutbutter", "perspectrum", "philosophy", "phosphenes", "physics", "piracetam", "plagiarizeme", "plant-language", "play", "plush", "poems", "poetry", "pogs", "politics", "politik", "polytheism", "postmodernloveppplllllleeeeaaaasse!!!", "prayer", "procrastination", "psychedelevator", "psychedelic-information-theory", "psychic-powers", "psychology", "psychonaug", "psychonaut", "psychopharmocology", "psytrance", "pun", "punchline", "puns", "puns-noticed", "puns-noticed).", "pure-data", "puzzlecore", "puzzlhead", "quantum-computers", "quotes", "racism", "ramblings", "reactive-music", "read", "reality", "reality-tunnels", "remix-what-the-bot-said", "reuben", "rich-asshole", "riot-control", "risset", "risset-rhythms", "rob", "rofl", "romance", "rules", "s", "sanity", "sansa", "sap", "sapolsky", "sarcasm", "sauce", "schizophrenia", "science", "science!", "scooby-snacks", "self-production", "sense", "sept11th", "set-theory", "sex", "shamanism", "shaolin-law", "shirt-ideas", "shirts", "shredding", "singularity", "sispyhus", "sisyphus", "skeevy", "slang", "sleep-deprivation", "sleeping-in-the-shower", "sloppy-arithmetic", "slovos", "social-dynamics", "social-network", "song", "songs", "songs-of-life", "sound", "soundeffects", "ss-sauce", "sssauce", "stories", "story-ideas", "story-time", "strange-loops", "strangeloops", "strobe-goggles", "stroggles", "stumble", "stupid", "subjective-experience", "sunglasses", "sup-dns", "super-blog", "superpowers", "surrealism", "surrealism-for-a-video-game", "surrealist-games", "surround-sound", "synesthesia", "synthesia", "taoism", "tape-measurer", "taxonomy", "tea", "teasing", "tech", "technological", "technological-tripping", "temptattoo", "terence-mckenna", "text-messages", "the-common-joke", "the-great-game", "the-joke-of-the-joke", "the-map", "the-zone", "the-zone.", "things-noticed", "thinking-and-feeling", "thotwater", "thought-experiment", "time", "timelessness-of-beauty", "to-conform-or-not-conform", "to-hack", "to-imagine", "to-listen", "to-read", "todo", "tohack", "tom", "tongue-twist", "toys", "transhuman", "transhumanism", "trent-reznor", "truth", "turns-out", "two-way-mirror-mask", "unconventional-wisdom", "understanding", "universal-declaration-of-awesome", "universe", "vagina", "venn-diagrams", "viruses", "wacky", "weirdom", "what-are-you-on", "what-to-do-when-youre-lucid", "whatif", "word-play", "wrestling", "writing", "wtf", "xeen", "xkcd", "yum", "zen", "zeptonaut", "~", "~"]

person_tags = ["cj","david","jcole","david.furlong@stcatz.ox.ac.uk","undefined","cj@imreallyawesome.com"]

relates_tags = ["fhdsflkdjh fldkjdfs","new idea","sdlfkgjhsfdlgkjh 3gkjdf #dfkhf-gfdjkghfdg #kfjdghkfdghj","lksdjhfg fdsjgh","sflsdkjfhsdk. skjfh dsksdkjhfa sdkjfhds","sdkfhdskjdfhsdkjfhdsf","asdfjhsdfjh--","fhsdkjfhds--skdjfhdskfjh","asdkfjh--aksdjhfkdshjf","skdfjhd-ksjdhf","asdkfjhds","kjhsdfkjds--","sdfkjdhs ksdjfhds kfjhf kjsdhf sdkfhsdfkhdjf skdfj","fhdksfjhds","shkfjskdf ds--","dkfjsghfkdgj","sdfkjhdf kgjhdfg kdfjgf---","sdkjhds","kjhk ksjdfhds kjh","@MA_State_Government","hkjhkjhjkh","blah","hlkjsdhflskdfgjhfdglkdsjfh","fdhsfjkdsfh @dsfkjsdhf dfs @sdfkjhfds h#hsdfkdsjfhds asdkfjh #dfksjhdf #sdfhkj@d","@balh","blerkfdgjhfdkj","dhit","dihi","sd","cs","#fsjdflskdfl;jksdfjsd","#qu","#ter","#te #o #d #e","#dvfurlong@gmail.com","~david.furlong@stcatz.ox.ac.uk","david.furlong@stcatz.ox.ac.uk","testing12345ok","#greatsuccess dsglkjsflkgjdldkfglk #greatsuccess","#1 #2","#1 #1","#test #123","#new #new","#new","question#test","test #test","#test","https://www.google.com/calendar/event?action=VIEW&eid=bDg0MDE1YnR0ZmJpYjUyY3","#test","www.david.com#yolowww.david.com#yolo.noteven","http://localhost/GestaltBox/public_html/index.1.7_suggestionbox.php_admin?f¢4tf","http://localhost/GestaltBox/public_html/index.1.7_suggestionbox.php","ww.test.com","www.david.com","test","sweet","http://instadefine.com/IdeaOverflow/Outlinr-PHP/public_html/stickyricelove/publi","@Rice #goal @MIT #idea ~David #complaint Sweeet","@testing_1_2_3","@Testing_purposes new","@MIT_Complaints_-_Why_thought_of_transferring_out","#@ox.ac.uk ~dvfurlong@gmail.com #goal Sweet","#","~dvfurlong@gmail.com","~jacob.cole@stcatz.ox.ac.uk","jacob.cole@stcatz.ox.ac.u","david.furlong@stcatz.ox.ac.uk","dvfurlong@googlemail.com","http://localhost/GestaltBox/public_html/index.1.7_suggestionbox.php","www.davidfurlong.com","www.","test@gmail.com","~jacob.cole@stcatz.ox.ac.uk","www.davidfurlong.github.io/hackKings/Website","#complaint","#yolo","~David","~David","~David","~David","~David","~David","~David","Sweet idea bro","new idea","new Idea","new","New Idea","new","New","New idea","#in","~jacob.cole@stcatz.ox.ac.uk/test/new","~jacob.cole@stcatz.ox.ac.uk","#@ox.ac.uk","#1.2.3.4","#test","test ~jacob.cole@stcatz.ox.ac.uk","~jacob.cole@stcatz.ox.ac.uk","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem","Traffic Guru","Maglev Personal Rapid Transit","Utopia","Happiness","Health","Prosperity","Tranquility","Citizens and government can concisely communicate ideas","in the digital age, no one has time for town hall","citizens can't communicate their good ideas","leaders can't communicate their good ideas","0% obesity rate","0% crime rates","0% gang-related crime in Springfield, MA","Apply social network analysis counterinsurgency ta","Rehabilitate homeless population","100% employment","100% high school completion rate","Big Dig","Abundant, fulfilling work-play"]

showAutocompletePopup = function(cm, tokentype) {
  if(tokentype == null){
    // if tokentype is null, then figure out the token (hashtag, person or map) the user is typing
    var cur = cm.getCursor(), token = cm.getTokenAt(cur), tokentype = token.type;
  }
  // else, force token to be tokentype:

  if(tokentype == "xn-hashtag-incomplete"){
    if(hash_tags.length>1){
      CodeMirror.showHint(cm, CodeMirror.xnHint, {tags: hash_tags} );
    }
  }else if(tokentype == "xn-persontag-incomplete"){
    if(person_tags.length>1){
      CodeMirror.showHint(cm, CodeMirror.xnHint, {tags: person_tags} );
    }
  }else if(tokentype == "xn-maptag-incomplete"){
    if(map_tags.length>1){
      CodeMirror.showHint(cm, CodeMirror.xnHint, {tags: map_tags} );
    }
  }else if(tokentype == "xn-relatestag-incomplete"){
    if(relates_tags.length>1){
      CodeMirror.showHint(cm, CodeMirror.xnHint, {tags: relates_tags} );
    }
  }else{
    // show no hints
  }
}



 
cm = null; 
htmlNode = null;
submitWidget = null;
configureCM = function(codemirror) {
  cm = codemirror;
  cm.setOption("mode", "xn")
  cm.setOption("lineNumbers", true)
  cm.setOption("lineWrapping", true)
  cm.setOption("firstLineNumber", 0)
  cm.setOption("foldGutter", true)
  cm.setOption("smartIndent", true)
  cm.setOption("autoFocus", true)
  cm.setOption("indentWithTabs", true)
  cm.setOption("indentUnit", 4)
  /*styleActiveLine: true,*/
  cm.setOption("tabSize", 4)
    /*workTime: 1,
    workDelay: 1,
    pollInterval: 10,
    historyEventDelay: 10,*/
    //cursorHeight: 0.75, /* changed because of line padding */
  cm.setOption("gutters", ["CodeMirror-linenumbers", "CodeMirror-foldgutter"])
  cm.setOption("extraKeys", {
      "Ctrl-Q": function(cm){ cm.foldCode(cm.getCursor()); },
      "Ctrl-W": function(cm){ 
            cm.operation(function() {
              for (var i = cm.firstLine(), e = cm.lastLine(); i <= e; i++)
                cm.foldCode(CodeMirror.Pos(i, 0), null, "fold");
            });
       },
       /*"Tab": function(cm){
          //showAutocompletePopup(cm, null);
        },*/
        "'#'": function(cm){
          setTimeout(function(){ showAutocompletePopup(cm, "xn-hashtag-incomplete") },40) 
          // why timeout? because this fires before the textarea receives character
          // and keyup was producing weird bugs
          return CodeMirror.Pass;
        },
        "'~'": function(cm){
          setTimeout(function(){ showAutocompletePopup(cm, "xn-persontag-incomplete") },40)
          return CodeMirror.Pass;
        },
        "'@'": function(cm){
          setTimeout(function(){ showAutocompletePopup(cm, "xn-maptag-incomplete") },40)
          return CodeMirror.Pass;
        },
        "'>'": function(cm){
          setTimeout(function(){ showAutocompletePopup(cm, "xn-relatestag-incomplete") },40)
          return CodeMirror.Pass;
        },
        /*"Enter": function(cm){
          // straight up enter, not shift+enter
          /*if(!cm.hintOpen){
              // don't submit post if we hit enter when the hint box was open 
              if($('#usrhandle').val().indexOf('@')<0) { //#hack
                // don't submit if email address is blank
            alert("Please enter your email in the upper right (:");
            return;
          } else {  
                submitPostAndGetPosts();
            }
          }
        },*/
        "Shift-Enter": function(cm){
          // do nothing special
          return CodeMirror.Pass;
        },
      }
  );

  cm.hintOpen = false
  cm.on("startCompletion", function(target, name){
    cm.hintOpen = true
  });




  function makeRelatedIdeaObjects(line){
    // Turn <>ID"title" text into related idea objects
    var lineNumber = cm.getLineNumber(line);
    //console.log("makeRelatedIdeaObjects", line.styles)
    // strange bug
    /*for (var attr in line) {
        if (line.hasOwnProperty(attr)) console.log(attr,": ",line[attr])
    }*/
    //console.log("..", line['styles'], line.styles)
    if(!line.styles) return;

    for(var i=0; i<line['styles'].length; i++){
      var s = line.styles[i].toString().trim() // search line.styles for the relates tags added by the mode parser (mode-thoughtstream.js)
      if(s == "xn-relatestag"){
        if(i>=3){
          beginCh = line.styles[i-3]
          endCh = line.styles[i-1]
        }else if(i==2){
          beginCh = 0
          endCh = line.styles[1]
        }else{
          continue;
        }
        var relatedIdeaNode = document.createElement("span"); // in the DOM, we shall replace the raw text with this new span.
        relatedIdeaNode.className = "relatedIdeaNode"; // new styling
        // filter title change text to <>Title 
        var title = cm.getRange({line: lineNumber, ch: beginCh}, {line: lineNumber, ch: endCh})
        var newtitle = "<>" + title.substring(title.indexOf("\"")+1,title.length-1)
        relatedIdeaNode.appendChild(document.createTextNode(newtitle));
        var id = title.substring(2, title.indexOf("\""));
        relatedIdeaNode.newtitle = newtitle;
        relatedIdeaNode.ideaID = id;

        relatedIdeaNode.addEventListener('click',function(){
          var thisLineNumber = cm.getLineNumber(this.marker.lines[0]);
          console.log("thisLineNumber",thisLineNumber);
          //alert("idea id = "+id);
          var expandedIdeaDiv =document.createElement("div");
          expandedIdeaDiv.className = "ideaExpansion"
          var text =  document.createTextNode(this.newtitle);
          expandedIdeaDiv.appendChild(text)
          expandedIdeaDiv.ideaID = this.ideaID;

          // if widget already expanded, remove it
          var widgetDeletionFlag = false;
          var widgets = this.marker.lines[0].widgets;
          if(widgets && widgets!=undefined){
            for(var w=0;w<widgets.length;w++){
              var widget = widgets[w];
              if(widget.node.ideaID && (widget.node.ideaID == this.ideaID)){
                widget.clear();
                widgetDeletionFlag = true;
                break;
              }
            }
          }
          if(!widgetDeletionFlag){
            // else add it
            cm.addLineWidget(thisLineNumber, expandedIdeaDiv, {showIfHidden: true})
          }
          cm.focus();
        }, false)
        // markText atomic;true 
        //console.log(beginCh, endCh, title, s, line.styles)
        marker = cm.markText(
          {line: lineNumber, ch:beginCh},
          {line: lineNumber, ch: endCh}, 
          {replacedWith: relatedIdeaNode, className: "relatedIdeaNode", atomic: true})
        relatedIdeaNode.marker = marker;
        
        cm.focus()
      }
    }
  }

  function submitIdeaToProjectsDatabase(lineNumber){
    var ideaLines = findTopAndBottomOfTheIdeaInWhichThisLineIs(cm.getLineHandle(lineNumber), "INCLUDETOCURSOR");
    var ideaText = getIdeaText(ideaLines.lines);
    // grey out text, make it read-only

    // regex through ideaText for all map tags
    var maps = allTagsOfType(ideaLines, "xn-maptag");

    // for()
      // find equivalent map_id for each map tag

      // ajax request to project page. 

      $.ajax({ 
        url: "http://instadefine.com/IdeaOverflow/Outlinr-PHP/public_html/ideajoin/public_html/ajax/get_or_make_post_ideamaps.php?mapid=0&newpost=", 
        dataType: "jsonp"
      }).done(function(data){
          console.log(data)
      });
      

      // if at least one submission was successful, delete text, replace with thing
          emptyLines(ideaLines.top, ideaLines.bottom)
          var ideaTitle = ideaText.substring(0,50).replace(/\n/gm," ").replace(/\"/gm,"");

          cm.replaceRange("<>9999\""+ideaTitle+"\"",{line:ideaLines.top,ch:0})
          cm.focus();
    // if not successful, renable text, show error

  }
  function makeSubmitButtonNode(lineNumber){
    var ideaText = "";

    var buttonNode = document.createElement("span");
    buttonNode.className = "submitIdeaButton";
    buttonNode.appendChild(document.createTextNode(" submit "));
    buttonNode.addEventListener('click',function(){
     
      
      //alert(ideaText);
      submitIdeaToProjectsDatabase(lineNumber);


    }, false)
    buttonNode.addEventListener("mouseover",function(){
      var ideaLines = findTopAndBottomOfTheIdeaInWhichThisLineIs(cm.getLineHandle(lineNumber), "INCLUDETOCURSOR");
      highlightIdea(ideaLines);
    }, false);
    buttonNode.addEventListener("mouseout",function(){
      var viewPortLines = cm.getViewport();
      for(var l=viewPortLines.from;l<=viewPortLines.to;l++){
        cm.removeLineClass(l, "background", "ideaAboutToBeSubmitted");
      }
    }, false);
    return buttonNode;

  }

  function highlightIdea(ideaLines){
    var viewportLines = cm.getViewport();
    var top = Math.max(ideaLines.top, viewportLines.from);
    var bottom = Math.min(ideaLines.bottom, viewportLines.to);
    for(var l=top;l<=bottom;l++){
      cm.addLineClass(l, "background", "ideaAboutToBeSubmitted");
    }
  }

  // finds first @map tag in line, and adds [submit] button to it. 
  function addSubmitButtonToFirstMap(line){
      var lineNumber = cm.getLineNumber(line);
      if(line.styles){
        for(var i=0; i<line.styles.length; i++){
          var s = line.styles[i].toString().trim() // search line.styles for the relates tags added by the mode parser (mode-thoughtstream.js)
          if(s == "xn-maptag"){
            if(i>=3){
              beginCh = line.styles[i-3]
              endCh = line.styles[i-1]
            }else if(i==2){
              beginCh = 0
              endCh = line.styles[1]
            }else{
              continue;
            }
            //mapNode.className = "mapNode"; // new styling
            // filter title change text to <>Title 
            var mapName = cm.getRange({line: lineNumber, ch: beginCh+1}, {line: lineNumber, ch: endCh})
            var mapNameNode = document.createElement("span")
            mapNameNode.className = "cm-xn-maptag";
            mapNameNode.appendChild(document.createTextNode("@"+mapName));
            //mapNameNode.addEventListener("click",function(){alert("filter" + mapName)});

            var buttonNode = makeSubmitButtonNode(lineNumber);

            var mapNode = document.createElement("span"); // in the DOM, we shall replace the raw text with this new span.s
            mapNode.appendChild(buttonNode);
            mapNode.appendChild(mapNameNode);
            //mapNode.appendChild(document.createTextNode(" "));

            // markText atomic;true 
            //console.log(beginCh, endCh, title, s, line.styles)
            marker = cm.markText(
              {line: lineNumber, ch:beginCh},
              {line: lineNumber, ch: endCh}, 
              {replacedWith: mapNode, atomic: false, className: "mapMarker"})

            return true;
          }
        }
        return false;
      }
  }

  // remove lines (when submitting an idea)
  function removeLines(top,bottom){
    cm.replaceRange("",{line:top,ch:0},{line:bottom+1,ch:0})
    cm.focus()
    //cm.setCursor({line: top,ch:0})
  }  

  // delete all characters in lines, but keep lines in place
  function emptyLines(top,bottom){
    for(var l=top;l<=bottom;l++){
      cm.replaceRange("",
        {line: l, ch: 0},
        {line: l, ch: cm.getLine(l).length})
      cm.removeLineClass(l, "background", "ideaAboutToBeSubmitted");
      var line = cm.getLineHandle(l);
      if(line.widgets){
        for(var w=0;w<line.widgets.length;w++){
          line.widgets[w].clear();
          if(!line.widgets) break;
        }
      }
    }
    cm.focus()
    //cm.setCursor({line: top,ch:0})
  }

  // given lineNumber, finds its neighboring lines included in the same idea, and returns the text  
  function getIdeaText(lines){
    var ideaText = "";
    for(var l = 0; l < lines.length; l++){
      ideaText += lines[l].text + "\n"; 
    }
    return ideaText;
  }

  // finds the idea that this line is in, and returns an object containing the top and bottom line numbers {top: 2, bottom: 4}
  // trimWhitespace
  //   "NONE" :  include all blank lines below the text of the idea 
  //   "ALL" : include no blank lines below text of idea
  //   "INCLUDETOCURSOR" : include up to two blank lines below, if cursor is below
  // returns false if cursor is not in an idea.
  function findTopAndBottomOfTheIdeaInWhichThisLineIs(line, trimWhitespace){
    var lineNumber = cm.getLineNumber(line);
    var originalLineNumber = lineNumber;
    //if(!line.styleClasses) return;
    var bgc = line.styleClasses.bgClass; 
    // line number

    var bottomLineNumber = cm.lineCount();
    var topLineNumber = 0;

    while( lineNumber < cm.lineCount()){ // find the bottom of this idea
      lineNumber++;
      lineObj = cm.getLineHandle(lineNumber);
      if(!lineObj){
        lineNumber--;
        break; // no more lines, we're at the bottom of the document (and the idea)
      }

      //if(!lineObj.styleClasses) return;
      bgc = lineObj.styleClasses.bgClass; 
      if(bgc.substring(0,10)=="xn-newidea"){
        lineNumber--;
        break; // we landed on a new idea
      }
    }
    if(trimWhitespace == "ALL" || trimWhitespace == "INCLUDETOCURSOR"){
      // now we back up through the white space until we land on text again
      while( lineNumber > 0){
        lineObj = cm.getLineHandle(lineNumber);
        bgc = lineObj.styleClasses.bgClass; 
        if(bgc.substring(0,14) == "xn-currentidea" || bgc.substring(0,10)=="xn-newidea"){               
          // the last line of text in the idea
          if(trimWhitespace == "INCLUDETOCURSOR"){
            if(originalLineNumber > lineNumber+2){
              // cursor is too far down
              return false;
            }else{
              // go forward to see if next line is blank 
              if(originalLineNumber < lineNumber+1) break; // only if cursor is in the blank lines
              lineObj = cm.getLineHandle(lineNumber+1);
              if(lineObj){
                bgc = lineObj.styleClasses.bgClass; 
                if(bgc.substring(0,13) == "xn-empty-line"){
                  lineNumber++; // next line is blank
                  if(originalLineNumber < lineNumber+1) break; // only if cursor is in the blank lines
                  lineObj = cm.getLineHandle(lineNumber+1);
                  if(lineObj){
                    bgc = lineObj.styleClasses.bgClass; 
                    if(bgc.substring(0,13) == "xn-empty-line"){
                      lineNumber++; // next two lines are blank
                      break; // include the next two blank lines
                    }
                  }
                }
              }
            }
          }
          break; 
        }else{
          lineNumber--; // back up another line
          continue;
        }
      }
      bottomLineNumber = lineNumber;
    }else if(trimWhitespace == "NONE" || !trimWhitespace){
      // keeep all the blank lines at the bottom
      bottomLineNumber = lineNumber;
    }
    // now we back up until we find "xn-newidea"
    while( lineNumber > 0){
      lineObj = cm.getLineHandle(lineNumber);
      bgc = lineObj.styleClasses.bgClass; 
      if(bgc.substring(0,10)=="xn-newidea"){
        // beginning of the idea
        break; 
      }else{
        lineNumber--; // back up another line
        continue;
      }
    }
    topLineNumber = lineNumber;
    var lines = []
    for(var l=topLineNumber; l<=bottomLineNumber; l++){
      lines.push(cm.getLineHandle(l));
    }
    return {top: topLineNumber, bottom: bottomLineNumber, lines: lines}


  }

  // returns list of all tag text of type tagtype
  // allTagsOfType(ideaLines, "xn-maptag")
  function allTagsOfType(ideaLines, tagtype){
    var lines = ideaLines.lines;
    var tagtexts = []
    for(var l=0;l<ideaLines.lines.length;l++){
      var line = ideaLines.lines[l]
      var lineNumber = cm.getLineNumber(line)
      if(line.styles){
        for(var i=0; i<line.styles.length; i++){
          var s = line.styles[i].toString().trim()
          if(s == tagtype){
            if(i>=3){
              beginCh = line.styles[i-3]
              endCh = line.styles[i-1]
            }else if(i==2){
              beginCh = 0
              endCh = line.styles[1]
            }else{
              continue;
            }
            //mapNode.className = "mapNode"; // new styling
            // filter title change text to <>Title 
            var tagtext = cm.getRange({line: lineNumber, ch: beginCh}, {line: lineNumber, ch: endCh})
            tagtexts.push(tagtext)
          }
        }
      }
    }
    return tagtexts
  }

  // returns true if idea has this tag
  // ideaHasTagSomewhereInIt(ideaLines, "xn-maptag")
  function ideaHasTagSomewhereInIt(ideaLines, tag){
    var lines = ideaLines.lines;
    for(var l=0;l<ideaLines.lines.length;l++){
      var line = ideaLines.lines[l]
      if(line.styles){
        for(var i=0; i<line.styles.length; i++){
          if(line.styles[i]){
            var s = line.styles[i].toString().trim()
            if(s == tag){
              return true;
            }
          }
        }
      }
    }
    return false
  }
  // if markerClassName is blank, deletes all markers
  function removeMarkersFromLine(markerClassName, line){
    if(line.hasOwnProperty("markedSpans")){
      var markers = line.markedSpans;
      if(markers){
        for(var m=0; m < markers.length; m++){
          var marker = markers[m];
          if(!markerClassName  // delete all markers
            || (marker.marker.className == markerClassName)){
            marker.marker.clear();
          }
        }
      }else{
        // we're good, no markers on this line
      }
    }else{
      // we're good, no markers on this line
    }
  }

  //submitWidget = null; 
  cm.on("cursorActivity", function(line, changeObj){
    if(line.styles==null){ 
      setTimeout(function(){
        onCursorActivity(line, changeObj)
      },1)
    }else{
      onCursorActivity(line, changeObj)
    }
  });
  onCursorActivity = function(line, changeObj){
    var lineCh = cm.getCursor("head")
    var lineNumber = lineCh.line;
    var line = cm.getLineHandle(lineNumber);
    //lineObj.styleClasses.bgClass = "";

    // weird bug that appeared when I started using sharejs
    // after a keystroke, the line object is still not updated
    // the event handler gets called before the line object updates
    // so i need to wait 1ms


    var ideaLines = findTopAndBottomOfTheIdeaInWhichThisLineIs(line, "INCLUDETOCURSOR");
    
    
    console.log("cursor",lineNumber)
    

    /*
    for(var l=0; l<ideaLines.lines.length; l++){
      var ideaLine = ideaLines.lines[l];
      //remove all map markers
      removeMarkersFromLine("mapMarker", ideaLine);
    }*/
    // removeMarkersFromLine("mapMarker", cm.getLineHandle(l)); // last line

    /*for(var l=0; l<ideaLines.lines.length; l++){
      var ideaLine = ideaLines.lines[l]
      if(addSubmitButtonToFirstMap(ideaLine, function(){
      })) break; // stop after first map
    }*/


    if(submitWidget) submitWidget.clear();
    $("#submitButtonTopNav").empty();

    if(ideaLines){ // cursor is inside of an idea
      if(ideaHasTagSomewhereInIt(ideaLines,"xn-maptag")){
        var buttonNode = makeSubmitButtonNode(ideaLines.bottom);
        if(_CONFIG.submitButton=="endOfIdea"){
          submitWidget = cm.addLineWidget(ideaLines.bottom, buttonNode, {showIfHidden: true })
        }else if(_CONFIG.submitButton=="topNav"){
          $("#submitButtonTopNav").append(buttonNode);
        }
        //highlightIdea(ideaLines);
      }
    }

    // var bottomLine = ideaLines.lines[ideaLines.lines.length-1]
    /*var bottomLineText = bottomLine.text;
    bottomLineText = bottomLineText.replace(/[\s]*$/, "");
    var bottomLineLastCh = bottomLineText.length;
    console.log("bottomLine", bottomLine, bottomLineLastCh)
    cm.replaceRange(" ", 
      {line: ideaLines.bottom, ch: bottomLineLastCh+1},
      {line: ideaLines.bottom, ch: bottomLineLastCh+2})
    marker = cm.markText(
              {line: ideaLines.bottom, ch:bottomLineLastCh},
              {line: ideaLines.bottom, ch:bottomLineLastCh+1}, 
              {replacedWith: buttonNode, atomic: true, className: "mapMarker",
               inclusiveLeft: false, inclusiveRight: false, collapsed: true})
    */
    /*
    cm.replaceRange(" ", 
      {line: ideaLines.bottom+1, ch: 0},
      {line: ideaLines.bottom+1, ch: 1})
    marker = cm.markText(
              {line: ideaLines.bottom+1, ch:0},
              {line: ideaLines.bottom+1, ch:1}, 
              {replacedWith: buttonNode, atomic: true, className: "mapMarker",
               inclusiveLeft: false, inclusiveRight: false, collapsed: true})
    */


    
    // Current approach: delete all markers, add them again every time.
    removeMarkersFromLine("relatedIdeaNode", line);
    makeRelatedIdeaObjects(line);

    
    //cm.removeLineClass(lineNum, "background","selected")

    /*
    if(bgc.substring(0,13)=="xn-empty-line"){
      // this is an empty line. 
      nextLine = cm.getLineHandle(lineNum+1);
      if(!nextLine){
        // we're at the very end white space, no idea here
        return;
      }else if(nextLine && nextLine.styleClasses.bgClass.substring(0,13)=="xn-empty-line"){
        // we're in between ideas, no idea here
        return;
      }
    }
    while( lineNum < cm.lineCount()){ // find the bottom of this idea
      lineNum++;
      lineObj = cm.getLineHandle(lineNum);
      if(!lineObj){
        lineNum--;
        break; // no more lines, we're at the bottom of the document (and the idea)
      }
      bgc = lineObj.styleClasses.bgClass; 
      if(bgc.substring(0,10)=="xn-newidea"){
        // we landed on a new idea, now we back up through the white space until we land on text again
        lineNum--;
        while( lineNum >= 0){
          lineObj = cm.getLineHandle(lineNum);
          bgc = lineObj.styleClasses.bgClass; 
          if(bgc.substring(0,14) == "xn-currentidea"){
            // aha! here's the line. 
            break; 
          }else{
            lineNum--; // back up another line
            continue;
          }
        }
        break;
      }else{
        lineNum++;
        continue; // the bottom of the idea, maybe! 
      }
    }*/

    //submitWidget = cm.addLineWidget(lineNumber,buttonNode, {showIfHidden: true })
  }



  //codemirror.net/demo/indentwrap.html
  var charWidth = cm.defaultCharWidth(), basePadding = 4;
  
  cm.on("renderLine", function(cm, line, elt) {
    var column = CodeMirror.countColumn(line.text, null, cm.getOption("tabSize"));
    var off = column * charWidth;

    var lineNumber = cm.getLineNumber(line);
    var bgc = line.styleClasses.bgClass;

    /*
    // find all cm-xn-relatestag 
    var beginCh = 0
    var endCh = 10
    // and turn into relatedIdeaNode 
     // */

  


    //var nextLine = cm.getLineHandle(lineNumber+1);

    //cm.addLineWidget(lineNumber,buttonNode, {showIfHidden: true})
    /*
    if(nextLine && nextLine.hasOwnProperty("styleClasses")){
      var nbgc = nextLine.styleClasses.bgClass;
      //console.log("render", line, elt);
      if(bgc == "xn-empty-line"){
        elt.style.backgroundColor = "red"
      }else  if(bgc == "xn-empty-line-2"){
        elt.style.backgroundColor = "blue"
      }else if(bgc == "xn-newidea-line"){
        elt.style.backgroundColor = "green"

      }else if(bgc == "xn-currentidea-line"){
        elt.style.backgroundColor = "#0f0"
      }
      if(bgc == "xn-empty-line" && nbgc == "xn-empty-line-2"){
        elt.style.backgroundColor = "blue"
      }else if(bgc == "xn-empty-line" && nbgc == "xn-newidea-line" ){
        elt.style.backgroundColor = "blue"
      }
    }*/

    elt.style.textIndent = "-" + off + "px";
    elt.style.paddingLeft = (basePadding + off) + "px";

    /* color unique ideas */
    //elt.style.backgroundColor = "#eee"

    //elt.style.paddingBottom = "5px" /* padding space between lines, so as to distinguish new lines from wrapped text */ 

    /* alternating colored lines vertically / horizontally 
    if (parseInt(column) % 8 == 0){
      if( cm.getLineNumber(line) % 2 == 0){
        bg = "rgb(255,255,255)" 
      }else{
        bg = "rgb(248,248,248)"
      }
    }else{
      if( lineNumber % 2 == 0){
        bg = "rgb(210,210,210)" 
      }else{
        bg = "rgb(222,222,222)"
      }
    }

    elt.style.backgroundImage = "linear-gradient(to right, rgb(255, 255, 255) 0px, rgb(255, 255, 255) "+off+"px, "+bg+" 0%, rgb(255, 255, 255) 100%)"
    //elt.style.backgroundImage = "linear-gradient(to right, rgb(255, 255, 255) 0px, rgb(255, 255, 255) "+off+"px, "+bg+" 0%, rgb(255, 255, 255) 100%)"
    //*/
  });
  cm.refresh();



  // create a node
  h1Node =document.createElement("h1");
  text =  document.createTextNode("idea overflow 4eva");
  h1Node.appendChild(text)
  hrNode = document.createElement("hr")

  // call this after you initialized the editor.
  // the position must be like this {ch: YourCharecterNumber, line: YourLineNumber}
  //cm.addLineWidget(26,h1Node, {showIfHidden: true})
  //cm.addLineWidget(22,hrNode, {showIfHidden: true})
  //cm.addLineWidget(11,divNode, {showIfHidden: true})





  //cm.replacedWith()


  $(".CodeMirror").on("click",".cm-xn-hashtag, .cm-xn-persontag, .cm-xn-maptag ",function(e){
    var tagText = e.currentTarget.innerHTML;
    $("#filter").val(tagText)
    filterViewOfThoughtstream(tagText);
  })
  $(".CodeMirror").on("click",".cm-xn-link ",function(e){
    var url = e.currentTarget.innerHTML.trim()
    window.open(url)
  })



  /* FILTER */
  $("#filter").on("change keyup", function(e){
    //console.log(e);
    var val = $("#filter").val()
    //console.log(val);
    filterViewOfThoughtstream(val);
  });
};



// return true if line contains query
function searchLineForQuery(line, val){
  return line.text.indexOf(val)>-1;
}

filteredLineMarks = []
function filterViewOfThoughtstream(val){
  // for each line, hide

  //SLOW WAY::: 
  $.each(filteredLineMarks, function(i){
      //console.log("blrum",i)
      filteredLineMarks[i].clear()
  })

  filteredLineMarks = [];
  var goodLines = []

  if(val.length>0){
    var lineage = [] // list of parents, grandparents, etc
    cm.eachLine(function(line){
      var lineNumber = cm.getLineNumber(line);
      // does this line contain the query?
      var matchLine = searchLineForQuery(line, val)
      // let's find out if this line is in an indentation hierarchy
      var bgc = line.styleClasses.bgClass;
      var hclass = bgc.match(/xn-hierarchy-([A-Za-z0-9]+)/i);
      if(hclass){
        //console.log(hclass[1])
        hclass = hclass[1]

        var deepness = 0;
        if(hclass=="broken"){
          // hierarchy is broken here
        }else if(hclass=="0"){
          // root node of hierarchy
          // reset lineage
          //console.log("reset lineage", lineage, lineNumber)
          lineage = [lineNumber];
          //console.log("ok", lineage, goodLines)
        }else{
          deepness = parseInt(hclass) +1;
          if(deepness >= 1){
            // we're in the middle of some hierarchy
            // mode-thoughtstream.js should have taken care of badly formatted hierarchies
            // assume we're in a well-formatted hierarchy at the given deepness
            if(deepness == lineage.length+1){
              // include child

              //console.log("include child", lineage, lineNumber)
              lineage.push(lineNumber)
              //console.log("ok", lineage, goodLines)
            }else if (deepness >= lineage.length + 2){
              console.log("ERROR: we're in a poorly formatted hierarchy, and mode-thoughtstream.js should have caught this by now");
            }else if(deepness == lineage.length){
              // kill sibling, take their place

              //console.log("kill sibling", lineage, lineNumber)
              lineage.pop();
              lineage.push(lineNumber)
              //console.log("ok", lineage, goodLines)
            }else if(deepness < lineage.length){
              // abandon the children

              //console.log("abandon children", deepness, lineage, lineNumber)
              lineage = lineage.slice(0,deepness);
              lineage.pop();
              lineage.push(lineNumber)
              //console.log("ok", lineage, goodLines)
            }
          }else{
            //console.log("??", deepness, lineage, lineNumber)
          }
        }
      }
      //okay, hierarchical stuff is done
      if(matchLine){
        // found a line which includes search query
        if(deepness > 0){
          // we're deep in a hierarchy
          // workflowy aesthetic: include the parents
          // concat'ing lineage will include the current line too
          //console.log("pushing lineage", lineage, goodLines)
          goodLines = goodLines.concat(lineage)
          //console.log("ok", goodLines)
        }else{
          // push the current line
          //console.log("pushing lineNumber", lineNumber, goodLines);
          goodLines.push(lineNumber);
          //console.log("ok" ,goodLines);
        }
      }
    });
    
    // unique goodLines, sort goodLines

    //console.log(goodLines)
    goodLines = sort_unique(goodLines);
    //console.log(goodLines)

    var oldLine = -1;
    var oldLineLength = 0;
    for(var i=0;i<goodLines.length;i++){
      var newLine = goodLines[i]
      var spanNode =  document.createElement("br")
      spanNode.className = "foldedTextSpan";
      if(newLine>0){
        var filteredLineMark = cm.markText(
          {line: oldLine+1,  ch:0}, 
          {line:newLine, ch: 0},
          {replacedWith: spanNode,
          inclusiveRight: false,
          inclusiveLeft: true,
          readOnly: true,
          clearOnEnter: false,
        });
        filteredLineMarks.push(filteredLineMark);
      }

      oldLine = newLine;
    }
    lastLine = cm.lastLine()

    var spanNode =  document.createElement("br")
    spanNode.className = "foldedTextSpan";
    var filteredLineMark = cm.markText(
      {line: oldLine+1, ch:0}, 
      {line:lastLine, ch:cm.getLineHandle(lastLine).text.length}, {
      replacedWith: spanNode,
      inclusiveLeft: true,
      inclusiveRight: true,
      readOnly: true,
      clearOnEnter: false,
    });
    filteredLineMarks.push(filteredLineMark);
    //console.log(filteredLineMarks)
  }
}


