import { ColumnChartData } from './columnchart'
export class MarketingDatas {
  id: number;
  yearList: string;
  currentDataYear: string;
  subjectName: string;
  subTitles: object;
  columnChart: ColumnChartData[];
  chartTitle: string;
  chartDatas: object;
}