console.log("Estoy jugando un juego de dados, gano si saco el mismo número en dos de los tres dados.")
        const shot1 = parseFloat(prompt("¿Qué saque en mi primera tirada de dado?"))
        const shot2 = parseFloat(prompt("¿Qué saque en mi segunda tirada de dado?"))
        const shot3 =  parseFloat(prompt("¿Qué saque en mi tercera tirada de dado?"))
             if (shot1 = shot2) 
            {console.log("Ganaste")}
                else
                if (shot2 = shot3)
                {console.log("Ganaste")}
                    else
                    if (shot1 = shot3)
                    {console.log("Ganaste")}
                        else
                        {console.log("Perdiste")}