var arraysCamposIntegravel = ["B5_COD","B5_CEME","B5_DIASHL","B5_REVPROD","B5_CODTRAM","B5_TPSERV","B5_DENSID",
"B5_DTDECRE","B5_EMBAGRO","B5_REGMAPA","B5_INSSPAT","B5_INTDI","B5_CONCENT",
"B5_ZF4PORC","B5_AM4PORC","B5_CODCAI","B5_AMMULTS","B5_CONCEN","B5_DESCSER",
"B5_CODTP","B5_CMPEXTR","B5_CDDMDBA","B5_SITDIEF","B5_TABINC","B5_CODGRU","B5_FORCAO","B5_MARCA","B5_SERSCD",
"B5_FCIPRV","B5_ZFMULTO","B5_ZFMULTS","B5_DIASHF","B5_VLZERO","B5_2CODBAR","B5_NATBEN","B5_DTDECAL","B5_ECBENFI",
"B5_NUMBEN","B5_ANOBEN","B5_TPESOC","B5_MARGPRE","B5_VLRCID","B5_INDCPRB",
"B5_NBS","B5_CODATIV","B5_CODSERC","B5_CDFATD","B5_CODGNRE","B5_CODFAM","B5_DEC7174","B5_CLASSE","B5_ECALTEM",
"B5_AMMULTO","B5_FORSER","B5_PRZCQ","B5_MARPEC","B5_MONTA","B5_PROJDES","B5_MARPEC","B5_IDHIST","B5_EAN145",
"B5_VERIND","B5_NRECAGR","B5_INGATV","B5_REDALIQ","B5_ISEN","B5_NUMBEAL","B5_NATALBE",
"B5_FORMMRP","B5_AGLUMRP","B5_CTRWMS","B5_PRV2","B5_PROTCON","B5_TIPO",
"B5_PRV7","B5_CODCLI","B5_VERSAO","B5_BLQINVA","B5_CODLIN","B5_DTREFP7","B5_EMB1","B5_EMB2",
"B5_QE1","B5_QE2","B5_COMPRLC","B5_CTDACON","B5_ECSUBT","B5_ISDSHIP","B5_EMPMAX","B5_ROTACAO","B5_INSPAT","B5_CERT",
"B5_SERVINT","B5_COMPR","B5_NPULMAO","B5_DES","B5_WMSEMB","B5_COMPEND","B5_ARREQTD","B5_ESPESS","B5_ESTMAT","B5_LARG",
"B5_CONVDIP","B5_SERVTDV","B5_ENDSAI","B5_SERVDEV","B5_SERVREQ","B5_ENDENT","B5_ENDREQ","B5_ENDDEV","B5_CARPER","B5_IDADEM",
"B5_LVLEMB","B5_LPSEMB","B5_PERCUB","B5_PORTMS","B5_UMDIPI","B5_ITEM","B5_CALORIA","B5_PESO","B5_TOTGOR","B5_DIASES",
"B5_PRV3","B5_PRV4","B5_PRV5","B5_MODELO","B5_ESPECIE","B5_QUALIDA","B5_EAN141","B5_PRV6","B5_DTREFP2","B5_DTREFP3",
"B5_DTREFP4","B5_DTREFP5", "B5_DTREFP6","B5_TIPUNIT","B5_LARGLC","B5_IMPETI","B5_VLDOPER","B5_VLDREQ","B5_ENDECD",
"B5_SEMENTE","B5_LEADTR","B5_FATARMA","B5_UMIND","B5_SERVENT","B5_TAKEUP","B5_TPCOMMO","B5_SERVSAI","B5_SERVEMB", 
"B5_ENDSCD","B5_ISIDUNI","B5_GSLE","B5_GSMC","B5_GSMI","B5_TPISERV","B5_ECDESCR","B5_ECENQUA","B5_ECPESOE",
"B5_ECSEQ","B5_ECLARGE","B5_ECINDIC","B5_ECLARGU","B5_ECTITU","B5_ECPCHAV","B5_ECSEQ2","B5_ECCOMP","B5_ECPROFU", 
"B5_ECCARAC","B5_ECCUBAG","B5_ECDTEX2","B5_ECDTLAN","B5_ECFLAG","B5_ECDTEX","B5_ECIMGFI","B5_ECAPRES","B5_SERECD", 
"B5_ONU","B5_TOTGORS","B5_TOTGORT","B5_COR","B5_ALTURA","B5_EAN142","B5_EAN143","B5_EAN144","B5_EAN146","B5_EAN147",
"B5_EAN148","B5_QTDVAR","B5_DTINV","B5_CODZON","B5_PENE","B5_TRATAM","B5_CLAUBA","B5_UMPRC","B5_DESTRAT","B5_CULTRA",
"B5_CTVAR","B5_CATEG"]
					                          
var arraysCamposData = ["B5_DTREFP7","B5_DTREFP4","B5_DTREFP5","B5_DTREFP6","B5_DTINV","B5_DTDECRE","B5_DTDECAL"]

function servicetask72(attempt, message) {
	
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
            					 if(dtCadAmbientePaiFilho.getValue(i,'cpServiceCod') == "INTERFACE_EZ4_REST"){
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
            						camposRetorno : ["B5_COD","B5_CEME"]
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
            					data.params["funcao"] = "MSExecAuto({|x,y| Mata180(x,y)},aCab,3)";
           				 }else if(option == "ALTERAR"){

          					//log.info(">>>>>>>>>>>> if ALTERAR <<<<<<<<<<<<<<<");
           					data.params["funcao"]= "MSExecAuto({|x,y| Mata180(x,y)},aCab,4)";

           				}else if(option == "BLOQUEAR"){

          					//log.info(">>>>>>>>>> else if BLOQUEAR <<<<<<<<<<<<<<");
           					data.params["funcao"] = "MSExecAuto({|x,y| Mata180(x,y)},aCab,4)";

           				}

          				 	log.info(">>>>>>>>>>>> DEPOIS option: "+option);
            				//Acrescentando os campos na estrutura de cabeçalho do objeto data
            				for(var i = 0; i<arraysCamposIntegravel.length;i++ ){
            					data.params.cabecalho[arraysCamposIntegravel[i]] = formatDate(arraysCamposIntegravel[i])+ "";
            				}
            				log.info(">>>>>>>>>>>> data: " + JSON.stringify(data));
            				var clientService = fluigAPI.getAuthorizeClientService();

            				var retornoApi = clientService.invoke(JSON.stringify(data));
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
            					hAPI.setTaskComments(getValue("WKUser"), getValue("WKNumProces"), 0, "<h1 style='color:#07284b; font-size:1.5em;'>INTEGRAÇÃO EFETUADA COM SUCESSO. CÓDIGO DO PRODUTO: " + retornoApi.B5_COD + "</h1>")
            				}
            			}
            		}
            	}catch(e){
            		throw "ERRO NA INTEGRAÇÃO "+e.message+" / LINHA: "+e.lineNumber;
            	}
            }

          	function formatDate(value){
          		log.info('servicetask26 value '+value)
          		var campo = value
          		value = hAPI.getCardValue(value)
          		log.info('servicetask26 value LINHA 137'+value)
          		for(var i = 0;i < arraysCamposData.length;i++){
          			if(arraysCamposData[i] == campo && value.indexOf('-') != -1){
          				value = value.split('-')
          				return value[2]+"/"+value[1]+"/"+value[0]
          			}
          		}
          		return value.trim()
}