var arraysCamposIntegravel = ["B5_COD", "B5_FORMMRP", "B5_AGLUMRP", "B5_CEME", "B5_CERT", "B5_COMPR", "B5_DES", 
"B5_ESPESS", "B5_ESTMAT", "B5_LARG", "B5_CONVDIP", "B5_UMDIPI", "B5_DIASES", "B5_PRV2", "B5_PRV7", "B5_CODCLI", 
"B5_DTREFP7", "B5_PRV3", "B5_PRV4", "B5_PRV5","B5_PRV6", "B5_DTREFP2", "B5_DTREFP3", "B5_DTREFP4", "B5_DTREFP5",
"B5_DTREFP6", "B5_EMB1", "B5_EMB2", "B5_QE1", "B5_QE2", "B5_COMPRLC", "B5_EMPMAX", "B5_ROTACAO", "B5_LARGLC", 
"B5_ALTURLC", "B5_FATARMA", "B5_SERVINT", "B5_NPULMAO", "B5_WMSEMB", "B5_COMPEND","B5_ARREQTD", "B5_SERVTDV", 
"B5_ENDSAI", "B5_SERVDEV", "B5_SERVREQ", "B5_ENDENT", "B5_ENDREQ", "B5_ENDDEV", "B5_UMIND", "B5_SERVENT", 
"B5_SERVSAI", "B5_SERVEMB", "B5_ENDECD", "B5_ENDSCD", "B5_SERECD", "B5_SERSCD", "B5_CODZON", "B5_CARPER", "B5_IDADEM", 
"B5_LVLEMB","B5_LPSEMB", "B5_PERCUB", "B5_PORTMS", "B5_ITEM", "B5_ONU", "B5_CALORIA", "B5_PESO", "B5_TOTGOR", 
"B5_MODELO", "B5_ESPECIE", "B5_QUALIDA", "B5_TOTGORS", "B5_TOTGORT", "B5_COR", "B5_ALTURA", "B5_EAN141", "B5_EAN145", 
"B5_TIPUNIT", "B5_IMPETI", "B5_VLDOPER","B5_VLDREQ", "B5_PERIOT", "B5_NSERIE", "B5_QEI", "B5_QEL", "B5_EAN142", 
"B5_EAN143", "B5_EAN144", "B5_EAN146", "B5_EAN147", "B5_EAN148", "B5_QTDVAR", "B5_DTINV", "B5_SEMENTE", "B5_TAKEUP", 
"B5_TPCOMMO", "B5_PENE", "B5_TRATAM", "B5_CLAUBA", "B5_UMPRC","B5_CULTRA", "B5_CTVAR", "B5_CATEG", "B5_ISIDUNI", 
"B5_GSLE", "B5_GSMC", "B5_GSMI", "B5_TPISERV", "B5_ECDESCR", "B5_ECENQUA", "B5_ECPESOE", "B5_ECALTEM", "B5_ECSEQ", 
"B5_ECLARGE", "B5_ECINDIC", "B5_ECLARGU", "B5_ECTITU", "B5_ECPCHAV", "B5_ECSEQ2", "B5_ECCOMP","B5_ECPROFU", 
"B5_ECBENFI", "B5_ECCARAC", "B5_ECCUBAG", "B5_ECDTEX2", "B5_ECDTLAN", "B5_ECFLAG","B5_ECDTEX", "B5_ECIMGFI", 
"B5_ECAPRES", "B5_PROPOR1", "B5_PROPOR2", "B5_CRDEST1", "B5_CRDEST2", "B5_FTIF", "B5_FTIN", "B5_DENSID", "B5_CONCENT", 
"B5_LOCALI2", "B5_USOITE","B5_CODISRF", "B5_VOLRECI", "B5_DIASHL", "B5_INSUMO", "B5_REVPROD", "B5_CODTRAM", 
"B5_TPSERV", "B5_INDPETR", "B5_DTDECRE", "B5_EMBAGRO", "B5_REGMAPA", "B5_PRODDNF", "B5_INSSPAT", "B5_PINSUMO", 
"B5_BENDL", "B5_IMPGRUP", "B5_INTDI", "B5_ZF4PORC", "B5_AM4PORC", "B5_LOCALIZ","B5_CODCAI", "B5_AMMULTS", "B5_CONCEN", 
"B5_DESCSER", "B5_FILIAL", "B5_CODTP", "B5_CMPEXTR", "B5_CDDMDBA", "B5_SITDIEF", "B5_DESCNFE", "B5_TABINC", 
"B5_CODGRU", "B5_FORCAO", "B5_MARCA", "B5_FCIPRV", "B5_ZFMULTO", "B5_ZFMULTS", "B5_DIASHF", "B5_VLZERO", 
"B5_2CODBAR","B5_NATBEN", "B5_DTDECAL", "B5_FUNCEP", "B5_NUMBEN", "B5_ANOBEN", "B5_TPESOC", "B5_MARGPRE", 
"B5_VLRCID", "B5_ECEAN1", "B5_ENVMKT", "B5_ECDESF", "B5_INDCPRB", "B5_NBS", "B5_CODATIV", "B5_CODSERC", 
"B5_CATMAT", "B5_CDFATD", "B5_CODGNRE", "B5_CODFAM", "B5_DEC7174","B5_CLASSE", "B5_AMMULTO", "B5_FORSER", 
"B5_PROTOTI", "B5_PRZCQ", "B5_MARPEC", "B5_MONTA", "B5_PROJDES", "B5_IDHIST", "B5_VERIND", "B5_NRECAGR", 
"B5_INGATV", "B5_REDALIQ", "B5_ISEN", "B5_NUMBEAL", "B5_NATALBE", "B5_TPAPUR", "B5_CTRWMS", "B5_PROTCON", 
"B5_TIPO","B5_GRPIVA", "B5_FPRZCQ", "B5_VERSAO", "B5_BLQINVA", "B5_ALTTRIB", "B5_BLQINVD", "B5_CODLIN", 
"B5_CTDACON", "B5_ECSUBT", "B5_ISDSHIP", "B5_INSPAT", "B5_LEADTR", "B5UMDIPI", "B5UMPRC", "B5AGLUMRP", "B5CATEG", 
"B5NATBEN","B5TPESOC", "B5CODFAM", "B5NATALBE", "B5CODLIN", "B5SERVINT", "B5SERVTDV", "B5SERVDEV", "B5SERVREQ", 
"B5SERVENT", "B5_ERVSAI", "B5SERVEMB", "B5SERECD", "B5SERSCD", "B5ENDSAI", "B5ENDENT", "B5ENDREQ", "B5ENDDEV", 
"B5ENDECD", "B5ENDSCD", "B5CODZON", "B5ONU", "B5PENE", "B5CULTRA", "B5CTVAR", "B5NBS", "B5FORSER", "B5MARPEC", 
"B5FPRZCQ", "B5CDFATD"]; 


