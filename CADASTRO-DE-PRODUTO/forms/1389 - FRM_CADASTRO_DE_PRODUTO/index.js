var BDOForms = {
	params: {},
	initForm: function(params) {
			this.params = params;
			var $this = this;
			$(function() {
					(params.formMode == "ADD" || params.formMode == "MOD") ? $this.onEdit(params) : $this.onView(params);
			});
	},
	onView: function(params) {},
	onEdit: function(params) {
	var isMob = params.isMobile;
	let activity = params.WKNumState;	
	
	if (activity == 0 || activity == 1 ) {
		$("#consultar").removeClass('hide');
		var removeConsult = document.getElementById("consultar");
		removeConsult.style.display = "block";
	}
	if (activity == 0 || activity == 1 ) {
		$("#adicionar").removeClass('hide');
		var removeConsult = document.getElementById("adicionar");
		removeConsult.style.display = "block";
	}
	if (activity == 0 || activity == 1 ) {
		$("#alterar").removeClass('hide');
		var removeConsult = document.getElementById("alterar");
		removeConsult.style.display = "block";
	}
	}
}

$( document ).ready(function() {
	//Faz tratamento do botão Limpar Campos
	// validaForms()
	// helpCampos();

//Torna campos de título do menu collapsáveis
var collapsible = document.querySelectorAll(".collapsible-lblue,.collapsible-nblue");

$("input:not('.mail')").on("input", function(){
	$(this).val($(this).val().toUpperCase());
});


for (var idx = 0; idx < collapsible.length; idx++) {
	collapsible[idx].addEventListener("click", function() {
		this.classList.toggle("active");
		var content = this.nextElementSibling;
		if (content.style.display === "block") {
			content.style.display = "none";
		} else {
			content.style.display = "block";
		}
	});
}


	//FUNÇÃO BOTÃO ADICIONANDO E ALTERANDO
	var crud_select = $("#OPT_CADASTRO").val()
	if(crud_select == 'Adicionar'){
		$("#CRUD_SELECT").removeClass('hide')
		$("#opt_crud")
		.text("Adicionando")
		//.show();
	} else if (crud_select == 'Alterar'){
		$("#CRUD_SELECT").removeClass('hide')
		$("#opt_crud")
		.text("Alterando")
		//.show();
	}
	$("#BTN_LIMPAR").click(function(){
		
		// if(document.getElementById("A1_NOME_BUSCA").options[0]){
		// 	document.getElementById("A1_NOME_BUSCA").options[0].remove();	
		// }
		limpaCampos(true);
	});

	if(WKNumState === 0){
		$("#OPT_CADASTRO").val('ADICIONAR')
		chamaMenu('ADICIONAR');
	}
	$("#BTN_BLOQUEIA").click((_) =>  changeBloqueia()  );
	
	$('.maskDate').mask('00/00/0000');
	$('.maskMoney').mask('#00.##0,00', { reverse: true });
	$('.maskMoney1').mask('000.000.000,00', { reverse: true });
	$('.maskCEP').mask('00000-000');
	$('.maskPercent1').mask('00000,00', { reverse: true });
	$('.maskNumber').mask('000000');

	for(let i = 0; i<arraysCamposOculto.length; i++){
		$("#"+arraysCamposOculto[i]).hide(); 
	}

	$(".hide").hide()
	
	formatMoneyValues()
});


function chamaMenu(opt){
	if(opt.toUpperCase() == 'ADICIONAR'){
		$("#OPT_CADASTRO").val('ADICIONAR')
		$("#opt_adicionar").show().addClass("active");
		$("#opt_alterar, #opt_consultar").hide().removeClass("active");
		$("#BTN_BLOQUEIA").hide();
		//$("#cabecalho").hide();
		

		
		$("#A1_NOME_BUSCA_DIV").hide()
		
		for (let i = 0; i<arraysCamposVisivel.length; i++){
			let isZoom = arraysCamposZooms.filter(val => {
				if(val === arraysCamposVisivel[i]) return true
				return false
			})
			if(isZoom.length > 0){
				$("#"+arraysCamposVisivel[i].replace('_','')).prop("disabled", false);
			}else if($("#"+arraysCamposVisivel[i]).prop("tagName") == "SELECT"){
					
				$("#"+arraysCamposVisivel[i]).prop("disabled", false);

			}else{
				$("#"+arraysCamposVisivel[i]).removeAttr("readonly");
			}
		}
		$('#B1_COD').attr('readonly',false)
		$('#B5_COD').attr('readonly',false)
		$('#BZ_COD').attr('readonly',false)

	}else if(opt.toUpperCase() == 'ALTERAR'){
		$("#OPT_CADASTRO").val('ALTERAR')
		$("#opt_alterar").show().addClass("active");
		$("#opt_adicionar, #opt_consultar").hide().removeClass("active");
		$("#A1_NOME_BUSCA_DIV").show()
		var val = $("#A1_NOME_BUSCA").val()

		for (let i = 0; i<arraysCamposVisivel.length; i++){
			let isZoom = arraysCamposZooms.filter(val => {
				if(val === arraysCamposVisivel[i]) return true
				return false
			})
			if(isZoom.length > 0){
				$("#"+arraysCamposVisivel[i].replace('_','')).prop("disabled", false);
			}else if($("#"+arraysCamposVisivel[i]).prop("tagName") == "SELECT"){
					
				$("#"+arraysCamposVisivel[i]).prop("disabled", false);

			}else{
				$("#"+arraysCamposVisivel[i]).removeAttr("readonly");
			}
		}


		$('#B1_COD').attr('readonly',true)
		
	}else if(opt.toUpperCase() == 'CONSULTAR'){
		$("#opt_consultar").show().addClass("active");
		$("#opt_adicionar, #opt_alterar").hide().removeClass("active");
		$("#OPT_CADASTRO").val('CONSULTAR')
		

		$("#A1_NOME_BUSCA_DIV").show()
		$("#BTN_BLOQUEIA").hide();

		//CAMPOS DA SB1
		setTimeout(() => {
			for (let i = 0; i<arraysCamposVisivel.length; i++){
				let isZoom = arraysCamposZooms.filter(val => {
					if(val === arraysCamposVisivel[i]) return true
					return false
				})
				
				arraysCamposZoomsBZ
				if(isZoom.length > 0){
					
					$("#"+arraysCamposVisivel[i].replace('_','')).prop("disabled", true);

				}else if($("#"+arraysCamposVisivel[i]).prop("tagName") == "SELECT"){
					
					$("#"+arraysCamposVisivel[i]).prop("disabled", true);

				}else{
					$("#"+arraysCamposVisivel[i]).prop("readonly", true);
				}
			}
		}, 1000);
		//CAMPOS DA B5
		setTimeout(() => {
			for (let i = 0; i<arraysCamposVisivelB5.length; i++){
				let isZoom = arraysCamposZoomsB5.filter(val => {
					if(val === arraysCamposVisivelB5[i]) return true
					return false
				})
				
				arraysCamposZoomsB5
				if(isZoom.length > 0){
					
					$("#"+arraysCamposVisivelB5[i].replace('_','')).prop("disabled", true);

				}else if($("#"+arraysCamposVisivelB5[i]).prop("tagName") == "SELECT"){
					
					$("#"+arraysCamposVisivelB5[i]).prop("disabled", true);

				}else{
					$("#"+arraysCamposVisivelB5[i]).prop("readonly", true);
				}
			}
		}, 1000);
		//CAMPOS DA BZ
		setTimeout(() => {
			for (let i = 0; i<arraysCamposVisivelBZ.length; i++){
				let isZoom = arraysCamposZoomsBZ.filter(val => {
					if(val === arraysCamposVisivelBZ[i]) return true
					return false
				})
				
				arraysCamposZoomsBZ
				if(isZoom.length > 0){
					
					$("#"+arraysCamposVisivelBZ[i].replace('_','')).prop("disabled", true);

				}else if($("#"+arraysCamposVisivelBZ[i]).prop("tagName") == "SELECT"){
					
					$("#"+arraysCamposVisivelBZ[i]).prop("disabled", true);

				}else{
					$("#"+arraysCamposVisivelBZ[i]).prop("readonly", true);
				}
			}
		}, 1000);
		$('#B1_COD').attr('readonly',true)
	}

}

