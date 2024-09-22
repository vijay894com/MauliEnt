import { Injectable } from '@angular/core';
import { pdfService } from '../../services/pdfServ.service';

@Injectable({
  providedIn: 'root',
})
export class billPdf {
  today = new Date();
  constructor(private pdfService: pdfService) {}
  // static ;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  generatePdf(formInputs: any, dayData: Array<any>) {
    const docDefination = {
      content: [
        //heading line
        {
          canvas: [
            {
              type: 'line',
              x1: -28,
              y1: 0,
              x2: 540,
              y2: 0,
              lineWidth: 6,
              lineColor: '#808080',
            },
          ],
          margin: [0, 0, 0, 20],
        },
        //heading text
        {
          text: this.pdfHeader(),
          style: 'header',
        },
        //heading description
        {
          text: `\n Earth Moving & Filling Contractor , JCB ,Poclain,Dumper on Hire & Building Material Suppliers`,
          style: {
            fontSize: 10,
            italics: true,
            bold: true,
            alignment: 'center',
          },
        },
        // address above line
        {
          canvas: [
            {
              type: 'line',
              x1: -28,
              y1: 0,
              x2: 540,
              y2: 0,
              lineWidth: 1,
              lineColor: '#808080',
            },
          ],
          margin: [0, 10, 0, 0],
        },
        //address
        {
          text: `5,Acre kothari compound tijujiniwadi road ,chitalsar Manpada Thane(w).Mob:9821554165/8779413260`,
          style: {
            fontSize: 8,
            italics: true,
            bold: true,
            alignment: 'center',
          },
        },
        //address below line
        {
          canvas: [
            {
              type: 'line',
              x1: -28,
              y1: 0,
              x2: 540,
              y2: 0,
              lineWidth: 1,
              lineColor: '#808080',
            },
          ],
          margin: [0, 0, 0, 10],
        },

        //heading line
        {
          canvas: [
            {
              type: 'line',
              x1: -28,
              y1: 0,
              x2: 540,
              y2: 0,
              lineWidth: 6,
              lineColor: '#808080',
            },
          ],
          margin: [0, 0, 0, 20],
        },
        //Owner Name:
        {
          style: 'ownserstable',
          table: {
            border: [false, false, false, false],
            widths: ['85%', '15%'],
            body: [
              [
                {
                  text: 'M/s.  Mauli Enterprises',
                  alignment: 'center',
                  fontSize: 15,
                  margin: [0, 5, 0, 10],
                  color: 'orange',
                  border: [true, true, false, true],
                },

                //date bill no
                {
                  text:
                    `Date:` +
                    `${this.today.getDay().toString().padStart(2, '0')}-${(
                      this.today.getMonth() + 1
                    )
                      .toString()
                      .padStart(2, '0')}- ${this.today.getFullYear()}`,
                  bold: true,
                  italics: true,
                  fontSize: 8,
                  alignment: 'right',
                  border: [true, true, true, false],
                },
              ],
              [
                {
                  text: 'Address:' + ``,
                  border: [true, false, false, true],
                },
                //billno
                {
                  text: `Bill No: 201`,
                  bold: true,
                  italics: true,
                  fontSize: 8,
                  alignment: 'right',
                  margin: [0, 5, 20, 0],
                  border: [true, false, true, true],
                },
              ],
            ],
          },
        },

        {
          style: 'table',
          table: {
            widths: ['*', '*', '*', '*', '*', '*', '*'],
            body: [...this.tableData(formInputs, dayData)],
          },
        },
      ],

      styles: {
        header: {
          fontSize: 17,
          bold: true,
          italics: true,
          color: 'orange',
          margin: [0, 0, 0, 0],
          alignment: 'center',
        },
        table: {
          fontSize: 8,
          italics: true,
          margin: [0, 8, 0, 8],
        },
        ownserstable: {
          fontSize: 10,
          italics: true,
          decoration: 'underline',
          border: [false, false, false, false],
        },
      },
    };
    return docDefination;
  }
  pdfHeader() {
    return {
      text: `Mauli Enterprises`,
    };
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tableData(formInputs: any, dayData: Array<any>) {
    const row = [
      [
        { text: 'Sr.No:' },
        { text: 'Date:' },
        { text: 'Vehicle No:' },
        { text: 'Challan No:' },
        { text: 'Start Time:' },
        { text: 'Stop Time:' },
        { text: 'Total Hours:' },
      ],
    ];
    console.log('formInputs:', formInputs.controls.dayData.length);
    console.log('day data:', formInputs.controls.dayData.controls[0]);
    for (let i = 0; i < dayData.length; i++) {
      row.push([
        {
          text: `${i + 1}`,
        },
        {
          text: `${this.todaysDate(dayData[i][0])}`,
        },
        { text: `${dayData[i][1]}` },
        { text: `${dayData[i][2]}` },
        { text: `${dayData[i][3]}` },
        { text: `${dayData[i][4]}` },
        { text: `${dayData[i][5]}` },
      ]);
    }

    return row;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  createPdf(formInputs: any, dayData: Array<any>) {
    console.log('form inputs', formInputs);
    this.pdfService.generatePdf(this.generatePdf(formInputs, dayData));
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  todaysDate(date: any) {
    return `${date}`;
  }
}
