const controlRutas = async (event) => {

    let error =  null; 
    let maxPeople = 0;
    let bussize= [];
    const key = Object.keys(event); 
        if (key != 'groups') {
          error = 'Group param is invalid'
        }
  
    if(!error){
        
        const grupos = event.groups.split(",");
        let cantGrupos = grupos.length; 
        
        //se suman la cantidad de iteraciones a realizar (tamaño maximo de x)
        grupos.forEach (function(element){
          if(element <= 0 || element == '' || isNaN(element)){            
            error = `Invalid format data of  ${element}`;
          }
            maxPeople += parseInt(element);
        });
        
        if(!error){
            for (let x = 1; x <= maxPeople; x++) {
            
                let nexGroup = true;
                let minumumDisponibility = 1;
                let limitIndicator = true; 
                let count = 0;
                let cumple = true; 
                let dispoibilityBus = 0;
                
                while (nexGroup && minumumDisponibility <= cantGrupos) {
                    
                    if(limitIndicator){
                        dispoibilityBus = x - grupos[count];
                    }else{
                        dispoibilityBus = dispoibilityBus - grupos[count];
                    }
                    limitIndicator = dispoibilityBus > 0 ? false : true; 

                    if(dispoibilityBus < 0 || (dispoibilityBus > 0 && minumumDisponibility == cantGrupos)){
                        nexGroup = false;
                        cumple = false;
                    }
                    count++;
                    minumumDisponibility++;
                }
                if(cumple){
                    bussize.push(x); 
                }
            }
            bussize = bussize.join(','); 
        }
    }
    
    if(error){
        return {error};
    }else{
       return {sizes: bussize}; 
    }
    
};
    
exports.handler = controlRutas;