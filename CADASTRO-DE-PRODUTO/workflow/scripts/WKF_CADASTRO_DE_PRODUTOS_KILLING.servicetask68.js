var arraysCamposIntegravel = ["B1_COD","B1_DESC","B1_TIPO","B1_UM","B1_LOCPAD","B1_GRUPO","B1_TE","B1_TS","B1_SEGUM","B1_CONV","B1_TIPCONV","B1_ALTER","B1_PRV1","B1_CUSTD","B1_UCALSTD","B1_UPRC","B1_MCUSTD","B1_UCOM","B1_PESO","B1_CONTA","B1_CC","B1_ITEMCC","B1_FAMILIA","B1_QB",
"B1_PROC","B1_LOJPROC","B1_APROPRI","B1_FANTASM","B1_RASTRO","B1_UREV","B1_DATREF","B1_FORAEST","B1_ESPECIE","B1_COMIS","B1_PERINV","B1_DTREFP1","B1_CONINI","B1_CODBAR","B1_FORMLOT","B1_LOCALIZ","B1_IMPORT","B1_SOLICIT","B1_AGREGCU","B1_GRUPCOM","B1_REVATU","B1_QTDSER","B1_CLVL","B1_CPOTENC","B1_POTENCI","B1_USAFEFO","B1_CODGTIN","B1_AFAMAD","B1_PICM","B1_IPI","B1_POSIPI","B1_EX_NCM","B1_EX_NBM","B1_ALIQISS","B1_CODISS","B1_PICMRET",
"B1_PICMENT","B1_IMPZFRC","B1_ORIGEM","B1_CLASFIS","B1_GRTRIB","B1_CONTSOC","B1_IRRF","B1_INSS","B1_REDINSS","B1_REDIRRF","B1_TABIPI","B1_REDPIS","B1_REDCOF","B1_PCSLL","B1_PCOFINS","B1_PPIS","B1_VLR_IPI","B1_INT_ICM","B1_VLR_ICM","B1_PIS","B1_VLR_PIS","B1_FECP","B1_CLASSE","B1_AFABOV","B1_RETOPER","B1_CNAE","B1_COFINS","B1_CSLL","B1_VLR_COF","B1_PRFDSUL","B1_CRDEST","B1_TRIBMUN","B1_RICM65","B1_AFETHAB","B1_REGRISS","B1_PRN944I","B1_CRDPRES",
"B1_AFACS","B1_ALFECRN","B1_QE","B1_EMIN","B1_ESTSEG","B1_ESTFOR","B1_FORPRZ","B1_PE","B1_TIPE","B1_LE","B1_LM","B1_TOLER","B1_TIPODEC","B1_MRP","B1_PRVALID","B1_QUADPRO","B1_EMAX","B1_NOTAMIN","B1_TIPOCQ","B1_NUMCQPR","B1_BITMAP","B1_SERIE","B1_ADMIN","B1_PERGART","B1_GARANT","B1_FABRIC","B1_DESPIMP","B1_BASE3","B1_DESBSE3","B1_DATASUB","B1_MTBF","B1_MTTR","B1_ATIVO","B1_PESBRU","B1_TIPCAR",
"B1_FRACPER","B1_LOTVEN","B1_TNATREC","B1_AFASEMT","B1_AIMAMT","B1_TERUM","B1_AFUNDES","B1_GCCUSTO","B1_CCCUSTO","B1_PARCEI","B1_VALEPRE","B1_CODQAD","B1_PMACNUT","B1_PMICNUT","B1_CODPROC","B1_TIPOBN","B1_VLCIF","B1_MOPC","B1_ESCRIPI","B1_CRICMS","B1_FUSTF","B1_HREXPO","B1_VM_PROC","B1_GRPNATR","B1_DTFIMNT","B1_DTCORTE","B1_MARKUP","B1_VEREAN","B1_VIGENC","B1_CEST","B1_GRPCST","B1_GRPTIDC","B1_TPPROD",
"B1_TPREG","B1_CHASSI","B1_DIFCNAE","B1_FETHAB","B1_PR43080","B1_CODANT","B1_SELOEN","B1_DESBSE2","B1_BASE2","B1_IVAAJU","B1_ALFECST","B1_CFEMA","B1_FECPBA","B1_ALFECOP","B1_MSEXP","B1_PAFMD5","B1_RPRODEP","B1_ALFUMAC","B1_PRINCMG","B1_GRPTI","B1_MEPLES","B1_REGESIM","B1_RSATIVO","B1_TFETHAB","B1_TPDP","B1_CRICMST","B1_FECOP","B1_AJUDIF","B1_CFEM","B1_CFEMS","B1_PRDORI","B1_SITTRIB","B1_IMPNCM","B1_MSBLQL"]; 

