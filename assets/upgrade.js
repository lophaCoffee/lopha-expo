
/* LOPHA Expo – Curated images, storytelling and interaction update. */
(function(){
'use strict';
const AI={
 gate1:'ai/cong-1.webp',gate2:'ai/cong-2.webp',
 nuts:'ai/gian-hang-1.webp',tea:'ai/gian-hang-2.webp',
 coffee1:'ai/gian-hang-lopha-1.webp',coffee2:'ai/gian-hang-lopha-2.webp',
 fair1:'ai/khu-vuc-hoi-cho-1.webp',fair2:'ai/khu-vuc-hoi-cho-2.webp',
 fair3:'ai/khu-vuc-hoi-cho-3.webp',fair4:'ai/khu-vuc-hoi-cho-4.webp',
 fair5:'ai/khu-vuc-hoi-cho-5.webp',fair6:'ai/khu-vuc-hoi-cho-6.webp',
 fair7:'ai/khu-vuc-hoi-cho-7.webp',fair8:'ai/khu-vuc-hoi-cho-8.webp',
 fair9:'ai/khu-vuc-hoi-cho-9.webp',
 aerial1:'ai/khu-vuc-hoi-cho-nhin-tu-tren-cao-1.webp',
 aerial2:'ai/khu-vuc-hoi-cho-nhin-tu-tren-cao-2.webp',
 vip1:'ai/khu-vuc-vip-1.webp',vip2:'ai/khu-vuc-vip-2.webp'
};
const old={
 home:home,about:about,industries:industries,mapPage:mapPage,experiential:experiential,
 galleryPage:galleryPage,business:business,contact:contact,navigate:navigate,switchSlide:switchSlide
};
const categories=[AI.fair3,AI.fair9,AI.tea,AI.fair1,AI.nuts,AI.fair8,AI.fair3,AI.fair7,AI.fair6,AI.fair4];
cats.forEach(function(c,i){c.img=categories[i]});

const curated=[
 {file:AI.gate1,title:'Cổng chính LOPHA Expo – phối cảnh ban đêm',tag:'Cổng vào · AI',type:'gate'},
 {file:AI.gate2,title:'Cổng vào nhìn từ bên đường',tag:'Cổng vào · AI',type:'gate'},
 {file:AI.aerial1,title:'Toàn tuyến tham quan nhìn từ trên cao',tag:'Toàn cảnh · AI',type:'fair'},
 {file:AI.aerial2,title:'Phối cảnh tuyến hội chợ từ trên cao',tag:'Toàn cảnh · AI',type:'fair'},
 {file:AI.fair7,title:'Trục hội chợ rực sáng với các gian hàng',tag:'Khu hội chợ · AI',type:'fair'},
 {file:AI.fair6,title:'Không gian trải nghiệm hội chợ',tag:'Khu hội chợ · AI',type:'fair'},
 {file:AI.fair9,title:'Các vòm trang trí và trục tham quan',tag:'Khu hội chợ · AI',type:'fair'},
 {file:AI.fair3,title:'Dãy gian hàng nông sản và khách tham quan',tag:'Khu hội chợ · AI',type:'fair'},
 {file:AI.fair2,title:'Cổng vòm đầu tuyến',tag:'Khu hội chợ · AI',type:'fair'},
 {file:AI.fair1,title:'Dãy gian hàng nhìn xiên',tag:'Khu hội chợ · AI',type:'fair'},
 {file:AI.fair4,title:'Không gian giữa hai dãy gian hàng',tag:'Khu hội chợ · AI',type:'fair'},
 {file:AI.fair5,title:'Lối đi và dãy vòm trang trí',tag:'Khu hội chợ · AI',type:'fair'},
 {file:AI.fair8,title:'Lối tham quan và không khí hội chợ',tag:'Khu hội chợ · AI',type:'fair'},
 {file:AI.nuts,title:'Gian hàng mẫu – sản phẩm hạt dinh dưỡng',tag:'Gian hàng · AI',type:'booth'},
 {file:AI.tea,title:'Gian hàng mẫu – trà và thảo mộc',tag:'Gian hàng · AI',type:'booth'},
 {file:AI.coffee1,title:'Không gian trải nghiệm LOPHA Coffee',tag:'LOPHA Coffee · AI',type:'experience'},
 {file:AI.coffee2,title:'Bên trong không gian LOPHA Coffee',tag:'LOPHA Coffee · AI',type:'experience'},
 {file:AI.vip1,title:'Không gian trải nghiệm mỹ phẩm – ý tưởng',tag:'VIP KOC · AI',type:'experience'},
 {file:AI.vip2,title:'Gian trải nghiệm VIP và KOC',tag:'VIP KOC · AI',type:'experience'}
];
const originals=PHOTO.map(function(p){return Object.assign({},p,{tag:'Phối cảnh mô phỏng R14',type:'plan'})});
PHOTO.splice(0,PHOTO.length,...curated,...originals);

function replaceAssets(html,changes){
 return Object.keys(changes).reduce(function(s,key){
   return s.split('assets/'+key).join('assets/'+changes[key]);
 },html);
}
const heroMeta=[
 {file:AI.gate1,label:'Lối vào · Điểm khởi đầu hành trình',alt:'Phối cảnh AI cổng hội chợ với hai bảng LED và trục vòm phía trong'},
 {file:AI.fair7,label:'Trải nghiệm · Một tuyến tham quan nhiều sắc màu',alt:'Phối cảnh AI không gian hội chợ nhộn nhịp buổi tối'},
 {file:AI.aerial1,label:'Toàn cảnh · Không gian từ trên cao',alt:'Phối cảnh AI tổng thể hội chợ nhìn từ trên cao'},
 {file:AI.coffee1,label:'LOPHA Coffee · Điểm dừng cuối tuyến',alt:'Phối cảnh AI khu vực trải nghiệm LOPHA Coffee'},
 {file:AI.fair9,label:'Vòm ánh sáng · Nhịp điệu hội chợ',alt:'Phối cảnh AI dãy cổng vòm sáng đèn'},
 {file:AI.vip2,label:'Góc trải nghiệm · Không gian VIP KOC',alt:'Phối cảnh AI không gian VIP KOC'}
];
function heroView(){
 return [
 '<section class="hero hero-upgraded" aria-label="Hình ảnh giới thiệu hội chợ">',
 heroMeta.map(function(p,i){
   return '<div class="hero-slide'+(i===0?' active':'')+'" role="img" aria-label="'+escapeHtml(p.alt)+'" style="background-image:url('+A+p.file+')"></div>';
 }).join(''),
 '<div class="container hero-content">',
 tag('LOPHA EXPO · KHÁM PHÁ NÔNG SẢN VIỆT'),
 '<h1>Khám phá tinh hoa<br><em>nông sản Việt.</em></h1>',
 '<p>Hành trình khám phá giữa các gian hàng nông sản, không gian trải nghiệm, khu giới thiệu thương hiệu và những điểm dừng mang dấu ấn LOPHA Coffee. Một góc nhìn sinh động về phương án hội chợ tại 45 Đinh Tiên Hoàng.</p>',
 '<div class="hero-actions">',
 button('Khám phá hội chợ','gioi-thieu','btn gold'),
 button('Xem 37 vị trí gian hàng','so-do','btn darkoutline'),
 '</div><span class="hero-slide-copy" id="heroSlideCopy">'+heroMeta[0].label+'</span>',
 '</div>',
 '<aside class="hero-side-card" aria-label="Quy mô phương án hội chợ"><span class="kicker">PHƯƠNG ÁN KHÔNG GIAN R14</span>',
 '<strong>37 gian hàng</strong><small>10 nhóm ngành nông sản · hai dãy trưng bày</small>',
 '<span class="rule"></span><p>8 vòm trang trí · Khu VIP/KOC · LOPHA Coffee cuối tuyến</p></aside>',
 '<div class="container hero-controls"><div class="dots">',
 heroMeta.map(function(p,i){return '<button class="dot'+(i===0?' active':'')+'" data-slide="'+i+'" aria-label="Xem ảnh '+(i+1)+'" type="button"></button>';}).join(''),
 '<span class="hero-number" id="heroNumber">01 / 06</span></div>',
 '<div class="hero-control-right">',
 '<button class="slide-arrow" data-step="-1" aria-label="Ảnh trước">‹</button>',
 '<button class="slide-arrow" data-step="1" aria-label="Ảnh tiếp theo">›</button>',
 '<button class="slide-arrow pause-toggle" id="heroPause" aria-label="Tạm dừng ảnh tự chuyển" aria-pressed="false" title="Tạm dừng / phát tự động">Ⅱ</button>',
 '</div></div></section>'
 ].join('');
}
function storyTile(file,index,title,desc,large){
 return '<button type="button" class="story-tile'+(large?' large':'')+'" data-go="thu-vien" aria-label="Xem hình ảnh: '+escapeHtml(title)+'">'
   +img(file,title)
   +'<span class="story-arrow">↗</span>'
   +'<span class="story-info"><small>'+index+'</small><strong>'+title+'</strong><span>'+desc+'</span></span></button>';
}
function storyView(){
 return '<section class="visual-story"><div class="container">'
  +'<div class="section-head"><div>'+tag('MỘT GÓC NHÌN KHÁC')+'<h2>Hội chợ qua từng<br>khung hình</h2></div>'
  +'<p>Khám phá góc nhìn tổng quan, nhịp sống giữa các gian hàng và những không gian trải nghiệm được dựng từ phối cảnh ý tưởng.</p></div>'
  +'<div class="story-grid">'
  +storyTile(AI.aerial1,'01 / TỪ TRÊN CAO','Toàn cảnh hội chợ','Nhìn rõ tuyến tham quan và không gian trưng bày',true)
  +storyTile(AI.fair3,'02 / DÃY GIAN HÀNG','Nhịp sống hội chợ','Nông sản, hoạt động giới thiệu và những cuộc gặp gỡ',false)
  +storyTile(AI.coffee2,'03 / LOPHA COFFEE','Điểm dừng cà phê','Trưng bày, thưởng thức và kết nối',false)
  +storyTile(AI.vip2,'04 / KHU TRẢI NGHIỆM','Không gian VIP KOC','Một khu vực giới thiệu sản phẩm riêng biệt',false)
  +storyTile(AI.gate2,'05 / LỐI VÀO','Dấu ấn đầu tiên','Hai màn hình LED và trục vòm bên trong',false)
  +'</div><p class="image-note" style="color:#d9d3c9;margin-top:15px">Hình AI minh họa ý tưởng từ phối cảnh R14; không phải ảnh chụp sự kiện thực tế.</p>'
  +'</div></section>';
}
function pathwaysView(){
 return '<div class="pathways">'
  +'<button class="pathway" data-go="nganh-hang"><span class="path-number">01</span><span><strong>Chọn nhóm ngành</strong><small>Khám phá 10 ngành hàng trưng bày →</small></span></button>'
  +'<button class="pathway" data-go="so-do"><span class="path-number">02</span><span><strong>Tra cứu vị trí</strong><small>Xem mã gian L01–L15 và R01–R22 →</small></span></button>'
  +'<button class="pathway" data-go="lien-he"><span class="path-number">03</span><span><strong>Kết nối và trao đổi</strong><small>Gửi thông tin bạn đang quan tâm →</small></span></button>'
  +'</div>';
}
const faqs=[
 ['LOPHA Expo có những nhóm ngành nào?','Phương án R14 bao gồm 10 nhóm: trái cây tươi, gạo và ngũ cốc, trà và thảo mộc, gia vị, hạt dinh dưỡng, mật ong, ca cao và sô cô la, trái cây sấy, rau củ, cùng giống và vật tư nông nghiệp.'],
 ['Có bao nhiêu gian hàng, diện tích bao nhiêu?','Có 37 gian tiêu chuẩn, mỗi gian 3 × 3 m (9 m²). Dãy trái gồm L01–L15; dãy phải gồm R01–R22. Ngoài ra có khu VIP KOC và khu vực LOPHA Coffee.'],
 ['Làm sao xem vị trí gian hàng?','Chọn mục Sơ đồ gian hàng, nhập mã L01–L15 hoặc R01–R22, hoặc lọc theo ngành hàng. Sơ đồ trên website phục vụ tham khảo bố cục R14, không thay thế bản vẽ thi công.'],
 ['Đã có lịch tổ chức, giá thuê và thông tin gian còn trống chưa?','Website giới thiệu phương án không gian. Ngày tổ chức, phí thuê và tình trạng từng gian chưa được xác nhận trên đây; vui lòng liên hệ đầu mối phụ trách để được cập nhật khi thông tin chính thức sẵn có.'],
 ['Gửi thông tin liên hệ bằng cách nào?','Tại mục Liên hệ, điền thông tin và nhấn Soạn email liên hệ. Ứng dụng email trên thiết bị sẽ mở ra; bạn cần xác nhận gửi để hoàn tất. Website chưa có chức năng tiếp nhận biểu mẫu tự động.']
];
function faqView(){
 return '<section class="faq-block"><div class="container faq-layout"><div>'
  +tag('CÂU HỎI THƯỜNG GẶP')+'<h2 class="big">Thông tin rõ ràng,<br>khám phá dễ dàng.</h2>'
  +'<p class="faq-subline">Các thông tin dưới đây phản ánh phương án không gian R14. Những chi tiết tổ chức sự kiện sẽ chỉ được bổ sung khi có xác nhận chính thức.</p>'
  +button('Liên hệ tìm hiểu','lien-he','btn outline')
  +'</div><div class="faq-list">'
  +faqs.map(function(q,i){return '<details'+(i===0?' open':'')+'><summary>'+q[0]+'</summary><p>'+q[1]+'</p></details>';}).join('')
  +'</div></div></section>';
}

home=function(){
 var result=old.home();
 result=result.replace(/<section class="hero">[\s\S]*?<\/section>/,heroView());
 result=replaceAssets(result,{
  'Night_750.jpg':AI.fair5,'Encoded_09.jpg':AI.vip2,'Encoded_10.jpg':AI.coffee1,
  'Night_425.jpg':AI.gate2,'Day_150.jpg':AI.aerial2
 });
 result=result.replace('<section class="editorial">',storyView()+'<section class="editorial">');
 result=result.replace('<div class="cat-grid">','<div class="cat-grid">');
 result=result.replace('</section><section class="banner-split">','</section><section class="banner-split">');
 result+= '<section class="section"><div class="container"><div class="section-head"><div>'+tag('BẮT ĐẦU KHÁM PHÁ')+'<h2>Ba bước, một hành trình<br>kết nối dễ dàng</h2></div><p>Từ điều bạn quan tâm tới đúng vị trí trên sơ đồ chỉ trong vài thao tác.</p></div>'+pathwaysView()+'</div></section>'+faqView();
 return result;
};
about=function(){
 var result=replaceAssets(old.about(),{'Day_150.jpg':AI.aerial1,'Day_1175.jpg':AI.fair3,'Night_150.jpg':AI.fair7});
 return result+'<section class="section"><div class="container"><div class="section-head"><div>'+tag('KHÔNG GIAN HỘI CHỢ')+'<h2>Quan sát từ nhiều góc nhìn</h2></div><p>Phối cảnh AI giúp dễ hình dung không gian, còn vị trí và diện tích các gian cần đối chiếu với hồ sơ R14.</p></div><div class="story-grid">'+storyTile(AI.aerial2,'01','Nhìn từ trên cao','Bố cục toàn tuyến',true)+storyTile(AI.gate1,'02','Cổng chào','Điểm khởi đầu',false)+storyTile(AI.fair8,'03','Dãy gian hàng','Không gian tham quan',false)+storyTile(AI.vip2,'04','Khu trải nghiệm','Tương tác và giới thiệu',false)+storyTile(AI.coffee1,'05','LOPHA Coffee','Điểm dừng cuối tuyến',false)+'</div></div></section>';
};
industries=function(){
 return replaceAssets(old.industries(),{'Encoded_05.jpg':AI.fair3,'Day_1175.jpg':AI.fair4});
};
mapPage=function(){
 var result=replaceAssets(old.mapPage(),{'Day_1500.jpg':AI.aerial2});
 return result+'<section class="section" style="background:#f1ebdf"><div class="container two-col"><div><span class="eyebrow dark">PHỐI CẢNH TỔNG THỂ</span><h2 class="big">Đặt vị trí gian hàng vào một không gian dễ hình dung.</h2><p>Phối cảnh AI thể hiện không khí hội chợ và tuyến tham quan. Sơ đồ tương tác phía trên phục vụ tra cứu mã gian, không phải bản vẽ kích thước hay xác nhận gian còn trống.</p>'+button('Xem toàn bộ hình ảnh','thu-vien','btn outline')+'</div>'+img(AI.aerial2,'Phối cảnh AI nhìn từ trên cao')+'</div></section>';
};
experiential=function(){
 var result=replaceAssets(old.experiential(),{
 'Night_750.jpg':AI.fair5,'Night_425.jpg':AI.gate1,
 'Encoded_09.jpg':AI.vip1,'Encoded_10.jpg':AI.coffee1,'Night_150.jpg':AI.fair6
 });
 return result+'<section class="section"><div class="container"><div class="section-head"><div>'+tag('GÓC NHÌN TRẢI NGHIỆM')+'<h2>Không gian được kể bằng hình ảnh</h2></div></div><div class="experience-grid"><article class="exp-card">'+img(AI.gate2,'Cổng vào LOPHA Expo')+'<div><span>01 / CỔNG VÀO</span><h3>Không gian chào đón</h3><p>Điểm khởi đầu với hai vị trí màn hình LED chữ V.</p></div></article><article class="exp-card">'+img(AI.vip2,'Gian trải nghiệm VIP KOC')+'<div><span>02 / KHU VIP</span><h3>Trải nghiệm sản phẩm</h3><p>Khu gian riêng trong phương án R14, hướng tới hoạt động tương tác và tư vấn.</p></div></article><article class="exp-card">'+img(AI.coffee2,'Bên trong LOPHA Coffee')+'<div><span>03 / CUỐI TRỤC</span><h3>LOPHA Coffee</h3><p>Điểm dừng trưng bày và thưởng thức cà phê.</p></div></article></div></div></section>';
};
galleryPage=function(){
 return pageHero('Thư viện hình ảnh<br>LOPHA Expo','Khám phá 19 phối cảnh AI chọn lọc và các hình ảnh mô phỏng kỹ thuật R14, theo từng khu vực và góc nhìn.',AI.aerial1,'THƯ VIỆN')
 +'<section class="section"><div class="container"><div class="section-head"><div>'+tag('BỘ HÌNH ẢNH CHỌN LỌC')+'<h2>Khám phá hội chợ<br>qua từng khung hình</h2></div><p>Chọn ảnh để phóng lớn. Dùng các nút lọc hoặc phím mũi tên để xem những góc khác nhau.</p></div>'
 +'<div class="chips gallery-tabs" id="galleryTabs">'
 +'<button class="chip active" data-gallery="all">Tất cả</button>'
 +'<button class="chip" data-gallery="gate">Cổng vào</button>'
 +'<button class="chip" data-gallery="fair">Không gian hội chợ</button>'
 +'<button class="chip" data-gallery="booth">Gian hàng mẫu</button>'
 +'<button class="chip" data-gallery="experience">VIP & LOPHA</button>'
 +'<button class="chip" data-gallery="plan">Phối cảnh R14 gốc</button>'
 +'</div><div class="gallery-headline"><span id="galleryCount">33 hình ảnh</span><span>Chọn ảnh để phóng to ↗</span></div>'
 +'<div class="gallery-grid" id="galleryGrid">'+galleryCards(PHOTO)+'</div>'
 +'<p class="image-note">19 hình AI minh họa được tạo dựa trên phối cảnh R14, mang tính ý tưởng, không phản ánh tình trạng thi công hay sự kiện đã diễn ra. Bộ phối cảnh mô phỏng R14 gốc được giữ riêng để đối chiếu.</p>'
 +'</div></section>';
};
business=function(){
 var result=replaceAssets(old.business(),{'Encoded_06.jpg':AI.nuts,'Day_1500.jpg':AI.tea,'Night_1100.jpg':AI.fair1});
 return result+'<section class="section"><div class="container"><div class="section-head"><div>'+tag('CHỌN VỊ TRÍ')+'<h2>Tra cứu theo ngành,<br>kết nối theo nhu cầu</h2></div></div>'+pathwaysView()+'</div></section>'+faqView();
};
contact=function(){
 return replaceAssets(old.contact(),{'Night_425.jpg':AI.gate2});
};
routes['trang-chu']=home;
routes['gioi-thieu']=about;
routes['nganh-hang']=industries;
routes['so-do']=mapPage;
routes['trai-nghiem']=experiential;
routes['thu-vien']=galleryPage;
routes['doanh-nghiep']=business;
routes['lien-he']=contact;

var heroPaused=false;
switchSlide=function(i){
 old.switchSlide(i);
 var text=document.getElementById('heroSlideCopy');
 if(text) text.textContent=heroMeta[heroIndex].label;
 var slides=document.querySelectorAll('.hero-upgraded .hero-slide');
 slides.forEach(function(slide,j){slide.setAttribute('aria-hidden',String(j!==heroIndex))});
};
function heroStart(){
 clearInterval(heroTimer);
 heroTimer=null;
 if(activeRoute==='trang-chu'&&!heroPaused&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches&&!document.hidden){
   heroTimer=setInterval(function(){switchSlide(heroIndex+1)},6600);
 }
}
function addMotion(){
 if(!('IntersectionObserver' in window)||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
 document.body.classList.add('js-motion');
 var nodes=document.querySelectorAll('#main .section-head,#main .cat-card,#main .exp-card,#main .story-tile,#main .step,#main .catalog-item,#main .pathway,#main .feature,#main .faq-layout > div');
 var observer=new IntersectionObserver(function(entries){
  entries.forEach(function(entry){
   if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}
  });
 },{threshold:0.04,rootMargin:'0px 0px -26px 0px'});
 nodes.forEach(function(el){el.classList.add('reveal');observer.observe(el)});
}
function updateDock(){
 var dock=document.querySelector('.mobile-quicklinks');
 if(!dock)return;
 dock.querySelectorAll('button').forEach(function(b){b.classList.toggle('active',b.dataset.go===activeRoute)});
}
function enhancePage(){
 addMotion();
 updateDock();
 if(activeRoute==='trang-chu'){
  heroPaused=false;
  heroStart();
  switchSlide(0);
 }
 if(activeRoute==='thu-vien'){
  var count=document.getElementById('galleryCount');
  if(count) count.textContent=PHOTO.length+' hình ảnh';
 }
}
navigate=function(route,options){
 old.navigate(route,options||{});
 enhancePage();
};
var dock=document.createElement('div');
dock.className='mobile-quicklinks';
dock.setAttribute('aria-label','Lối tắt');
dock.innerHTML='<button data-go="trang-chu"><span>⌂</span>Trang chủ</button>'
 +'<button data-go="nganh-hang"><span>▦</span>Ngành hàng</button>'
 +'<button data-go="so-do"><span>▤</span>Sơ đồ</button>'
 +'<button data-go="lien-he"><span>✉</span>Liên hệ</button>';
document.body.appendChild(dock);
var scrolltop=document.createElement('button');
scrolltop.className='scrolltop';
scrolltop.type='button';
scrolltop.setAttribute('aria-label','Lên đầu trang');
scrolltop.textContent='↑';
document.body.appendChild(scrolltop);
scrolltop.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'})});
function syncScroll(){
 document.querySelector('.site-header').classList.toggle('scrolled',window.scrollY>18);
 scrolltop.classList.toggle('show',window.scrollY>420);
}
window.addEventListener('scroll',syncScroll,{passive:true});
syncScroll();
document.addEventListener('click',function(e){
 var pause=e.target.closest('#heroPause');
 if(pause){
  heroPaused=!heroPaused;
  if(heroPaused){clearInterval(heroTimer);heroTimer=null}else{heroStart()}
  pause.textContent=heroPaused?'▶':'Ⅱ';
  pause.setAttribute('aria-pressed',String(heroPaused));
  pause.setAttribute('aria-label',heroPaused?'Tiếp tục tự chuyển ảnh':'Tạm dừng ảnh tự chuyển');
 }
 if(e.target.closest('[data-gallery]')){
  requestAnimationFrame(function(){
   var c=document.getElementById('galleryCount');
   if(c)c.textContent=document.querySelectorAll('#galleryGrid .gallery-item').length+' hình ảnh';
  });
 }
});
document.addEventListener('visibilitychange',function(){
 if(document.hidden){clearInterval(heroTimer);heroTimer=null}
 else if(activeRoute==='trang-chu')heroStart();
});
var foot=document.querySelector('footer.footer');
if(foot&&!foot.querySelector('.footer-fineprint')){
 foot.insertAdjacentHTML('beforeend','<div class="footer-fineprint">Hình ảnh AI trên website minh họa phương án thiết kế R14; thông tin sự kiện và triển khai thực tế cần được xác nhận chính thức.</div>');
}
navigate(location.hash.slice(1)||'trang-chu',{noHash:true,keepScroll:true});
})();
