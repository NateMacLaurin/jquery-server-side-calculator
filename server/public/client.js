//DEBUG: log JS source success to client console
console.log('CLIENT: JS sourced from client.js');
//JQ on doc ready
$(handleReady);

function handleReady(){
    console.log('CLIENT: JQ sourced from vendors/jquery-3.5.1.min.js');
} //end handleReady