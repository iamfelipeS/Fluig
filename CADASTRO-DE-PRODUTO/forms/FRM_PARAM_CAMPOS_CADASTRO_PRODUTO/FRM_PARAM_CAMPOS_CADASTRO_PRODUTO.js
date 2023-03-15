function addTabela(id){
    var indice = wdkAddChild(id)
    if(id == "tbParamCampos"){
        $("#txt_indice_regra___"+indice).val(indice);
    }else if(id == "tb_tipo_despesas"){
        $("#campo"+indice).val(indice);
    }
    return indice
}
function deleteTabela(tb){
    fnWdkRemoveChild(tb)
}
function preencheCampos(){
    var constraints = new Array()
	let cst = DatasetFactory.createConstraint('metadata#active', true, true, ConstraintType.MUST);  //1
	let datasetRegras = DatasetFactory.getDataset('DTS_FRM_PARAM_CAMPOS_CADASTRO_PRODUTO', null, new Array(cst), ['documentid;desc']).values; //2

	//let regrasAtribuicao = datasetRegras[datasetRegras.length - 1]; //3
	let documentId = datasetRegras[0]["metadata#id"];               
	let documentVersion = datasetRegras[0]["metadata#version"];

	constraints.push(DatasetFactory.createConstraint('tablename', 'tbParamCampos', 'tbParamCampos', ConstraintType.MUST));      //4
	constraints.push(DatasetFactory.createConstraint('metadata#id', documentId, documentId, ConstraintType.MUST));
	constraints.push(DatasetFactory.createConstraint('metadata#version', documentVersion, documentVersion, ConstraintType.MUST));



	let datasetPaiFilho = DatasetFactory.getDataset('DTS_FRM_PARAM_CAMPOS_CADASTRO_PRODUTO', null, constraints, null).values;
    

    if(datasetPaiFilho != null && datasetPaiFilho.values != null && datasetPaiFilho.length > 0){
				
        for (var i=0; i < datasetPaiFilho.length; i++){
            var indice = wdkAddChild('tbParamCampos').toString().trim();			
					//$('#txt_indice_regra___'+indice).val(indice);
					$('#campo___'+indice).val(datasetPaiFilho[i].campo);
                    $('#cpObrigatorio___'+indice).val(datasetPaiFilho[i].cpObrigatorio);
                    $('#cpVisivel___'+indice).val(datasetPaiFilho[i].cpVisivel);
                    $('#cpEditavel___'+indice).val(datasetPaiFilho[i].cpEditavel);
                    $('#cpIntegra___'+indice).val(datasetPaiFilho[i].cpIntegra);
                    $('#cpNome___'+indice).val(datasetPaiFilho[i].cpNome);
                    $('#cpCodigo___'+indice).val(datasetPaiFilho[i].cpCodigo);
        }

    } 
    let constraints2 = new Array()
        constraints2.push(DatasetFactory.createConstraint('tablename', 'tbFiliais', 'tbFiliais', ConstraintType.MUST));
        constraints2.push(DatasetFactory.createConstraint('metadata#id', documentId, documentId, ConstraintType.MUST));
        constraints2.push(DatasetFactory.createConstraint('metadata#version', documentVersion, documentVersion, ConstraintType.MUST));
    
    let datasetPaiFilho2 = DatasetFactory.getDataset('DTS_FRM_PARAM_CAMPOS_CADASTRO_PRODUTO', null, constraints2, null).values;
    
    if(datasetPaiFilho2 != null && datasetPaiFilho2.values != null && datasetPaiFilho2.length > 0){
        for (var i=0; i < datasetPaiFilho2.length; i++){
            var indice = wdkAddChild('tbFiliais').toString().trim();    	
                $('#cpNome___'+indice).val(datasetPaiFilho2[i].cpNome);
                $('#cpCodigo___'+indice).val(datasetPaiFilho2[i].cpCodigo);       
        }
    }
}



// function gatilho (id){
//     var indice = newId

//     var cpObrigatorio = $("#cpObrigatorio___" + indice).val()
//     if (cpObrigatorio != "" ) {
//         $("#cpVisivel___" + indice).val(cpObrigatorio);
//     }
//  }



// var cpObrigatorio = '';
// cpObrigatorio.addEventListener(change, () => {
//     var indice = newId;
//     cpObrigatorio = $("#cpObrigatorio___" + indice).val();
//     if (cpObrigatorio != "" ) {
//         $("#cpVisivel___" + indice).val(cpObrigatorio);
//     }
// })