function limpaCampos(param){

	if(param){
		setZoomData("A1_NOME_BUSCA","")
	}
	
	for (var i = 0; i<arraysCamposVisivel.length; i++){
		
		let isZoom = arraysCamposZooms.filter(val => {
			if(val === arraysCamposVisivel[i]) return true
			return false
		})
		
		if(isZoom.length > 0){
			setZoomData(arraysCamposVisivel[i].replace('_',''))
		}else{
			$("#"+arraysCamposVisivel[i]).val("").change();
		}
		$("#"+arraysCamposVisivel[i]).val("").change();
		// if($("#"+arraysCamposVisivel[i]).hasClass("atualizacaoSEFAZ")) $("#"+arraysCamposVisivel[i]).removeClass("atualizacaoSEFAZ")
	}
	// $("#A1_PESSOA").val("J");
	
	// if(param == "clean") $("#A1_NOME_BUSCA").val("").change();

	// $("#A1_XRUT, #A1_TIPCLI").prop('disabled', true);
	
	// //limpa campos zoom
  //   if(document.getElementById("A1_DDI").options[0]){
	// 	document.getElementById("A1_DDI").options[0].remove();	
	// }	
	// if(document.getElementById("A1_PAISDES").options[0]){
	// 	document.getElementById("A1_PAISDES").options[0].remove();	
	// }
    
  //   //limpa tabelas Pai e Filho
  //   var numOfChild = document.getElementById("tbContatos").tBodies[0].children.length - 1;
    
  //   for(var child = numOfChild; child > 0; child-- ){
  //   	deleteTabela(document.getElementById("tbContatos").tBodies[0].children[child]);
  //   }

	// if($("label").hasClass("red-text")) $("label").removeClass("red-text");
    
}
//FUNCAO VALIDA CAMPOS OBRIG. FORMULÁRIO
function validaForms(numState, nextState){
	var labels = new Array();
	var campos = new Array();
	var arraysCamposObr = []
	var vControl = false;
	var atv_inicio = "1";
	var atv_pcp = "4";
	var atv_almox = "5";
	var atv_fiscal = "8";
	var atv_exped = "14";
	var atv_custos = "6";
	var atv_mkt = "7";
	var atv_control = "11";
	var atv_supri = "10";
	var atv_comercial = "9";
	var atv_lab = "12";
	console.log("ARRAYaqui")
	console.log(numState,atv_inicio,arraysCamposObr)
	if(numState == atv_inicio){		
		arraysCamposObr=["B1_TIPO","B1_COD","B1_CODBAR","B1_CODGTIN","B1_DESC","B1_GRUPO","B1_LINHA","B1_LOCPAD","B1_PESBRU","B1_PESO","B1_POSIPI","B1_UM","B1_UNINEGO","B5_2CODBAR","B5_CONVDIP","B5_EAN141","B5_UMDIPI","BZ_FILIAL","BZ_LOCPAD","SBZ_SINALIZ","B5_ITEM","SB5_TCONVMA","B5_CEME","B5_UMDIPI","B5_CONVDIP","BZ_FILIAL"];

	}else if (numState == atv_pcp) {
		arraysCamposObr=["BZ_FILIAL","BZ_LOCPAD","BZ_PE","BZ_TIPE"];

	}else if (numState == atv_almox) {
		arraysCamposObr=["B1_LOCALIZ","B5_CEME","B1_POSIPI","B1_GRTRIB","B5_ESTMAT","B1_LOCPAD","B1_TIPCONV","B1_CONV","B1_SEGUM","B1_CODBAR","B1_CODGTIN","B1_FANTASM","BZ_FILIAL","BZ_LOCPAD","BZ_LOCALIZ","BZ_FANTASM"];

	}else if (numState == atv_fiscal) {
		arraysCamposObr=["B1_GRTRIB","B1_IPI","B1_GRPTI","B1_CONTA","BZ_FILIAL","BZ_IPI", "B1_CONTA"];
	
	}else if (numState == atv_exped) {
		arraysCamposObr=["B1_LOCPAD","B1_LOCALIZ","B5_ENDENT","B5_ENDSAI","B5_SERVENT","B5_SERVSAI","B5_SERVINT","B5_UMIND","B5_CODZON","B5_CTRWMS","BZ_FILIAL","BZ_LOCPAD","BZ_LOCALIZ","BZ_CTRWMS"];

	 }else if (numState == atv_custos) {
	// 	arraysCamposObr=[];

	}else if (numState == atv_mkt) {
		arraysCamposObr=["B1_COMIS","B5_DES","BZ_FILIAL"];

	}else if (numState == atv_control) {
		arraysCamposObr=["B1_COMIS","B5_DES","BZ_FILIAL","B1_COMIS"];

	}else if (numState == atv_supri) {
		arraysCamposObr=["B1_ORIGEM","B5_UMDIPI","B5_CONVDIP"];

	 }else if (numState == atv_comercial) {
	// 	arraysCamposObr=[];

	}else if (numState == atv_lab) {
		arraysCamposObr=["BZ_LOCPAD","B1_COD","B1_DESC","B1_TIPO","B1_UM","B1_POSIPI","BZ_FILIAL","BZ_LOCPAD","B5_UMDIPI"];
	}
	
	console.log(arraysCamposObr)
	
	// if($("#A1_PAIS").val() != '105') arraysCamposObr=["FLUIG_INCOTERMS", "A1_TIPCLI");

	//Tratamento dos campos obrigatórios
	for (var i = 0; i < arraysCamposObr.length; i++) {
		
		let field = $('#'+arraysCamposObr[i])
		let label = $('#'+arraysCamposObr[i]+'_L')
		console.log("FIELDvar",field[0]["name"],label.text())
		if (field.val() == "" || field.val() == null) {

			label.addClass("red-text");
			var labelText = label.text();
				labelText = (labelText.indexOf("*") >= 0) ? labelText.replace("*", "") : labelText;

			if(labels.indexOf(labelText) === -1) labels.push(labelText);
			vControl = true
		}
		else {
			if(label.hasClass("red-text")) label.removeClass("red-text");
		}
	}
	console.log(arraysCamposObr)
	//Tratamento das opções Bloquear e Consultar
	var opt = String($("#OPT_CADASTRO").val()).toUpperCase();
	if(opt == 'CONSULTAR'){
		FLUIGC.toast({
			title: 'Atenção: ',
			message: 'Para iniciar o processo selecione uma opção válida no Menu!',
			type: 'warning'
		})
		return false;
	}
	
	//var cgc = $("#A1_CGC").val();
	// if(opt == 'ADICIONAR' ){
	// 	//$("#A1_LOJA").val("00");
	// 	return false;
	// }
	
	var bloq = String($("#BLOQUEAR_CLIENTE").val()).toUpperCase();
	if(opt == 'BLOQUEAR' && (bloq == '' || bloq == null)){
		FLUIGC.toast({
			title: 'Atenção: ',
			message: 'Para iniciar o processo selecione uma opção no campo Bloquear Produto!',
			type: 'warning'
		})
		return false;
	}

	// CRIA A LISTA DE LABELS PARA SEREM PREENCHIDAS
	if(labels.length > 0){

		let li;
		for(let k=0;  k<labels.length; k++){
			li += "<li class='list-group-item gray-text'><strong>" + labels[k] + "</strong></li>";
		}

		li = li.replace(undefined, "");
		
		let ul = "<ul class='list-group list-group-flush'>"+li+"</ul>";
		
		if (vControl) {
			FLUIGC.toast({
				title: 'Atenção: ',
				message: 'Preencher os campos: <br />'+ul,
				type: 'warning'
			})
			return false;
		}
	}
	
	
	//Torna todos os campos editáveis para que sejam enviados no formulário
	for (var i = 0; i<arraysCamposVisivel.length; i++){
		$("#"+arraysCamposVisivel[i]).prop("disabled", false);
	}
	
	
	return true;
}

