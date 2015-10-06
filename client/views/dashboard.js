WebixViews.dashboard = function(){

	var chart = WebixViews["dashboard.chart"]();
	var tasks = WebixViews["dashboard.tasks"]();

	return {
		$ui: {
			type:"space", rows:[
				chart,
				tasks
			]
		}
	};
};