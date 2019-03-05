import { IInvoiceType } from "./IInvoice";

export class Invoice{

  private invoices: IInvoiceType[] = [];

  private makeID(){
      let id = "";
      let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (let i = 0; i < 10; i++)
        id += possible.charAt(Math.floor(Math.random() * possible.length));
      return id;
    }

  public getAllInvoice(){
    return this.invoices;
  }


  public addInvoice(invoice: IInvoiceType){
    invoice.invoiceId = this.makeID();
    this.invoices.push(invoice);
  }

  public removeInvoice(invoiceId: string){
    this.invoices.forEach((el) => {
      if(el.invoiceId===invoiceId){
        this.invoices.splice(this.invoices.indexOf(el),1);
      }
    });
  };

}