function helpCampos(){

	/***
	* SUBISTITUIR ESSA PARTE PELO RETORNO DO DATASET INICIO
	* POIS NAO PRECISA TRABALHAR COM JSON APENAS PEGAR O NOME DO CAMPO E A DESCRIÇÃO DO HELP
	* OBS. NA TAG QUE IRA RECEBER O HELP PRECISA ESTAR COM A CLASSE NO MESMO NOME DO CAMPO, E COM O ATRIBUTO "data-toggle='popover'"
	* ****/

	let c1 = DatasetFactory.createConstraint("metadata#active", true, true, ConstraintType.MUST)
	let c2 = DatasetFactory.createConstraint("cpFormulario", "WKF_CADASTRO_CLIENTE", "WKF_CADASTRO_CLIENTE", ConstraintType.MUST)
	let dts = DatasetFactory.getDataset('DTS_FRM_CRUD_HELP_DE_CAMPOS', null, [c1, c2], ['documentid;desc']);
	
	if(dts.values.length > 0){

		let c3 = DatasetFactory.createConstraint("tablename", 'tblHelpDeCampos', 'tblHelpDeCampos', ConstraintType.MUST);
		let c4 = DatasetFactory.createConstraint("metadata#id",  dts.values[0]["metadata#id"],  dts.values[0]["metadata#id"], ConstraintType.MUST);
		let c5 = DatasetFactory.createConstraint("metadata#version", dts.values[0]["metadata#version"], dts.values[0]["metadata#version"], ConstraintType.MUST);
		let dt = DatasetFactory.getDataset('DTS_FRM_CRUD_HELP_DE_CAMPOS', null, [c1, c3, c4, c5], null);

		
		if(dt.values.length > 0){
			for(let i = 0; i<dt.values.length; i++){
				let fN = dt.values[i].cpFieldName;
				$("label[for='"+fN+"']").attr("data-content", dt.values[i].cpFieldDesc)
				FLUIGC.popover("#"+fN+"_L",{ trigger: 'hover', placement: 'auto'});
			}
		}
	}
}

