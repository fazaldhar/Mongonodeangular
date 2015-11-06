profileServices.service('profileAPIService',function($http,$resource,$q){

    this.getProfile = function() {
    	var deferred = $q.defer();

		$http({
			method: 'JSONP', 
			url: 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
		}).then(function(data){
			deferred.resolve(data);
		},function(err){
			deferred.reject(err);
		});

    	return deferred.promise;

    	/*return $resource('http://ergast.com/api/f1/2013/:driver.:format',{
    		driver : 'driverStandings',
    		format : 'json',
    		callback : 'JSON_CALLBACK'
    	});*/
    }

});