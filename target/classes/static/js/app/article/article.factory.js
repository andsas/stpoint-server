(function(){
    "use strict";
    angular.module('app.article')
            .factory('articleFactory',articleFactory);
    
    function articleFactory(authFactory, dataFactory, authTokenFactory){
        var service = {
            Data: {
            	bySituation: dataBySituation,
            	get: dataGet
            }
        };
        return service;
        
        function dataBySituation(situation, success, error){
            return dataFactory.get('authenticated/situation/'+situation.id+'/articles',
            		{},
            		{'STP-Language': authTokenFactory.user().language,
                		'STP-Desired-Language': authTokenFactory.user().desiredLanguage})
                    .then(success, error);
        };
        
        function dataGet(id, sucess, error){
        	return dataFactory.get('authenticated/article/'+id)
            .then(success, error); 
        };
    };
})();
/*
        function dataBySituation(situation, success, error){
            return dataFactory.get('authenticated/situation/'+situation.id+'/articles',
            		{}
            		,{'STP-Language': authTokenFactory.user().language,
            		'STP-Desired-Language': authTokenFactory.user().desiredLanguage}
            		)
                    .then(success, error);
        }; 
 */
