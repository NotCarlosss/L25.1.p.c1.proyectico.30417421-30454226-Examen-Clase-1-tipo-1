import Cl_mEstudiante from "./Cl_mEstudiante.js";
import Cl_vEstudiante from "./Cl_vEstudiante.js";
export default class Cl_vExamen {
    constructor() {
        this.controlador = null;
        this.mEstudiante = null;
        this.vEstudiante = new Cl_vEstudiante();
        this.btAgregar = document.getElementById('btAgregar');
        this.salida = document.getElementById('salida');
        this.btAgregar.onclick = () => this.controlador.agregarEstudiante();
        }
    agregarEstudiante() {
        this.mEstudiante = new Cl_mEstudiante({
            nombre: this.vEstudiante.nombre,
            cedula: this.vEstudiante.cedula,
            sexo: this.vEstudiante.sexo,
            nota: this.vEstudiante.nota
        });
        return this.mEstudiante;
    }
    reportarEstudiante(porcenAprobados, mejorEstudiante, porcenChicasAprob) {
        this.salida.innerHTML = `
        El examen tuvo un porcentaje de aprobados de ${porcenAprobados}%<br>
        El mejor estudiante fue ${mejorEstudiante}<br>
        El porcentaje de chicas aprobadas fue de ${porcenChicasAprob}%<br>
        `;
    }
}

