function defineStructure() {
	
}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
	try {
		var cQryCpo = "" ;
				cQryCpo += " SELECT ";
				cQryCpo += " B1_COD, B1_TIPO, B1_DESC, B1_UM, B1_MSBLQL, ";
				cQryCpo += " (TRIM(B1_COD) || ' | ' ||  TRIM(B1_DESC) || ' | ' || TRIM(B1_TIPO) || ' | ' ||";
				cQryCpo += " CASE WHEN TRIM(B1_MSBLQL) != '1' THEN 'ATIVO' ELSE 'INATIVO' END ) AS NOME_COD ";
				cQryCpo += " FROM VIEW_dts_sb1_sync_incr_new ";
				//cQryCpo += " WHERE rownum = '5' ";
				//, ' || ', TRIM(B1_TIPO), CASE WHEN TRIM(B1_MSBLQL) != '1' THEN 'ATIVO' ELSE 'INATIVO' END CASE) AS NOME_COD
		
		log.info('DTS-sync')
		log.dir(cQryCpo)
		var sqlConsulta = DatasetFactory.getDataset("ds_EZ4_SQL_CONSULTA_PROTHEUS", new Array(cQryCpo), null, null);
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
