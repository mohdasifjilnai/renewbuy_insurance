import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { ApiConstants } from '../../utilis/api.constant';
import { ApiService } from '../../utilis/service/api.service';
import { ShareService } from '../../utilis/service/share.service';
type SelectionOption = {
  name: string;
  id: number;
  item_id: number;
  item: any; // Consider using a more specific type if possible
};

@Component({
  selector: 'app-cashless-garages',
  templateUrl: './cashless-garages.component.html',
  styleUrl: './cashless-garages.component.scss',
})
export class CashlessGaragesComponent {
  activeTab: string = 'is_garages';
  cashlessPopup: boolean = false;
  listType: any = this.activeTab;
  maxVisibleCards: number = 3; // Number of initially visible cards
  dropdownVisible: boolean = false;
  selectionOptions: SelectionOption[] = [
    { name: 'Apollo Hospital', id: 1, item_id: 2, item: 'Apollo Hospital' },
    { name: 'Apollo Hospital', id: 1, item_id: 2, item: 'Apollo Hospital' },
    { name: 'Apollo Hospital', id: 1, item_id: 2, item: 'Apollo Hospital' },
  ];
  selectedItem: any;
  searchForm!: FormGroup;
  garagesList = [
    // { name: 'ICICI Lombard' },
    // { name: 'Bajaj Allianz' },
    // { name: 'Zuno' },
    // { name: 'Future Generali' },
    // { name: 'HDFC ERGO' },
    // { name: 'Kotak Mahindra' },
  ];

  hospitalsList = [];
  insurar_data: any;
  cardList: any = [];
  totalCardList: any = [];
  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private shareService: ShareService
  ) {
    // this.getHospitals(this.activeTab);
    this.shareService.titleAction$.subscribe((data) => {
      if (data) {
        this.activeTab =
          data == 'Cashless Garage' ? 'is_garages' : 'is_hospital';
        this.getHospitals(this.activeTab);
      } else {
        this.getHospitals(this.activeTab);
      }
    });
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
    this.listType = tab;
    this.getHospitals(tab);
  }

  viewAll(): void {
    this.maxVisibleCards =
      this.activeTab === 'is_garages'
        ? this.garagesList.length
        : this.hospitalsList.length;
  }

  get showViewAllButton(): boolean {
    return (
      (this.activeTab === 'is_garages' &&
        this.maxVisibleCards < this.garagesList.length) ||
      (this.activeTab === 'is_hospital' &&
        this.maxVisibleCards < this.hospitalsList.length)
    );
  }

  DropdownToggle() {
    this.dropdownVisible = !this.dropdownVisible;
  }
  onItemSelect(id: number, value: any) {
    this.dropdownVisible = false;
    this.selectedItem = value;
    this.searchForm.get('hospital')?.setValue({
      name: value,
      id: id,
    });
  }

  onSubmitsearchForm(formValid: boolean) {
    if (formValid) {
    } else {
    }
  }
  isSearchButtonDisabled() {
    const { hospital, pincode } = this.searchForm.value;
    return !(hospital || pincode);
  }

  search(card_insurer: any): void {
    this.insurar_data = card_insurer;
    this.cashlessPopup = true;
  }

  close(): void {
    this.cashlessPopup = false;
  }

  getHospitals(filter_name: any) {
    const header = new HttpHeaders({
      Authorization: `Bearer ${environment['bearerToken']}`,
    });
    let url = `${environment['strapiDomain']}${ApiConstants['INSURER_LOGO']}&filters[${filter_name}]=true`;
    this.apiService.getRequestedResponse(url, header).subscribe((response) => {
      this.totalCardList = response?.data;
      this.cardList = response?.data?.slice(0, 12);
    });
  }
  ViewAll() {
    this.cardList = this.totalCardList;
  }
}
