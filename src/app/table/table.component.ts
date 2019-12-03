import {
  Component,
  OnInit,
  Input,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material';
import { Collum, Page } from '../_models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterViewInit {
  @Input() data: any;
  @Input() dynamicCollums: Collum[];
  @Input() dynamicPage: Page;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  displayedColumns: string[];
  dataSource: any;

  constructor() {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.data);
    this.displayedColumns = this.getDisplayedColumnsByDynamicCollums(
      this.dynamicCollums
    ); 
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.setSortForTable();
      if(this.dynamicPage.isPage) {
        this.setPaginatorForTable();
      }
    });
  }

  isSortingDisabled(col: Collum): boolean {
    if (col.actions !== undefined) {
      return false;
    }
    return col.sort === undefined ? true : col.sort;
  }

  private getDisplayedColumnsByDynamicCollums(collums: Collum[]): string[] {
    return collums.map(col => col.name);
  }

  private setSortForTable() {
    this.dataSource.sort = this.sort;
  }

  private setPaginatorForTable() {
    this.paginator.pageSize = this.dynamicPage.pageSize;
    this.paginator.pageSizeOptions = this.dynamicPage.pageSizeOptions;
    this.dataSource.paginator = this.paginator;
  }
}
