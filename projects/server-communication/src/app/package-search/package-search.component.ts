import { Component } from '@angular/core';
import { NpmPackageInfo, PackageSearchService } from './package-search.service';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-package-search',
  templateUrl: './package-search.component.html',
  styleUrls: ['./package-search.component.scss'],
  providers: [PackageSearchService]
})
export class PackageSearchComponent {
  withRefresh = false;
  packages$!: Observable<NpmPackageInfo[]>;
  private searchText$ = new Subject<string>();

  search(packageName: string) {
    this.searchText$.next(packageName);
  }

  ngOnInit() {
    this.packages$ = this.searchText$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(packageName =>
        this.searchService.search(packageName, this.withRefresh))
    );
  }

  constructor(private searchService: PackageSearchService) { }


  toggleRefresh() { this.withRefresh = !this.withRefresh; }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
}
