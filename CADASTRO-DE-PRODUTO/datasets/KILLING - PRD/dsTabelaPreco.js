function defineStructure() {
	
	addColumn("COD");                 
	addColumn("TABELA");              
	addColumn("TABELA_COMPLETO");     
	addColumn("TABELA_FILIAL");     
	
	
    setKey(["COD", "TABELA_FILIAL"]);
    addIndex([ "COD" ]);
    addIndex([ "COD", "TABELA_FILIAL" ]);
}

function onSync(lastSyncDate) {

	 var dataset = DatasetBuilder.newDataset();
	 dataset.addColumn("COD");
	    dataset.addColumn("TABELA");
	    dataset.addColumn("TABELA_COMPLETO");
	    dataset.addColumn("TABELA_FILIAL");  
	    var clientService = fluigAPI.getAuthorizeClientService();
	   
	    var data = {
	        companyId: ""+ getValue('WKCompany')+ "",
	        serviceCode: 'SERVICO_PROTHEUS', // Mesmo domain, sem necessidade de criar outro servico
	        endpoint: '/rest/kilws160/get_zoom?a1_zoom=a1tabela',
	        method: 'GET',
	        timeoutService: '1000',
	        options: {
	            useSSL: true
	        }
	    }

	    var vo = clientService.invoke(JSON.stringify(data));
	    var x = JSON.parse(vo.getResult());
	    //{"DA0_FILIAL":"0101","DA0_CODTAB":"001","DA0_DESCRI":"IMOBILI?RIA - 7%"}
	    /*for(var i in x) {
	        i != 'status' ? dataset.addRow(new Array(i, x[i], i + " - " + x[i])) : ''  
	    }*/

	    for(var i = 0; i < x.length; i++){
	    	dataset.addOrUpdateRow(new Array(x[i].DA0_CODTAB, x[i].DA0_DESCRI, x[i].DA0_CODTAB + " - " + x[i].DA0_DESCRI, x[i].DA0_FILIAL));
	    }
	    
	    return dataset; 
    

}

function createDataset(fields, constraints, sortFields) {
	 
	 var dataset = DatasetBuilder.newDataset();
	 dataset.addColumn("COD");
	    dataset.addColumn("TABELA");
	    dataset.addColumn("TABELA_COMPLETO");
	    dataset.addColumn("TABELA_FILIAL");  
	    var clientService = fluigAPI.getAuthorizeClientService();
	   
	    var data = {
	        companyId: ""+ getValue('WKCompany')+ "",
	        serviceCode: 'SERVICO_PROTHEUS', // Mesmo domain, sem necessidade de criar outro servico
	        endpoint: '/rest/kilws160/get_zoom?a1_zoom=a1tabela',
	        method: 'GET',
	        timeoutService: '1000',
	        options: {
	            useSSL: true
	        }
	    }

	    var vo = clientService.invoke(JSON.stringify(data));
	    var x = JSON.parse(vo.getResult());
	    //{"DA0_FILIAL":"0101","DA0_CODTAB":"001","DA0_DESCRI":"IMOBILI?RIA - 7%"}
	    /*for(var i in x) {
	        i != 'status' ? dataset.addRow(new Array(i, x[i], i + " - " + x[i])) : ''  
	    }*/

	    for(var i = 0; i < x.length; i++){
	    	dataset.addRow(new Array(x[i].DA0_CODTAB, x[i].DA0_DESCRI, x[i].DA0_CODTAB + " - " + x[i].DA0_DESCRI, x[i].DA0_FILIAL));
	    }
	    
	    return dataset; 
    
    
}


