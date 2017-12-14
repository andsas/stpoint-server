(function(){
    angular.module('app')
            .directive("listArticles", directive);
    function directive() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'app/article/directive/list-articles-directive.tpl.html',
            scope: {
                situation: '=',
            },
            controller : dController,
            controllerAs: 'vm'
            };
            return directive;
         };
         
         function dController($scope, appFactory, articleFactory){
             var vm = this;
             vm.title = 'Artigos';
             vm.situation = $scope.situation;
             vm.articles = [];
             vm.filter = '';
             vm.loading = false;
             
             vm.index = index;
             vm.all = all;

             //appFactory
             vm.alert = appFactory.alert;
             
             
             //run
             vm.index();
             
             //watch
             $scope.$watch(function(){
                 return $scope.situation;
             }, function(newValue){
                 vm.situation = newValue;
                 vm.all();
             });
             
             function index(){
                 all();
             };
             
             function all(){
            	 vm.loading = true;
                 articleFactory.Data.bySituation(vm.situation,
                    function(response){
                	 	vm.loading = false;
                	 	console.log(response.data);
                	 	vm.articles = response.data;
                    }, function(){
                    	vm.loading = false;
                    	vm.alert('Erro ao carregar artigos de: '+vm.situation.title);
                    });
             };
             
         }
})();
