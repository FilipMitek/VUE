export interface IInvoiceType {
  invoiceId: string;
  invoiceName: string;
  invoiceTitle: string;
  invoiceFrom: string;
  invoiceTo: string;
  sellDate: Date;
  paidDate: Date;
  paid: boolean;
}
