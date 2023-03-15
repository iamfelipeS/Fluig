function createDataset(fields, constraints, sortFields) {
    var dataset = DatasetBuilder.newDataset();
    dataset.addColumn("RetornoEnvioEmail"); //coluna com o retorno do try-catch

    var users = []; //pega os usuários que estarão nos papéis
    var userEmails = [];

    var laboratorio = DatasetFactory.createConstraint("workflowColleagueRolePK.roleId", "laboratorio", "laboratorio", ConstraintType.MUST);
    var suprimentos = DatasetFactory.createConstraint("workflowColleagueRolePK.roleId", "suprimentos", "suprimentos", ConstraintType.MUST);
    var insp_entrada = DatasetFactory.createConstraint("workflowColleagueRolePK.roleId", "insp_entrada", "insp_entrada", ConstraintType.MUST);
    var comercial = DatasetFactory.createConstraint("workflowColleagueRolePK.roleId", "Comercial", "Comercial", ConstraintType.MUST);
    var almoxarifado = DatasetFactory.createConstraint("workflowColleagueRolePK.roleId", "expedicao", "expedicao", ConstraintType.MUST);
    var expedicao = DatasetFactory.createConstraint("workflowColleagueRolePK.roleId", "almoxarifado", "almoxarifado", ConstraintType.MUST);
    var pcp = DatasetFactory.createConstraint("workflowColleagueRolePK.roleId", "pcp", "pcp", ConstraintType.MUST);
    var controladoria_fiscal = DatasetFactory.createConstraint("workflowColleagueRolePK.roleId", "controladoria_fiscal", "controladoria_fiscal", ConstraintType.MUST);
    var marketing = DatasetFactory.createConstraint("workflowColleagueRolePK.roleId", "marketing", "marketing", ConstraintType.MUST);
    var controladoria_comissao = DatasetFactory.createConstraint("workflowColleagueRolePK.roleId", "controladoria_comissao", "controladoria_comissao", ConstraintType.MUST);
    var controladoria_custos = DatasetFactory.createConstraint("workflowColleagueRolePK.roleId", "controladoria_custo", "controladoria_custo", ConstraintType.MUST);
    
    //busca as informações da área de laboratório
    var constlab = new Array(laboratorio);
    var resultlab = DatasetFactory.getDataset("workflowColleagueRole", null, constlab, null);
    for(var indexLab = 0; indexLab < resultlab.rowsCount; indexLab++) {
        var resLab = resultlab.getValue(indexLab, "workflowColleagueRolePK.colleagueId") + "";
        users.push(resLab);
    }

    //busca as informações da área de suprimentos
    var constSup = new Array(suprimentos);
    var resultSup = DatasetFactory.getDataset("workflowColleagueRole", null, constSup, null);
    for(var indexSup = 0; indexSup < resultSup.rowsCount; indexSup++) {
        var resSup = resultSup.getValue(indexSup, "workflowColleagueRolePK.colleagueId") + "";
        users.push(resSup);
    }

    //busca as informações da área Inspeção de Entrada
    var constInspEntrada = new Array(insp_entrada);
    var resultInsp = DatasetFactory.getDataset("workflowColleagueRole", null, constInspEntrada, null);
    for(var indexInsp = 0; indexInsp < resultInsp.rowsCount; indexInsp++) {
        var resInsp = resultInsp.getValue(indexInsp, "workflowColleagueRolePK.colleagueId") + "";
        users.push(resInsp);
    }

    //busca as informações da área comercial
    var constComerc = new Array(comercial);
    var resultCom = DatasetFactory.getDataset("workflowColleagueRole", null, constComerc, null);
    for(var indexCom = 0; indexCom < resultCom.rowsCount; indexCom++) {
        var resCom = resultCom.getValue(indexCom, "workflowColleagueRolePK.colleagueId") + "";
        users.push(resCom);
    }

    //busca as informações da área almoxarifado
    var constAlm = new Array(almoxarifado);
    var resultAlm = DatasetFactory.getDataset("workflowColleagueRole", null, constAlm, null);
    for(var indexAlm = 0; indexAlm < resultAlm.rowsCount; indexAlm++) {
        var resAlm = resultAlm.getValue(indexAlm, "workflowColleagueRolePK.colleagueId") + "";
        users.push(resAlm);
    }

    //busca as informações da área experdição
    var constExp = new Array(expedicao);
    var resultExp = DatasetFactory.getDataset("workflowColleagueRole", null, constExp, null);
    for(var indexExp = 0; indexExp < resultExp.rowsCount; indexExp++) {
        var resExp = resultExp.getValue(indexExp, "workflowColleagueRolePK.colleagueId") + "";
        users.push(resExp);
    }

    //busca as informações da área PCP
    var constPcp = new Array(pcp);
    var resultPcp = DatasetFactory.getDataset("workflowColleagueRole", null, constPcp, null);
    for(var indexPcp = 0; indexPcp < resultPcp.rowsCount; indexPcp++) {
        var resPcp = resultPcp.getValue(indexPcp, "workflowColleagueRolePK.colleagueId") + "";
        users.push(resPcp);
    }

    //busca as informações da área Controladoria Fiscal
    var constCFiscal = new Array(controladoria_fiscal);
    var resultCFiscal = DatasetFactory.getDataset("workflowColleagueRole", null, constCFiscal, null);
    for(var indexCFiscal = 0; indexCFiscal < resultCFiscal.rowsCount; indexCFiscal++) {
        var resCFiscal = resultCFiscal.getValue(indexCFiscal, "workflowColleagueRolePK.colleagueId") + "";
        users.push(resCFiscal);
    }

    //busca as informações da área Marketing
    var constMkt = new Array(marketing);
    var resultMkt = DatasetFactory.getDataset("workflowColleagueRole", null, constMkt, null);
    for(var indexMkt = 0; indexMkt < resultMkt.rowsCount; indexMkt++) {
        var resMkt = resultMkt.getValue(indexMkt, "workflowColleagueRolePK.colleagueId") + "";
        users.push(resMkt);
    }

    //busca as informações da área Controladoria Comissão
    var constCCom = new Array(controladoria_comissao);
    var resultCCom = DatasetFactory.getDataset("workflowColleagueRole", null, constCCom, null);
    for(var indexCCom = 0; indexCCom < resultCCom.rowsCount; indexCCom++) {
        var resCCom = resultCCom.getValue(indexCCom, "workflowColleagueRolePK.colleagueId") + "";
        users.push(resCCom);
    }

    //busca as informações da área Controladoria Custos
    var constCCustos = new Array(controladoria_custos);
    var resultCCustos = DatasetFactory.getDataset("workflowColleagueRole", null, constCCustos, null);
    for(var indexCCustos = 0; indexCCustos < resultCCustos.rowsCount; indexCCustos++) {
        var resCCustos = resultCCustos.getValue(indexCCustos, "workflowColleagueRolePK.colleagueId") + "";
        users.push(resCCustos);
    }

    //verifica os usuários repetidos do array
    function getUnique(arrArg){
        return arrArg.filter(function(elem, pos,arr) {
            log.info("Valores: " + elem + ", " + pos + ", " + arr.indexOf(elem));
            return arr.indexOf(elem) == pos;
        });
    }
    
    var uniqueUsers = getUnique(users);
    
    log.info("Length do array uniqueUsers: " + uniqueUsers.length);
    log.info("Mostrando o que tem no array uniqueUsers");
    for(var j = 0; j < uniqueUsers.length; j++){
        log.info("Usuário: " + uniqueUsers[j] + " Indice: " + j);
    }

    //vai buscar os e-mail dos usuários
    uniqueUsers.forEach(function(userColleagueId){
        var email = DatasetFactory.createConstraint("colleaguePK.colleagueId", userColleagueId, userColleagueId, ConstraintType.MUST);
        var consts   = new Array(email);

        var res = DatasetFactory.getDataset("colleague", null, consts, null);
        for(var e = 0; e < res.rowsCount; e++) {
            var emailUser = res.getValue(e, "mail") + "";
            userEmails.push(emailUser);
        }
    });

    var mensagem = "Olá, A solicitação foi concluída";

    try{
        var obj = new com.fluig.foundation.mail.service.EMailServiceBean(); //Serviço do Fluig

        //usuários que receberão os e-mails
        var destinatarios = ["lucas.silveira.bernardo@gmail.com", "lucas.bernardo@deliverit.com.br"];
        var assunto = "Solicitação Concluída"; //assunto
        var emailFluig = "fluig@killing.com.br"; //quem enviou o e-mail
        var corpoEmail = mensagem; //corpo do e-mail

       

        //verifica o array de users e chama o serviço de e-mail
        for(i = 0; i<destinatarios.length; i++){

           log.info("========== Enviando Email para Destinatarios Adcionais " + destinatarios[i]);      
            obj.simpleEmail(1,assunto,emailFluig,destinatarios[i],corpoEmail,"text/html");  

            //Executou o envio do e-mail
            dataset.addRow(new Array("OK"));
        }
    }catch(e){
        log.info("============== Erro e-mail envio de e-mail Destinatários: " + e);
        //Executou com erro o envio
        dataset.addRow(new Array("Erro"));
    }

    return dataset;
}