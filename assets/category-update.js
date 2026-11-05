/* LOPHA Expo: 10 anh nhom nganh tren trang chu; giu nguyen tinh nang cac trang khac. */
(function(){
  'use strict';
  const CATEGORY_ASSETS_READY = true;
  const files=[
    '01_Trai_cay_tuoi.webp',
    '02_Gao_va_ngu_coc.webp',
    '03_Tra_va_thao_moc.webp',
    '04_Gia_vi_xuat_khau.webp',
    '05_Hat_dinh_duong.webp',
    '06_Mat_ong.webp',
    '07_Ca_cao_va_so_co_la.webp',
    '08_Trai_cay_say.webp',
    '09_Rau_cu.webp',
    '10_Giong_va_vat_tu_nong_nghiep.webp'
  ];
  function applyHomepageCategoryImages(){
    if(!CATEGORY_ASSETS_READY)return;
    if(typeof activeRoute==='undefined' || activeRoute!=='trang-chu')return;
    const cards=Array.from(document.querySelectorAll('.cat-grid .cat-card'));
    if(cards.length!==10)return;
    cards.forEach((card,i)=>{
      const display=card.querySelector('.cat-photo img');
      if(!display)return;
      const source='assets/nhom-nganh/'+files[i];
      const probe=new Image();
      probe.onload=()=>{
        if(!display.isConnected)return;
        display.src=source;
        display.alt=(typeof cats!=='undefined'&&cats[i]?cats[i].name:'Gian hang')+' - phoi canh AI minh hoa';
        display.onerror=null;
        card.classList.add('category-art-updated');
      };
      probe.onerror=()=>{}; // Neu chua copy anh, website giu anh dai dien cu.
      probe.src=source;
    });
  }
  const previousNavigate=navigate;
  navigate=function(route,options){
    previousNavigate(route,options);
    applyHomepageCategoryImages();
  };
  applyHomepageCategoryImages();
  window.LOPHAExpoRefreshCategoryImages=applyHomepageCategoryImages;
})();
