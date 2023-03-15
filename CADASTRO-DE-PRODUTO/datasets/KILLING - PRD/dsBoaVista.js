function createDataset(fields, constraints, sortFields) {
	try {
		return processResult(callService(fields, constraints, sortFields));
	} catch(e) {
		return processErrorResult(e, constraints);
	}
}

function callService(fields, constraints, sortFields) {
    var user = String(constraints[0].initialValue);
    var pass = String(constraints[1].initialValue);
    var cnpj = String(constraints[2].initialValue);  

	var serviceData = data();
	var params = serviceData.inputValues;
	var assigns = serviceData.inputAssignments;

	verifyConstraints(serviceData.inputValues, constraints);

	var serviceHelper = ServiceManager.getService(serviceData.fluigService);
	var serviceLocator = serviceHelper.instantiate(serviceData.locatorClass);
	var service = serviceLocator.getPortfolioManagementWSV2();
	var response = service.consultarCarteira(getParamValue(user, user), getParamValue(pass, pass), 
	getParamValue(cnpj, cnpj));

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
	dataset.addColumn('usuario');
	dataset.addColumn('cnpj');

	var senha = isPrimitive(params.senha) ? params.senha : JSONUtil.toJSON(params.senha);
	var usuario = isPrimitive(params.usuario) ? params.usuario : JSONUtil.toJSON(params.usuario);
	var cnpj = isPrimitive(params.cnpj) ? params.cnpj : JSONUtil.toJSON(params.cnpj);

	dataset.addRow([error.message, senha, usuario, cnpj]);

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
  "operation" : "consultarCarteira",
  "soapService" : "PortfolioManagementWSV2Service",
  "portType" : "PortfolioManagementWSV2",
  "locatorClass" : "br.com.equifax.portfoliomanagement.ws.PortfolioManagementWSV2Service",
  "portTypeMethod" : "getPortfolioManagementWSV2",
  "parameters" : [ ],
  "inputValues" : {
    "senha" : "8824",
    "usuario" : "11000870485",
    "cnpj" : "12358343000101"
  },
  "inputAssignments" : {
    "senha" : "VALUE",
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