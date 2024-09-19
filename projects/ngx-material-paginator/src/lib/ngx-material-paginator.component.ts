import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-material-paginator',
  templateUrl: './ngx-material-paginator.component.html',
  styleUrl: './ngx-material-paginator.component.scss'
})
export class NgxMaterialPaginatorComponent {

  _defConfigData = {
    curpage: 1,
    perPage: 10,
    totalRecords: 100
  }

  totPageCount: number = 0;
  loopBtnArr: any = [];

  @Input({ required: true })
  set configData(val: any) {
    this._defConfigData = { ...this._defConfigData, ...val };
    this.totPageCount = Math.ceil(this._defConfigData.totalRecords / this._defConfigData.perPage);
  }

  ngOnInit() {
    // console.log(this.totPageCount);
    this.nmpCreatePageButton(10);
  }

  nmpCreatePageButton(curPage: number) {
    let btnArr = [];
    const curBtnArr = {
      pageNum: curPage,
      activeCls: true
    };

    const btnLoop = (curPageNum: number) => {
      const beforeBtnArr = [];
      const afterBtnArr = [];
      for (let i = (curPageNum - 1); i >= (curPageNum - 2); i--) {
        if (i > 0) {
          beforeBtnArr.push({
            pageNum: i,
            activeCls: false
          });
        }
      }

      for (let i = (curPageNum + 1); i <= (curPageNum + 2); i++) {
        if (i <= this.totPageCount) {
          afterBtnArr.push({
            pageNum: i,
            activeCls: false
          });
        }
      }
      return btnArr = [...beforeBtnArr.reverse(), curBtnArr, ...afterBtnArr];
    }
    this.loopBtnArr = btnLoop(curPage);
    console.log(this.loopBtnArr);
  }

  nmploadPage(pageNum: number) {
    this.nmpCreatePageButton(pageNum);
  }

}
