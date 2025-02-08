export interface SpendingType {
  id: string;
  name: string;
  amount: string;
  date: string;
  description?: string;
  category?: string;
  type?: string;
  [key: string]: any;  }

export interface PaymentMethodType {
  id: string;
  name: string;
}

export interface ServiceType {
  id: string;
  name: string;
}
