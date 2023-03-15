function defineStructure() {
	
}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
	try {
		
		var query = "";
		query += " SELECT " 
		query += " F4_CODIGO AS CODIGO, F4_TIPO AS TIPO, F4_CF AS CF, F4_DUPLIC AS DUPLIC, F4_ESTOQUE AS ESTOQUE, F4_TEXTO AS TEXTO, S_T_A_M_P_, I_N_S_D_T_";
		query += " FROM FLUIG.VIEW_TIPOS_ENTRADA_SAIDA ";
		//query += " BM.D_E_L_E_T_ = ' '"
		
		log.info('SF4')
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
