import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  input,
  Input,
  Output,
  Renderer2,
  SimpleChange,
} from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { ShareService } from '../../utilis/service/share.service';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ApiConstants } from '../../utilis/api.constant';
import { ApiService } from '../../utilis/service/api.service';
import { NgxPaginationModule, PaginationInstance } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import {
  NgSelectModule,
  NgOption,
  NgSelectComponent,
} from '@ng-select/ng-select';
import { AcceptOnlyDigitDirective } from '../../utilis/directives/accept-only-digit.directive';

@Component({
  selector: 'app-cashless-garage-popup',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    NgSelectModule,
    AcceptOnlyDigitDirective,
  ],
  templateUrl: './cashless-garage-popup.component.html',
  styleUrls: ['./cashless-garage-popup.component.scss'],
})
export class CashlessGaragePopupComponent {
  @Input() isVisible: boolean = false;
  @Input() insurar_data: any;
  @Input() card_list: any;
  @Output() closePopup = new EventEmitter<void>();
  @Input() list_type: any;
  searchForm!: FormGroup;
  items: any = [];
  page = 1;
  totalItems = 0;
  isChangeLocationVisible: boolean = false;
  insurerLogo: any = [];
  garages: any[] = [];
  filteredGarages: any[] = [];
  filteredData: any[] = [];
  searchQuery: string = '';
  totalCount: number = 0;
  insurerId: any;
  isDropdownOpen = false;
  currentPage: number = 1;
  getMakes: any = [
    {
      name: 'xya',
      id: 1,
    },
    {
      name: 'abc',
      id: 2,
    },
  ];
  selectedCityId: any;
  carBrands = [
    { id: 'MARUTI', name: 'MARUTI' },
    { id: 'HYUNDAI', name: 'HYUNDAI' },
    { id: 'VOLKSWAGEN', name: 'VOLKSWAGEN' },
    { id: 'NISSAN', name: 'NISSAN' },
    { id: 'KIA', name: 'KIA' },
    { id: 'CHEVROLET', name: 'CHEVROLET' },
    { id: 'FORD', name: 'FORD' },
    { id: 'SKODA', name: 'SKODA' },
    { id: 'RENAULT', name: 'RENAULT' },
    { id: 'BAJAJ', name: 'BAJAJ' },
    { id: 'FIAT', name: 'FIAT' },
    { id: 'HONDA', name: 'HONDA' },
    { id: 'TATA', name: 'TATA' },
    { id: 'TOYOTA', name: 'TOYOTA' },
    { id: 'MAHINDRA', name: 'MAHINDRA' },
    { id: 'CITROEN', name: 'CITROEN' },
    { id: 'DATSUN', name: 'DATSUN' },
    { id: 'JEEP', name: 'JEEP' },
    { id: 'MITSUBISHI', name: 'MITSUBISHI' },
    { id: 'MAHINDRA RENAULT', name: 'MAHINDRA RENAULT' },
    { id: 'OPEL', name: 'OPEL' },
    { id: 'VOLVO', name: 'VOLVO' },
    { id: 'MINI', name: 'MINI' },
  ];
  public config: PaginationInstance = {
    id: 'advanced',
    itemsPerPage: 10,
    currentPage: 1,
  };
  public eventLog: string[] = [];
  constructor(
    private fb: FormBuilder,
    private renderer: Renderer2,
    private apiService: ApiService
  ) {
    this.createForm();
    this.openPopup();
  }
  onPageChange(number: number) {
    this.logEvent(`pageChange(${number})`);
    this.config.currentPage = number;
    this.currentPage = number;
    this.list_type == 'is_garages'
      ? this.getCheshLessGarages(this.insurar_data?.id, this.currentPage)
      : this.getCheshLessHospital(this.insurar_data?.id, this.currentPage);
  }
  private logEvent(message: string) {
    this.eventLog.unshift(`${new Date().toISOString()}: ${message}`);
  }
  createForm() {
    this.searchForm = this.fb.group({
      make: [null],
      pincode: ['', [Validators.pattern('^[0-9]{6}$|^[a-zA-Z ]+$')]],
    });
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen; // Toggle the dropdown open/close
  }

  close(flag: boolean): void {
    this.isVisible = flag;
    this.closePopup.emit();
    this.renderer.removeClass(document.body, 'no-scroll');
  }
  openChangeLocationPopup(): void {
    this.isChangeLocationVisible = true;
  }

  closeChangeLocationPopup(): void {
    this.isChangeLocationVisible = false;
  }
  closeChangeLocationPopupWithInuraraCard(card: any) {
    this.insurar_data = card;
    this.list_type == 'is_garages'
      ? this.getCheshLessGarages(this.insurar_data?.id, this.currentPage)
      : this.getCheshLessHospital(this.insurar_data?.id, this.currentPage);
    this.isChangeLocationVisible = false;
    this.searchForm.reset();
    this.searchQuery = '';
  }
  filterGarages(is_garages: boolean) {
    const query = this.searchQuery.toLowerCase();

    if (query) {
      this.filteredGarages = this.garages.filter((item: any) => {
        if (is_garages) {
          const nameMatch = item?.attributes?.workshop_name
            ?.toLowerCase()
            .includes(query);
          const areaMatch = item?.attributes?.workshop_address
            ?.toLowerCase()
            .includes(query);
          return nameMatch || areaMatch;
        } else {
          const nameMatch = item?.attributes?.hospital_name
            ?.toLowerCase()
            .includes(query);
          const areaMatch = item?.attributes?.hospital_address
            ?.toLowerCase()
            .includes(query);
          return nameMatch || areaMatch;
        }
      });
    } else {
      this.filteredGarages = [...this.garages];
    }

    this.items = this.filteredGarages.slice(0, 10);
    this.totalItems = this.filteredGarages.length;
  }

