function createDataset(fields, constraints, sortFields) {
	var dataset = DatasetBuilder.newDataset();
		dataset.addColumn("BZ_COD");	
		dataset.addColumn("BZ_FILIAL");
		
		
//
//	var cod = findConstraint('YA_CODGI', constraints);
//	if(!cod) cod = ""	
	
	try{
		var c1 = DatasetFactory.createConstraint("metadata#active", true, true, ConstraintType.MUST)
    	var dtsCadAmbiente = DatasetFactory.getDataset('DTS_FRM_CRUD_CADASTRO_DE_AMBIENTES', null, new Array(c1), ['documentid;desc']);

		log.info("dtsCadAmbiente.rowsCount: "+dtsCadAmbiente.rowsCount)
		
		if(dtsCadAmbiente.rowsCount > 0){
			
			var id = dtsCadAmbiente.getValue(0, 'metadata#id')
			var version = dtsCadAmbiente.getValue(0, 'metadata#version')
			log.info("id: "+id)
			log.info("version: "+version)
			var c2 = DatasetFactory.createConstraint("metadata#id", id, id, ConstraintType.MUST)
			var c3 = DatasetFactory.createConstraint("metadata#version", version, version, ConstraintType.MUST)
			var c4 = DatasetFactory.createConstraint("tablename", "tbl_Ambientes", "tbl_Ambientes", ConstraintType.MUST)
			var dtCadAmbientePaiFilho = DatasetFactory.getDataset('DTS_FRM_CRUD_CADASTRO_DE_AMBIENTES', null, new Array(c1, c2, c3, c4), ['documentid;desc']);
	
			log.info("dtCadAmbientePaiFilho.rowsCount: "+dtCadAmbientePaiFilho.rowsCount)
			
			if(dtCadAmbientePaiFilho.rowsCount > 0){
				
				var ServiceCod
				var EZ4Key;

				for(var i = 0; i<dtCadAmbientePaiFilho.rowsCount; i++){
					if(dtCadAmbientePaiFilho.getValue(i, 'cpServiceCod') == "INTERFACE_EZ4_REST_DEMO"){
						ServiceCod = dtCadAmbientePaiFilho.getValue(i, 'cpServiceCod')
						EZ4Key = dtCadAmbientePaiFilho.getValue(i, 'cpEZ4Key')
					}
				}
				
				log.info("ServiceCod: "+ServiceCod)
				log.info("EZ4Key: "+EZ4Key)
				
				var clientService = fluigAPI.getAuthorizeClientService();
				log.info("<<<<<<<<<< ANTES DO DATA >>>>>>>>>")
				var data = {
					companyId : getValue("WKCompany") + '',
					serviceCode : ServiceCod,
					endpoint : '/rest/INTERFACEEZ4REST/consulta/EZ4_TABELA_SBZ',
					method : 'put',
					// Conteúdo do JSON que será enviado no POST
					params :{
						"select": "BZ_FILIAL, BZ_COD",
						"where": "D_E_L_E_T_ = ' '"
//						"order": "AH_UNIMED ASC"
					},
					// Aqui você pode incluir algum Header se necessário
					headers:{
						"Content-Type": "application/json",
						"EZ4Key": EZ4Key
					}
				}
				log.info("<<<<<<<<<< DEPOIS DO DATA >>>>>>>>>")
			
				var result = clientService.invoke(new org.json.JSONObject(data).toString());
				
				log.info("<<<<<<<<<< DEPOIS DO DATA >>>>>>>>>")
				
				if (result.getResult()== null || result.getResult().isEmpty()){
					log.info("DENTRO DO IF result.getResult")
					// continue;
				}else{
					log.info("DENTRO DO ELSE ")
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
			if (constraints[i].fieldName == fieldName){
				return constraints[i].initialValue;
			}
		}
	}
	return defaultValue;
}