function afterProcessCreate(processId){
	
	
	
	var formData = hAPI.getCardData(processId);

	 var cardDataAtualizar = formData; // mapa dos campos
	    var iterator = cardDataAtualizar.keySet().iterator();
	    
	    while (iterator.hasNext()) {
	       var campoCorrente = iterator.next();//nome do campo
	       var valorCampo = hAPI.getCardValue(campoCorrente).trim();

	       
	       hAPI.setCardValue(campoCorrente, valorCampo);
      
	       
	    }
	    

	
}