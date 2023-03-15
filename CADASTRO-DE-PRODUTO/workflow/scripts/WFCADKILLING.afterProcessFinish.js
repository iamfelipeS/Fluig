function afterProcessFinish(processId) {
    // hAPI.setCardValue("statusProcesso", "1");
   var remetente = getValue("WKUser");
   var template = hAPI.getCardValue("statusProcesso");
   var numSolic = hAPI.getCardValue("numSolic");

   try {
    //Monta mapa com parâmetros do template
    var parametros = new java.util.HashMap();

    //Este parâmetro é obrigatório e representa o assunto do e-mail
    parametros.put("subject", "Inclusão de cliente | Solicitação Nº " + numSolic +"");
    parametros.put("CONTENT", template);

    //Monta lista de destinatários
    var destinatarios = new java.util.ArrayList();
    destinatarios.add(hAPI.getCardValue("emailRepresentante"));
             
    //Envia e-mail
    notifier.notify(remetente, "template-killing", parametros, destinatarios, "text/html");

    } catch (e) {
        log.info(">>>>> CAIU NO TRY ");
        log.info(e);
    }
}