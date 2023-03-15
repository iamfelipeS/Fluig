function createDataset(fields, constraints, sortFields) {
    var dataset = DatasetBuilder.newDataset();
    dataset.addColumn("COD");
    dataset.addColumn("REP");
    var clientService = fluigAPI.getAuthorizeClientService();
   
    var data = {
        companyId: ""+ getValue('WKCompany')+ "",
        serviceCode: 'SERVICO_PROTHEUS', // Mesmo domain, sem necessidade de criar outro servico
        endpoint: '/rest/kilws170/get_vendedor',
        method: 'GET',
        timeoutService: '1000',
        options: {
            useSSL: true
        }
    }

    var vo = clientService.invoke(JSON.stringify(data));
    var x = JSON.parse(vo.getResult());
    for(var i in x) {
        dataset.addRow(new Array(i, x[i]))
    }

    return dataset;
}