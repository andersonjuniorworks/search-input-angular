import { Component, Input, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { fade } from '../../animations/fade-animation';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: SearchInputComponent,
    },
  ],
  animations: [fade],
})
export class SearchInputComponent implements ControlValueAccessor, OnInit {
  @Input() data: any[] = [];
  @Input() fieldName: string;
  @Input() fieldValue: string;
  @Input() label: string;
  @Input() placeholder: string;
  inputControl = new FormControl();

  showDropdown: boolean = false;
  touched = false;
  disabled = false;

  value: any;

  dropdownData: any[];

  onChange = (__value) => {};
  onTouched = () => {};

  constructor() {}

  ngOnInit() {
    this.dropdownData = this.data;
  }

  onSearch() {
    this.inputControl.value
      ? (this.showDropdown = true)
      : (this.showDropdown = false);

    let response = this.data.filter((obj) => {
      let keys = Object.keys(obj);
      return keys.some((key) =>
        String(obj[key])
          .toLowerCase()
          .includes(this.inputControl.value.toLowerCase())
      );
    });

    if (response.length > 0) {
      this.dropdownData = response;
    }

    if (!this.inputControl.value) {
      this.dropdownData = this.data;
      this.changeValue(null);
    }
  }

  onSelectItem(obj) {
    this.inputControl.setValue(obj[this.fieldName]);

    this.fieldValue
      ? this.changeValue(obj[this.fieldValue])
      : this.changeValue(obj);

    this.showDropdown = false;
  }

  changeValue(obj) {
    this.onChange(obj);
  }

  writeValue(value) {
    this.value = value;
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }
}
