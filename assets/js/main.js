var lastScrollTop = 0;
$(window).scroll(function (event) {
  var st = $(this).scrollTop();
  if (st > lastScrollTop) {
    $(".navbar").addClass("sticky");
  } else {
    $(".navbar").removeClass("sticky");
  }
  lastScrollTop = st;
});
var lastScrollTop2 = 500;
$(window).scroll(function (event) {
  var st = $(this).scrollTop();
  if (st > lastScrollTop2) {
    $(".discount_popup").addClass("show");
  } else {
    $(".discount_popup").removeClass("show");
  }
  lastScrollTo2 = st;
});
$(".count").each(function () {
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 1000,
        easing: "swing",
        step: function (now) {
          $(this).text(Math.ceil(now));
        },
      }
    );
});
$("#floorplanSelect p").on("click", function (e) {
  $(".select_tab .tab-pane").removeClass("active in");
  console.log($("#" + $(this).attr("data-value")));
  $(".faq .dropdown-toggle").text($(this).text());
  $("#" + $(this).attr("data-value")).addClass("active in");
});

$(".service_tab .tabs").on("click", function () {
  $(".service_tab .tabs").removeClass("active");
  $(this).addClass("active");
  $(".service_tab_content .tab-pane").removeClass("active in");
  const tab = $(this).attr("data-attr");
  $("#" + tab).addClass("active in");
});

$(".contact_tabs .tabs").on("click", function () {
  $(".contact_tabs .tabs").removeClass("active");
  $(this).addClass("active");
  $(".contact_tabs .tab-pane").removeClass("active in");
  const tab = $(this).attr("data-attr");
  $("#" + tab).addClass("active in");
});

$(".pricing_section_tab .tabs").on("click", function () {
  $(".pricing_section_tab .tabs").removeClass("active");
  $(this).addClass("active");
  $(".pricing_section_tab .tab-pane").removeClass("active in");
  const tab = $(this).attr("data-attr");
  $("#" + tab).addClass("active in");
});

$(".company_tab .tabs").on("click", function () {
  $(".company_tab .tabs").removeClass("active");
  $(this).addClass("active");
  $(".company_tab .tab-pane").removeClass("active in");
  const tab = $(this).attr("data-attr");
  $("#" + tab).addClass("active in");
});

$("#navbarSupportedContent")
  .on("show.bs.collapse", function () {
    $(".navbar").addClass("open");
  })
  .on("hidden.bs.collapse", function () {
    $(".navbar").removeClass("open");
  });

$(".slick-dots li button").html();

$(".bannerSlider").slick({
  dots: true,
  infinite: true,
  arrows: true,
  speed: 1000,
  vertical: true,
  verticalSwiping: true,
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  adaptiveHeight: false,
  prevArrow: $(".next"),
  nextArrow: $(".prev"),
  responsive: [
    {
      breakpoint: 992,
      settings: {
        verticalSwiping: true,
        dots: false,
      },
    },
  ],
});

$(".customer_slider").slick({
  arrows: true,
  dots: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: $(".nextBtn2"),
  nextArrow: $(".prevBtn2"),
});

// $(".priceSlider").slick({
//   arrows: true,
//   dots: false,
//   infinite: false,
//   speed: 2000,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   centerPadding: "15px",
//   prevArrow: $(".prevBtn3"),
//   nextArrow: $(".nextBtn3"),
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         infinite: true,
//         dots: true,
//       },
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1,
//       },
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         arrows: false,
//       },
//     },
//   ],
// });

$(".priceSlider").slick({
  arrows: true,
  dots: false,
  infinite: false,
  speed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerPadding: "15px",
  prevArrow: $(".prevBtn3"),
  nextArrow: $(".nextBtn3"),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

$(".service_slider").slick({
  arrows: true,
  dots: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 4,
  slidesToScroll: 1,
  centerPadding: "15px",
  prevArrow: $(".nextBtn"),
  nextArrow: $(".prevBtn"),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});



function loadMore() {
  $(".services_section .tab-content .active.in .col-md-4").slice(0, 6).show();
  $(".loadMore").on('click', function (e) {
      e.preventDefault();
      $(this).parent().parent().find(".col-md-4:hidden").slice(0, 3).slideDown();
      console.log( $(this).parent().parent().children())
      if ($(this).parent().parent().find(".col-md-4:hidden").length == 0) {
          $(this).fadeOut('slow');
      }
  });
}

loadMore();

$(".company_tab .tabs").on("click",function(){
  loadMore();
})



