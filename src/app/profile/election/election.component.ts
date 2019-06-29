import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Election} from '../../shared/models/election.model';
import {ElectionService} from '../../shared/apicall/election.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-election',
  templateUrl: './election.component.html',
  styleUrls: ['./election.component.css']
})
export class ElectionComponent implements OnInit {
  closeResult: string;
  election = new Election();
  selectedFiles: FileList;
  startDate = {
    year: '',
    month: '',
    day: ''
  };
  endDate = {
    year: '',
    month: '',
    day: ''
  };
  constructor(private modalService: NgbModal, private electionService: ElectionService, private tostr: ToastrService) {
  }
  ngOnInit() {
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  onSave() {
    const formData = new FormData();
    formData.append('file', this.selectedFiles.item(0));
    if (this.startDate.month.length === 1) {
      this.startDate.month = '0' + this.startDate.month;
    }
    if (this.endDate.month.length === 1) {
      this.endDate.month = '0' + this.endDate.month;
    }
    console.log(this.startDate.month);
    this.election.startDate = this.startDate.year + '-' + this.startDate.month + '-' + this.startDate.day + ' 00:00:00';
    this.election.endDate = this.endDate.year + '-' + this.endDate.month + '-' + this.endDate.day + ' 00:00:00';
    formData.append('election', JSON.stringify(this.election));
    this.electionService.saveElection(formData).subscribe(
      (response: Election) => {
        this.election = response;
      });
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }

  }
  showTost() {
    this.tostr.success('SHowing toast........');
  }
}
