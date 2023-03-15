function createDataset(fields, constraints, sortFields) {
    var dataset = DatasetBuilder.newDataset();
    dataset.addColumn("JSON");
    var clientService = fluigAPI.getAuthorizeClientService();
    var cnpj = String(constraints[0].initialValue)
   
    var data = {
        companyId: ""+ getValue('WKCompany')+ "",
        serviceCode: 'SERVICO_PROTHEUS', // Mesmo domain, sem necessidade de criar outro servico
        endpoint: "/rest/kilws170/get_cliente?A1_CGC="+cnpj+"",
        method: 'GET',
        timeoutService: '1000',
        options: {
            useSSL: true
        }
    }

    var vo = clientService.invoke(JSON.stringify(data));
    var x = vo.getResult();
    dataset.addRow(new Array(x))
    
    return dataset;
}