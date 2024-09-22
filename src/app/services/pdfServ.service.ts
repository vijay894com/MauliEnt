import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class pdfService {
  constructor() {}
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pdfMake: any;
  async loadPdfMaker() {
    if (!this.pdfMake) {
      const pdfMakeModule = await import('pdfmake/build/pdfmake');
      const pdfFontsModuele = await import('pdfmake/build/vfs_fonts');
      this.pdfMake = pdfMakeModule.default;
      this.pdfMake.vfs = pdfFontsModuele.default.pdfMake.vfs;
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async generatePdf(content: any): Promise<void> {
    await this.loadPdfMaker();
    this.pdfMake.createPdf(content).open();
  }
}