function preenche_Dados_Produto(cod){

	var constraints = [];
	
	//Limpa todos os campos antes de preencher
	limpaCampos();
	
	//Traz dados do Protheus via webservice REST
	constraints.push(DatasetFactory.createConstraint("B1_COD", String(cod) , String(cod), ConstraintType.MUST));
	var dataset = DatasetFactory.getDataset('dts_sb1_sync_incr_qa_nj', null,constraints, null);
	
	if(dataset.values.length != 0){
		for (var i=0; i < dataset.values.length; i++){
			for(var j = 0 ; j<arraysCamposVisivel.length; j++){
				
				let dtFieldIntegravel = dataset.values[i][arraysCamposVisivel[j]];
				let isZoom = arraysCamposZoomConslt.filter(val => val === arraysCamposVisivel[j])
				if(isZoom.length > 0){
					$("#"+arraysCamposVisivel[j]).val(dtFieldIntegravel)
					setZoomData(isZoom, dtFieldIntegravel)
				}else{
					if(dtFieldIntegravel !== undefined) $("#"+arraysCamposVisivel[j]).val(dtFieldIntegravel)
				}
			}
		}
	}
		// Traz dados do Protheus via webservice REST na tabela SB5
		
	
		constraints.push(DatasetFactory.createConstraint("B5_COD", String(cod) , String(cod), ConstraintType.MUST));
		var b5_dataset = DatasetFactory.getDataset('dts_sb5_sync_incr_qa_nj', null,constraints, null);
		
	if(b5_dataset.values.length != 0){
		for (var i=0; i < b5_dataset.values.length; i++){
			for(var j = 0 ; j<arraysCamposVisivelB5.length; j++){
				
				let dtFieldIntegravelB5 = b5_dataset.values[i][arraysCamposVisivelB5[j]];
				let isZoom = arraysCamposZoomConslt.filter(val => val === arraysCamposVisivelB5[j])
				if(isZoom.length > 0){
					$("#"+arraysCamposVisivelB5[j]).val(dtFieldIntegravelB5)
					setZoomData(isZoom, dtFieldIntegravelB5)
				}else{
					if(dtFieldIntegravelB5 !== undefined) $("#"+arraysCamposVisivelB5[j]).val(dtFieldIntegravelB5)
				}
				}
			}
		}
	// Traz dados do Protheus via webservice REST na tabela SBZ
	
	
	constraints.push(DatasetFactory.createConstraint("BZ_COD", String(cod) , String(cod), ConstraintType.MUST));
	var bz_dataset = DatasetFactory.getDataset('dts_sbz_sync_incr_qa_nj', null,constraints, null);
	
	if(bz_dataset.values.length != 0){
		for (var i=0; i < bz_dataset.values.length; i++){
			for(var j = 0 ; j<arraysCamposVisivelBZ.length; j++){
				
				let dtFieldIntegravelBZ = bz_dataset.values[i][arraysCamposVisivelBZ[j]];
				let isZoomBZ = arraysCamposZoomConslt.filter(val => val === arraysCamposVisivelBZ[j])
				if(isZoomBZ.length > 0){
					$("#"+arraysCamposVisivelBZ[j]).val(dtFieldIntegravelBZ)
					setZoomData(isZoomBZ, dtFieldIntegravelBZ)
				}else{
					if(dtFieldIntegravelBZ !== undefined) $("#"+arraysCamposVisivelBZ[j]).val(dtFieldIntegravelBZ)
			
				}
			}
		}
	}

		var param = $("#B1_MSBLQL").val()
		var val = $("#OPT_CADASTRO").val()
		
		//1=SIM-BLOQUEADO -- 2=NAO-ATIVO
		if(val.toUpperCase() === 'ALTERAR'){
			if(param != "2" ){
				$("#BTN_BLOQUEIA")
				.removeClass("btn-danger")
				.addClass("btn-success")
				.text("Ativar Produto")
				.show();
	
				//$("#B1_ATIVO").val('N');
				//$('#B1_MSBLQL').val("1").change();
			}else{
				$("#BTN_BLOQUEIA")
				.removeClass("btn-success")
				.addClass("btn-danger")
				.text("Inativar Produto")
				.show();
	
				//$("#B1_ATIVO").val('S');
				//$('#B1_MSBLQL').val("2").change();
			}
		}
}
	


