function defineStructure() {
	
}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
	log.info('ANTESTRY')
	log.dir(query)
	try {
		log.info('DEPOISTRY')
		log.dir(query)
		var codigo = findConstraint('COD', constraints);
		var query = "";
		query += " SELECT * FROM FLUIG.VIEW_SX5";
		//query += " SELECT X5_CHAVE, X5_DESCRI";
		//query += " WHERE 'X5_TABELA='02'"
		
		log.info('SX5SX5')
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
