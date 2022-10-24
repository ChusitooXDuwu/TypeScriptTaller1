
export class Serie {
    numero: number;
    name: string;
    channel: string;
    seasons: number;
    resumen : string;
    img : string;
    link : string;
  
    constructor(numero :  number, name: string, channel: string, seasons: number, resumen : string, img : string, link : string) {
      this.numero = numero;
      this.name = name;
      this.channel = channel;
      this.seasons = seasons;
      this.resumen = resumen;
      this.img =  img;
      this.link = link;
    }
  }
  