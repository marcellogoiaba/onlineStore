import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from '../app/components/store/store.component';
import { ProductDetailComponent } from '../app/components/product-detail/product-detail.component';
import { ContactComponent } from '../app/components/contact/contact.component';
import { GalleryComponent } from '../app/components/gallery/gallery.component';
const routes: Routes = [
  { path: '', redirectTo: '/store', pathMatch: 'full' },
  { path: 'store', component: StoreComponent },
  { path: 'productDetail', component: ProductDetailComponent },
  { path: 'contact' , component: ContactComponent},
  { path: 'gallery' , component: GalleryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