var arraysCamposData = [ "B1_UCALSTD","B1_UCOM","B1_UREV","B1_DATREF","B1_DTREFP1","B1_CONINI","B1_DATASUB","B1_DTFIMNT","B1_DTCORTE","B1_VIGENC"]


function servicetask68(attempt, message) {
		try{
  		var c1 = DatasetFactory.createConstraint("metadata#active", true, true, ConstraintType.MUST)
      	var dtsCadAmbiente = DatasetFactory.getDataset('DTS_FRM_CRUD_CADASTRO_DE_AMBIENTES', null, new Array(c1), ['documentid;desc']);
  		
  		//log.info(">>>>>>>>>>>> dtsCadAmbiente.rowsCount: ");

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
  		
  				log.info(">>>>>>>>>>>>> ServiceCod: " + ServiceCod);
  				log.info(">>>>>>>>>>>>> EZ4Key: " + EZ4Key);
  				
  				var data = {
  					companyId : getValue("WKCompany") + "",
  					serviceCode : ServiceCod  + "",
  					endpoint : "/rest/interfaceez4rest/funcao",
  					method : "put",
  					timeoutService : "100",
  					params : {
  						cabecalho : {},
  						funcao : "",
  						camposRetorno : ["B1_COD","B1_DESC","B1_MSBLQL"]
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

					 log.info(">>>>>>>>>> ADICIONAR <<<<<<<<<<<");
  					data.params["funcao"] = "MSExecAuto({|x,y| Mata010(x,y)},aCab,3)";
 				 }else if(option == "ALTERAR"){

					log.info(">>>>>>>>>>>> if ALTERAR <<<<<<<<<<<<<<<");
 					data.params["funcao"]= "MSExecAuto({|x,y| Mata010(x,y)},aCab,4)";

 				}else if(option == "BLOQUEAR"){

					log.info(">>>>>>>>>> else if BLOQUEAR <<<<<<<<<<<<<<");
 					data.params["funcao"] = "MSExecAuto({|x,y| Mata010(x,y)},aCab,4)";

 				}

				 log.info(">>>>>>>>>>>> DEPOIS option: "+option);
  				//Acrescentando os campos na estrutura de cabeçalho do objeto data
  				for(var i = 0; i<arraysCamposIntegravel.length;i++ ){
  					data.params.cabecalho[arraysCamposIntegravel[i]] = formatDate(arraysCamposIntegravel[i])+ "";
  				}
  				log.info(">>>>>>>>>>>> data.params: ");
                log.dir(JSON.stringify(data));
                hAPI.setCardValue('txta_envio', JSON.stringify(data));
  				var clientService = fluigAPI.getAuthorizeClientService();

  				var retornoApi = clientService.invoke(JSON.stringify(data));
  				
  				log.info(">>>>>>>>>>>>> EZ4 retornoApi: " + retornoApi);
  				
  				var statusHttp = retornoApi.getHttpStatusResult();
  				

  				var errorFlag = false;
  				var msg1 = 'O WebService retornou um erro:\n';
  				
  				//Verifica se o retorno está vazio
  				if(retornoApi.getResult() == null || retornoApi.getResult().isEmpty()){
						//log.info(">>>>>>>>>>>>> DENTRO DO IF " );
  					msg1 += "Ocorreu uma falha no retorno da API!";
  					errorFlag = true;
  				}else {
						//log.info(">>>>>>>>>>>>> DENTRO DO ELSE " );
  					retornoApi = JSON.parse(retornoApi.getResult());
  					log.info(">>>>>>>>>>>>> EZ4 retornoApi 02: " + retornoApi);
						//log.info(">>>>>>>>>>>>> retornoApi: " + retornoApi.errorMessage);
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
//  					hAPI.setCardValue('ERRO_INTEGRACAO', "OK");
//  					hAPI.setCardValue('A1_COD', retornoApi.A1_COD);
  					hAPI.setTaskComments(getValue("WKUser"), getValue("WKNumProces"), 0, "<h1 style='color:#07284b; font-size:1.5em;'>INTEGRAÇÃO EFETUADA COM SUCESSO. CÓDIGO DO PRODUTO: " + retornoApi.B1_COD + "</h1>")
  				}
  				
  			}
  		}
  	}catch(e){
  		throw "ERRO NA INTEGRAÇÃO "+e.message+" / LINHA: "+e.lineNumber;
  	}
  }

	function formatDate(value){
		log.info('valueA '+value)
		var campo = value
		value = hAPI.getCardValue(value)
		
		for(var i = 0;i < arraysCamposData.length;i++){
			if(arraysCamposData[i] == campo && value.indexOf('-') != -1){
				value = value.split('-')
				return value[2]+"/"+value[1]+"/"+value[0]
			}
		}
		log.info('valueA2 '+value)
		return value.trim()
}