import { Series } from './series'
export class ColumnChartData{
    private _chartTitle:String = "";
    private _categories:Object[] = [];
    private _series:Object[];

	public get chartTitle(): String  {
		return this._chartTitle;
	}

	public set chartTitle(value: String ) {
		this._chartTitle = value;
	}
   
	public get series(): Object[]  {
		return this._series;
	}

	public set series(value: Object[] ) {
		this._series = value;
	}

	public get categories(): Object[]  {
		return this._categories;
	}

	public set categories(value: Object[] ) {
		this._categories = value;
	}
    
}