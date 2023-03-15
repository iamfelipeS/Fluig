function afterProcessFinish(processId) {
    hAPI.setCardValue('finalizado', "1");
    hAPI.setCardValue('status', "Ativo");
}