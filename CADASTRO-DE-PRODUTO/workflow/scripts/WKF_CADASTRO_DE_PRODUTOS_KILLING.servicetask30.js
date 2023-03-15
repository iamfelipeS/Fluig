var arraysCamposIntegravel = ["BZ_FILIAL","BZ_COD","BZ_LOCPAD","BZ_AFUNDES","BZ_ALFECRN","BZ_ALFUMAC","BZ_ALIQISS","BZ_COFINS",
"BZ_CONINI","BZ_CONVDIP","BZ_CSLL","BZ_CTRWMS","BZ_CUSTD","BZ_DATREF","BZ_DTINCLU","BZ_EMAX","BZ_EMIN","BZ_ESTSEG","BZ_FANTASM","BZ_FCIPRV","BZ_FECP","BZ_FECPBA",
"BZ_GRTRIB","BZ_HABDIF","BZ_HORFIX","BZ_IDHIST","BZ_IMPNCM","BZ_INT_ICM","BZ_IPI","BZ_IRRF","BZ_LE","BZ_LM","BZ_LOCALI2","BZ_LOCALIZ","BZ_MARKUP","BZ_MCUSTD","BZ_MOPC",
"BZ_MRP","BZ_OPC","BZ_PCOFINS","BZ_PCSLL","BZ_PE","BZ_PICM","BZ_PICMENT","BZ_PICMRET","BZ_PIS","BZ_PPIS","BZ_QB","BZ_QBP","BZ_QE","BZ_REDCOF","BZ_REDPIS","BZ_REVATU",
"BZ_TIPE","BZ_TIPOCQ","BZ_TOLER","BZ_TPHOFIX","BZ_TRIBMUN","BZ_UCALSTD","BZ_UCOM","BZ_UPRC","BZ_VLR_ICM","BZ_VLR_IPI"]

/*"BZ_UMDIPI","BZ_CODISS","BZ_CNAE",BZ_CLASFIS*/

var arraysCamposData = ["BZ_UCALSTD","BZ_UCOM","BZ_CONINI","BZ_DATREF","BZ_DTINCLU"]

