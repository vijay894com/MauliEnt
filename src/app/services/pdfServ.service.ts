import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class pdfService {
  constructor() {}
  pdfMake: any;
  async loadPdfMaker() {
    if (!this.pdfMake) {
      const pdfMakeModule = await import('pdfmake/build/pdfmake');
      const pdfFontsModuele = await import('pdfmake/build/vfs_fonts');
      this.pdfMake = pdfMakeModule.default;
      this.pdfMake.vfs = pdfFontsModuele.default.pdfMake.vfs;
    }
  }
  async generatePdf(content: any): Promise<void> {
    await this.loadPdfMaker();
    this.pdfMake.createPdf(content).open();
  }
}
