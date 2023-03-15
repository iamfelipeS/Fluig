function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
	var dataset = DatasetBuilder.newDataset();
    	dataset.addColumn("CAMPOS");
    
    var ativo = '';
    var id = '';
    /*if (constraints != null) {
        for (var i = 0; i < constraints.length; i++) {
            if (constraints[i].fieldName == "ativo") { 
            	ativo = constraints[i].initialValue; 
            }
            if (constraints[i].fieldName == "id") { 
            	id = constraints[i].initialValue; 
            }
        }
    }*/
   // var cps_fluig = ["anonymization_date"] 
    var cps_fluig = '"metadata#id","metadata#parent_id","metadata#version","metadata#card_index_id","metadata#card_index_version","metadata#active","anonymization_date","anonymization_user_id","cardid","companyid","documentid","id","tableid","version"'; 
    
    var constraints = new Array();
    constraints.push(DatasetFactory.createConstraint("metadata#active", true, true, ConstraintType.MUST));
    var datasetPrincipal = DatasetFactory.getDataset("DTS_FRM_CADASTRO_DE_PRODUTO_KILLING", null, constraints, ['documentid;desc']);

    log.info("DTS-TESTE")
    log.dir(datasetPrincipal)
    var documentId      = datasetPrincipal.getValue(0, "metadata#id");
    var documentVersion = datasetPrincipal.getValue(0, "metadata#version");
    var documentParentId = datasetPrincipal.getValue(0, "metadata#parent_id");

    var constraintsFilhos = new Array();
    constraintsFilhos.push(DatasetFactory.createConstraint("metadata#id", documentId, documentId, ConstraintType.MUST));
    constraintsFilhos.push(DatasetFactory.createConstraint("metadata#version", documentVersion, documentVersion, ConstraintType.MUST));
    
    var datasetFilhos = DatasetFactory.getDataset("DTS_FRM_CADASTRO_DE_PRODUTO_KILLING", null, constraintsFilhos, null);
    
    log.info("datasetFilhos")
    log.dir(datasetFilhos.getColumnsCount())
    
    var campo = ""
    for (var j = 0; j < datasetFilhos.getColumnsCount(); j++) {
    	
    	campo = datasetFilhos.getColumnName(j)

    	if(cps_fluig.indexOf(datasetFilhos.getColumnName(j)) < 0 ){
    			dataset.addRow(new Array(
    			datasetFilhos.getColumnName(j)
    					
    			));
			}
  
                //datasetFilhos.getColumnName(j, "B1_TIPO")

    }
    
    return dataset;
}
function onMobileSync(user) {

}