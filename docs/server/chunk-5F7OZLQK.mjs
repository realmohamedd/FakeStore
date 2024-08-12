import './polyfills.server.mjs';
import{B as y,D as I,E as k,F,G as E,H as z,I as j,J as T,M as V,S as H,T as A,a as S,b as P,c as g,d as b,e as v,f as C,g as h,h as r,i as w,j as _,k as d,l as c,m as a,n as l,o as M,p as O,q as u,r as s,s as m,t as f,u as x}from"./chunk-3YQAGB7R.mjs";var R=(()=>{let t=class t{constructor(o){this._HttpClient=o}getMovies(){return this._HttpClient.get("https://fakestoreapi.com/products")}};t.\u0275fac=function(i){return new(i||t)(P(E))},t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function G(e,t){if(e&1){let n=M();c(0,"div",4)(1,"div",5)(2,"img",6),O("click",function(){let i=v(n).$implicit,p=u();return C(p.openModal(i))}),a(),c(3,"div",7)(4,"h5",8),s(5),a(),c(6,"p",9),l(7,"i",10),s(8),a(),c(9,"p",11),s(10),a(),c(11,"h4",12),s(12),a(),c(13,"div",13)(14,"div")(15,"span",14),l(16,"i",15),s(17),a()(),c(18,"div",16),l(19,"i",17),c(20,"span"),s(21),a()()()()()()}if(e&2){let n=t.$implicit;r(2),d("src",n.image,h)("alt",n.title),r(3),m(n.title),r(3),f(" ",n.category," "),r(2),f(" ",n.description.split(" ").slice(0,10).join(" ")," "),r(2),f(" price: $",n.price," "),r(5),f(" ",n.rating.rate," "),r(4),m(n.rating.count)}}function J(e,t){if(e&1){let n=M();c(0,"div",18)(1,"div",19)(2,"div",20)(3,"i",21),O("click",function(){v(n);let i=u();return C(i.closeModal())}),a(),l(4,"img",22),a(),c(5,"div",23)(6,"h2"),s(7),a(),c(8,"p"),s(9),a()()()()}if(e&2){let n=u();r(4),d("src",n.selectedStore.image,h),r(3),m(n.selectedStore.title),r(2),m(n.selectedStore.description)}}var $=(()=>{let t=class t{constructor(o){this._FaceStoreService=o,this.stores=[],this.selectedStore=null}ngOnInit(){this._FaceStoreService.getMovies().subscribe({next:o=>{this.stores=o,console.log(o)},error:o=>{console.log(o)}})}openModal(o){this.selectedStore=o,console.log(this.selectedStore)}closeModal(){this.selectedStore=null}};t.\u0275fac=function(i){return new(i||t)(w(R))},t.\u0275cmp=g({type:t,selectors:[["app-store"]],standalone:!0,features:[x],decls:4,vars:2,consts:[[1,"container","mt-5"],[1,"row","g-3"],["class","col-md-4",4,"ngFor","ngForOf"],["class","custom-modal mx-auto ",4,"ngIf"],[1,"col-md-4"],[1,"card","product-card","h-100"],[1,"card-img-top","product-image",3,"click","src","alt"],[1,"card-body","product-details"],[1,"card-title","product-title"],[1,"text-muted","mb-2","product-category"],[1,"fas","fa-tags"],[1,"card-text","product-description"],[1,"text-primary","mb-3","product-price"],[1,"d-flex","justify-content-between","align-items-center","product-rating"],[1,"text-warning","rating-value"],[1,"fas","fa-star"],[1,"text-muted","rating-count"],[1,"fas","fa-users"],[1,"custom-modal","mx-auto"],[1,"custom-modal-content","d-flex"],[1,"me-3"],[1,"fa-regular","fa-circle-xmark","close-button",3,"click"],["alt","Full Image",1,"img-fluid","h-100",3,"src"],[1,"modal-details"]],template:function(i,p){i&1&&(c(0,"div",0)(1,"div",1),_(2,G,22,8,"div",2),a()(),_(3,J,10,3,"div",3)),i&2&&(r(2),d("ngForOf",p.stores),r(),d("ngIf",p.selectedStore))},dependencies:[F,I,k],styles:["body[_ngcontent-%COMP%]{font-family:Arial,sans-serif;margin:0;padding:0;background-color:#f4f4f4}.product-card[_ngcontent-%COMP%]{background-color:#fff;border-radius:10px;box-shadow:0 4px 8px #0000001a;overflow:hidden;display:flex;flex-direction:column;transition:transform .3s ease,box-shadow .3s ease}.product-card[_ngcontent-%COMP%]:hover{transform:translateY(-10px);box-shadow:0 8px 16px #0003}.product-image[_ngcontent-%COMP%]{width:100%;height:400px;object-fit:cover;transition:transform .3s ease;cursor:pointer}.product-card[_ngcontent-%COMP%]:hover   .product-image[_ngcontent-%COMP%]{transform:scale(1.1)}.product-details[_ngcontent-%COMP%]{padding:20px;flex:1}.product-title[_ngcontent-%COMP%]{font-size:1.5rem;margin:10px 0;color:#333;transition:color .3s ease}.product-card[_ngcontent-%COMP%]:hover   .product-title[_ngcontent-%COMP%]{color:#e67e22}.product-category[_ngcontent-%COMP%]{font-size:.9rem;color:#777;margin-bottom:10px}.product-description[_ngcontent-%COMP%]{font-size:1rem;color:#555;margin-bottom:20px}.product-price[_ngcontent-%COMP%]{font-size:1.3rem;color:#e67e22;margin-bottom:15px}.product-rating[_ngcontent-%COMP%]{font-size:1rem;color:#333;margin-top:auto}.rating-value[_ngcontent-%COMP%]{font-weight:700}.rating-count[_ngcontent-%COMP%]{color:#777;margin-left:5px}.rating-value[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{text-shadow:0 1px 3px rgba(0,0,0,.3)}.product-title[_ngcontent-%COMP%]:hover{text-decoration:underline}.product-card[_ngcontent-%COMP%], .product-image[_ngcontent-%COMP%], .product-title[_ngcontent-%COMP%]{transition:all .3s ease}.custom-modal[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;position:fixed;inset:0;background-color:#00f3;z-index:9999}.custom-modal-content[_ngcontent-%COMP%]{position:relative;max-width:100vh;max-height:100vh}.custom-modal-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto}.close-button[_ngcontent-%COMP%]{position:absolute;top:10px;right:20px;font-size:60px;font-weight:700;color:#fff;cursor:pointer}.modal-details[_ngcontent-%COMP%]{margin-top:20px}.close-button[_ngcontent-%COMP%]{position:absolute;top:10px;right:20px;font-size:40px;font-weight:700;color:#000;cursor:pointer;transition:color .3s ease}.close-button[_ngcontent-%COMP%]:hover{color:#e67e22}.custom-modal-content[_ngcontent-%COMP%]{position:relative;max-width:90%;max-height:80%;background-color:#fff;padding:20px;border-radius:10px;overflow:hidden}"]});let e=t;return e})();var N=(()=>{let t=class t{constructor(){this.title="FakeStore"}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=g({type:t,selectors:[["app-root"]],standalone:!0,features:[x],decls:1,vars:0,template:function(i,p){i&1&&l(0,"app-store")},dependencies:[$]});let e=t;return e})();var U=[];var Y={providers:[H(U,A({scrollPositionRestoration:"top"})),T(),b(z)]};var K={providers:[V()]},q=y(Y,K);var L=()=>j(N,q),xt=L;export{xt as a};