function defineStructure() {
    
	addColumn("COD");
    addColumn("FOCO");
    addColumn("FOCO_COMPLETO");
	

	
    setKey(["COD"]);
    addIndex([ "COD" ]);
}

function onSync(lastSyncDate) {

	var dataset = DatasetBuilder.newDataset();
    dataset.addColumn("COD");
    dataset.addColumn("FOCO");
    dataset.addColumn("FOCO_COMPLETO");

    var clientService = fluigAPI.getAuthorizeClientService();
   
    var data = {
        companyId: ""+ getValue('WKCompany')+ "",
        serviceCode: 'SERVICO_PROTHEUS', // Mesmo domain, sem necessidade de criar outro servico
        endpoint: '/rest/kilws160/get_zoom?a1_zoom=a1foco',
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

    return dataset; 
    

}

function createDataset(fields, constraints, sortFields) {
	var dataset = DatasetBuilder.newDataset();
    dataset.addColumn("COD");
    dataset.addColumn("FOCO");
    dataset.addColumn("FOCO_COMPLETO");

    var clientService = fluigAPI.getAuthorizeClientService();
   
    var data = {
        companyId: ""+ getValue('WKCompany')+ "",
        serviceCode: 'SERVICO_PROTHEUS', // Mesmo domain, sem necessidade de criar outro servico
        endpoint: '/rest/kilws160/get_zoom?a1_zoom=a1foco',
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
    
    
}

