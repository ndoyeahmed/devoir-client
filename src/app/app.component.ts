import {Component, OnInit} from '@angular/core';
import {PersonneModel} from './models/personne.model';
import {PersonneService} from './services/personne.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  page = 1;
  action = 'add';
  idPersonne: number;
  personnes = [] as PersonneModel[];
  personne = new PersonneModel();

  constructor(private personneService: PersonneService) {}

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.personneService.list().subscribe((data) => {
      this.personnes = data;
    }, (error) => console.log(error));
  }

  save() {
    this.personne.telephone = '77';
    this.personne.adresse = '77';
    this.personneService.add(this.personne).subscribe((data) => {
      console.log(data);
    }, (error) => console.log(error), () => {
      this.list();
      this.personne = new PersonneModel();
    });
  }

  update() {
    this.personne.telephone = '77';
    this.personne.adresse = '77';
    this.personneService.update(this.personne, this.idPersonne).subscribe((data) => {
      console.log(data);
    }, (error) => console.log(error), () => {
      this.list();
      this.personne = new PersonneModel();
    });
  }

  delete() {
    this.personneService.delete(this.idPersonne).subscribe((data) => {
      console.log(data);
    }, (error) => console.log(error), () => this.list());
  }

  onAdd() {
    this.action = 'add';
    this.personne = new PersonneModel();
  }

  onUpdate(p: PersonneModel) {
    this.idPersonne = p.id;
    this.personne = p;
    this.action = 'update';
  }

  onDelete(p: PersonneModel) {
    this.idPersonne = p.id;
    this.action = 'delete';
  }
}
