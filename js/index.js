const mainName = document.querySelector('#main-name');
const trees = document.querySelector('#trees');
const homeTag = document.querySelector('#home-tag');
const homeTitle = document.querySelector('.home-title');

const lighthouse2 = document.querySelector('.lighthouse2');
const aboutContent = document.querySelector('.about-content');
const aboutLeft = document.querySelector('.about-left');
const flower = document.querySelector('.flower');
const globe = document.querySelector('.globe');
const stoneColumn = document.querySelector('.stone-column');

const newsContent = document.querySelector('#news-content');
const vineBlock = document.querySelector('#vine-block');
const columnLeft = document.querySelector('#column-left');
const gearColumn = document.querySelector('#gear-column');
const columnRight = document.querySelector('#column-right');

const body = document.querySelector('body');
const swiperWrapper = document.querySelector('.swiper-wrapper');
const modalContainer = document.querySelector('.modal-container');
const closeBtn = document.querySelector('.close-btn');
const modalImg = document.querySelector('.modal-img');
const modalDate = document.querySelector('.modal-date');
const modalTitle = document.querySelector('.modal-title');
const modalText = document.querySelector('.modal-text');
// 最新消息內容(圖片路徑、發布日期、標題...)
const newsTextContent = [
  {number:0, img:'./img/section4/Frame 94.png', date:'2024/01/01', title:'1從古至今，每一個決定都有一個代價', text:'魔力，是由時間與意志結合的結果，但凡擁有時間者都擁有魔力，意即凡草木、禽獸皆擁有魔力，差別只在於時間與意志造成的純度以及強度差異。由於沒有能力，它們的魔力充斥於空氣中，使得人們以及靈獸——那少數能使用魔力的生物得以隨心借用。<br>魔力，是由時間與意志結合的結果，但凡擁有時間者都擁有魔力，意即凡草木、禽獸皆擁有魔力，差別只在於時間與意志造成的純度以及強度差異。由於沒有能力，它們的魔力充斥於空氣中，使得人們以及靈獸——那少數能使用魔力的生物得以隨心借用。'},
  {number:1, img:'./img/section4/Frame 95.png', date:'2024/01/02', title:'2從古至今，每一個決定都有一個代價', text:'魔力，是由時間與意志結合的結果，但凡擁有時間者都擁有魔力，意即凡草木、禽獸皆擁有魔力，差別只在於時間與意志造成的純度以及強度差異。由於沒有能力，它們的魔力充斥於空氣中，使得人們以及靈獸——那少數能使用魔力的生物得以隨心借用。'},
  {number:2, img:'./img/section4/Frame 94.png', date:'2024/01/03', title:'3從古至今，每一個決定都有一個代價', text:'魔力，是由時間與意志結合的結果，但凡擁有時間者都擁有魔力，意即凡草木、禽獸皆擁有魔力，差別只在於時間與意志造成的純度以及強度差異。由於沒有能力，它們的魔力充斥於空氣中，使得人們以及靈獸——那少數能使用魔力的生物得以隨心借用。'},
  {number:3, img:'./img/section4/Frame 95.png', date:'2024/01/04', title:'4從古至今，每一個決定都有一個代價', text:'魔力，是由時間與意志結合的結果，但凡擁有時間者都擁有魔力，意即凡草木、禽獸皆擁有魔力，差別只在於時間與意志造成的純度以及強度差異。由於沒有能力，它們的魔力充斥於空氣中，使得人們以及靈獸——那少數能使用魔力的生物得以隨心借用。<br>魔力，是由時間與意志結合的結果，但凡擁有時間者都擁有魔力，意即凡草木、禽獸皆擁有魔力，差別只在於時間與意志造成的純度以及強度差異。由於沒有能力，它們的魔力充斥於空氣中，使得人們以及靈獸——那少數能使用魔力的生物得以隨心借用。'},
  {number:4, img:'./img/section4/Frame 94.png', date:'2024/01/05', title:'5從古至今，每一個決定都有一個代價', text:'魔力，是由時間與意志結合的結果，但凡擁有時間者都擁有魔力，意即凡草木、禽獸皆擁有魔力，差別只在於時間與意志造成的純度以及強度差異。由於沒有能力，它們的魔力充斥於空氣中，使得人們以及靈獸——那少數能使用魔力的生物得以隨心借用。'},
  {number:5, img:'./img/section4/Frame 95.png', date:'2024/01/06', title:'6從古至今，每一個決定都有一個代價', text:'魔力，是由時間與意志結合的結果，但凡擁有時間者都擁有魔力，意即凡草木、禽獸皆擁有魔力，差別只在於時間與意志造成的純度以及強度差異。由於沒有能力，它們的魔力充斥於空氣中，使得人們以及靈獸——那少數能使用魔力的生物得以隨心借用。'},
];

