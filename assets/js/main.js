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

$(".contact_tabs .tabs").on("click", function () {
  $(".contact_tabs .tabs").removeClass("active");
  $(this).addClass("active")
  $(".contact_tabs .tab-pane").removeClass("active in");
  const tab = $(this).attr("data-attr")
  $("#"+tab).addClass("active in");
});

$(".pricing_section_tab .tabs").on("click", function () {
  $(".pricing_section_tab .tabs").removeClass("active");
  $(this).addClass("active")
  $(".pricing_section_tab .tab-pane").removeClass("active in");
  const tab = $(this).attr("data-attr")
  $("#"+tab).addClass("active in");
});

$(".company_tab .tabs").on("click", function () {
  $(".company_tab .tabs").removeClass("active");
  $(this).addClass("active")
  $(".company_tab .tab-pane").removeClass("active in");
  const tab = $(this).attr("data-attr")
  $("#"+tab).addClass("active in");
});

$("#navbarSupportedContent").on("show.bs.collapse",function(){
  $(".navbar").addClass("open")
}).on("hidden.bs.collapse",function(){
  $(".navbar").removeClass("open")
})

$(".slick-dots li button").html()

$('.bannerSlider').slick({
  dots: true,
  infinite: true,
  arrows: true,
  speed: 1000,
  vertical: true,
  verticalSwiping: true,
  autoplay: false,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  adaptiveHeight: false,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
});

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