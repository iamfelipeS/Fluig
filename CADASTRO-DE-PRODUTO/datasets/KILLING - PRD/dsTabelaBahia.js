function defineStructure() {
	
	addColumn("COD");                 
	addColumn("TABELA");              
	addColumn("TABELA_COMPLETO");     
	
	
    setKey(["COD"]);
    addIndex([ "COD" ]);
}

function onSync(lastSyncDate) {

	

	var dataset = DatasetBuilder.newDataset();
    dataset.addColumn("COD");
    dataset.addColumn("TABELA");
    dataset.addColumn("TABELA_COMPLETO");
    
    
    var constraintDsTabelaPreco1 = DatasetFactory.createConstraint('TABELA_FILIAL', '0103', '0103', ConstraintType.MUST);
    var datasetDsTabelaPreco = DatasetFactory.getDataset('dsTabelaPreco', null, new Array(constraintDsTabelaPreco1), null);

    var codigo = "";
    var tabela = "";
    var completo = "";
    
    if(datasetDsTabelaPreco){
    	for (var i = 0; i < datasetDsTabelaPreco.rowsCount; i++) {
			
    		codigo = "." + datasetDsTabelaPreco.getValue(i, "COD");
    		tabela = datasetDsTabelaPreco.getValue(i, "TABELA");
    		completo = "." + datasetDsTabelaPreco.getValue(i, "TABELA_COMPLETO");
    		
    	    dataset.addOrUpdateRow(new Array(codigo, tabela, completo));

		}
    	
    }
    
    
    return dataset; 
	
	
	/*var dataset = DatasetBuilder.newDataset();
    dataset.addColumn("COD");
    dataset.addColumn("TABELA");
    dataset.addColumn("TABELA_COMPLETO");
    var clientService = fluigAPI.getAuthorizeClientService();
   
    var data = {
        companyId: ""+ getValue('WKCompany')+ "",
        serviceCode: 'DATASET_CANAL', // Mesmo domain, sem necessidade de criar outro servico
        endpoint: '/rest/kilws160/get_zoom?a1_zoom=a1tabahia',
        method: 'GET',
        timeoutService: '1000',
        options: {
            useSSL: true
        }
    }
    
    var vo = clientService.invoke(JSON.stringify(data));
    var x = JSON.parse(vo.getResult());
    for(var i in x) {
        i != 'status' ? dataset.addOrUpdateRow(new Array(i, x[i], i + " - " + x[i])) : ''  
    }

    return dataset; */
    

}

function createDataset(fields, constraints, sortFields) {
	 
	
	var dataset = DatasetBuilder.newDataset();
    dataset.addColumn("COD");
    dataset.addColumn("TABELA");
    dataset.addColumn("TABELA_COMPLETO");
    
    
    var constraintDsTabelaPreco1 = DatasetFactory.createConstraint('TABELA_FILIAL', '0103', '0103', ConstraintType.MUST);
    var datasetDsTabelaPreco = DatasetFactory.getDataset('dsTabelaPreco', null, new Array(constraintDsTabelaPreco1), null);

    var codigo = "";
    var tabela = "";
    var completo = "";
    
    if(datasetDsTabelaPreco){
    	for (var i = 0; i < datasetDsTabelaPreco.rowsCount; i++) {
			
    		codigo = "." + datasetDsTabelaPreco.getValue(i, "COD");
    		tabela = datasetDsTabelaPreco.getValue(i, "TABELA");
    		completo = "." + datasetDsTabelaPreco.getValue(i, "TABELA_COMPLETO");
    		
    	    dataset.addRow(new Array(codigo, tabela, completo));

		}
    	
    }
    
    
    return dataset; 
	
	
	
	/*
	var dataset = DatasetBuilder.newDataset();
    dataset.addColumn("COD");
    dataset.addColumn("TABELA");
    dataset.addColumn("TABELA_COMPLETO");
    
    var clientService = fluigAPI.getAuthorizeClientService();
   
    var data = {
        companyId: ""+ getValue('WKCompany')+ "",
        serviceCode: 'DATASET_CANAL', // Mesmo domain, sem necessidade de criar outro servico
        endpoint: '/rest/kilws160/get_zoom?a1_zoom=a1tabahia',
        method: 'GET',
        timeoutService: '1000',
        options: {
            useSSL: true
        }
    }
    var vo = clientService.invoke(JSON.stringify(data));
    var x = JSON.parse(vo.getResult());
    for(var i in x) {
        i != 'status' ? dataset.addRow(new Array(i, x[i], i + " - " + x[i])) : ''  
    }

    return dataset; 
    */
    
}

