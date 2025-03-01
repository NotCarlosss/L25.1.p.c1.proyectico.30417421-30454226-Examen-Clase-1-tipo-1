export default class Cl_vEstudiante {
    get nombre() {
        return prompt('Ingrese el nombre del estudiante');
    }
    get cedula() {
        return +prompt('Ingrese la cedula del estudiante');
    }
    get sexo() {
        return prompt('Ingrese el sexo del estudiante');
    }
    get nota() {
        return +prompt('Ingrese la nota del estudiante');
    }
}