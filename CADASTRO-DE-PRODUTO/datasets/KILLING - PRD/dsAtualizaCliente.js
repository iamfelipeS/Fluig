function createDataset(fields, constraints, sortFields) {
	var dataset = DatasetBuilder.newDataset();
    dataset.addColumn("MENSAGEM");
    dataset.addColumn("DETALHE");

	
    let param = JSON.parse(String(constraints[0].initialValue));  
    log.info('PARAMETROS')
    log.info(String(constraints[0].initialValue))
	try {
        var clientService = fluigAPI.getAuthorizeClientService(); 
        var data = {
            companyId:""+getValue('WKCompany')+"",
            serviceCode:'INC_ATUALIZA_CLIENTE_PROTHEUS',
            endpoint:"/rest/kilws160/put_cliente",
            method:'PUT',
            headers: {
                "Connection": "close", 
            },
            params : param,
            timeoutService: '10000'	  
        }
        var vo = clientService.invoke(JSON.stringify(data));
	    var x = JSON.parse(vo.getResult());
	    log.info("RETORNO PROTHEUS " + vo.getResult());
	    
        for(var i in x){
            dataset.addRow(new Array(x.errorMessage, x.errorCode));	
        }	
    }
    catch(err) {
        log.info(err);
        log.info("RETORNO PROTHEUS com ERRO " + err, err);
        dataset.addRow("RETORNO PROTHEUS com ERRO " + err, err);
    }
	
	return dataset
} 
