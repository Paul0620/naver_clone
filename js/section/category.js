// 메뉴
var menuData = [
  { key: "entertainment", name: "엔터", bgColor: "#e65da0" },
  { key: "sports", name: "스포츠", bgColor: "#0147b5" },
  { key: "car", name: "자동차", bgColor: "#4a94e1" },
  { key: "webtoon", name: "웹툰", bgColor: "#66c971" },
  { key: "economy", name: "경제", bgColor: "#35ae5e" },
  { key: "subscribe", name: "추천,구독", bgColor: "#5290ff" },
  { key: "recipe", name: "레시피", bgColor: "#ebaa00" },
  { key: "living", name: "리빙", bgColor: "#c08d31" },
  { key: "bookstore", name: "책방", bgColor: "#4a94e1" },
  { key: "fashionBeauty", name: "패션뷰티", bgColor: "#8449ca" },
];

// issue 게시물
var issueData = [
  {
    isBig: true,
    name: "아무것도 하고 싶지 않아",
    title: "남 눈치 NO! 안곡 라이프 시작!",
    content: "김설현X임시완의 알콜향 나는 첫 만남",
    img: "https://s.pstatic.net/static/www/mobile/edit/20221125/cropImg_728x360_111314535713083445.jpeg",
    provider: "지니 TV",
    vedioTime: "4:11",
  },
  {
    isBig: false,
    name: "1899",
    title: "거대한 미스터리를 마주한 케르베로스호의 승객들",
    img: "https://s.pstatic.net/static/www/mobile/edit/20221125/cropImg_196x196_111314583002769173.jpeg",
    provider: "넷플릭스",
  },
  {
    isBig: false,
    name: "보물찾기",
    title: "전 자본주의라서 뒷통수 치거나 죽여야죠! 의리보다 5억",
    img: "https://s.pstatic.net/static/www/mobile/edit/20221125/cropImg_196x196_111314606521209155.jpeg",
    provider: "티빙",
  },
  {
    isBig: false,
    name: "3인칭 복수",
    title: "약속해 혼자 하지 않겠다고 찬미,수현 연대 시작!",
    img: "https://s.pstatic.net/static/www/mobile/edit/20221125/cropImg_196x196_111314644868463261.jpeg",
    provider: "디즈니+",
  },
];

// 비디오 게시물
var vedioData = [
  {
    category: "TV 예능",
    title: "‘백년의 약속’♪ 백 년을 못 잊을 바로 그 무대❤ TV CHOSUN 221123 방송",
    program: "복덩이들고(GO)",
    img: "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Ftvcast.phinf%2F20221124_49%2F1D55m_1669216012469b2qIM_JPEG%2FC202200138_3_202211230809151741.jpg%22&type=nf464_260",
  },
];

// 메뉴바
$(document).ready(function () {
  var menuItems = $(".category-menu-items");

  menuData.forEach(function (item) {
    var menuName;

    if (item.key === "subscribe") {
      menuName = item.name.replace(",", "<span></span>");
    } else {
      menuName = item.name;
    }

    var convertedItem =
      "<li class='category-menu-item'>" +
      "<button type='button'>" +
      menuName +
      "</button>" +
      "</li>";

    menuItems.append(convertedItem);
  });
});

// 비디오 목록
$(document).ready(function () {
  var vedioItems = $(".video-items");

  for (var i = 0; i < 9; i++) {
    var item =
      "<li class='video-item'>" +
      "<a href='#'>" +
      "<div class='video-item-imgbox'>" +
      "<img src='" +
      vedioData[0].img +
      "' alt='" +
      vedioData[0].program +
      "' />" +
      "<i>icon</i>" +
      "</div>" +
      "<div class='video-item-textbox'>" +
      "<div class='category'>TV 예능</div>" +
      "<div class='title'>" +
      vedioData[0].title +
      "</div>" +
      "<div class='provider'>" +
      "<span>" +
      vedioData[0].program +
      "</span>" +
      "<span>4일 전</span>" +
      "</div>" +
      "</div>" +
      "</a>" +
      "</li>";

    vedioItems.append(item);
  }
});
