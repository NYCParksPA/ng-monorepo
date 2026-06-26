import { Injectable } from '@angular/core';

export interface FormData {
  // Page 1 – Personal Info
  fullName: string;
  email: string;
  // Page 2 – Background
  occupation: string;
  yearsExperience: number | null;
  // Page 3 – Preferences
  contactMethod: string;
  satisfactionRating: number | null;
}

@Injectable({ providedIn: 'root' })
export class FormDataService {
  data: FormData = {
    fullName: '',
    email: '',
    occupation: '',
    yearsExperience: null,
    contactMethod: '',
    satisfactionRating: null,
  };

  reset(): void {
    this.data = {
      fullName: '',
      email: '',
      occupation: '',
      yearsExperience: null,
      contactMethod: '',
      satisfactionRating: null,
    };
  }
}
