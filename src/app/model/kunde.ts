import {Anschrift} from "./anschrift";
import {Bankverbindung} from "./bankverbindung";

export class Kunde {
  id: number;

  name: string;

  vorname: string;

  versicherungsNr: string;

  anschrift: Anschrift;

  bankverbindung: Bankverbindung
}