/*******************************************************************************
 * DADOS DOS CAMPOS ZOOM P/ CAMPO CODIGO
 ******************************************************************************/
 var valida_serie = []
 function setSelectedZoomItem(selectedItem){
	//  var define_zoom = selectedItem.inputId.split("___")
	//  define_zoom = define_zoom[1]
	var campo = selectedItem.inputId
	 
	 if(selectedItem.inputId == "A1_NOME_BUSCA"){
		 preenche_Dados_Produto(selectedItem['B1_COD']);
	 }

	 if(campo == "B1CODISS" || campo == "B1ORIGEM" || campo == "B1CLASSE" || campo == "B1TIPOBN" || campo == "B1TPPROD"){

		$('#B1_'+campo.split('B1')[1]).val(selectedItem.CODIGO)

	}if(campo == "B1TIPO" || campo == "B1GRPTI" || campo == "B1GRTRIB" ){

		$('#B1_'+campo.split('B1')[1]).val(selectedItem.CODIGO)
	 }

	 if(campo == "B1UM"){

		$('#B1_'+campo.split('B1')[1]).val(selectedItem.CODIGO)
	 }

	 if(campo == "B1SEGUM"){

		$('#B1_'+campo.split('B1')[1]).val(selectedItem.CODIGO)

	 }
	 if(campo == "B1LOCPAD"){

		$('#B1_'+campo.split('B1')[1]).val(selectedItem.CODIGO)

	 }
	 if(campo == "B1GRUPO"){
			$('#B1_'+campo.split('B1')[1]).val(selectedItem.GRUPO)
	 }
	 if(campo == "B1TE" || campo == "B1TS"){

		$('#B1_'+campo.split('B1')[1]).val(selectedItem.CODIGO)

	 }
	 
	 if(campo == "B1ALTER" || campo == "B1CODANT" ||campo == "B1PRDORI"){

		$('#B1_'+campo.split('B1')[1]).val(selectedItem.CODIGO)

	 }
	 if(campo == "B1CONTA"){

		$('#B1_'+campo.split('B1')[1]).val(selectedItem.CONTA)

	 }
	 if(campo == "B1CC" || campo == "B1CCCUSTO"){

		$('#B1_'+campo.split('B1')[1]).val(selectedItem.CODIGO)

	 }
	 if(campo == "B1ITEMCC"){

		$('#B1_'+campo.split('B1')[1]).val(selectedItem.CODIGO)

	 }
	 if(campo == "B1PROC"){

		$('#B1_'+campo.split('B1')[1]).val(selectedItem.CODIGO)
		$('#B1_LOJPROC').val(selectedItem.LOJA)

	 }
	 if(campo == "B1FORMLOT"	|| campo == "B1ESTFOR"|| campo == "B1FORPRZ"){

		$('#B1_'+campo.split('B1')[1]).val(selectedItem.CODIGO)

	 }
	 if(campo == "B1GRUPCOM"){

		$('#B1_'+campo.split('B1')[1]).val(selectedItem.CODIGO)

	 }
	 if(campo == "B1CLVL"){

		$('#B1_'+campo.split('B1')[1]).val(selectedItem.CODIGO)

	 }
	 if(campo == "B1POSIPI"){

		$('#B1_'+campo.split('B1')[1]).val(selectedItem.CODIGO)

	 }
	 if(campo == "B1TABIPI"){

		$('#B1_'+campo.split('B1')[1]).val(selectedItem.CODIGO)

	 }
	 if(campo == "B1TIPCAR"){

		$('#B1_'+campo.split('B1')[1]).val(selectedItem.DB0_CODMOD)

	 }
	 if(campo == "B1TNATREC"){
		
		$('#B1_'+campo.split('B1')[1]).val(selectedItem.CCZ_TABELA)
		$('#B1_CNATREC').val(selectedItem.CCZ_DESC)
	 }
	 if(campo == "B1GCCUSTO"){

		$('#B1_'+campo.split('B1')[1]).val(selectedItem.GRUPO)

	 }
	
	 if(campo == "B1PARCEI"){

		$('#B1_'+campo.split('B1')[1]).val(selectedItem.PARTNE)

	 }
	 if(campo == "B1CODQAD"){

		$('#B1_'+campo.split('B1')[1]).val(selectedItem.CUSTO)

	 }
	 if(campo == "B1GRPCST"){

		$('#B1_'+campo.split('B1')[1]).val(selectedItem.CODIGO)

	 }
	 if(campo == "B1ORIGEM"){

		$('#B1_'+campo.split('B1')[1]).val(selectedItem.CODIGO)

	 }
	 
	 if(campo == "B5NATBEN"){

		$('#B5_'+campo.split('B5')[1]).val(selectedItem.CODIGO)

	 }
	 if(campo == "B5NATALBE"){

		$('#B5_'+campo.split('B5')[1]).val(selectedItem.CODIGO)

	 }
	 if(campo == "B5CODFAM"){

		$('#B5_'+campo.split('B5')[1]).val(selectedItem.CODIGO)

	 }
	 if(campo == "B5SERECD"){

		$('#B5_'+campo.split('B5')[1]).val(selectedItem.CODIGO)

	 }
	 if(campo == "B5CODLIN"){

		$('#B5_'+campo.split('B5')[1]).val(selectedItem.CODIGO)

	 }
	 if(campo == "B5SERVSAI"){

		$('#B5_'+campo.split('B5')[1]).val(selectedItem.CODIGO)

	 }
	 if(campo == "B5SERVINT"){

		$('#B5_'+campo.split('B5')[1]).val(selectedItem.CODIGO)

	 }
	 if(campo == "B5SERVTDV"){

		$('#B5_'+campo.split('B5')[1]).val(selectedItem.CODIGO)

	 }
	 if(campo == "B5SERSCD"){

		$('#B5_'+campo.split('B5')[1]).val(selectedItem.CODIGO)

	 }

	 if(campo == "B5SERVDEV"){

		$('#B5_'+campo.split('B5')[1]).val(selectedItem.CODIGO)

	 }
	 if(campo == "B5SERVENT"){

		$('#B5_'+campo.split('B5')[1]).val(selectedItem.CODIGO)

	 }
	 if(campo == "B5SERVREQ"){

		$('#B5_'+campo.split('B5')[1]).val(selectedItem.CODIGO)

	 }
	 if(campo == "B5SERVEMB"){

		$('#B5_'+campo.split('B5')[1]).val(selectedItem.CODIGO)

	 }
	 if(campo == "B5TPESOC"){

		$('#B5_'+campo.split('B5')[1]).val(selectedItem.CODIGO)

	 }
	 if(campo == "B5NBS"){

		$('#B5_'+campo.split('B5')[1]).val(selectedItem.CODIGO)

	 }
	 if(campo == "B5CODATIV"){

		$('#B5_'+campo.split('B5')[1]).val(selectedItem.CODIGO)

	 }
	 if(campo == "B5CDFATD"){

		$('#B5_'+campo.split('B5')[1]).val(selectedItem.CODIGO)

	 }
	 if(campo == "B5UMDIPI"){

		$('#B5_'+campo.split('B5')[1]).val(selectedItem.CODIGO)

	 }

	 if(campo == "B5AGLUMRP"){

		$('#B5_'+campo.split('B5')[1]).val(selectedItem.CODIGO)

	 }
	 if(campo == "B5PENE"){

		$('#B5_'+campo.split('B5')[1]).val(selectedItem.CODIGO)

	 }
	 if(campo == "B5UMPRC"){

		$('#B5_'+campo.split('B5')[1]).val(selectedItem.CODIGO)

	 }
	 if(campo == "B5CULTRA"){

		$('#B5_'+campo.split('B5')[1]).val(selectedItem.CODIGO)

	 }
	 if(campo == "B5CTVAR"){

		$('#B5_'+campo.split('B5')[1]).val(selectedItem.CODIGO)

	 }
	 if(campo == "B5CATEG"){

		$('#B5_'+campo.split('B5')[1]).val(selectedItem.CODIGO)

	 }
	 if(campo == "B5ENDSAI"){

		$('#B5_'+campo.split('B5')[1]).val(selectedItem.CODIGO)

	 }
	 if(campo == "B5ENDENT"){

		$('#B5_'+campo.split('B5')[1]).val(selectedItem.CODIGO)


	 }
	 if(campo == "B5ENDREQ"){

		$('#B5_'+campo.split('B5')[1]).val(selectedItem.CODIGO)

	 }
	 if(campo == "B5ENDDEV"){

		$('#B5_'+campo.split('B5')[1]).val(selectedItem.CODIGO)

	 }
	 if(campo == "B5ENDECD"){

		$('#B5_'+campo.split('B5')[1]).val(selectedItem.CODIGO)

	 }
	 if(campo == "B5ENDSCD"){

		$('#B5_'+campo.split('B5')[1]).val(selectedItem.CODIGO)

	 }
	 if(campo == "B5NBS"){

		$('#B5_'+campo.split('B5')[1]).val(selectedItem.CODIGO)

	 }
	 if(campo == "B5CODZON"){

		$('#B5_'+campo.split('B5')[1]).val(selectedItem.CODIGO)

	 }
	 if(campo == "BZLOCPAD"){

		$('#BZ_'+campo.split('BZ')[1]).val(selectedItem.CODIGO)

	 }

	 if(selectedItem.inputId == "B5COD"){
		preenche_Dados_Produto(selectedItem['B1_COD']);
	}
	
}
//FUNCAO LIMPA CAMPOS DO ZOOM 
function removedZoomItem(removedItem){
	if(removedItem.inputId == "B1UM")      $("#B1_UM").val("");
	if(removedItem.inputId == "B1TIPO")      $("#B1_TIPO").val("");
	if(removedItem.inputId == "B1SEGUM")      $("#B1_SEGUM").val("");
	if(removedItem.inputId == "B1LOCPAD")      $("#B1_LOCPAD").val("");
	if(removedItem.inputId == "B1GRUPO")      $("#B1_GRUPO").val("");
	if(removedItem.inputId == "B1SEGUM")      $("#B1_SEGUM").val("");
	if(removedItem.inputId == "B1FORMLOT")      $("#B1_FORMLOT").val("");
	if(removedItem.inputId == "B1TE")      $("#B1_TE").val("");
	if(removedItem.inputId == "B1TS")      $("#B1_TS").val("");
	if(removedItem.inputId == "B1ALTER")      $("#B1_ALTER").val("");
	if(removedItem.inputId == "B1CC")      $("#B1_CC").val("");
	if(removedItem.inputId == "B1ITEMCC")      $("#B1_ITEMCC").val("");
	if(removedItem.inputId == "B1PROC")      $("#B1_PROC").val("");
	if(removedItem.inputId == "B1GRUPCOM")      $("#B1_GRUPCOM").val("");
	if(removedItem.inputId == "B1CLVL")      $("#B1_CLVL").val("");
	if(removedItem.inputId == "B1POSIPI")      $("#B1_POSIPI").val("");
	if(removedItem.inputId == "B1GRTRIB")      $("#B1_GRTRIB").val("");
	if(removedItem.inputId == "B1TABIPI")      $("#B1_TABIPI").val("");
	if(removedItem.inputId == "B1CLASSE")      $("#B1_CLASSE").val("");
	if(removedItem.inputId == "B1ESTFOR")      $("#B1_ESTFOR").val("");
	if(removedItem.inputId == "B1FORPRZ")      $("#B1_FORPRZ").val("");
	if(removedItem.inputId == "B1ESTFOR")      $("#B1_ESTFOR").val("");
	if(removedItem.inputId == "B1PARCEI")      $("#B1_PARCEI").val("");
	if(removedItem.inputId == "B1TNATREC")      $("#B1_TNATREC").val("");
	if(removedItem.inputId == "B1GCCUSTO")      $("#B1_GCCUSTO").val("");
	if(removedItem.inputId == "B1CODQAD")      $("#B1_CODQAD").val("");
	if(removedItem.inputId == "B1TIPOBN")      $("#B1_TIPOBN").val("");
	if(removedItem.inputId == "B1GRPCST")      $("#B1_GRPCST").val("");
	if(removedItem.inputId == "B1DIFCNAE")      $("#B1_DIFCNAE").val("");
	if(removedItem.inputId == "B1DESC")      $("#B1_DESC").val("");
	if(removedItem.inputId == "B1GRPTI")      $("#B1_GRPTI").val("");
	if(removedItem.inputId == "B1COD")      $("#B1_COD").val("");
	if(removedItem.inputId == "B1ORIGEM")      $("#B1_ORIGEM").val("");
	//ZOOM B5
	if(removedItem.inputId == "B5AGLUMRP")      $("#B5_AGLUMRP").val("");
	if(removedItem.inputId == "B5CATEG")      $("#B5_CATEG").val("");
	if(removedItem.inputId == "B5CODATIV")      $("#B5_CODATIV").val("");
	if(removedItem.inputId == "B5CODITE")      $("#B5_CODITE").val("");
	if(removedItem.inputId == "B5CTVAR")      $("#B5_CTVAR").val("");
	if(removedItem.inputId == "B5CULTRA")      $("#B5_CULTRA").val("");
	if(removedItem.inputId == "B5ENDDEV")      $("#B5_ENDDEV").val("");
	if(removedItem.inputId == "B5ENDECD")      $("#B5_ENDECD").val("");
	if(removedItem.inputId == "B5ENDENT")      $("#B5_ENDENT").val("");
	if(removedItem.inputId == "B5ENDREQ")      $("#B5_ENDREQ").val("");
	if(removedItem.inputId == "B5ENDSCD")      $("#B5_ENDSCD").val("");
	if(removedItem.inputId == "B5ENDSAI")      $("#B5_ENDSAI").val("");
	if(removedItem.inputId == "B5CODFAM")      $("#B5_CODFAM").val("");
	if(removedItem.inputId == "B5CDFATD")      $("#B5_CDFATD").val("");
	if(removedItem.inputId == "B5FPRZCQ")      $("#B5_FPRZCQ").val("");
	if(removedItem.inputId == "B5FORSER")      $("#B5_FORSER").val("");
	if(removedItem.inputId == "B5CODGRP")      $("#B5_CODGRP").val("");
	if(removedItem.inputId == "B5CODLIN")      $("#B5_CODLIN").val("");
	if(removedItem.inputId == "B5MARPEC")      $("#B5_MARPEC").val("");
	if(removedItem.inputId == "B5NATBEN")      $("#B5_NATBEN").val("");
	if(removedItem.inputId == "B5NATALBE")      $("#B5_NATALBE").val("");
	if(removedItem.inputId == "B5NBS")      $("#B5_NBS").val("");
	if(removedItem.inputId == "B5ONU")      $("#B5_ONU").val("");
	if(removedItem.inputId == "B5PENE")      $("#B5_PENE").val("");
	if(removedItem.inputId == "B5MARPEC")      $("#B5_MARPEC").val("");
	if(removedItem.inputId == "B5SERECD")      $("#B5_SERECD").val("");
	if(removedItem.inputId == "B5SERSCD")      $("#B5_SERSCD").val("");
	if(removedItem.inputId == "B5SERVDEV")      $("#B5_SERVDEV").val("");
	if(removedItem.inputId == "B5SERVENT")      $("#B5_SERVENT").val("");
	if(removedItem.inputId == "B5SERVREQ")      $("#B5_SERVREQ").val("");
	if(removedItem.inputId == "B5SERVSAI")      $("#B5_SERVSAI").val("");
	if(removedItem.inputId == "B5SERVINT")      $("#B5_SERVINT").val("");
	if(removedItem.inputId == "B5SERVTDV")      $("#B5_SERVTDV").val("");
	if(removedItem.inputId == "B5SERVEMB")      $("#B5_SERVEMB").val("");
	if(removedItem.inputId == "B5TPESOC")      $("#B5_TPESOC").val("");
	if(removedItem.inputId == "B5UMDIPI")      $("#B5_UMDIPI").val("");
	if(removedItem.inputId == "B5UMPRC")      $("#B5_UMPRC").val("");
	if(removedItem.inputId == "B5CODZON")      $("#B5_CODZON").val("");
	//ZOOM BZ
	if(removedItem.inputId == "BZFILIAL")      $("#BZ_FILIAL").val("");
	if(removedItem.inputId == "BZCOD")      $("#BZ_COD").val("");
	if(removedItem.inputId == "BZLOCPAD")      $("#BZ_LOCPAD").val("");
	if(removedItem.inputId == "BZTE")      $("#BZ_TE").val("");
	if(removedItem.inputId == "BZTS")      $("#BZ_TS").val("");
	if(removedItem.inputId == "BZESTFOR")      $("#BZ_ESTFOR").val("");
	if(removedItem.inputId == "BZFORPRZ")      $("#BZ_FORPRZ").val("");
	if(removedItem.inputId == "BZORIGEM")      $("#BZ_ORIGEM").val("");

}


 function setZoomData(instance, value){
	 
	 	if(typeof(instance) !== "string"){
			instance = instance[0].replace('_','')
			value = value != undefined ? value.trim() : value
		 }
		
	 if(validValue(value)){
		 window[instance].setValue(value.trim());
	 }else{
		 window[instance].clear();
	 }
}

