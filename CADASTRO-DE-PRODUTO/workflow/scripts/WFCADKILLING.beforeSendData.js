function beforeSendData(customFields, customFacts) {
    customFields[0] = hAPI.getCardValue("tipoCliente");
    customFields[1] = hAPI.getCardValue("tipoClienteFiscal");
    customFields[2] = hAPI.getCardValue("cnpj");
    customFields[3] = hAPI.getCardValue("municipioCobranca");
    customFields[4] = hAPI.getCardValue("ufCobranca");
    customFields[5] = hAPI.getCardValue("mercado");
    customFields[6] = hAPI.getCardValue("linha");
    customFields[7] = hAPI.getCardValue("representanteComercial");
    customFields[8] = hAPI.getCardValue("unidNegocio");
    customFields[9] = hAPI.getCardValue("supervisor");
    customFields[10] = hAPI.getCardValue("canalAtuacao");
    customFields[11] = hAPI.getCardValue("nicho");
    customFields[12] = hAPI.getCardValue("grupoVendas");
    customFields[13] = hAPI.getCardValue("grupoClientes");
    customFields[14] = hAPI.getCardValue("grupoClientes");
    customFields[15] = hAPI.getCardValue("rating");
    customFields[16] = hAPI.getCardValue("grauRisco");

    customFacts[0] = java.lang.Double.parseDouble(hAPI.getCardValue("limiteCreditoSugerido").replace(".", "").replace(",", "."));
}