function servicetask30(attempt, message) {
	try{
		var c1 = DatasetFactory.createConstraint("metadata#active", true, true, ConstraintType.MUST)
    	var dtsCadAmbiente = DatasetFactory.getDataset('DTS_FRM_CRUD_CADASTRO_DE_AMBIENTES', null, new Array(c1), ['documentid;desc']);
		
		// log.info(">>>>>>>>>>>> dtsCadAmbiente.rowsCount: ");

		log.dir(dtsCadAmbiente.rowsCount);
		if(dtsCadAmbiente.rowsCount > 0){

			var id = dtsCadAmbiente.getValue(0, 'metadata#id')
			var version = dtsCadAmbiente.getValue(0, 'metadata#version')
	
			var c2 = DatasetFactory.createConstraint("metadata#id", id, id, ConstraintType.MUST)
			var c3 = DatasetFactory.createConstraint("metadata#version", version, version, ConstraintType.MUST)
			var c4 = DatasetFactory.createConstraint("tablename", "tbl_Ambientes", "tbl_Ambientes", ConstraintType.MUST)
			var dtCadAmbientePaiFilho = DatasetFactory.getDataset('DTS_FRM_CRUD_CADASTRO_DE_AMBIENTES', null, new Array(c1, c2, c3, c4), ['documentid;desc']);
			log.info(">>>>>>>>>>>>> dtCadAmbientePaiFilho.rowsCount: ");
			log.dir(dtCadAmbientePaiFilho.rowsCount);
			if(dtCadAmbientePaiFilho.rowsCount > 0){
				
				var ServiceCod;
				var EZ4Key;

				for(var i = 0; i<dtCadAmbientePaiFilho.rowsCount; i++){
					log.info(">>>>>>>>>>>>> FOR DTS dtCadAmbientePaiFilho.rowsCount: ");
					log.dir(dtCadAmbientePaiFilho.getValue(i, 'cpServiceCod'));
					log.dir(dtCadAmbientePaiFilho.getValue(i, 'cpEZ4Key'));
					if(dtCadAmbientePaiFilho.getValue(i, 'cpServiceCod') == "INTERFACE_EZ4_REST"){
						ServiceCod = dtCadAmbientePaiFilho.getValue(i, 'cpServiceCod')
						EZ4Key = dtCadAmbientePaiFilho.getValue(i, 'cpEZ4Key')
					}
				}
		
				//log.info(">>>>>>>>>>>>> ServiceCod: " + ServiceCod);
				//log.info(">>>>>>>>>>>>> EZ4Key: " + EZ4Key);
				
				var data = {
					companyId : getValue("WKCompany") + "",
					serviceCode : ServiceCod  + "",
					endpoint : "/rest/interfaceez4rest/funcao",
					method : "put",
					timeoutService : "100",
					params : {
						cabecalho : {},
						funcao : "",
						camposRetorno : ["BZ_COD","BZ_LOCPAD"]
					},
					headers : {
						"Content-Type": "application/json",
						"EZ4Key": EZ4Key + ""
					}
				};

				//Acrescentando o parâmetro funcao no objeto data de acordo com a opção do formulário
				var option = hAPI.getCardValue("OPT_CADASTRO");

				 //log.info(">>>>>>>>>>>> option: "+option);

				 if(option == "ADICIONAR"){

					 //log.info(">>>>>>>>>> ADICIONAR <<<<<<<<<<<");
					data.params["funcao"] = "MSExecAuto({|x,y| Mata018(x,y)},aCab,3)";
				 }else if(option == "ALTERAR"){

					//log.info(">>>>>>>>>>>> if ALTERAR <<<<<<<<<<<<<<<");
					data.params["funcao"]= "MSExecAuto({|x,y| Mata018(x,y)},aCab,4)";

				}else if(option == "BLOQUEAR"){

					//log.info(">>>>>>>>>> else if BLOQUEAR <<<<<<<<<<<<<<");
					data.params["funcao"] = "MSExecAuto({|x,y| Mata018(x,y)},aCab,4)";

				}

				 	log.info(">>>>>>>>>>>> DEPOIS option: "+option);
				//Acrescentando os campos na estrutura de cabeçalho do objeto data
				for(var i = 0; i<arraysCamposIntegravel.length;i++ ){
					data.params.cabecalho[arraysCamposIntegravel[i]] = formatDate(arraysCamposIntegravel[i])+ "";
				}
				log.info(">>>>>>>>>>>> data: " + JSON.stringify(data));
				var clientService = fluigAPI.getAuthorizeClientService();

				var retornoApi = clientService.invoke(JSON.stringify(data));
				log.info("LOG RETORNO API")
				log.dir(retornoApi)
				var statusHttp = retornoApi.getHttpStatusResult();

				var errorFlag = false;
				var msg1 = 'O WebService retornou um erro:\n';
				
				//Verifica se o retorno está vazio
				if(retornoApi.getResult() == null || retornoApi.getResult().isEmpty()){
						//log.info(">>>>>>>>>>>>> DENTRO DO IF " );
					msg1 += "Ocorreu uma falha no retorno da API!";
					errorFlag = true;
				}else {
						log.info(">>>>>>>>>>>>> DENTRO DO ELSE " );
					retornoApi = JSON.parse(retornoApi.getResult());
						log.info(">>>>>>>>>>>>> retornoApi: " + retornoApi.errorMessage);
					if(retornoApi.errorMessage != undefined && retornoApi.errorMessage != null && retornoApi.errorMessage != ''){
						msg1 += retornoApi.errorMessage;
						errorFlag = true;
					}
				}
				
				//Verifica se houve erro de Http
				if(statusHttp < 200 || statusHttp > 300){
					msg1 += "\nStatus HTTP: " + statusHttp + " | Endpoint: " + data.endpoint;
					errorFlag = true;
				}
				
				if(errorFlag){

					// hAPI.setCardValue('ERRO_INTEGRACAO', "ERRO");
					// hAPI.setCardValue('ERRO_INTEGRACAO_TEXTO', msg1);
					hAPI.setTaskComments(getValue("WKUser"), getValue("WKNumProces"), 0, 'ERRO_INTEGRACAO: '+msg1);
				} else {
					//log.info(">>>>>>>>>>>>> ELSE: ");
                    //hAPI.setCardValue('ERRO_INTEGRACAO', "OK");
                    //hAPI.setCardValue('A1_COD', retornoApi.A1_COD);
					hAPI.setTaskComments(getValue("WKUser"), getValue("WKNumProces"), 0, "<h1 style='color:#07284b; font-size:1.5em;'>INTEGRAÇÃO EFETUADA COM SUCESSO. CÓDIGO DO PRODUTO: "+ retornoApi.BZ_COD + "</h1>")
				}
			}
		}
	}catch(e){
		throw "ERRO NA INTEGRAÇÃO "+e.message+" / LINHA: "+e.lineNumber;
	}
}

	function formatDate(value){
		log.info('servicetask30 value '+value)
		var campo = value
		value = hAPI.getCardValue(value)
		log.info('servicetask30 value LINHA 137'+value)
		for(var i = 0;i < arraysCamposData.length;i++){
			if(arraysCamposData[i] == campo && value.indexOf('-') != -1){
				value = value.split('-')
				return value[2]+"/"+value[1]+"/"+value[0]
			}
		}
		return value.trim()
	}
