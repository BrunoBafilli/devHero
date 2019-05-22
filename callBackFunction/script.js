// function Falert(size, alertType){

//     console.log(alertType(size));

// }


// function callBack(size){

//     if(size >= 300){

//         return "maior igual que 300"; 

//     }

// }


// Falert(300, callBack);





function eventType(type, callBackEvent){

    if(callBackEvent(type)){

        console.log(`evento ${type} exec com sucesso!`);

    } else {

        console.log("erro ao executar evento");

    }

}

function callBackEvent(type){

    if(type == "click"){

        return true;

    } else if (type == "scroll"){

        return true;

    } else {
        return false;
    }

}

eventType("scroll", callBackEvent);