const contentTag = document.querySelector('#content-tag');
const furnace = document.querySelector('.furnace');
const stoneStaff = document.querySelector('.stone-staff');
const stalactitesContainer = document.querySelector('.stalactites-container');
const pondContainer = document.querySelector('.pond-container');
const contentContainer = document.querySelector('.content-container');

// home動畫
const initObserver = new IntersectionObserver((entries) => {
  const entry = entries[0];
  if (!entry.isIntersecting) return;
    mainName.classList.add('move-y');
    trees.classList.add('move-y');
  initObserver.unobserve(entry.target);
});
window.addEventListener('load', () => {
  initObserver.observe(homeTitle);
});

// 關於動畫
const initObserverAbout = new IntersectionObserver((entries) => {
  const entry = entries[0];
  if (!entry.isIntersecting) return;
  aboutContent.classList.add('move-y');
  aboutLeft.classList.add('move-y');
  flower.classList.add('move-y');
  globe.classList.add('move-y');
  stoneColumn.classList.add('move-y');
  initObserverAbout.unobserve(entry.target);
});
window.addEventListener('load', () => {
  initObserverAbout.observe(lighthouse2);
});

// 最新消息動畫
const initObserverNews = new IntersectionObserver((entries) => {
  const entry = entries[0];
  if (!entry.isIntersecting) return;
  newsContent.classList.add('move-x');
  columnLeft.classList.add('move-y');
  gearColumn.classList.add('move-y');
  columnRight.classList.add('move-y');
  initObserverNews.unobserve(entry.target);
});
window.addEventListener('load', () => {
  initObserverNews.observe(vineBlock);
});

// 最新消息swiper卡片
newsTextContent.forEach( newsContent =>{
  swiperWrapper.innerHTML +=
  `<div class="swiper-slide" data-card="${newsContent.number}">
    <img class="card-img" src="${newsContent.img}" alt="最新消息圖示">
    <div class="card-title font-yellow">${newsContent.title}</div>
    <div class="card-text font-gray">${newsContent.text}</div>
  </div>`;
});

// 關閉modal
closeBtn.addEventListener('click', () =>{
  modalContainer.classList.add('hide');
  body.classList.remove('hide-scrollbar'); //開啟滾輪
});

// 開啟modal
const swiperSlide = document.querySelectorAll('.swiper-slide');
swiperSlide.forEach( swiperCard => {
  swiperCard.addEventListener('click', () =>{
    const num = swiperCard.dataset.card;

    modalImg.src = newsTextContent[num].img;
    modalDate.innerHTML = newsTextContent[num].date;
    modalTitle.innerHTML = newsTextContent[num].title;
    modalText.innerHTML = newsTextContent[num].text;

    modalContainer.classList.remove('hide');
    body.classList.add('hide-scrollbar'); //隱藏滾輪
  });
});

// footer動畫
const initObserverFooter = new IntersectionObserver((entries) => {
  const entry = entries[0];
  if (!entry.isIntersecting) return;
  furnace.classList.add('move-x');
  stoneStaff.classList.add('move-x');
  stalactitesContainer.classList.add('stalactites-move');
  pondContainer.classList.add('move-y');
  contentContainer.classList.add('move-y');
  initObserverFooter.unobserve(entry.target);
});
window.addEventListener('load', () => {
  initObserverFooter.observe(contentTag);
});

// 頭(首頁)和尾(footer)的parallax
document.addEventListener('DOMContentLoaded', function () {

  window.addEventListener('scroll', function () {
    scrollPosition = window.scrollY;

    // 首頁的樹
    const layer5Move = scrollPosition * 0.1;
    const layer4Move = scrollPosition * 0.1;
    const layer3Move = scrollPosition * 0.05;
    const layer2Move = scrollPosition * 0.08;
    const layer1Move = scrollPosition * 0.2;

    document.querySelector('.layer5').style.transform = `translateY(${layer5Move}px)`;
    document.querySelector('.layer4').style.transform = `translateY(${layer4Move}px)`;
    document.querySelector('.layer3').style.transform = `translateY(${layer3Move}px)`;
    document.querySelector('.layer2').style.transform = `translateY(${layer2Move}px)`;
    document.querySelector('.layer1').style.transform = `translateY(${layer1Move}px)`;

    // footer裝飾物件
    // const footer1Move = -scrollPosition * 0.025;
    const footer2Move = scrollPosition * 0.065;
    const footer3Move = scrollPosition * 0.067;
    
    // document.querySelector('.stone-staff').style.transform = `translateY(${footer1Move}px)`;
    document.querySelector('.stalactites').style.transform = `translateY(${footer2Move}px)`;
    document.querySelector('.pond').style.transform = `translateY(${footer3Move}px)`;
  });
});