function formatMoneyValues(){



	let MCOMPRA = $("#B1_PRV1").val();
	// let MSALDO  = $("#A1_MSALDO").val();
	// let SALDUP  = $("#A1_SALDUP").val();
	// let ATR     = $("#A1_ATR").val();
	// let VACUM   = $("#A1_VACUM").val();
	// let MATR    = $("#A1_MATR").val();
	// let MAIDUPL = $("#A1_MAIDUPL").val();
	// let PAGATR  = $("#A1_PAGATR").val();
	// let SALDUPM = $("#A1_SALDUPM").val();
	// let SALPEDL = $("#A1_SALPEDL").val();
	// let SALPED  = $("#A1_SALPED").val();
	// let METR  = $("#A1_METR").val();
	// let LC  = $("#A1_LC").val();
	// let LCFIN  = $("#A1_LCFIN").val();
	// let CAPITAL = $("#FLUIG_CAPITAL").val()

	// $("#B1_PRV1").val(maskValor(parseFloat(MCOMPRA).toFixed(2)));
	// $("#A1_MSALDO").val(maskValor(parseFloat(MSALDO).toFixed(2)));
	// $("#A1_SALDUP").val(maskValor(parseFloat(SALDUP).toFixed(2)));
	// $("#A1_ATR").val( maskValor( parseFloat(ATR).toFixed(2) ));
	// $("#A1_VACUM").val(maskValor(parseFloat(VACUM).toFixed(2)));
	// $("#A1_MATR").val(maskValor(parseFloat(MATR).toFixed(2)));
	// $("#A1_MAIDUPL").val(maskValor(parseFloat(MAIDUPL).toFixed(2)));
	// $("#A1_PAGATR").val(maskValor(parseFloat(PAGATR).toFixed(2)));
	// $("#A1_SALDUPM").val(maskValor(parseFloat(SALDUPM).toFixed(2)));
	// $("#A1_SALPEDL").val(maskValor(parseFloat(SALPEDL).toFixed(2)));
	// $("#A1_SALPED").val(maskValor(parseFloat(SALPED).toFixed(2)));
	// $("#A1_METR").val(maskValor(parseFloat(METR).toFixed(2)));
	// $("#A1_LC").val(maskValor(parseFloat(LC).toFixed(2)));
	// $("#A1_LCFIN").val(maskValor(parseFloat(LCFIN).toFixed(2)));
	// $("#FLUIG_CAPITAL").val(maskValor(parseFloat(CAPITAL).toFixed(2)))
}
//1=SIM-BLOQUEADO -- 2=NAO-ATIVO
function changeBloqueia(){
	var param = $("#B1_MSBLQL").val()

	if(param !== "2" ){
		$("#BTN_BLOQUEIA")
		.removeClass("btn-success")
		.addClass("btn-danger")
		.text("Inativar Produto")
		.show();

		// $("#B1_ATIVO").val('S');
		$('#B1_MSBLQL').val("2").change();
	}else{
		$("#BTN_BLOQUEIA")
		.removeClass("btn-danger")
		.addClass("btn-success")
		.text("Ativar Produto")
		.show();

		//$("#B1_ATIVO").val('N');
		$('#B1_MSBLQL').val("1").change();

	}
}

