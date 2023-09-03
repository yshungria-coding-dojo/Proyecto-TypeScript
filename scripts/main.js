import { Aprendiz, NivelEducativo } from "./aprendiz.js";
import { Curso } from "./curso.js";
var cursos = [new Curso("Python", 60, 95, true, 2020), new Curso("JavaScript", 30, 90, true, 2021), new Curso("POO en python", 10, 97, false, 2023)];
export var ap = new Aprendiz('Yojan Stiben', 'Hungría', 'avatar.png', 30, NivelEducativo.POSTGRADO, cursos);
// Mostrar de manera dinánima el HTML
var aprendizTable = document.getElementById("aprendiz");
var estadisticaTable = document.getElementById("estadisticas");
var cursosTable = document.getElementById("cursos");
mostrarDatosAprendiz(ap);
mostrarEstadisticas(ap);
mostrarCursosAprendiz(ap);
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
function mostrarCursosAprendiz(aprendiz) {
    var cursosTbody = document.getElementById("cursos");
    for (var _i = 0, _a = aprendiz.cursos; _i < _a.length; _i++) {
        var curso = _a[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(curso.nombre, "</td>\n        <td>").concat(curso.horas, "</td>\n        <td>").concat(curso.calificacion, "</td>\n        <td>").concat(curso.certificado, "</td>\n        <td>").concat(curso.anio, "</td>");
        cursosTbody.appendChild(trElement);
    }
    cursosTable.append(cursosTbody);
}
