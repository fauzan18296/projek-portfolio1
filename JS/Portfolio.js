// Section write code vanilla JS

// Statement 1 Membuat Toggle Nav-bar-icon

const navLink = document.querySelector(".nav-link");

// Statement 2 Pembuatan tujuan fungsi toggle menu-bar

document.querySelector("#menuBar").onclick = () => {
  navLink.classList.toggle("active");
};

// Statement 3 Fitur agar saat kita klik selain menubarnya dan nav-linknya navbarnya akan beralih ketempat awalnya

const menuBar = document.querySelector("#menuBar");

document.addEventListener("click", function (e) {
  if (!menuBar.contains(e.target) && !navLink.contains(e.target)) {
    navLink.classList.remove("active");
  }
});

// Akhir baris code Vanilla JS

// Section write code library JS Jquery

// Membuat event untuk animasi scroll

$(".page-scroll").on("click", function (e) {
  // Ambil isi href
  let tujuan = $(this).attr("href");

  // Mengambil elemen yang bersangkutan
  let elemenTujuan = $(tujuan);

  // Membuat animate scroll dan posisi saat scroll
  $("html, body").animate(
    {
      scrollTop: elemenTujuan.offset().top - 60,
    },
    300,
    "Swing"
  );
  e.preventDefault();
});

// parallax

// section page home class jumbotron

$(window).scroll(function () {
  let wScroll = $(this).scrollTop();
  $(".jumbotron img").css({
    transform: `translate(0px,${wScroll / 3.1}%)`,
  });
});

// Akhir baris code Library JS Jquery
