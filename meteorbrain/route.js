Router.map(function() {
  	this.route('main', {path: '/'});
	
	this.route('editor', { 
	  path: '/d/:_id',
	  data: function() { 
	  	return Documents.findOne(this.params._id); 
	  }
	});  
});
 