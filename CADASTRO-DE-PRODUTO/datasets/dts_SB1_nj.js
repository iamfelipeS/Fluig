function createDataset(fields, constraints, sortFields) {
	var dataset = DatasetBuilder.newDataset();
		dataset.addColumn("B1_DESC");	
		dataset.addColumn("B1_COD");
		dataset.addColumn("COD_DESC");
//
	var cod = findConstraint('B1_COD', constraints);
	if(!cod) cod = ""	
	
	log.info('----- cod: '+cod)
		
	try{
		var c1 = DatasetFactory.createConstraint("metadata#active", true, true, ConstraintType.MUST)
    	var dtsCadAmbiente = DatasetFactory.getDataset('DS_FRM_CRUD_CADASTRO_DE_AMBIENTES', null, new Array(c1), ['documentid;desc']);
		
		if(dtsCadAmbiente.rowsCount > 0){

			var id = dtsCadAmbiente.getValue(0, 'metadata#id')
			var version = dtsCadAmbiente.getValue(0, 'metadata#version')
	
			var c2 = DatasetFactory.createConstraint("metadata#id", id, id, ConstraintType.MUST)
			var c3 = DatasetFactory.createConstraint("metadata#version", version, version, ConstraintType.MUST)
			var c4 = DatasetFactory.createConstraint("tablename", "tbl_Ambientes", "tbl_Ambientes", ConstraintType.MUST)
			var dtCadAmbientePaiFilho = DatasetFactory.getDataset('DS_FRM_CRUD_CADASTRO_DE_AMBIENTES', null, new Array(c1, c2, c3, c4), ['documentid;desc']);
	
			if(dtCadAmbientePaiFilho.rowsCount > 0){
				
				var ServiceCod
				var EZ4Key;

				for(var i = 0; i<dtCadAmbientePaiFilho.rowsCount; i++){
					if(dtCadAmbientePaiFilho.getValue(i, 'cpServiceCod') == "INTERFACE_EZ4_REST"){
						ServiceCod = dtCadAmbientePaiFilho.getValue(i, 'cpServiceCod')
						EZ4Key = dtCadAmbientePaiFilho.getValue(i, 'cpEZ4Key')
					}
				}
				
				var clientService = fluigAPI.getAuthorizeClientService();
				var cQryWhr;
				
				if(cod){
					cQryWhr = "(B1_COD LIKE '%" + cod + "%' OR B1_DESC LIKE '%" + cod + "%') AND B1_ATIVO = 'S' AND B1_MSBLQL = '2'";
				}else{
					cQryWhr = "D_E_L_E_T_ = ' ' AND B1_ATIVO = 'S' AND B1_MSBLQL = '2'";
				}
							
				var data = {
					companyId : getValue("WKCompany") + '',
					serviceCode : ServiceCod,
					endpoint : '/rest/INTERFACEEZ4REST/consulta/EZ4_PADRAO_PRODUTOS',
					method : 'put',
					// Conteúdo do JSON que será enviado no POST
					params :{
						"select": "TOP 10 B1_COD,B1_DESC, CONCAT(B1_COD, ' - ', B1_DESC) COD_DESC ",
						"where": cQryWhr
					},
					// Aqui você pode incluir algum Header se necessário
					headers:{
						"Content-Type": "application/json",
						"EZ4Key": EZ4Key
					}
				}
			
				log.info('----- data: '+data['params'].where)
				var result = clientService.invoke(new org.json.JSONObject(data).toString());
			
				if (result.getResult()== null || result.getResult().isEmpty()){
					// continue;
				}else{
					var retApi = JSON.parse(result.getResult());
					//Monta o Corpo
					for(indice in retApi){
						var conteudo = [];
						var row = retApi[indice];
						for (coluna in row) conteudo.push(row[coluna].trim())
						if (conteudo.length) dataset.addRow(conteudo);	
					}
				}
			}
		}
	}
	catch(exception){
		dataset.addColumn("MENSAGEM");
		dataset.addColumn("LINHA");
		dataset.addRow([exception.toString(), exception.lineNumber]);
	}

	return dataset;
}

function findConstraint(fieldName, constraints, defaultValue) {
	
	if (constraints != null) {
		for (var i=0; i<constraints.length; i++){
			log.info('-----: '+constraints[i].fieldName)
			if (constraints[i].fieldName == fieldName){
				log.info('-----: '+constraints[i].initialValue)
				return constraints[i].initialValue;
			}
		}
	}
	return defaultValue;
}