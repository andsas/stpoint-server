(function(){
    "use strict";
    angular.module('app.admin.article',[])
    	.value('froalaConfig', { 
    		toolbarInline: false, 
    		placeholderText: 'Valor', 
    		charCounterMax: 10000,
    		//toolbarButtons : ["bold", "italic", "underline", "|", "align", "formatOL", "formatUL"]        
    	});
})();
