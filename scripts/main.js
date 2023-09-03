import { Aprendiz, NivelEducativo } from "./aprendiz.js";
import { Curso } from "./curso.js";
var cursos = [new Curso("Python", 60, 95, true, 2020), new Curso("JavaScript", 30, 90, true, 2021), new Curso("POO en python", 10, 97, false, 2023)];
export var ap = new Aprendiz('Yojan Stiben', 'Hungría', 'avatar.png', 30, NivelEducativo.POSTGRADO, cursos);
// Mostrar de manera dinánima el HTML
var aprendizTable = document.getElementById("aprendiz");
var estadisticaTable = document.getElementById("estadisticas");
mostrarDatosAprendiz(ap);
mostrarEstadisticas(ap);
function mostrarDatosAprendiz(aprendiz) {
    var tBodyAprendiz = document.createElement('tbody');
    tBodyAprendiz.innerHTML = "<tr><td col><img src=\"./".concat(aprendiz.avatar, "\" height=100></td></tr>\n    <tr><td>Nombres:</td><td>").concat(aprendiz.nombres, "</td></tr>\n    <tr><td>Apellidos:</td><td>").concat(aprendiz.apellidos, "</td></tr>\n    <tr><td>Nivel Educativo:</td colspan=2><td>").concat(aprendiz.nivelEducativo, "</td></tr>\n    <tr><td>Edad:</td><td>").concat(aprendiz.edad, "</td></tr>");
    aprendizTable.appendChild(tBodyAprendiz);
}
function mostrarEstadisticas(aprendiz) {
    var numeroCertificados = aprendiz.darCursosCertificados();
    var trElement = document.createElement('tr');
    trElement.innerHTML = "<td><b>Cursos certificados:</b></td><td>".concat(numeroCertificados, "</td>");
    estadisticaTable.appendChild(trElement);
}
