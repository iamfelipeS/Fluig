function enableFields(form){ 
	
	var INICIO_PADRAO = "0";
	var INICIO = "1";
	var CUSTO = "6"
	var PCP = "29";
	var EXPEDICAO = "30"; 
	var MARKETING = "32";
	var FISCAL = "33";
	var COMERCIAL = "34";
	var INTEGRACAO = "11";
	var SUPORTE = "24";
	var INTERMEDIARIO = "23";
	var FINAL = "28"
	
	var atividade = getValue('WKNumState');
	
  	if(atividade == INICIO  || atividade == INICIO_PADRAO){
		form.setVisibleById("cabecalho1",true)
		
		form.setVisibleById("copalpseBotaoes",true)
		
		form.setVisibleById("cabecalho2",true)
		
		form.setVisibleById("cabecalho3",true)
		
		form.setVisibleById("cabecalho4",true)
		
		form.setVisibleById("cabecalho5",true)
		
		form.setVisibleById("cabecalho6",true)
		
		form.setVisibleById("cabecalho7",true)
		
		form.setVisibleById("cabecalho8",true)
	}

	if(atividade == PCP ){
		form.setVisibleById("cabecalho1",true)
		
		form.setVisibleById("cabecalho2",true)
		
		form.setVisibleById("cabecalho3",true)
		
		form.setVisibleById("cabecalho4",true)
		
		form.setVisibleById("cabecalho5",true)
		
		form.setVisibleById("cabecalho6",true)
		
		form.setVisibleById("copalpseBotaoes",true)
	
	}
		
	if(atividade == EXPEDICAO ){
		form.setVisibleById("cabecalho1",true)
		
		form.setVisibleById("cabecalho2",true)
		
		form.setVisibleById("cabecalho3",true)
		
		form.setVisibleById("cabecalho4",true)
		
		form.setVisibleById("cabecalho5",true)
		
		form.setVisibleById("cabecalho6",true)
		
		form.setVisibleById("copalpseBotaoes",true)
	
	}
	
	if(atividade == CUSTO ){
		form.setVisibleById("cabecalho1",true)
		
		form.setVisibleById("cabecalho2",true)
		
		form.setVisibleById("cabecalho3",true)
		
		form.setVisibleById("cabecalho4",true)
		
		form.setVisibleById("cabecalho5",true)
		
		form.setVisibleById("cabecalho6",true)
		
		form.setVisibleById("copalpseBotaoes",true)
		
	}
	
	if(atividade == MARKETING ){
		form.setVisibleById("cabecalho1",true)
		
		form.setVisibleById("cabecalho2",true)
		
		form.setVisibleById("cabecalho3",true)
		
		form.setVisibleById("cabecalho4",true)
		
		form.setVisibleById("cabecalho5",true)
		
		form.setVisibleById("cabecalho6",true)
		
		form.setVisibleById("copalpseBotaoes",true)
		
	}
	if (atividade == FISCAL){
		form.setVisibleById("cabecalho1",true)
	
		form.setVisibleById("cabecalho2",true)
		
		form.setVisibleById("cabecalho3",true)
		
		form.setVisibleById("cabecalho4",true)
		
		form.setVisibleById("cabecalho5",true)
		
		form.setVisibleById("cabecalho6",true)
		
		form.setVisibleById("copalpseBotaoes",true)
		
	}
	if (atividade == COMERCIAL){
		
		form.setVisibleById("copalpseBotaoes",true)
	}


}