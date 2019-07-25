import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DemandesService } from '../../services/demandes.service';

@Component({
  selector: 'app-demandes',
  templateUrl: './demandes.component.html',
  styleUrls: ['./demandes.component.css']
})
export class DemandesComponent implements OnInit {
  p = 1;
  modalRef: BsModalRef;
  demandeToupdate;
  selectedDemande;
  demandeToDelete;
  demandes: any = [];
  indexToDelete;

  constructor(private modalService: BsModalService,
    private demandeService: DemandesService, private router: Router) { }

  ngOnInit() {
    console.log('hello there');
    this.getAll();
  }

  openDetailsModal(template: TemplateRef<any>, demande) {
    this.openModal(template);
    this.selectedDemande = demande;
  }
  openUpdateModal(template: TemplateRef<any>, demande) {
    this.openModal(template);
    this.demandeToupdate = demande;
  }
  openDeleteModal(confirmDelete:  TemplateRef<any>, demande, index) {
    this.demandeToDelete = demande;
    this.indexToDelete = index;
    this.openModal(confirmDelete);
  }

  getAll() {
    console.log('demandes:', this.demandes);
    this.demandeService.getAll().subscribe(result => {
      this.demandes = result;
      console.log('demandes:', this.demandes);
    });
  }
  updateEmployee() {
    this.demandeService.update(this.demandeToupdate).subscribe(result => {

    }, error => {
    });
    this.modalRef.hide();
    location.reload();
  }

  confirm() {
    this.delete(this.demandeToDelete.idDmd);
    this.modalRef.hide();
    this.demandes.slice(this.indexToDelete, 1);
  }

  delete(idEmploye) {
    this.demandeService.delete(idEmploye).subscribe(res => {
      this.getAll();
    }, error => {
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
