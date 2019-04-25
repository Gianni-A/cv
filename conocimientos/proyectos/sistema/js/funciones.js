$(document).ready(function() {
  var x = document.getElementsByClassName("link depth-0");
  if ($(window).width() <= 620){
      x[4].style.display = "none";
  }

  $(window).resize(function(e) {
  x[4].style.display = "none";
  });
});

let file_information = "";
let title_info = "";
let subtitle_info = "";

var get_language = localStorage.getItem("language_mode");

if(get_language == "spanish") {
  file_information = "../../../informacion.json";
  title_info = "Proyectos acerca de ";
  subtitle_info = "Conocimientos y experiencias en ";
} else {
  file_information = "../../../information_english.json";
  title_info = "Projects about ";
  subtitle_info = "Knowledge and experience in ";
}

//alert(file_information);

loadJSON(file_information, function (main_response) {
  var main_data = JSON.parse(main_response);
  
  let leyend_footer_json = main_data[3].leyend_footer;
  let menu_inicio = main_data[3].menu[0];
  let menu_conocimiento = main_data[3].menu[1];
  let menu_experiencia = main_data[3].menu[2];
  let menu_certificados = main_data[3].menu[3];

  
  const m_inicio = document.getElementById('inicio');
  const m_conocimiento = document.getElementById('conocimientos');
  const m_experiencia = document.getElementById('experiencia');
  const m_certificados = document.getElementById('certificados');
  const m_inicio_movil = document.getElementsByClassName("link depth-0")[0];
  const m_conocimientos_movil = document.getElementsByClassName("link depth-0")[1];
  const m_experiencia_movil = document.getElementsByClassName("link depth-0")[2];
  const m_certificados_movil = document.getElementsByClassName("link depth-0")[3];
  const leyend_footer = document.getElementById('leyend_footer');

  m_inicio.innerHTML = menu_inicio;
  m_conocimiento.innerHTML = menu_conocimiento;
  m_experiencia.innerHTML = menu_experiencia;
  m_certificados.innerHTML = menu_certificados;
  if(typeof m_inicio_movil !== 'undefined') {
      m_inicio_movil.innerHTML = menu_inicio;
      m_conocimientos_movil.innerHTML = menu_conocimiento;
      m_experiencia_movil.innerHTML = menu_experiencia;
      m_certificados_movil.innerHTML = menu_certificados;
  }
  leyend_footer.innerHTML = leyend_footer_json;

});