function displayFields(form,customHTML){

	// Coleta atividade atual
	var atual = getValue("WKNumState");
	var usuario = getValue("WKUser");
	var id_form = form.getCardIndex();
	var id_proc = getValue("WKNumProces");
	// Array de bloqueio
	var bloqueioZoom = [];
	var naoeditaveis = [];
	var bloqueiaCombo = [];
	var esconder = [];
	var bloqueio_check = [];
	var desc_chec = [];
	var campoObrigatorio = [];
	//atividades
	var atv_inicio = "1";
	var atv_pcp = "4";
	var atv_almox = "5";
	var atv_fiscal = "8";
	var atv_exped = "14";
	var atv_custos = "6";
	var atv_mkt = "7";
	var atv_custo2 = "11";
	var atv_supri = "10";
	var atv_comercial = "9";
	var atv_lab = "12";
	var fim = "28";
	var camposVis = [];
	var camposObr = [];
	var camposEdt = [];

	 var arrayRegraCampos = [{atividade: "0", //Atividade INICIO
                         regra:[{
							colapse: ["cabecalho1","cabecalho2","cabecalho3","cabecalho4","cabecalho5","cabecalho6","cabecalho7","cabecalho8"],
							camposVis:["B1_BLOQPF","B1_COD","B1_CODBAR","B1_CODGTIN","B1_CONV","B1_DESC","B1_FORMLOT","B1FORMLOT","B1_GRUPO","B1GRUPO","B1_LINHA","B1_LOCPAD","B1LOCPAD","B1_MSBLQL","B1_NUMCQPR","B1_OPERPAD","B1_PESBRU","B1_PESO","B1_POSIPI","B1POSIPI","B1_PRVALID","B1_RASTRO","B1_REVATU","B1_SEGUM","B1SEGUM","B1_SELOEN","B1_TIPCONV","B1_TIPO","B1TIPO","B1_UM","B1UM","B1_UNINEGO","B5_2CODBAR","B5_CONVDIP","B5_EAN141","B5_EMBPRCV","B5_EMBPROD","B5_EMBPRUM","B5_ONU","B5ONU","B5_QEEMB","B5_UMDIPI","B5UMDIPI","BZ_FILIAL","BZ_KPLANEJ","BZ_LOCPAD","BZLOCPAD","BZ_QB","BZ_QBP","BZ_REVATU","BZ_TIPOCQ","SBZ_SINALIZ","B5_ITEM","SB5_TCONVMA"], // CRIAR OS CAMPOS SBZ_SINALIZ E SB5_TCONVMA, NA PLANILHA O CAMPO ESTAVA COMO SB5_ITEM, MAS NO FLUIG ESTÁ CRIADO COMO B5_ITEM
							//camposObr:["B1_TIPO","B1TIPO","B1_COD","B1_CODBAR","B1_CODGTIN","B1_DESC","B1_GRUPO","B1GRUPO","B1_LINHA","B1_LOCPAD","B1LOCPAD","B1_PESBRU","B1_PESO","B1_POSIPI","B1POSIPI","B1_UM","B1UM","B1_UNINEGO","B5_2CODBAR","B5_CONVDIP","B5_EAN141","B5_UMDIPI","B5UMDIPI","BZ_FILIAL","BZ_LOCPAD","BZLOCPAD","SBZ_SINALIZ","B5_ITEM","SB5_TCONVMA"], //Validar os campos SBZ_SINALIZ e SB5_TCONVMA
							camposreadonly:["BZ_FILIAL","B5_ITEM"]
                         }]
                        },{atividade: "1", //Atividade INICIO
						regra:[{
							colapse: ["cabecalho1","cabecalho2","cabecalho3","cabecalho4","cabecalho5","cabecalho6","cabecalho7","cabecalho8"],
							camposVis:["B1_BLOQPF","B1_COD","B1_CODBAR","B1_CODGTIN","B1_CONV","B1_DESC","B1_FORMLOT","B1FORMLOT","B1_GRUPO","B1GRUPO","B1_LINHA","B1_LOCPAD","B1LOCPAD","B1_MSBLQL","B1_NUMCQPR","B1_OPERPAD","B1_PESBRU","B1_PESO","B1_POSIPI","B1POSIPI","B1_PRVALID","B1_RASTRO","B1_REVATU","B1_SEGUM","B1SEGUM","B1_SELOEN","B1_TIPCONV","B1_TIPO","B1TIPO","B1_UM","B1UM","B1_UNINEGO","B5_2CODBAR","B5_CONVDIP","B5_EAN141","B5_EMBPRCV","B5_EMBPROD","B5_EMBPRUM","B5_ONU","B5ONU","B5_QEEMB","B5_UMDIPI","B5UMDIPI","BZ_FILIAL","BZ_KPLANEJ","BZ_LOCPAD","BZLOCPAD","BZ_QB","BZ_QBP","BZ_REVATU","BZ_TIPOCQ","SBZ_SINALIZ","B5_ITEM","SB5_TCONVMA"], // CRIAR OS CAMPOS SBZ_SINALIZ E SB5_TCONVMA, NA PLANILHA O CAMPO ESTAVA COMO SB5_ITEM, MAS NO FLUIG ESTÁ CRIADO COMO B5_ITEM
						//	camposObr:["B1_COD","B1_CODBAR","B1_CODGTIN","B1_DESC","B1_GRUPO","B1GRUPO","B1_LINHA","B1_LOCPAD","B1LOCPAD","B1_PESBRU","B1_PESO","B1_POSIPI","B1POSIPI","B1_UM","B1UM","B1_UNINEGO","B5_2CODBAR","B5_CONVDIP","B5_EAN141","B5_UMDIPI","B5UMDIPI","BZ_FILIAL","BZ_LOCPAD","BZLOCPAD","SBZ_SINALIZ","B5_ITEM","SB5_TCONVMA"], //Validar os campos SBZ_SINALIZ e SB5_TCONVMA
							camposreadonly:["BZ_FILIAL","B5_ITEM"]
						}]
					   }, 
					   //PCP
                        {atividade: "4",
                         regra:[{
                             colapse: ["cabecalho1","cabecalho2","cabecalho3","cabecalho4","cabecalho5","cabecalho6","cabecalho7","cabecalho8"],
                             camposVis:["B1_LM","BZ_EMIN","BZ_ESTSEG","BZ_FILIAL","BZ_LE","BZ_LM","BZ_LM"], //Verificar pois na planilha os campos BZ_ML está repetindo duas vezes
                             camposObr:["BZ_FILIAL"],
							 camposreadonly:["BZ_FILIAL"]
                         }],
                        },
						//ALMOXARIFADO
						{atividade: "5",
						regra:[{
							colapse: ["cabecalho1","cabecalho2","cabecalho3","cabecalho4","cabecalho5","cabecalho6","cabecalho7","cabecalho8"],
							camposVis:["B1_APROPRI","B1_CODBAR","B1_CONV","B1_FANTASM","B1_LOCALIZ","B1_LOCPAD","B1LOCPAD","B1_SEGUM","B1SEGUM","B1_TIPCONV","B5_ESTMAT","BZ_FANTASM","BZ_FILIAL","BZ_LOCALIZ","BZ_LOCPAD","BZLOCPAD"],
							camposObr:["B1_APROPRI","B1_CODBAR","B1_CONV","B1_FANTASM","B1_LOCALIZ","B1_LOCPAD","B1LOCPAD","B1_SEGUM","B1SEGUM","B1_TIPCONV","B5_ESTMAT","BZ_FANTASM","BZ_FILIAL","BZ_LOCALIZ","BZ_LOCPAD","BZLOCPAD"],
							camposreadonly:["B1_SEGUM","B1SEGUM","B1_TIPCONV"]
						}]
						},
						//FISCAL
						{atividade: "8",
						regra:[{
							colapse: ["cabecalho1","cabecalho2","cabecalho3","cabecalho4","cabecalho5","cabecalho6","cabecalho7","cabecalho8"],
							camposVis:["B1_CEST","B1_CONTA","B1CONTA","B1_GRPITEM","B1_GRPTI","B1GRPTI","B1_GRTRIB","B1GRTRIB","B1_IPI","BZ_FILIAL","BZ_IPI"],
							camposObr:["B1_CONTA","B1CONTA","B1_GRPTI","B1_GRTRIB","B1GRTRIB","B1GRPTI","B1_IPI","BZ_FILIAL","BZ_IPI"],
							camposreadonly:["BZ_FILIAL"]
						}]
						},
						//EXPEDICAO
						{atividade: "14",
						regra:[{
							colapse: ["cabecalho1","cabecalho2","cabecalho3","cabecalho4","cabecalho5","cabecalho6","cabecalho7","cabecalho8"],
							camposVis:["B1_LOCALIZ","B1_LOCPAD","B1LOCPAD","B1_USAFEFO","B5_ALTURLC","B5_CODZON","B5CODZON","B5_COMPRLC","B5_CTRWMS","B5_EAN141","B5_EMB1","B5_ENDDEV","B5ENDDEV","B5_ENDENT","B5ENDENT","B5_ENDSAI","B5ENDSAI","B5_LARGLC","B5_SERVDEV","B5SERVDEV","B5_SERVENT","B5SERVENT","B5_SERVINT","B5SERVINT","B5_SERVSAI","B5SERVSAI","B5_UMIND","BZ_CTRWMS","BZ_FANTASM","BZ_FILIAL","BZ_LOCALIZ","BZ_LOCPAD","BZLOCPAD"],
							camposObr:["B1_LOCALIZ","B1_LOCPAD","B1LOCPAD","B1_USAFEFO","B5_CODZON","B5CODZON","B5_CTRWMS","B5_EAN141","B5_ENDENT","B5ENDENT","B5_ENDSAI","B5ENDSAI","B5_SERVENT","B5SERVENT","B5_SERVINT","B5SERVINT","B5_SERVSAI","B5SERVSAI","B5_UMIND","BZ_CTRWMS","BZ_FANTASM","BZ_FILIAL","BZ_LOCALIZ","BZ_LOCPAD","BZLOCPAD"],
							camposreadonly:["B5_EAN141","B5_UMIND","BZ_FILIAL"]
						}]
						},
						//CUSTOS
						{atividade: "6",
						regra:[{
							colapse: ["cabecalho1","cabecalho2","cabecalho3","cabecalho4","cabecalho5","cabecalho6","cabecalho7","cabecalho8"], 
							camposVis:["BZ_CUSBN","BZ_CUSEM","BZ_CUSMP","BZ_CUSSTD2","BZ_FILIAL"], //Crias os campos BZ_CUSBN, BZ_CUSEM, BZ_CUSEM, BZ_CUSMP, BZ_CUSSTD2, BZ_MOEDCUS, BZ_TPREPO
							camposObr:["BZ_FILIAL"],
							camposreadonly:["BZ_FILIAL"]
						}]
						},
						//Marketing
						{atividade: "7",
						regra:[{
							colapse: ["cabecalho1","cabecalho2","cabecalho3","cabecalho4","cabecalho5","cabecalho6","cabecalho7","cabecalho8"],
							camposVis:["B1_COMIS","BZ_FILIAL"],
							camposObr:["B1_COMIS","BZ_FILIAL"],
							camposreadonly:["BZ_FILIAL"]
						}]
						},
						//CUSTOS 2
						{atividade: "11",
						regra:[{
							colapse: ["cabecalho1","cabecalho2","cabecalho3","cabecalho4","cabecalho5","cabecalho6","cabecalho7","cabecalho8"], 
							camposVis:["BZ_CUSBN","BZ_CUSEM","BZ_CUSMP","BZ_CUSSTD2","BZ_FILIAL"], //Crias os campos BZ_CUSBN, BZ_CUSEM, BZ_CUSEM, BZ_CUSMP, BZ_CUSSTD2, BZ_MOEDCUS, BZ_TPREPO
							camposObr:["BZ_FILIAL"],
							camposreadonly:["BZ_FILIAL"]
						}]
						},
						
						//SUPRIMENTO
						{atividade: "10",
						regra:[{
							colapse: ["cabecalho1","cabecalho2","cabecalho3","cabecalho4","cabecalho5","cabecalho6","cabecalho7","cabecalho8"],
							camposVis:["B1_LM","B1_ORIGEM","BZ_CUSSTD2","BZ_KCOMPR"],
							camposObr:["B1_ORIGEM","BZ_KCOMPR"],
							camposreadonly:["B1_ORIGEM"]
						}]
						},
						//COMERCIAL
						// {atividade: "9",
						// regra:[{
						// 	colapse: ["cabecalho1","cabecalho2","cabecalho3","cabecalho4","cabecalho5","cabecalho6","cabecalho7","cabecalho8"],
						// 	camposVis:["B1_GRTRIB","B1GRTRIB","B1_COD","B1_DESC","B1_TIPO","B1TIPO","B1_UM", "B1UM", "B1_LOCPAD","B1LOCPAD","B1_GRUPO","B1GRUPO","B1_SEGUM","B1SEGUM","B1_FORMLOT","B1FORMLOT","B5_ONU","B5ONU"],
						// 	camposObr:[]
						// }]
						// },

						//LAB
						{atividade: "12",
						regra:[{
							colapse: ["cabecalho1","cabecalho2","cabecalho3","cabecalho4","cabecalho5","cabecalho6","cabecalho7","cabecalho8"],
							camposVis:["B5_CEME ","B1_BLOQPF","B1_COD","B1_CODBAR","B1_CODGTIN","B1_CONV","B1_DESC","B1_FORMLOT","B1FORMLOT","B1_GRUPO","B1GRUPO","B1_LINHA","B1_LOCPAD","B1LOCPAD","B1_MSBLQL","B1_NUMCQPR","B1_OPERPAD","B1_PESBRU","B1_PESO","B1_POSIPI","B1POSIPI","B1_PRVALID","B1_RASTRO","B1_REVATU","B1_SEGUM","B1SEGUM","B1_SELOEN","B1_TIPCONV","B1_TIPO","B1TIPO","B1_UM","B1UM","B1_UNINEGO","B5_2CODBAR","B5_CONVDIP","B5_EAN141","B5_EMBPRCV","B5_EMBPROD","B5_EMBPRUM","B5_ONU","B5ONU","B5_QEEMB","B5_UMDIPI","B5UMDIPI","BZ_FILIAL","BZ_KPLANEJ","BZ_LOCPAD","BZLOCPAD","BZ_QB","BZ_QBP","BZ_REVATU","BZ_TIPOCQ","SBZ_SINALIZ","B5_ITEM","SB5_TCONVMA"], // CRIAR OS CAMPOS SBZ_SINALIZ E SB5_TCONVMA, NA PLANILHA O CAMPO ESTAVA COMO SB5_ITEM, MAS NO FLUIG ESTÁ CRIADO COMO B5_ITEM
							camposObr:["B5_CEME ","B1_COD","B1_CODBAR","B1_CODGTIN","B1_DESC","B1_GRUPO","B1GRUPO","B1_LINHA","B1_LOCPAD","B1LOCPAD","B1_PESBRU","B1_PESO","B1_POSIPI","B1POSIPI","B1_UM","B1UM","B1_UNINEGO","B5_2CODBAR","B5_CONVDIP","B5_EAN141","B5_UMDIPI","B5UMDIPI","BZ_FILIAL","BZ_LOCPAD","BZLOCPAD","SBZ_SINALIZ","B5_ITEM","SB5_TCONVMA"], //Validar os campos SBZ_SINALIZ e SB5_TCONVMA
							camposreadonly:["BZ_FILIAL","B5_ITEM"]
						}]
						},
						//Atividade FIM
						{atividade: "28", 
						regra:[{
							colapse: ["cabecalho1","cabecalho2","cabecalho3","cabecalho4","cabecalho5","cabecalho6","cabecalho7","cabecalho8","cabecalho0"],
							camposVis:["txta_envio","txta_retorno","B1_ORIGEM","B1ORIGEM","B1_GRTRIB","B1GRTIB","B1_COD","B1_DESC","B1_TIPO","B1TIPO","B1_UM", "B1UM", "B1_LOCPAD","B1LOCPAD","B1_GRUPO","B1GRUPO","B1_SEGUM","B1SEGUM","B1_FORMLOT","B1FORMLOT","B1_POSIPI","B1POSIPI","B1_RASTRO","B1_TIPCONV","B1_PESO","B1_PRVALID","B1_CODGTIN","B1_CODBAR","B1_OPERPAD","B1_NUMCQPR","B1_REVATU","B1_PESBRU","B1_MSBLQL","B1_UNINEGO","B1_LINHA","BZ_FILIAL","BZFILIAL","BZ_TIPOCQ","BZ_QB","BZ_REVATU","BZ_QBP","B5_2CODBAR","B5_EAN141","B5_ONU","B5ONU","B1_SELOEN","B1_BLOQPF","B5_UMDIPI","B5UMDIPI","B5_CONVDIP","B5_UMIND","B5_CEME","B5_CODZON","B5CODZON"],
							camposObr:[]
						}]
						},
						//suporte SB1
						{atividade: "3",  
						regra:[{
							colapse: ["cabecalho1","cabecalho2","cabecalho3","cabecalho4","cabecalho5","cabecalho6","cabecalho7","cabecalho8","cabecalho0"],
							camposVis:["txta_envio","txta_retorno","B1_ORIGEM","B1ORIGEM","B1_GRTRIB","B1GRTIB","B1_COD","B1_DESC","B1_TIPO","B1TIPO","B1_UM", "B1UM", "B1_LOCPAD","B1LOCPAD","B1_GRUPO","B1GRUPO","B1_SEGUM","B1SEGUM","B1_FORMLOT","B1FORMLOT","B1_POSIPI","B1POSIPI","B1_RASTRO","B1_TIPCONV","B1_PESO","B1_PRVALID","B1_CODGTIN","B1_CODBAR","B1_OPERPAD","B1_NUMCQPR","B1_REVATU","B1_PESBRU","B1_MSBLQL","B1_UNINEGO","B1_LINHA","BZ_FILIAL","BZFILIAL","BZ_TIPOCQ","BZ_QB","BZ_REVATU","BZ_QBP","B5_2CODBAR","B5_EAN141","B5_ONU","B5ONU","B1_SELOEN","B1_BLOQPF","B5_UMDIPI","B5UMDIPI","B5_CONVDIP","B5_UMIND","B5_CEME","B5_CODZON","B5CODZON"],
							camposObr:[]
						}]
						},
						//suporte SB5
						{atividade: "27", 
						regra:[{
							colapse: ["cabecalho1","cabecalho2","cabecalho3","cabecalho4","cabecalho5","cabecalho6","cabecalho7","cabecalho8","cabecalho0"],
							camposVis:["txta_envio","txta_retorno","B1_ORIGEM","B1ORIGEM","B1_GRTRIB","B1GRTIB","B1_COD","B1_DESC","B1_TIPO","B1TIPO","B1_UM", "B1UM", "B1_LOCPAD","B1LOCPAD","B1_GRUPO","B1GRUPO","B1_SEGUM","B1SEGUM","B1_FORMLOT","B1FORMLOT","B1_POSIPI","B1POSIPI","B1_RASTRO","B1_TIPCONV","B1_PESO","B1_PRVALID","B1_CODGTIN","B1_CODBAR","B1_OPERPAD","B1_NUMCQPR","B1_REVATU","B1_PESBRU","B1_MSBLQL","B1_UNINEGO","B1_LINHA","BZ_FILIAL","BZFILIAL","BZ_TIPOCQ","BZ_QB","BZ_REVATU","BZ_QBP","B5_2CODBAR","B5_EAN141","B5_ONU","B5ONU","B1_SELOEN","B1_BLOQPF","B5_UMDIPI","B5UMDIPI","B5_CONVDIP","B5_UMIND","B5_CEME","B5_CODZON","B5CODZON"],
							camposObr:[]
						}]
						},
						//suporte SBZ
						{atividade: "29", 
						regra:[{
							colapse: ["cabecalho1","cabecalho2","cabecalho3","cabecalho4","cabecalho5","cabecalho6","cabecalho7","cabecalho8","cabecalho0"],
							camposVis:["txta_envio","txta_retorno","B1_ORIGEM","B1ORIGEM","B1_GRTRIB","B1GRTIB","B1_COD","B1_DESC","B1_TIPO","B1TIPO","B1_UM", "B1UM", "B1_LOCPAD","B1LOCPAD","B1_GRUPO","B1GRUPO","B1_SEGUM","B1SEGUM","B1_FORMLOT","B1FORMLOT","B1_POSIPI","B1POSIPI","B1_RASTRO","B1_TIPCONV","B1_PESO","B1_PRVALID","B1_CODGTIN","B1_CODBAR","B1_OPERPAD","B1_NUMCQPR","B1_REVATU","B1_PESBRU","B1_MSBLQL","B1_UNINEGO","B1_LINHA","BZ_FILIAL","BZFILIAL","BZ_TIPOCQ","BZ_QB","BZ_REVATU","BZ_QBP","B5_2CODBAR","B5_EAN141","B5_ONU","B5ONU","B1_SELOEN","B1_BLOQPF","B5_UMDIPI","B5UMDIPI","B5_CONVDIP","B5_UMIND","B5_CEME","B5_CODZON","B5CODZON"],
							camposObr:[]
						}]
						}
                       ];
	
	var arraysCamposZoomConslt = ["B1TIPO","B1UM","B1LOCPAD","B1GRUPO","B1TE","B1TS","B1SEGUM","B1ALTER","B1CONTA","B1CC","B1ITEMCC","B1PROC","B1FORMLOT",
"B1GRUPCOM","B1CLVL","B1POSIPI","B1CODISS","B1ORIGEM","B1GRTRIB","B1TABIPI","B1CLASSE","B1ESTFOR","B1FORPRZ","B1TIPCAR","B1GRPCST","B1TPPROD","B1CODANT","B1GRPTI","B1PRDORI",
"B1TNATREC","B5ONU","B1GCCUSTO","B1PARCEI","B1CCCUSTO","B1CODQAD","B1TIPOBN","B5NATBEN","B5TPESOC","B5NBS","B5CODATIV","B5CDFATD","B5CODFAM","B5FORSER","B5MARPEC",
,"B5NATALBE","B5AGLUMRP","B5CODLIN","B5SERVINT","B5SERVENT","B5SERVSAI","B5SERVEMB","B5ENDECD",
"B5SERVTDV","B5ENDSAI","B5SERVDEV","B5SERVREQ","B5ENDENT","B5ENDREQ","B5ENDDEV","B5UMDIPI","B5PENE","B5UMPRC","B5CULTRA","B5CTVAR","B5CATEG",
"BZFILIAL","BZLOCPAD","BZORIGEM","BZFORPRZ","BZESTFOR","BZTE","BZTS"]; 

	var constraints = new Array()
	let cst = DatasetFactory.createConstraint('metadata#active', true, true, ConstraintType.MUST);  //1
	let datasetRegras = DatasetFactory.getDataset('DTS_FRM_PARAM_CAMPOS_CADASTRO_PRODUTO', null, new Array(cst), ['documentid;desc']); //2
	

	let documentId = datasetRegras.getValue(0, "metadata#id");               //4
	let documentVersion = datasetRegras.getValue(0, "metadata#version"); 

	constraints.push(DatasetFactory.createConstraint('tablename', 'tbParamCampos', 'tbParamCampos', ConstraintType.MUST));
	constraints.push(DatasetFactory.createConstraint('metadata#id', documentId, documentId, ConstraintType.MUST));
	constraints.push(DatasetFactory.createConstraint('metadata#version', documentVersion, documentVersion, ConstraintType.MUST));

	let datasetPaiFilho = DatasetFactory.getDataset('DTS_FRM_PARAM_CAMPOS_CADASTRO_PRODUTO', null, constraints, null);

	if(datasetPaiFilho != null && datasetPaiFilho.values != null && datasetPaiFilho.values.length > 0){

	 	for (var i=0; i < datasetPaiFilho.values.length; i++){
			
			var pegaObr = (" " + datasetPaiFilho.getValue(i, 'cpObrigatorio')).trim().split(";")
			var pegaVisi = (" " + datasetPaiFilho.getValue(i, 'cpVisivel')).trim().split(";")
			var pegaEdita = (" " + datasetPaiFilho.getValue(i, 'cpEditavel')).trim().split(";")
			var tiraUnderline = datasetPaiFilho.getValue(i,'campo').replace("_","")
			atual = Number(atual)
			for (let index = 0; index < pegaObr.length; index++) {
				pegaObr[index] = Number(pegaObr[index])
				
			}
			for (let index = 0; index < pegaVisi.length; index++) {
				pegaVisi[index] = Number(pegaVisi[index])
				
			}
			for (let index = 0; index < pegaEdita.length; index++) {
				pegaEdita[index] = Number(pegaEdita[index])
				
			}
			log.info("TXT")
			log.dir(Number(atual))
			log.info("TXT2")
			log.dir(pegaObr)
			log.dir(pegaObr.indexOf(Number(atual)))
			if (pegaObr.indexOf(atual) >= 0) {
				if(arraysCamposZoomConslt.indexOf(tiraUnderline) >= 0){
					camposObr.push(arraysCamposZoomConslt.getValue(tiraUnderline))
				}
				camposObr.push(datasetPaiFilho.getValue(i,'campo'))
			}
			if (pegaVisi.indexOf(atual) >= 0) {
				
				camposVis.push(datasetPaiFilho.getValue(i,'campo'))
			}
			if (pegaEdita.indexOf(atual) >= 0) {
	
				camposEdt.push(datasetPaiFilho.getValue(i,'campo'))
			}
					log.info("dtsPAIf" + datasetPaiFilho.getValue(i, 'cpObrigatorio'))
			if(datasetPaiFilho.getValue(i, 'cpObrigatorio').indexOf(atual) >= 0){
				var x = datasetPaiFilho.getValue(i,'campo').replace("_","")
				log.info("TESTE 196")
				log.dir(x)
				if(arraysCamposZoomConslt.indexOf(x) >= 0){
					log.info("TESTE 199")
					log.dir(x)
					camposObr.push(arraysCamposZoomConslt.getValue(x))
				}
				camposObr.push(datasetPaiFilho.getValue(i,'campo'))
				
			}
			if(datasetPaiFilho.getValue(i, 'cpVisivel').indexOf(atual) >= 0){
				log.info("TESTE 198")
				camposVis.push(datasetPaiFilho.getValue(i,'campo'))
			}
			if(datasetPaiFilho.getValue(i, 'cpEditavel').indexOf(atual) >= 0){
				log.info("TESTE 202")
				camposEdt.push(datasetPaiFilho.getValue(i,'campo'))
			}
				
	 	}
	 }
	 log.info("CAMPOS")
	 log.dir(camposObr)
	 log.dir(camposEdt)
	 log.dir(camposVis)
	var modo = form.getFormMode();
	customHTML.append("<script type='text/javascript'>");
	var arraysCamposVisivel = ["B1_COD","B1_DESC","B1_TIPO","B1_UM","B1_LOCPAD"]; 
	var arraysCamposObr = ["B1_COD","B1_DESC","B1_TIPO","B1_UM","B1_LOCPAD","B1_CONV"]; 
	

	for (var v = 0; v < camposVis.length; v++) {

		customHTML.append("$('#" + camposVis[v] + "').parents().removeClass('hide').addClass('show');");
	}		
	for (var o = 0; o < camposObr.length; o++) {
		customHTML.append("$('label[for=" + camposObr[o] + "]').append('<strong>(*)</strong>');");
	}
	for(var e = 0; e < camposEdt.length; e++){
		customHTML.append("$('#" + camposEdt[e] + "').prop('readonly',false);")
	}


	//Tornar campo visivel				   
	
// 	for (var x = 0; x < arrayRegraCampos.length; x++) {
// 		if(arrayRegraCampos[x].atividade == atual){
// 			for (var i = 0; i < arrayRegraCampos[x].regra[0].camposVis.length; i++) {
// 				customHTML.append("$('#" + arrayRegraCampos[x].regra[0].camposVis[i] + "').parents().removeClass('hide').addClass('show');");
// 			}		
// 			for (var i = 0; i < arrayRegraCampos[x].regra[0].camposObr.length; i++) {
// 				customHTML.append("$('label[for=" + arrayRegraCampos[x].regra[0].camposObr[i] + "]').append('<strong>(*)</strong>');");
// 			}
// 			for(var i = 0; i < arrayRegraCampos[x].regra[0].camposreadonly.length; i++){
// 				customHTML.append("$('#" + arrayRegraCampos[x].regra[0].camposreadonly[i] + "').prop('readonly',true);")
// 			}
// 		}
// 	}
	
// 	if (atual == fim) {
// 		for (let index = 0; index < arrayRegraCampos.length; index++) {
// 			form.setEnabled(arrayRegraCampos[index],true)		
// 		}
// 	}	
	

	customHTML.append("if (BDOForms && BDOForms.initForm) {");
	customHTML.append("BDOForms.initForm({");
	customHTML.append(" formMode:'" + form.getFormMode()+"',");
	customHTML.append(" WKCompany:'" + getValue("WKCompany")+"',");
	customHTML.append(" WKNumState:'" + getValue("WKNumState")+"',");
	customHTML.append(" WKNumProces:'" + getValue("WKNumProces")+"',");
	customHTML.append(" WKCurrentState:'" + getValue("WKCurrentState")+"',");
	customHTML.append(" WKUser:'" + getValue("WKUser")+"',");
	customHTML.append(" isMobile: " + (form.getMobile() != null && form.getMobile())+"");
	customHTML.append("});");
	var atividade = getValue('WKNumState');
	customHTML.append("var dfAtividade = " + atividade + ";");
	customHTML.append("}</script>"); 	

 }

