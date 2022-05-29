function contactMail() {
    var link = "mailto:jgjorge96@gmail.com"
             + "?cc=jgjorge96@gmail.com"
             + "&subject=" + encodeURIComponent("Consulta via web")
             + "&body=" + encodeURIComponent(document.getElementById('Mensaje').value)
             + "%0a" + "&body=" + encodeURIComponent(document.getElementById('Nombre').value)
             + "&body=" + encodeURIComponent(document.getElementById('Apellido').value)
    ;
    
    window.location.href = link;
  }