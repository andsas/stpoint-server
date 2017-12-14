(function(){
    "use strict";
    angular.module('app')
            .controller('redirectController',redirectController);
    
    function redirectController($scope, $routeParams ,$location, authFactory, appFactory){
        var vm = this;
        
        vm.index = index;
        
        vm.index();
        
        function index(){
            appFactory.sidenav.setExists(false);
            var message = $routeParams.message;
            
            if(message){
                vm.alert(message);
            }
            
            if (authFactory.isUser()){
                $location.path('/page/dashboard/');
            }else if(authFactory.isAdmin()){
                $location.path('/page/admin/dashboard/');
            }else{
                $location.path('/page/home');
            }
        }
    }
})();