  ngOnChanges(changes: SimpleChange) {
    if (this.insurar_data && this.insurar_data.id) {
      this.insurerId = this.insurar_data?.id;
      this.list_type == 'is_garages'
        ? this.getCheshLessGarages(this.insurar_data?.id, this.currentPage)
        : this.getCheshLessHospital(this.insurar_data?.id, this.currentPage);
    }
  }

  onClear() {
    this.resetPin();
  }
  resetPin() {
    if (
      this.searchForm.get('pincode')?.value == '' &&
      this.searchForm.get('make')?.value == null &&
      this.list_type == 'is_garages'
    ) {
      this.getCheshLessGarages(
        this.insurar_data?.id,
        this.currentPage,
        null,
        null
      );
    } else if (
      this.searchForm.get('pincode')?.value == '' &&
      this.list_type !== 'is_garages'
    ) {
      this.getCheshLessHospital(this.insurar_data?.id, this.currentPage, null);
    }
  }
  onSubmitSearchForm() {
    if (
      this.searchForm.get('pincode')?.value != '' &&
      this.searchForm.get('make')?.value != null &&
      this.list_type == 'is_garages'
    ) {
      this.getCheshLessGarages(
        this.insurar_data?.id,
        this.currentPage,
        this.searchForm.get('pincode')?.value,
        this.searchForm.get('make')?.value
      );
    } else if (
      this.searchForm.get('pincode')?.value != '' &&
      this.list_type == 'is_garages'
    ) {
      this.getCheshLessGarages(
        this.insurar_data?.id,
        this.currentPage,
        this.searchForm.get('pincode')?.value
      );
    } else if (
      this.searchForm.get('make')?.value &&
      this.list_type == 'is_garages'
    ) {
      this.getCheshLessGarages(
        this.insurar_data?.id,
        this.currentPage,
        null,
        this.searchForm.get('make')?.value
      );
    } else if (
      this.searchForm.get('pincode')?.value != '' &&
      this.list_type !== 'is_garages'
    ) {
      this.getCheshLessHospital(
        this.insurar_data?.id,
        this.currentPage,
        this.searchForm.get('pincode')?.value
      );
    }
  }
  getCheshLessGarages(
    insurerId: any,
    currentPage: any,
    pincode: any = null,
    makers: any = null
  ) {
    const header = new HttpHeaders({
      Authorization: `Bearer ${environment['bearerToken']}`,
    });
    let param = `?pagination[withCount]=true&pagination[page]=${currentPage}&populate[workshop_city][populate]=state_name&filters[workshop_insurers][id]=${insurerId}`;
    if (pincode != null && !isNaN(pincode)) {
      param += `&filters[workshop_pin][$containsi]=${pincode}`;
    } else if (pincode != null && isNaN(pincode)) {
      param += `&filters[workshop_city][$containsi]=${pincode}`;
    }
    if (makers != null) {
      param += `&filters[workshop_maker][$containsi] =${makers}`;
    }
    let url = `${environment['strapiDomain']}${ApiConstants['CASHLESS_GARAGES']}${param}`;
    this.apiService.getRequestedResponse(url, header).subscribe((response) => {
      this.garages = response?.data;
      this.items = this.filteredGarages = [...this.garages];
      this.totalCount = response?.meta?.pagination?.total;
      this.items = Array.from({ length: 25 }, (_, i) => `Item ${i + 1}`);
      this.totalItems = response?.meta?.pagination?.total;
    });
  }
  getCheshLessHospital(insurerId: any, currentPage: any, pincode: any = null) {
    const header = new HttpHeaders({
      Authorization: `Bearer ${environment['bearerToken']}`,
    });
    let param = `?pagination[withCount]=true&pagination[page]=${currentPage}&populate[hospital_city][populate]=state_name&filters[hospital_insurers][id]=${insurerId}`;
    if (pincode != null && !isNaN(pincode)) {
      param += `&filters[hospital_pin][$containsi]=${pincode}`;
    } else if (pincode != null && isNaN(pincode)) {
      param += `&filters[hospital_city][$containsi]=${pincode}`;
    }
    let url = `${environment['strapiDomain']}${ApiConstants['CASHLESS_HOSPITAL']}${param}`;
    this.apiService.getRequestedResponse(url, header).subscribe((response) => {
      this.garages = response?.data;
      this.items = this.filteredGarages = [...this.garages];
      this.totalCount = response?.meta?.pagination?.total;
      this.items = Array.from({ length: 25 }, (_, i) => `Item ${i + 1}`);
      this.totalItems = response?.meta?.pagination?.total;
    });
  }
  openPopup(): void {
    document.querySelector('.popup-overlay-profile')?.classList.add('visible');
    document.body.classList.add('no-scroll');
  }
}
