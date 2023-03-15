function createDataset(fields, constraints, sortFields) {
	try {
		return processResult(callService(fields, constraints, sortFields));
	} catch(e) {
		return processErrorResult(e, constraints);
	}
}

function callService(fields, constraints, sortFields) {
    var cnpj = String(constraints[0].initialValue);
	var serviceData = data();
	var params = serviceData.inputValues;
	var assigns = serviceData.inputAssignments;

	verifyConstraints(serviceData.inputValues, constraints);

	var serviceHelper = ServiceManager.getService(serviceData.fluigService);
	var serviceLocator = serviceHelper.instantiate(serviceData.locatorClass);
	var service = serviceLocator.getPortfolioManagementWSV2();
	var response = service.incluirCnpj(getParamValue(params.usuario, assigns.usuario), getParamValue(params.senha, assigns.senha), 
		getParamValue(cnpj, cnpj), getParamValue(params.tempoAcomp, assigns.tempoAcomp), 
		getParamValue(params.acompRating, assigns.acompRating), getParamValue(params.acompRestricao, assigns.acompRestricao), 
		getParamValue(params.acompCadastral, assigns.acompCadastral), getParamValue(params.acompRestricaoSocios, assigns.acompRestricaoSocios), 
		getParamValue(params.acompRestricaoPartic, assigns.acompRestricaoPartic));

	return response;
}

function defineStructure() {
		addColumn('response');
}

function onSync(lastSyncDate) {
	var serviceData = data();
	var synchronizedDataset = DatasetBuilder.newDataset();

	try {
		var resultDataset = processResult(callService());
		if (resultDataset != null) {
			var values = resultDataset.getValues();
			for (var i = 0; i < values.length; i++) {
				synchronizedDataset.addRow(values[i]);
			}
		}

	} catch(e) {
		log.info('Dataset synchronization error : ' + e.message);

	}
	return synchronizedDataset;
}

function verifyConstraints(params, constraints) {
	if (constraints != null) {
		for (var i = 0; i < constraints.length; i++) {
			try {
				params[constraints[i].fieldName] = JSON.parse(constraints[i].initialValue);
			} catch(e) {
				params[constraints[i].fieldName] = constraints[i].initialValue;
			}
		}
	}
}

function processResult(result) {
	var dataset = DatasetBuilder.newDataset();

	dataset.addColumn("response");
	dataset.addRow([result]);

	return dataset;
}

function processErrorResult(error, constraints) {
	var dataset = DatasetBuilder.newDataset();

	var params = data().inputValues;
    verifyConstraints(params, constraints);
    
    dataset.addColumn('error');
	dataset.addColumn('senha');
	dataset.addColumn('acompRestricaoPartic');
	dataset.addColumn('acompRating');
	dataset.addColumn('acompRestricao');
	dataset.addColumn('acompRestricaoSocios');
	dataset.addColumn('tempoAcomp');
	dataset.addColumn('acompCadastral');
	dataset.addColumn('usuario');
	dataset.addColumn('cnpj');

	var senha = isPrimitive(params.senha) ? params.senha : JSONUtil.toJSON(params.senha);
	var acompRestricaoPartic = isPrimitive(params.acompRestricaoPartic) ? params.acompRestricaoPartic : JSONUtil.toJSON(params.acompRestricaoPartic);
	var acompRating = isPrimitive(params.acompRating) ? params.acompRating : JSONUtil.toJSON(params.acompRating);
	var acompRestricao = isPrimitive(params.acompRestricao) ? params.acompRestricao : JSONUtil.toJSON(params.acompRestricao);
	var acompRestricaoSocios = isPrimitive(params.acompRestricaoSocios) ? params.acompRestricaoSocios : JSONUtil.toJSON(params.acompRestricaoSocios);
	var tempoAcomp = isPrimitive(params.tempoAcomp) ? params.tempoAcomp : JSONUtil.toJSON(params.tempoAcomp);
	var acompCadastral = isPrimitive(params.acompCadastral) ? params.acompCadastral : JSONUtil.toJSON(params.acompCadastral);
	var usuario = isPrimitive(params.usuario) ? params.usuario : JSONUtil.toJSON(params.usuario);
	var cnpj = isPrimitive(params.cnpj) ? params.cnpj : JSONUtil.toJSON(params.cnpj);

	dataset.addRow([error.message, senha, acompRestricaoPartic, acompRating, acompRestricao, acompRestricaoSocios, tempoAcomp, acompCadastral, usuario, cnpj]);

	return dataset;
}

function getParamValue(param, assignment) {
	if (assignment == 'VARIABLE') {
		return getValue(param);
	} else if (assignment == 'NULL') {
		return null;
	}
	return param;
}

function hasValue(value) {
	return value !== null && value !== undefined;
}

function isPrimitive(value) {
	return ((typeof value === 'string') || value.substring !== undefined) || typeof value === 'number' || typeof value === 'boolean' || typeof value === 'undefined';
}


function getObjectFactory(serviceHelper) {
	var objectFactory = serviceHelper.instantiate("br.com.equifax.portfoliomanagement.ws.ObjectFactory");

	return objectFactory;
}



function data() {
	return {
  "fluigService" : "BOAVISTA",
  "operation" : "incluirCnpj",
  "soapService" : "PortfolioManagementWSV2Service",
  "portType" : "PortfolioManagementWSV2",
  "locatorClass" : "br.com.equifax.portfoliomanagement.ws.PortfolioManagementWSV2Service",
  "portTypeMethod" : "getPortfolioManagementWSV2",
  "parameters" : [ ],
  "inputValues" : {
    "senha" : "8824",
    "acompRestricaoPartic" : "N",
    "acompRating" : "S",
    "acompRestricao" : "N",
    "acompRestricaoSocios" : "N",
    "tempoAcomp" : "",
    "acompCadastral" : "N",
    "usuario" : "11000870485",
    "cnpj" : "12358343000101"
  },
  "inputAssignments" : {
    "senha" : "VALUE",
    "acompRestricaoPartic" : "VALUE",
    "acompRating" : "VALUE",
    "acompRestricao" : "VALUE",
    "acompRestricaoSocios" : "VALUE",
    "tempoAcomp" : "VALUE",
    "acompCadastral" : "VALUE",
    "usuario" : "VALUE",
    "cnpj" : "VALUE"
  },
  "outputValues" : { },
  "outputAssignments" : { },
  "extraParams" : {
    "enabled" : false
  }
}
}