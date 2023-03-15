function defineStructure() {
	
}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
	try {
		
		var query = "";
		query += " SELECT A2_FILIAL AS EMPFIL, A2_COD AS CODIGO, A2_LOJA AS LOJA, A2_NOME AS NOME, A2_CGC AS CNPJ, SA2_R_E_C_N_O_ AS RECNO FROM FLUIG.VIEW_FORNECEDORES";
		//query += " WHERE SA2_D_E_L_E_T_ != '*' AND A2_MSBLQL != '1'",
		//	"order": "SA2_R_E_C_N_O_" "
		
		log.info('logDTS')
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
