import { IInvoiceType } from "./IInvoice";

export class Invoice{

  private invoices: IInvoiceType[] = [];

  private makeID(){
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (var i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
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
