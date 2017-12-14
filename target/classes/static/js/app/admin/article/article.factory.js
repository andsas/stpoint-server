(function(){
    "use strict";
    angular.module('app.admin.article')
            .factory('adminArticleFactory',adminArticleFactory);
    
    function adminArticleFactory(appFactory, dataFactory){
        var service = {
            remove: remove,
            //Dialog
            /*
            create: create,
            edit: edit,
            */
            Data:{
            	list: dataList,
            	save: dataSave,
            	remove: dataRemove
            }
        };
        return service;
        
        function remove(ev, host, row, success, error){
        	
        	 return appFactory.dialog.simpleDialog(
        			 ev,
        			 'Deseja excluir este artigo?',
        			 'Esta ação não poderá ser revertida',
        			 'Deseja excluir este artigo?',
        			 'Sim', 'Não',
        			 function(){
        				 service.Data.remove(host, row, success, error);
        			 },
        			 function(){});
        };
        //Dialog
        /*
        function create(ev, host, success, error){
        	
        	return appFactory.dialog.customDialog(
        			ev,
        			{row: {}},
        			appFactory.dialog.controller,
        			'app/admin/article/form.tpl.html', 
        			function(answer){
        				service.Data.save(host, answer, success, error)
        			} ,
        			function(){});
        };

        function edit(ev, host, row, success, error){
        	
        	return appFactory.dialog.customDialog(
        			ev,
        			{row: row},
        			appFactory.dialog.controller,
        			'app/admin/article/form.tpl.html', 
        			function(answer){
        				service.Data.save(host, answer, success, error)
        			} ,
        			function(){});
        };
        */
        //data
        function dataList(host, success, error){
            return dataFactory.get(host)
                    .then(success, error);
        }
        
        function dataSave(host, article, success, error){
            return dataFactory.post(host, article)
                    .then(success, error);
        }
        
        function dataRemove(host, article, success, error){
            return dataFactory.del(host+article.id)
                    .then(success, error);
        }
    }
})();

