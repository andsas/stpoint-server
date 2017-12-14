(function() {
    angular.module('app.admin.article')
            .directive("articleManage", directive);
    function directive() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'app/admin/article/directive/article-manage.tpl.html',
            scope: {
                host: '@',
            },
            controller: dController,
            controllerAs: 'vm'
        };
        return directive;
    };
    

    function dController($scope, $mdDialog, appFactory, adminArticleFactory) {
        var vm = this;
        vm.articles = [];
        vm.host = $scope.host;
        
        vm.languages = [ '(EN) eng-val', '(EN-US) eng-us-val', '(PT) pt-val', '(PT-BR) pt-bt-val' ];
        
        vm.filter = '';
        vm.valuesHost = null;
        vm.loading = false;
        vm.article = {};
        
        vm.index = index;
        vm.all = all;
        vm.save = save;
        vm.remove = remove;
        vm.cancel = cancel;
        vm.toggle = toggle;
        vm.isExtended = isExtended;
        vm.toggleForm = toggleForm;
        vm.isForm = isForm;
        vm.getValuesHost = getValuesHost;
        
        //Dialogs
        /*
         vm.create = create;
         vm.remove = remove;
         vm.edit = edit;
         */
        //appFactory
        vm.alert = appFactory.alert;

        vm.index();

        $scope.$watch(
            function(){
                return $scope.host;
            },function(newValue){
                vm.host = newValue;
                all();
            });

        function index() {
            all();
        };

        function all() {
        	console.log(vm.host);
            vm.loading = true;
            adminArticleFactory.Data.list(vm.host,
                    function(response) {
                        vm.loading = false;
                        vm.cancel(null);
                        vm.articles = response.data;
                        console.log(response.data);
                    }, function() {
                vm.loading = false;
                vm.alert('Erro ao carregar artigos de: ' + vm.situation.title);
            });
        };

        function save(ev, row) {
            vm.loading = true;
            adminArticleFactory.Data.save(vm.host, row,
                function(response) {
                    vm.loading = false;
                    vm.cancel(null);
                    vm.articles = response.data;
                    vm.alert('Artigo salvo com sucesso');
                }, function(error) {
                    vm.loading = false;
                    vm.alert('Erro ao salvar artigo');
            });
        }
        ;

        function remove(ev, row) {
            vm.loading = true;
            adminArticleFactory.remove(
                    ev,
                    vm.host,
                    row,
                    function(response) {
                        vm.loading = false;
                        vm.cancel(null);
                        vm.articles = response.data;
                        vm.alert('Artigo removido com sucesso ');
                    }, function() {
                vm.loading = false;
                vm.alert('Erro ao remover artigo ');
            });
        };
        function cancel(ev){
        	vm.article = {};
        }
        
        function toggle(ev, index, row){
            if(!row.$$extend){ row.$$extend = false; }
            row.$$extend = ! row.$$extend;
        };

        function isExtended(ev, index, row){
            if(!row.$$extend){row.$$extend = false;}
        	return row.$$extend; 
        };
        
        function toggleForm(ev, index, row ){
                var original = false; 
        	if(!row.$$form){
                    row.$$bkg = angular.copy(row);
                }else{
                    original = true;
                    row = angular.copy(row.$$bkg);
                }
                row.$$form = !original;
                vm.articles[index] = row;
        };
        
        function isForm(ev, index,  row){
        	if(!row.$$form){row.$$form = false;}
        	return row.$$form;
        };
        
        function getValuesHost(row){
            return 'admin/article/' + row.id + '/values/';
        }

    }
    ;
})();


