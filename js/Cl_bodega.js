export default class Cl_bodega{
    constructor(){
        this.acmGanancia = 0;
    }

    procesarArticulo(a){
        this.acmGanancia += a.ganancia();
    }

    totalGanancia(){
        return this.acmGanancia;
    }
}