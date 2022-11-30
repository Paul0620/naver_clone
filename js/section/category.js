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
    playTime: "4:49",
  },
];

// 차트 목록
var musicData = [
  {
    rank: 1,
    title: "Birthday",
    singer: "Red Velvet (레드벨벳)",
    album: "'The ReVe Festival 2022 - Birthday'",
    img: "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fmusicmeta-phinf.pstatic.net%2Falbum%2F008%2F399%2F8399184.jpg%3Ftype%3Dr480Fll%26v%3D20221130101008%22&type=navermain_n96_96",
    status: "up", // 'down'
  },
];

// 메뉴바
$(document).ready(function () {
  var menuItems = $(".category-menu-items");

  menuData.forEach(function (item, idx) {
    var menuName;
    var selectItem;

    if (item.key === "subscribe") {
      menuName = item.name.replace(",", "<span></span>");
    } else {
      menuName = item.name;
    }

    if (idx === 0) {
      selectItem = "<button class='selected' type='button'>";
    } else {
      selectItem = "<button type='button'>";
    }

    var convertedItem =
      "<li class='category-menu-item'>" +
      selectItem +
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
      "<i></i>" +
      "<span class='play-time-box'>" +
      "<span>재생시간</span>" +
      "<span>" +
      vedioData[0].playTime +
      "</span>" +
      "</span>" +
      "<span class='thumb-cover'></span>" +
      "<span class='thumb-line'></span>" +
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

// 차트
$(document).ready(function () {
  var chartContent = $(".chart-content");

  for (var i = 1; i < 3; i++) {
    var items = document.createElement("ol");
    items.className = "chart-items items-0" + i;

    chartContent.append(items);
  }

  for (var i = 1; i < 3; i++) {
    var items = $(".items-0" + i);
    var plus = 0;
    var status;

    if (i === 2) {
      plus = 5;
    }

    for (var j = 1; j < 6; j++) {
      var rank = plus + j;

      if (rank === 5 || rank === 7 || rank === 10) {
        status =
          "<div class='status-up'>" +
          "<i><span class='blind'>상승</span></i>" +
          "</div>";
      } else if (rank === 8) {
        status =
          "<div class='status-down'>" +
          "<i><span class='blind'>하강</span></i>" +
          "</div>";
      } else {
        status = "<div></div>";
      }

      var item =
        "<li class='chart-item'>" +
        "<div class='chart-rank'>" +
        "<span>" +
        rank +
        "</span>" +
        status +
        "</div>" +
        "<div class='chart-info'>" +
        "<a class='chart-album' href='#'>" +
        "<img src='" +
        musicData[0].img +
        "' alt='" +
        musicData[0].title +
        "' />" +
        "<span class='thumb-line'></span>" +
        "</a>" +
        "<div>" +
        "<a class='chart-title' href='#'>" +
        musicData[0].title +
        "</a>" +
        "<span class='chart-description'>" +
        "<a href='#'>" +
        musicData[0].singer +
        "</a>" +
        "<a href='#'>" +
        musicData[0].album +
        "</a>" +
        "</span>" +
        "</div>" +
        "</div>" +
        "<div class='chart-play'>" +
        "<a href='#'>" +
        "<span class='blind'>재생</span>" +
        "</a>" +
        "<a href='#'>" +
        "<span class='blind'>가사</span>" +
        "</a>" +
        "</div>" +
        "</li>";

      items.append(item);
    }
  }
});
