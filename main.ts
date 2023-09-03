import { Aprendiz, NivelEducativo } from "./aprendiz.js";

export const ap = new Aprendiz('Yojan Stiben', 'Hungría', 'avatar.png' , 30, NivelEducativo.POSTGRADO );

let aprendizTable: HTMLElement = document.getElementById("aprendiz")!;

mostrarDatosAprendiz(ap);

function mostrarDatosAprendiz(aprendiz: Aprendiz): void{
    let tBodyAprendiz = document.createElement('tbody');
    tBodyAprendiz.innerHTML = `<tr><td col><img src="./${aprendiz.avatar}" height=100></td></tr>
    <tr><td>Nombres:</td><td>${aprendiz.nombres}</td></tr>
    <tr><td>Apellidos:</td><td>${aprendiz.apellidos}</td></tr>
    <tr><td>Nivel Educativo:</td colspan=2><td>${aprendiz.nivelEducativo}</td></tr>
    <tr><td>Edad:</td><td>${aprendiz.edad}</td></tr>`;
    aprendizTable.appendChild(tBodyAprendiz);
}