function createDataset(fields, constraints, sortFields) {
	try {
	var  query = "";
		 query += " SELECT ";
		 query += " B5_COD, B5_FORMMRP, B5_AGLUMRP, B5_CEME, B5_CERT, B5_COMPR, B5_DES, B5_ESPESS, B5_ESTMAT, B5_LARG, ";
		 query += " B5_CONVDIP, B5_UMDIPI, B5_DIASES, B5_PRV2, B5_PRV7, B5_CODCLI, B5_DTREFP7, B5_PRV3, B5_PRV4, B5_PRV5, ";
		 query += " B5_PRV6, B5_DTREFP2, B5_DTREFP3, B5_DTREFP4, B5_DTREFP5, B5_DTREFP6, B5_EMB1, B5_EMB2, B5_QE1, B5_QE2, ";
		 query += " B5_COMPRLC, B5_EMPMAX, B5_ROTACAO, B5_LARGLC, B5_ALTURLC, B5_FATARMA, B5_SERVINT, B5_NPULMAO, B5_WMSEMB, B5_COMPEND, ";
		 query += " B5_ARREQTD, B5_SERVTDV, B5_ENDSAI, B5_SERVDEV, B5_SERVREQ, B5_ENDENT, B5_ENDREQ, B5_ENDDEV, B5_UMIND, B5_SERVENT, ";
		 query += " B5_SERVSAI, B5_SERVEMB, B5_ENDECD, B5_ENDSCD, B5_SERECD, B5_SERSCD, B5_CODZON, B5_CARPER, B5_IDADEM, B5_LVLEMB, ";
		 query += " B5_LPSEMB, B5_PERCUB, B5_PORTMS, B5_ITEM, B5_ONU, B5_CALORIA, B5_PESO, B5_TOTGOR, B5_MODELO, B5_ESPECIE, ";
		 query += " B5_QUALIDA, B5_TOTGORS, B5_TOTGORT, B5_COR, B5_ALTURA, B5_EAN141, B5_EAN145, B5_TIPUNIT, B5_IMPETI, B5_VLDOPER, ";
		 query += " B5_VLDREQ, B5_PERIOT, B5_NSERIE, B5_QEI, B5_QEL, B5_EAN142, B5_EAN143, B5_EAN144, B5_EAN146, B5_EAN147, ";
		 query += " B5_EAN148, B5_QTDVAR, B5_DTINV, B5_SEMENTE, B5_TAKEUP, B5_TPCOMMO, B5_PENE, B5_TRATAM, B5_CLAUBA, B5_UMPRC, ";
		 query += " B5_CULTRA, B5_CTVAR, B5_CATEG, B5_ISIDUNI, B5_GSLE, B5_GSMC, B5_GSMI, B5_TPISERV, B5_ECDESCR, B5_ECENQUA, ";
		 query += " B5_ECPESOE, B5_ECALTEM, B5_ECSEQ, B5_ECLARGE, B5_ECINDIC, B5_ECLARGU, B5_ECTITU, B5_ECPCHAV, B5_ECSEQ2, B5_ECCOMP, ";
		 query += " B5_ECPROFU, B5_ECBENFI, B5_ECCARAC, B5_ECCUBAG, B5_ECDTEX2, B5_ECDTLAN, B5_ECFLAG,B5_ECDTEX, B5_ECIMGFI, B5_ECAPRES, ";
		 query += " B5_PROPOR1, B5_PROPOR2, B5_CRDEST1, B5_CRDEST2, B5_FTIF, B5_FTIN, B5_DENSID, B5_CONCENT, B5_LOCALI2, B5_USOITE, ";
		 query += " B5_CODISRF, B5_VOLRECI, B5_DIASHL, B5_INSUMO, B5_REVPROD, B5_CODTRAM, B5_TPSERV, B5_INDPETR, B5_DTDECRE, B5_EMBAGRO, ";
		 query += " B5_REGMAPA, B5_PRODDNF, B5_INSSPAT, B5_PINSUMO, B5_BENDL, B5_IMPGRUP, B5_INTDI, B5_ZF4PORC, B5_AM4PORC, B5_LOCALIZ, ";
		 query += " B5_CODCAI, B5_AMMULTS, B5_CONCEN, B5_DESCSER, B5_FILIAL, B5_CODTP, B5_CMPEXTR, B5_CDDMDBA, B5_SITDIEF, B5_DESCNFE, ";
		 query += " B5_TABINC, B5_CODGRU, B5_FORCAO, B5_MARCA, B5_FCIPRV, B5_ZFMULTO, B5_ZFMULTS, B5_DIASHF, B5_VLZERO, B5_2CODBAR, ";
		 query += " B5_NATBEN, B5_DTDECAL, B5_FUNCEP, B5_NUMBEN, B5_ANOBEN, B5_TPESOC, B5_MARGPRE, B5_VLRCID, B5_ECEAN1, B5_ENVMKT, ";
		 query += " B5_ECDESF, B5_INDCPRB, B5_NBS, B5_CODATIV, B5_CODSERC, B5_CATMAT, B5_CDFATD, B5_CODGNRE, B5_CODFAM, B5_DEC7174, ";
		 query += " B5_CLASSE, B5_AMMULTO, B5_FORSER, B5_PROTOTI, B5_PRZCQ, B5_MARPEC, B5_MONTA, B5_PROJDES, B5_IDHIST, B5_VERIND, ";
		 query += " B5_NRECAGR, B5_INGATV, B5_REDALIQ, B5_ISEN, B5_NUMBEAL, B5_NATALBE, B5_TPAPUR, B5_CTRWMS, B5_PROTCON, B5_TIPO, ";
		 query += " B5_GRPIVA, B5_FPRZCQ, B5_VERSAO, B5_BLQINVA, B5_ALTTRIB, B5_BLQINVD, B5_CODLIN, B5_CTDACON, B5_ECSUBT, B5_ISDSHIP, B5_INSPAT, B5_LEADTR ";
		 /*query += " SAH1.AH_DESCPO AS B5UMDIPI, SAH1.AH_DESCPO AS B5UMPRC, SX5K1.X5_DESCRI AS B5CATEG, SX5NU1.X5_DESCRI AS B5NATBEN";
		 query += " SX5DZ.X5_DESCRI AS B5TPESOC, SX50B.X5_DESCRI AS B5CODFAM, SX5NU2.X5_DESCRI AS B5NATALBE, SX50A.X5_DESCRI AS B5CODLIN, SX5L41.X5_DESCRI AS B5SERVINT,";
		 query += " SX5L42.X5_DESCRI AS B5SERVTDV, SX5L43.X5_DESCRI AS B5SERVDEV, SX5L44.X5_DESCRI AS B5SERVREQ, SX5L45.X5_DESCRI AS B5SERVENT, SX5L46.X5_DESCRI AS B5_ERVSAI, ";
		 query += " SX5L47.X5_DESCRI AS B5SERVEMB, SX5L48.X5_DESCRI AS B5SERECD ";*/
		 query += " FROM VIEW_dts_sb5_sync_incr_qa_nj ";	
		 //ERRO DE "ORA-00904:identificador inválido" --> SX5L49.X5_DESCRI AS B5SERSCD, SX5LU.X5_DESCRI AS B5AGLUMRP, SBE3.BE_DESCRIC AS B5ENDREQ, SBE5.BE_DESCRIC AS B5ENDECD, SBE6.BE_DESCRIC AS B5ENDSCD, SBE2.BE_DESCRIC AS B5ENDENT, SBE4.BE_DESCRIC AS B5ENDDEV, SBE1.BE_DESCRIC AS B5ENDSAI, DC4.DC4_DESZON AS B5CODZON, DY3.DY3_DESCRI AS B5ONU, NP7.NP7_DESCRI AS B5PENE, NP3.NP3_DESCRI AS B5CULTRA , NP4.NP4_DESCRI AS B5CTVAR, EL0.EL0_DESC AS B5NBS, CZL.CZL_DSFATD AS B5CDFATD, SM41.M4_DESCR AS B5FORSER, SM42.M4_DESCR AS B5FPRZCQ, VQS.VQS_DESCRI AS B5MARPEC
	 
	 
		log.info('DTS-syncQAB5')
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
