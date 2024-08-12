import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceStoreService } from '../face-store.service';
import { FakeStore } from '../fake-store';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  stores: FakeStore[] = [];
  selectedStore: FakeStore | null = null;

  constructor(private _FaceStoreService: FaceStoreService) {}

  ngOnInit(): void {
    this._FaceStoreService.getMovies().subscribe({
      next: (res) => {
        this.stores = res;
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  openModal(store: FakeStore): void {
    this.selectedStore = store;
    console.log(this.selectedStore);  // Add this line to debug
  }
  

  closeModal(): void {
    this.selectedStore = null;
  }
}
