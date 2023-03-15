function defineStructure() {
	
}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
	try {
		
		var query = "";
		query += " SELECT F08_CODIGO AS CODIGO,F08_GRPCST AS GRPCST,F08_DESCRI AS DESCRICAO FROM FLUIG.VIEW_ENQUADRAMENTO_LEGAL_IPI";
		//query += " WHERE F08.D_E_L_E_T_ = '' "
		
		log.info('DTS-F08')
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
