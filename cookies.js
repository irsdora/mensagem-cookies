
var msgCookies = document.getElementById ('cookies-mensagem')

function aceito(){
    localStorage.lggppd = "SIM"
    msgCookies.classList.remove('VISUALIZAR')
}

if(localStorage.lggppd == 'SIM'){
   msgCookies.classList.remove('VISUALIZAR')
}else{
    msgCookies.classList.add('VISUALIZAR')
}