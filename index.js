





function ppt(user){
    pc = Math.random() * 3;
    
    if(user == "piedra" || user == 1){
        if(pc < 1){
            result = 'es un empate';
        }else if(pc > 2){
            result = 'Has perdido';
        }else{
            result = 'Has Ganado';
        }
    }else if(user == 'papel'|| user == 2){
        if(pc < 1){
            result = 'Has Ganado';
        }else if(pc > 2){
            result = 'es un empate';
        }else{
            result = 'Has perdido';
        }
    }else if(user == 'tijera' || user == 3){
        if(pc < 1){
            result = 'Has perdido';
        }else if(pc > 2){
            result = 'Has Ganado';
        }else{
            result = 'es un empate';
        }
    }else{
        result = 'valor no reconocido';
    }

    return result;
}

