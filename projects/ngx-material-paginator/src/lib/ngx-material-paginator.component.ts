import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'ngx-material-paginator',
  templateUrl: './ngx-material-paginator.component.html',
  styleUrl: './ngx-material-paginator.component.scss'
})
export class NgxMaterialPaginatorComponent {

  _defConfigData = {
    curpage: 1,
    perPage: 10,
    totalRecords: 100,
    showArrow: false,
    showArrowLabel: true,
    prevButtonLabel: 'PREV',
    nextButtonLabel: 'NEXT',
  }

  totPageCount: number = 0;
  loopBtnArr: any = signal([]);
  curPageNum: number = 1;

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
    this.curPageNum = curPage;
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
      return [...beforeBtnArr.reverse(), curBtnArr, ...afterBtnArr];
    }
    this.loopBtnArr.set(btnLoop(curPage));
  }

  nmploadPage(pageNum: number) {
    this.nmpCreatePageButton(pageNum);
  }

}
