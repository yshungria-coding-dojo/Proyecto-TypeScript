import { Aprendiz, NivelEducativo } from "./aprendiz.js";
export var ap = new Aprendiz('Yojan Stiben', 'Hungría', 'avatar.png', 30, NivelEducativo.POSTGRADO);
var aprendizTable = document.getElementById("aprendiz");
mostrarDatosAprendiz(ap);
function mostrarDatosAprendiz(aprendiz) {
    var tBodyAprendiz = document.createElement('tbody');
    tBodyAprendiz.innerHTML = "<tr><td col><img src=\"./".concat(aprendiz.avatar, "\" height=100></td></tr>\n    <tr><td>Nombres:</td><td>").concat(aprendiz.nombres, "</td></tr>\n    <tr><td>Apellidos:</td><td>").concat(aprendiz.apellidos, "</td></tr>\n    <tr><td>Nivel Educativo:</td colspan=2><td>").concat(aprendiz.nivelEducativo, "</td></tr>\n    <tr><td>Edad:</td><td>").concat(aprendiz.edad, "</td></tr>");
    aprendizTable.appendChild(tBodyAprendiz);
}
