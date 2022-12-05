// 스크롤 값 240 - header fixed 검색바로 변환
$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 240) {
    $(".header").addClass("fixed-header");
    $(".nav").addClass("nav-none");
    $(".main").addClass("main-mt");
  } else {
    $(".header").removeClass("fixed-header");
    $(".nav").removeClass("nav-none");
    $(".main").removeClass("main-mt");
  }
});

// 사이드바 스크롤 이벤트
var lastScrollTop = 0;
var lastScrollBottom = 0;

$(window).scroll(function () {
  var asideBottom = 36;
  var asideTop = 70;
  var sectionBottom = 27;
  var mainPt = 20;

  var scrollTop = $(window).scrollTop();
  var scrollBottom = $(window).scrollTop() + $(window).height();
  var asideBottomPosition =
    $(".aside").offset().top + $(".aside").outerHeight();
  var sectionBottomPosition =
    $(".section").offset().top + $(".section").outerHeight();

  var currentTopAside = $(".aside-area").offset().top;

  // console.log(scrollTop, currentTopAside);

  if (scrollTop === 0) {
    $(".aside").removeClass("fixed-bottom-aside");
    $(".aside").removeClass("fixed-top-aside");
    $(".aside").removeClass("absolute-aside");
    $(".aside").removeClass("stop-aside");
    $(".aside .aside-area").css("top", "auto").css("bottom", "auto");
  }

  /* 
    1. 사이드바 끝까지 도착하기 전까지는 중간에 스크롤을 올려도 변하는게 없다.
    2. 사이드바 끝에 도달하면 fixed-bottom-aside 추가
    3. 사이드바가 섹션 끝에 도달하면 fixed-bottom-aside 제거, stop-aside 추가
    4. fixed-bottom-aside일 때 스크롤을 위로 올린다면 fixed-bottom-aside 제거 absolute-aside 추가
    5. stop-aside일 때 스크롤을 위로 올릴 때 사이드바 상단에 도착하면 stop-aside 제거, fixed-top-aside 추가
    6. fixed~~ 클래스일 떄 위, 아래 끝부분에서 움직인다면 absolute-aside로 변경하며 변경될때 top 좌표값을 구하여
        같은 위치에 사이드바가 존재하도록 맞춰준다.
    7. 
  */

  // 스크롤 내릴 때
  if (lastScrollTop < scrollTop) {
    if (scrollBottom - asideBottom >= asideBottomPosition) {
      $(".aside").removeClass("stop-aside");
      $(".aside").removeClass("absolute-aside");

      $(".aside").addClass("fixed-bottom-aside");
      $(".fixed-bottom-aside .aside-area")
        .css("position", "fixed")
        .css("top", "auto")
        .css("bottom", asideBottom + "px");
    }

    if (scrollBottom - sectionBottom >= sectionBottomPosition) {
      $(".aside").removeClass("fixed-bottom-aside");
      $(".aside").removeClass("absolute-aside");

      $(".aside").addClass("stop-aside");
      $(".stop-aside .aside-area")
        .css("position", "absolute")
        .css("top", "auto")
        .css("bottom", sectionBottom);
    }

    if ($(".aside").hasClass("fixed-top-aside")) {
      console.log("top에 고정일 때");
    }
  } else {
    if ($(".aside").hasClass("fixed-bottom-aside")) {
      $(".aside").removeClass("fixed-bottom-aside");

      $(".aside").addClass("absolute-aside");
      $(".absolute-aside .aside-area")
        .css("position", "absolute")
        .css("top", currentTopAside - 212 + "px")
        .css("bottom", "auto");
    }
  }

  lastScrollTop = scrollTop;
  lastScrollBottom = scrollBottom;
});
