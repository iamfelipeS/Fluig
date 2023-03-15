function afterCancelProcess(colleagueId, processId) {
    hAPI.setCardValue('cancelado', "1");
    hAPI.setCardValue('canceladoAutor', colleagueId);
    hAPI.setCardValue('status', "Inativo");
}