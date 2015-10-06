Router = FlowRouter;
app = {};
if(Meteor.isClient) {
		app = WebixRouter.create({
			id:			"meteor-demo",
			name:		"Meteor Admin",
			version:	"0.1",
			debug:		true,
			start:		"/app/dashboard",
			goPath: Router.go,
			getPath: function(){
				return Router.current().path;
				// return Iron.Location.get().path;
			}
		});
		app.use(WebixMenuHelper);
}
Router.map(function(route){
  	route('/', {
  	   action: function(params, queryParams) {
	        Router.go('/app/dashboard');
	    }
	});
   	route('/(.*)', {
  	   action: function(params, queryParams) {
  	   		// app.config.container = document.body;
	        Meteor.isClient && app.router();
  	   		console.log(app);
	    }
	});
});	