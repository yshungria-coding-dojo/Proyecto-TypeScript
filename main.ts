import { Aprendiz, NivelEducativo } from "./aprendiz.js";
import { Curso } from "./curso.js";


let cursos = [new Curso("Python", 60, 95, true, 2020), new Curso("JavaScript", 30, 90, true, 2021), new Curso("POO en python", 10, 97, false, 2023)]

export const ap = new Aprendiz('Yojan Stiben', 'Hungría', 'avatar.png' , 30, NivelEducativo.POSTGRADO, cursos);


// Mostrar de manera dinánima el HTML
let aprendizTable: HTMLElement = document.getElementById("aprendiz")!;
let estadisticaTable: HTMLElement = document.getElementById("estadisticas")!;

mostrarDatosAprendiz(ap);
mostrarEstadisticas(ap);

function mostrarDatosAprendiz(aprendiz: Aprendiz): void{
    let tBodyAprendiz = document.createElement('tbody');
    tBodyAprendiz.innerHTML = `<tr><td col><img src="./${aprendiz.avatar}" height=100></td></tr>
    <tr><td>Nombres:</td><td>${aprendiz.nombres}</td></tr>
    <tr><td>Apellidos:</td><td>${aprendiz.apellidos}</td></tr>
    <tr><td>Nivel Educativo:</td colspan=2><td>${aprendiz.nivelEducativo}</td></tr>
    <tr><td>Edad:</td><td>${aprendiz.edad}</td></tr>`;
    aprendizTable.appendChild(tBodyAprendiz);
}

function mostrarEstadisticas(aprendiz: Aprendiz): void{
    let numeroCertificados: number = aprendiz.darCursosCertificados();
    let trElement: HTMLElement = document.createElement('tr');
    trElement.innerHTML = `<td><b>Cursos certificados:</b></td><td>${numeroCertificados}</td>`;
    estadisticaTable.appendChild(trElement);
}