function validValue(value){
	if(value == "" || value == " " || value == null || value == undefined || value == "	" || value == "               " ){
		return false
	}
	    return true	
}

function preencheEmpresa() {
    if(dfAtividade == 0 || dfAtividade == 1){
        $(".fluig-style-guide").hide();

        var dts = DatasetFactory.getDataset('dts_SX5', null, null, null).values;
        var options = '<option value="">Selecione o Tipo de Produto</option>'; 
       
        for(i=0; i<dts.length; i++){
            option = '<option value="'+dts[i]['CODIGO']+'"> '+dts[i]['DESCRICAO']+'</option>';
                if(options.indexOf(option) < 0){
                    options += option;
                }
      
        }
        var myModal = FLUIGC.modal({
            title:'Tipo de produto',
            content: '<div class="form-group col-md-2">' +
            '<select name="tpModal" id="tpModal" class="form-control" style="width: 235px">' +
            options+
            '</select>'+
            '</div>', 
            id: 'fluig-modal',
                actions: [{
                    'label' : 'Continuar',
                    'bind' : "data-add-modal",
                }]
        }, function() {
            $("#fluig-modal").find("button[data-add-modal]").on("click", function() {
                let valorCampo = $("#tpModal").val();
                $("#B1_TIPO").val(valorCampo);
                
                var select = document.getElementById('tpModal');
				var value = select.options[select.selectedIndex].text;
				
				setZoomData("B1TIPO",value);
				
                //$("#B1TIPO").val(value)
                
                let valorCampoF = $("#filialModal").val();
                $("#filial").val(valorCampoF);
                $(".fluig-style-guide").show();
                //init(valorCampo, valorCampoF);
                $('button[data-dismiss="modal"]').click();
            })
        });
    } else{
        init($("#empresa").val(),$("#filial").val());
    }
}

