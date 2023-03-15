var arraysCamposIntegravel = ["BZ_FILIAL","BZ_COD","BZ_LOCPAD","BZ_TE","BZ_TS","BZ_AFUNDES","BZ_ALFECRN","BZ_ALFUMAC","BZ_ALIQISS","BZ_COFINS",
"BZ_CONINI","BZ_CONVDIP","BZ_CSLL","BZ_CTRWMS","BZ_CUSTD","BZ_DATREF","BZ_DTINCLU","BZ_EMAX","BZ_EMIN","BZ_ESTFOR","BZ_ESTSEG","BZ_FANTASM","BZ_FCIPRV","BZ_FECP","BZ_FECPBA",
"BZ_FORPRZ","BZ_GRTRIB","BZ_HABDIF","BZ_HORFIX","BZ_IDHIST","BZ_IMPNCM","BZ_INT_ICM","BZ_IPI","BZ_IRRF","BZ_LE","BZ_LM","BZ_LOCALI2","BZ_LOCALIZ","BZ_MARKUP","BZ_MCUSTD","BZ_MOPC",
"BZ_MRP","BZ_OPC","BZ_ORIGEM","BZ_PCOFINS","BZ_PCSLL","BZ_PE","BZ_PICM","BZ_PICMENT","BZ_PICMRET","BZ_PIS","BZ_PPIS","BZ_QB","BZ_QBP","BZ_QE","BZ_REDCOF","BZ_REDPIS","BZ_REVATU",
"BZ_TIPE","BZ_TIPOCQ","BZ_TOLER","BZ_TPHOFIX","BZ_TRIBMUN","BZ_UCALSTD","BZ_UCOM","BZ_UPRC","BZ_VLR_ICM","BZ_VLR_IPI"]; 

function createDataset(fields, constraints, sortFields) {
	try {
	var query = "";
		query += " SELECT ";
		query += "SBZ.BZ_FILIAL,SBZ.BZ_COD,SBZ.BZ_LOCPAD,SBZ.BZ_TE,SBZ.BZ_TS,SBZ.BZ_AFUNDES,SBZ.BZ_ALFECRN,SBZ.BZ_ALFUMAC,SBZ.BZ_ALIQISS,SBZ.BZ_COFINS, ";
		query += "SBZ.BZ_CONINI,SBZ.BZ_CONVDIP,SBZ.BZ_CSLL,SBZ.BZ_CTRWMS,SBZ.BZ_CUSTD,SBZ.BZ_DATREF,SBZ.BZ_DTINCLU,SBZ.BZ_EMAX,SBZ.BZ_EMIN,SBZ.BZ_ESTFOR,SBZ.BZ_ESTSEG,SBZ.BZ_FANTASM, ";
		query += "SBZ.BZ_FECP,SBZ.BZ_FECPBA,SBZ.BZ_FORPRZ,SBZ.BZ_GRTRIB,SBZ.BZ_HABDIF,SBZ.BZ_HORFIX,SBZ.BZ_IDHIST,SBZ.BZ_IMPNCM,SBZ.BZ_INT_ICM,SBZ.BZ_IPI,SBZ.BZ_IRRF,SBZ.BZ_LE, ";
		query += "SBZ.BZ_LOCALI2,SBZ.BZ_LOCALIZ,SBZ.BZ_MARKUP,SBZ.BZ_MCUSTD,SBZ.BZ_MOPC,SBZ.BZ_MRP,SBZ.BZ_OPC,SBZ.BZ_ORIGEM,SBZ.BZ_PCOFINS,SBZ.BZ_PCSLL,SBZ.BZ_PE,SBZ.BZ_PICM, ";
		query += "SBZ.BZ_PICMRET,SBZ.BZ_PIS,SBZ.BZ_PPIS,SBZ.BZ_QB,SBZ.BZ_QBP,SBZ.BZ_QE,SBZ.BZ_REDCOF,SBZ.BZ_REDPIS,SBZ.BZ_REVATU,SBZ.BZ_TIPE,SBZ.BZ_TIPOCQ,SBZ.BZ_TOLER,SBZ.BZ_TPHOFIX, ";
		query += "SBZ.BZ_TRIBMUN,SBZ.BZ_UCALSTD,SBZ.BZ_UCOM,SBZ.BZ_UPRC,SBZ.BZ_VLR_ICM,SBZ.BZ_VLR_IPI,SBZ.BZ_FCIPRV,SBZ.BZ_LM, SBZ.BZ_PICMENT ";
		//query += "FROM SBZ010 SBZ "
		query += " FROM VIEW_dts_sbz_sync_incr_qa_nj ";	
		query += "LEFT JOIN NNR010 NNR ON SBZ.BZ_LOCPAD = NNR.NNR_CODIGO " // Precisa incluir o nome do campo na parte de cima da query, para atribuir as descrição das tabelas do left join
		query += "LEFT JOIN SF4010 SF4 ON SBZ.BZ_TE = SF4.F4_CODIGO "
		query += "LEFT JOIN SM4010 SM4 ON SBZ.BZ_ESTFOR = SM4.M4_CODIGO "
		query += "LEFT JOIN ( SELECT * FROM SX5010 WHERE X5_TABELA = 'S0') SX55 ON BZ_ORIGEM = SX55.X5_CHAVE "
			
			
			log.info('DTS-syncQABZ')
			log.dir(query)
			var sqlConsulta = DatasetFactory.getDataset("ds_EZ4_SQL_CONSULTA_PROTHEUS", new Array(query), null, null);
			return sqlConsulta
		} catch (e) {
			var dataset = DatasetBuilder.newDataset();
			dataset.addColumn("INFO");
			dataset.addRow(["FALHA AO EXECUTAR A QUERY: (" + e.lineNumber + ") " + e.toString()]);
			return dataset;
		}
	}

	function onMobileSync(user) {

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
