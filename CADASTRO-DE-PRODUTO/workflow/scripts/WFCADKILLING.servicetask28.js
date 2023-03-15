function servicetask28(attempt, message) {
   
	var mensagemErro = "";
	var ds;
	
	// Chamada do dataset passando o JSON da aérea comercial
   var c1 = DatasetFactory.createConstraint("ACOM", hAPI.getCardValue("ACOM"), hAPI.getCardValue("ACOM"), ConstraintType.MUST);
   ds = DatasetFactory.getDataset("dsAtualizaCliente", null, [c1], null);
   mensagemErro += verificaErro(ds, "COMERCIAL");
   
   // Chamada do dataset passando o JSON da aérea fiscal
   var c2 = DatasetFactory.createConstraint("AFIS", hAPI.getCardValue("AFIS"), hAPI.getCardValue("AFIS"), ConstraintType.MUST);
   ds = DatasetFactory.getDataset("dsAtualizaCliente", null, [c2], null)
   mensagemErro += verificaErro(ds, "FISCAL");

   
   // Chamada do dataset passando o JSON da aérea logística
   var c3 = DatasetFactory.createConstraint("ALOG", hAPI.getCardValue("ALOG"), hAPI.getCardValue("ALOG"), ConstraintType.MUST);
   ds = DatasetFactory.getDataset("dsAtualizaCliente", null, [c3], null);
   mensagemErro += verificaErro(ds, "LOGISTICA");

   // Chamada do dataset passando o JSON da aérea financeira
   var c4 = DatasetFactory.createConstraint("AFIN", hAPI.getCardValue("AFIN"), hAPI.getCardValue("AFIN"), ConstraintType.MUST);
   ds = DatasetFactory.getDataset("dsAtualizaCliente", null, [c4], null);
   mensagemErro += verificaErro(ds, "FINANCEIRO");
   
   
   if(mensagemErro != ""){
	   hAPI.setCardValue("integradoComSucesso", "nao");
	   throw mensagemErro;
	   
   }else{
	   hAPI.setCardValue("integradoComSucesso", "sim"); 
   }	 

} 


function verificaErro(ds, area){
	

	try{
		
		
		if(ds == null || ds.rowsCount == 0){
			
			return "\n*" + area + "\n" + " Não foi possível se conectar ao Protheus " + "\n\n";

			
		}
		
		
		if(ds.getValue(0, "MENSAGEM").toUpperCase().indexOf("ERRO") >= 0){
			
			return "\n*" + area + "\n" + ds.getValue(0, "MENSAGEM").toUpperCase() + "\n\n";
			
		}else{
			return "";
		}
		
		
	}catch(e){
		
		return "\n*" + area + "\n " + e + " \n\n";
		
	}
	
	
	
}