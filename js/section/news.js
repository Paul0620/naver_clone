var newsData = [
  {
    name: "프레시안",
    img: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/002.png",
  },
  {
    name: "매일경제",
    img: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/009.png",
  },
  {
    name: "JTBC",
    img: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/904.png",
  },
  {
    name: "비즈니스워치",
    img: "https://s.pstatic.net/static/newsstand/up/2021/0329/nsd101654480.png",
  },
];

$(document).ready(function () {
  var newsContent = $(".news-content-innerbox");

  newsData.forEach(function (data, index) {
    var items = document.createElement("ul");
    items.className = "news-items news-items-" + (index + 1);

    newsContent.append(items);

    var newsItems = $(".news-items-" + (index + 1));

    for (var j = 0; j < 24; j++) {
      var item =
        "<li class='news-item'>\n" +
        "<a class='news-item-link' href='#'>\n" +
        "<img alt='" +
        data.name +
        "' class='news-item-logo' " +
        "loading='lazy' " +
        "src='" +
        data.img +
        "' />\n</a>\n" +
        "<div class='news-item-hover-box'>\n" +
        "<div>\n" +
        "<button class='news-item-hover-button'>구독</button>\n" +
        "<button class='news-item-hover-button'>기사보기</button>\n" +
        "</div>\n" +
        "</div>\n</li>";

      newsItems.append(item);
    }
  });
});

// 페이지 전환
var contentNumber = 1;
var totalContent = $(".news-items").length;

function nextContent() {
  if (totalContent === contentNumber) {
    return;
  }

  $(".news-items-" + contentNumber).hide();
  contentNumber += 1;
  $(".news-items-" + contentNumber).show();
}
