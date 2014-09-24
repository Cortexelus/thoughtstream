Router.map(function() {
  	this.route('main', {path: '/'});
  	this.route('docs', {path: '/d'});
	



	this.route('editor', { 
	  path: '/d/:_id',
	  data: function() { 
	  	var doc = Documents.findOne({title: this.params._id});
	  	if(!doc){
	  		Documents.insert({_id: this.params._id, title: this.params._id},function(err, id){
		      if(!id) return;
		      Session.set("document", id)
		  	});
	  		doc = Documents.findOne({title: this.params._id});
	  	}
	  	Session.set("document", this.params._id)
	  	return doc
	  }
	});  
});
 