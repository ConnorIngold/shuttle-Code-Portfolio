$(window).bind("scroll", function() {
  var ctx = document.getElementById("myChart").getContext("2d");
  new Chart(ctx, {
    // The type of chart we want to create
    type: "line",
    // The data for our dataset
    data: {
      labels: [
        "",
        "HTML & CSS",
        "Bootstrap 4",
        "JavaScript",
        "Vue.Js",
        "PHP",
        "C#",
        "Node.js",
        "Git",
        "PhotoShop"
      ],
      datasets: [
        {
          label: "Skills",
          backgroundColor: "rgb(66, 134, 244)",
          borderColor: "rgb(255, 255, 255)",
          data: [0, 95, 90, 80, 30, 15, 5, 40, 75, 50]
        }
      ]
    },
    // Configuration options go here
    options: {
      animation: {
        load: "onscroll",
        duration: "3000",
        easing: "linear"
      }
    }
  });
  $(window).unbind();
});