/**************************************************
 *FUNCAO PARA ADICIONAR ITENS DA TABELA PAI E FILHO
**************************************************/
// function cadIndic(id) { 
	
// 	var indice = wdkAddChild(id);	
	
// 	let cod_auto_m = $('#cod_auto_m').prop("checked");

// }
// 	var itens = $('table[tablename="tb_indic_produto"] tbody tr td input');
//     itens.each(function (el) {
// 		var idCampo = $(this).attr('id').split('_');
		
// 		if((idCampo[0]+'_').trim() == 'BZ_FILIAL_I___'){
// 			var item = $(this)[0];
			
// 			if(bz_filial == $(item).val()){
// 				existeFilial = false;
// 			}
// 		}

// 		i++;
// 	})
	
/*************************************************
 *FUNCAO PARA REMOVER ITENS DA TABELA PAI E FILHO
**************************************************/
// function deleteTabela(tb){
// 	var id = $(tb).attr('id').split('_');	
// 	if(id[2] == 'indicadores'){
// 		if(id[5] == '1' || id[5] == '2' || id[5] == '3' || id[5] == '4'){
// 			FLUIGC.toast({
// 	            message: "Os tipos de indicadores 1, 2, 3 e 4 não podem ser deletados!",
// 	            type: "warning"
// 	        });
// 	        return;
// 		}
// 	}
	
// 	fnWdkRemoveChild(tb);
// }


function gatilhoCP(valor) {
	document.getElementById("B5_COD").value = valor
	document.getElementById("BZ_COD").value = valor
	//$("#BZ_COD").value(document.getElementById(valor));
}
function gatilhoFili(valor) {
	
	document.getElementById("BZ_FILIAL").value = valor
	document.getElementById("BZ_FILIAL").value = valor
}
function gatilhoArmaz(valor) {
	
	document.getElementById("BZ_LOCPAD").value = valor

}
function fFilial() {
	

	var constraints = new Array()
	let cst = DatasetFactory.createConstraint('metadata#active', true, true, ConstraintType.MUST);  //1
	let datasetRegras = DatasetFactory.getDataset('DTS_FRM_PARAM_CAMPOS_CADASTRO_PRODUTO', null, new Array(cst), ['documentid;desc']).values; //2

	//let regrasAtribuicao = datasetRegras[datasetRegras.length - 1]; //3
	let documentId = datasetRegras[0]["metadata#id"];               
	let documentVersion = datasetRegras[0]["metadata#version"];

	constraints.push(DatasetFactory.createConstraint('tablename', 'tbFiliais', 'tbFiliais', ConstraintType.MUST));      //4
	constraints.push(DatasetFactory.createConstraint('metadata#id', documentId, documentId, ConstraintType.MUST));
	constraints.push(DatasetFactory.createConstraint('metadata#version', documentVersion, documentVersion, ConstraintType.MUST));

	let datasetPaiFilho = DatasetFactory.getDataset('DTS_FRM_PARAM_CAMPOS_CADASTRO_PRODUTO', null, constraints, null).values;
	//console.log("test",datasetPaiFilho)

	var html = '<table class="table">';	
	html+= '<tr>';
	html+= '<td></td>';
	html+= '<td><b>Nome</b></td>';
	html+= '<td><b>Codigo</b></td>';
	html+= '</tr>';
	for(d=0; d<datasetPaiFilho.length; d++){
		var cod = datasetPaiFilho[d]['cpCodigo'];
		var nome = datasetPaiFilho[d]['cpNome'];
		html+= '<tr>';
		html+= '<td><input type="checkbox" class="filiais" id="filiais-'+cod+'" name="filiais" value="'+cod+'"></td>';
		html+= '<td>'+nome+'</td>';
		html+= '<td>'+cod+'</td>';
		html+= '</tr>';
	}
	html+= '</table>';
	
	var aFilias = ['Filial 0101', 'Filial 0102','Filial 0103']	

	var myModal = FLUIGC.modal({
		title:'Selecione as filiais',
		content: '<div class="form-group col-md-12">' +
		'<p> Selecione para quais Filiais deseja cadastrar as informações </p>' +
		html +
		'</div>', 
		id: 'fluig-modal',
			actions: [{
				'label' : 'Continuar',
				'bind' : "data-add-modal",
			}]
	}, function() {	
		$("#fluig-modal").find("button[data-add-modal]").on("click", function() {
			var filiais = []
			var check =  $('input.filiais[type="checkbox"]:checked').toArray();
			for(x=0; x < check.length; x++){
				var valueFilial = check[x].value;
				filiais.push(valueFilial)
			}
			$("#BZ_FILIAL").val(filiais)
			
			$('button[data-dismiss="modal"]').click();
		})
	});
	
}
function addTabela(id){
	var aFilial = $("#BZ_FILIAL").val()
	var filial = aFilial.split(",")
	var id2 = id
	//aFilial.split(",")
	for (let i = 0; i < filial.length; i++) {
		var indice = wdkAddChild('tb_tes')
		$('#BZ_FILIAL_TB___' + indice).val(filial[i])
	}
    return indice
}
function deleteTabela(tb_tes){
    fnWdkRemoveChild(tb_tes)
}
// function bloqEnviar(params) {
// 	var conteudo = document.getElementById("consultar").value;
	
// 	if (consultar = true) {
// 		document.getElementsByClassName("btn btn-primary").disabled = true;
// 	}else {
// 		document.getElementById(".btn btn-primary").enabled = true;		
// 	}
// }

