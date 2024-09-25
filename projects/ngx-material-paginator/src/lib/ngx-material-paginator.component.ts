import { Component, computed, Input, signal } from '@angular/core';

@Component({
  selector: 'ngx-material-paginator',
  templateUrl: './ngx-material-paginator.component.html',
  styleUrl: './ngx-material-paginator.component.scss'
})
export class NgxMaterialPaginatorComponent {

  defConfigData = signal({
    curpage: 1,
    perPage: 10,
    totalRecords: 100,
    showArrow: false,
    showArrowLabel: true,
    prevButtonLabel: 'PREV',
    nextButtonLabel: 'NEXT',
  });

  totPageCount = computed(() => {
    return Math.ceil(this.defConfigData().totalRecords / this.defConfigData().perPage)
  });
  loopBtnArr: any = signal([]);
  curPageNum: number = 1;

  @Input({ required: true })
  set configData(val: any) {
    this.defConfigData.update(value => ({
      ...value, val
    }));
  }

  ngOnInit() {
    this.nmpCreatePageButton(this.defConfigData().curpage);
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
        if (i <= this.totPageCount()) {
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
