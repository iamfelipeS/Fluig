function beforeSendData(customFields, customFacts) {
    customFields[0] = hAPI.getCardValue("tipo");
    customFields[1] = hAPI.getCardValue("representante");
    customFields[2] = hAPI.getCardValue("descricao");
    customFields[3] = hAPI.getCardValue("cnpj");
    customFields[4] = hAPI.getCardValue("classificacaoRisco");
    customFields[5] = hAPI.getCardValue("kitDisponibilizado");
    customFields[6] = hAPI.getCardValue("metaGaloes");
    customFields[7] = hAPI.getCardValue("metaLitros");
    customFields[8] = hAPI.getCardValue("metaMensal");

    customFacts[0] = java.lang.Double.parseDouble(hAPI.getCardValue("valorInvestido").replace(".", "").replace(",", "."));
}
