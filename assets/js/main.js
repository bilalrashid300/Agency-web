$("#floorplanSelect").on("change", function (e) {
  $(".select_tab .tab-pane").removeClass("active in");
  $("#" + $(e.currentTarget).val()).addClass("active in");
});

$(".service_tab .tabs").on("click", function () {
  $(".service_tab .tabs").removeClass("active");
  $(this).addClass("active")
  $(".service_tab_content .tab-pane").removeClass("active in");
  const tab = $(this).attr("data-attr")
  $("#"+tab).addClass("active in");
});

$(".service_tab .tabs").on("click", function () {
  $(".service_tab .tabs").removeClass("active");
  $(this).addClass("active")
  $(".service_tab_content .tab-pane").removeClass("active in");
  const tab = $(this).attr("data-attr")
  $("#"+tab).addClass("active in");
});

$(".slick-dots li button").html()

$('.customer_slider').slick({
  arrows: false,
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
});

$('.service_slider').slick({
  arrows: false,
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  centerPadding: '15px',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});