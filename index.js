

    function loadDoc() {
        const xhttp = new XMLHttpRequest()
        xhttp.onload = function(){
            document.getElementById('demo').innerHTML = this.responseText
        }
        /* xhttp.abort() */
        /* xhttp.open('GET','https://viacep.com.br/ws/01001000/xml/') */
        xhttp.open('GET','http://dieme.wuaze.com/')
        xhttp.send()
    }