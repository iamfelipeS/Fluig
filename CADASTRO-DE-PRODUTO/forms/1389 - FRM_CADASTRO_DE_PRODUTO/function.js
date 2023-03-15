function calcular(obj){
    var util = new Util();
    var i = util.IndicePaiFilho(obj);

    var n1 = util.ItensPaiFilho("input","n1", i).val();
    var n2 = util.ItensPaiFilho("input","n2", i).val();

    util.ItensPaiFilho("input","total", i).val(n1 + n2);


}



//Classe Utilidade
class Util {


     // Obter os campos pai x filho do formulário.
     ItensFormulario(field_type,field_name){
        return $(`${field_type}[name='${field_name}']`) ;
      }

    //Envia o campo e ele retorna o indice do campo.
    IndicePaiFilho(obj){
     return  $(obj).attr('name').split("___")[1] ;
    
    }
    
    // Obter os campos pai x filho do formulário.
    ItensPaiFilho(field_type,field_name,field_index){
      return $(`${field_type}[name='${field_name}___${field_index}']`) ;
    }
    
    
    
    }