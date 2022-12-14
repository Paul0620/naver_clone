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
var contents = $(".news-items");
var contentsLength = contents.length;
var currentNumber = 1;

$(".news-event-button").on("click", function (event) {
  var type =
    event.target.className.split(" ")[
      event.target.className.split(" ").length - 1
    ];

  //  이전 버튼
  if (type === "prev") {
    if (currentNumber === 1) return;
    var currentItem =
      contents[currentNumber - 1].className.split(" ")[
        contents[currentNumber - 1].className.split(" ").length - 1
      ];
    var prevItem =
      contents[currentNumber - 2].className.split(" ")[
        contents[currentNumber - 2].className.split(" ").length - 1
      ];
    $(`.${currentItem}`).hide();
    $(`.${prevItem}`).show();
    currentNumber -= 1;
  }

  // 다음 버튼
  if (type === "next") {
    if (currentNumber === 4) return;
    var currentItem =
      contents[currentNumber - 1].className.split(" ")[
        contents[currentNumber - 1].className.split(" ").length - 1
      ];
    var nextItem =
      contents[currentNumber].className.split(" ")[
        contents[currentNumber].className.split(" ").length - 1
      ];
    $(`.${currentItem}`).hide();
    $(`.${nextItem}`).show();
    currentNumber += 1;
  }

  // 내용 위치에 따른 버튼 존재 유무
  if (currentNumber === 1) {
    $(".prev-button").hide();
  } else {
    $(".prev-button").show();
  }
  if (currentNumber === 4) {
    $(".next-button").hide();
  } else {
    $(".next-button").show();
  }
});
