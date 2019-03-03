import Vue from 'Vue';
import {IInvoiceType} from "./IInvoice";

export default class Invoice extends Vue{

  public invoices: IInvoiceType[] = [
    {
      invoiceName: 'FirstInvoiceName',
      invoiceFrom: 'FirstInovoiceFrom',
      invoiceTo: 'FirstInvoiceTo',
      invoiceTitle: 'FirstInvoiceTitle',
      paidDate: new Date(),
      sellDate: new Date(),
    },
    {
      invoiceName: 'FirstInvoiceName',
      invoiceFrom: 'FirstInovoiceFrom',
      invoiceTo: 'FirstInvoiceTo',
      invoiceTitle: 'FirstInvoiceTitle',
      paidDate: new Date(),
      sellDate: new Date(),
    },
  ];
  constructor(){
    super();
  }

  public getAllInvoice(){
    return this.invoices;
  }
  public addInvoice(invoice: IInvoiceType){
    this.invoices.push(invoice);
  }
  public removeInvoice(invoiceName: string){
    this.invoices.forEach((el)=>{
      if (el.invoiceName === invoiceName){
        let indexOfInvoiceToDelete = this.invoices.indexOf(el);
        this.invoices.slice(indexOfInvoiceToDelete,1);
      }
    });
  }
}
