$(document).ready(function() {
  var x = document.getElementsByClassName("link depth-0");
  if ($(window).width() <= 775){
      x[4].style.display = "none";
  }

  $(window).resize(function(e) {
  x[4].style.display = "none";
  //console.log($(window).width());
  });

  //localStorage.setItem("language_mode", "spanish");
});

/*Typing style*/



/*Typing style*/

/*Poner la duración de tiempo de experiencia de trabajo*/
var entrada = new Date("12/1/2014");
var hoy = new Date();
var years = hoy.getFullYear() - entrada.getFullYear();
var months = hoy.getMonth() + 1;

// Setear el año actual
entrada.setFullYear(hoy.getFullYear());

// Si todavia no es la fecha, se resta un año.
if (hoy < entrada)
{
  years--;
}
if (hoy.getMonth() == entrada.getMonth())
{
  months = 0;
}
var cadena;
if (months == 1){
  cadena = "mes";
  cadena_english = "month";
}
else{
  cadena = "meses";
  cadena_english = "months";
}

var get_language = localStorage.getItem("language_mode");

var get_language = localStorage.getItem("language_mode");
let file_language = "";

if(get_language == "spanish") {
    file_language = "../introduccion.json";
} else {
    file_language = "../introduction_english.json";
}

//alert(file_language);

//Set language
function changeLanguage() {
  var get_language = localStorage.getItem("language_mode");
  if(get_language == "spanish") {
      localStorage.setItem("language_mode", "english");
  }
  else {
      localStorage.setItem("language_mode", "spanish");
  }
  location.reload();
}

loadJSON(file_language, function (response) {
    var datos = JSON.parse(response);
    let title_json = datos[0].title;
    let language_mode_json = datos[0].language_mode;
    let leyend_json = datos[0].leyend;
    let menu_inicio_json = datos[0].menu[0];
    let menu_conocimientos_json = datos[0].menu[1];
    let menu_experiencia_json = datos[0].menu[2];
    let menu_certificados_json = datos[0].menu[3];
    let title_perfil_json = datos[0].introduccion_perfil;
    let des_perfil_json = datos[0].descripcion_perfil;
    let title_curso_json = datos[0].title_curso;
    let des_curso_json = datos[0].descripcion_curso;
    let des_coursera_json = datos[0].cursos[0];
    let des_platzi_json = datos[0].cursos[1];
    let des_v2b_json = datos[0].cursos[2];

    let title_tiempo_json = datos[0].title_tiempo;
    let des_tiempo_json = datos[0].descripcion_tiempo;
    let btn_information_json = datos[0].btn_text;
    let des_emol_json = datos[0].hobby[0];
    let des_hpx_json = datos[0].hobby[1];
    let thanks_json = datos[0].leyend_footer;

    let sustituye = "";
    if(get_language == "spanish") {
      sustituye = des_perfil_json.replace("@time",years+" años y "+months+" "+cadena);
    } else {
      sustituye = des_perfil_json.replace("@time",years+" years and "+months+" "+cadena_english);
    }
    
    const title = document.getElementById("title");
    const language_mode = document.getElementById("language_mode");
    const leyend = document.getElementById("leyend");

    const m_inicio = document.getElementById("inicio");
    const m_conocimientos = document.getElementById("conocimiento");
    const m_experiencia = document.getElementById("experiencia");
    const m_certificados = document.getElementById("materias");

    const m_inicio_movil = document.getElementsByClassName("link depth-0")[0];
    const m_conocimientos_movil = document.getElementsByClassName("link depth-0")[1];
    const m_experiencia_movil = document.getElementsByClassName("link depth-0")[2];
    const m_certificados_movil = document.getElementsByClassName("link depth-0")[3];

    const title_profile = document.getElementById("title_profile");
    const description = document.getElementById("description");
    const title_courses = document.getElementById("title_courses");
    const des_courses = document.getElementById("des_courses");
    const des_coursera = document.getElementById("des_coursera");
    const des_platzi = document.getElementById("des_platzi");
    const des_video2brain = document.getElementById("des_video2brain");
    const title_free_time = document.getElementById("title_free_time");
    const free_time = document.getElementById("free_time");
    const des_emol = document.getElementById("des_emol");
    const des_hipertextual = document.getElementById("des_hipertextual");
    const further_information_emol = document.getElementById("further_information_emol");
    const further_information_hpx = document.getElementById("further_information_hpx");
    const visited_thanks = document.getElementById("visited_thanks");

    title.innerHTML = title_json;
    language_mode.innerHTML = language_mode_json;
    leyend.innerHTML = leyend_json;
    m_inicio.innerHTML = menu_inicio_json;
    m_conocimientos.innerHTML = menu_conocimientos_json;
    m_experiencia.innerHTML = menu_experiencia_json;
    m_certificados.innerHTML = menu_certificados_json;
    if(typeof m_inicio_movil !== 'undefined') {
      m_inicio_movil.innerHTML = menu_inicio_json;
      m_conocimientos_movil.innerHTML = menu_conocimientos_json;
      m_experiencia_movil.innerHTML = menu_experiencia_json;
      m_certificados_movil.innerHTML = menu_certificados_json;
    }

    title_profile.innerHTML = title_perfil_json;
    description.innerHTML = sustituye;
    title_courses.innerHTML = title_curso_json;
    des_courses.innerHTML = des_curso_json;
    des_coursera.innerHTML = des_coursera_json;
    des_platzi.innerHTML = des_platzi_json;
    des_video2brain.innerHTML = des_v2b_json;
    title_free_time.innerHTML = title_tiempo_json;
    free_time.innerHTML = des_tiempo_json;
    des_emol.innerHTML = des_emol_json;
    des_hipertextual.innerHTML = des_hpx_json;
    further_information_emol.innerHTML = btn_information_json;
    further_information_hpx.innerHTML = btn_information_json;
    visited_thanks.innerHTML = thanks_json;
});

function loadJSON(file, callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', file, true); // Replace 'my_data' with the path to your file
  xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {
          // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
          callback(xobj.responseText);
      }
  };
  xobj.send(null);
}