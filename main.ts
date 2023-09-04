import { Aprendiz, NivelEducativo } from "./aprendiz.js";
import { Curso } from "./curso.js";


let cursos = [new Curso("Python", 60, 95, true, 2020), new Curso("JavaScript", 30, 90, true, 2021), new Curso("POO en python", 10, 97, false, 2023)]

export const ap = new Aprendiz('Yojan Stiben', 'Hungría', 'avatar.png' , 30, NivelEducativo.POSTGRADO, cursos);


// Mostrar de manera dinánima el HTML
let aprendizTable: HTMLElement = document.getElementById("aprendiz")!;
let estadisticaTable: HTMLElement = document.getElementById("estadisticas")!;
let cursosTable: HTMLElement = document.getElementById("cursos")!;
let btnFiltro: HTMLElement = document.getElementById("boton-filtro")!;
let textoBusqueda: HTMLInputElement = <HTMLInputElement>document.getElementById("texto-busqueda")!;

btnFiltro.onclick = () => { 
    let text:string = textoBusqueda.value;
    text = (text == null)?"":text;
    cursosTable.getElementsByTagName("tbody")[0].remove();
    let cursosFiltrados: Curso[] = ap.cursos.filter(c => c.nombre.match(text));
    mostrarCursosAprendiz(cursosFiltrados);
};

mostrarDatosAprendiz(ap);
mostrarEstadisticas(ap);
mostrarCursosAprendiz(ap.cursos);

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

function mostrarCursosAprendiz(cursos: Curso[]): void{
    let cursosTbody: HTMLElement = document.createElement("tbody")!;
    let estado: string[] = cursos.map(c=>(c.calificacion>60)?"green":"red");
    let index: number = 0;
    for(let curso of cursos){
        let trElement: HTMLElement = document.createElement("tr");
        trElement.innerHTML = `<td>${curso.nombre}</td>
        <td>${curso.horas}</td>
        <td style="color:${estado[index]}">${curso.calificacion}</td>
        <td>${curso.certificado}</td>
        <td>${curso.anio}</td>`;
        cursosTbody.appendChild(trElement);
        index++;
    }
    cursosTable.appendChild(cursosTbody);

}




