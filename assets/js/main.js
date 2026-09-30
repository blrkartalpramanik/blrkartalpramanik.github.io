(function () {
  var GH = "https://github.com/blrkartalpramanik";
  var projects = [
    { img: "project-1", title: "Client Management System",
      desc: "Full-stack platform for client profiles, meeting scheduling with Zoom integration, and documented REST APIs.",
      features: ["Client profile management", "Meeting scheduling and Zoom integration", "REST APIs documented with Swagger", "MySQL database"],
      tech: ["Angular", "Express.js", "MySQL", "Swagger"], code: GH + "/Client-Management-system" },
    { img: "project-5", title: "Medicine Management System",
      desc: "Angular and Spring Boot application for managing medicine stock, with JWT login, a cart and image upload.",
      features: ["JWT secure login", "Medicine inventory and cart", "Image upload", "Secured REST APIs"],
      tech: ["Angular", "Spring Boot", "JWT", "MySQL"], code: GH },
    { img: "project-2", title: "Zumba Gym Management",
      desc: "Gym management system for members, class batches and registrations, backed by a relational database.",
      features: ["Member and batch management", "Class registration", "Class scheduler", "Database operations"],
      tech: ["Java", "JSP", "MySQL", "Hibernate"], code: GH },
    { img: "project-4", title: "Travel Booking System",
      desc: "Travel and cab booking web app with separate user and admin flows and OpenStreetMap integration.",
      features: ["Register, login and book rides", "Track booking status", "Admin confirms or cancels bookings", "OpenStreetMap integration"],
      tech: ["JSP", "Java", "MySQL", "OpenStreetMap"], code: GH + "/Travel-Booking-System" },
    { img: "project-3", title: "Express Banking System",
      desc: "RESTful banking API built with Node.js and Express, tested with Postman. A good reference for backend and API design.",
      features: ["Create account", "Transfer money", "Check balances", "View transaction history"],
      tech: ["Node.js", "Express.js", "REST API", "Postman"], code: GH + "/Express-Banking-System" },
    { img: "project-6", title: "Microservices Gateway System",
      desc: "Microservices architecture with Spring Cloud Gateway for routing, secured service calls and Docker deployment.",
      features: ["API routing through Spring Cloud Gateway", "JWT-based security", "Service-to-service communication", "Docker deployment"],
      tech: ["Spring Cloud", "Microservices", "Docker", "Kafka"], code: GH }
  ];

  var $ = function (s) { return document.querySelector(s); };
  var chips = function (a) { return a.map(function (t) { return "<span>" + t + "</span>"; }).join(""); };

  var grid = $("#pgrid");
  projects.forEach(function (p, i) {
    var c = document.createElement("article");
    c.className = "pc rv";
    c.innerHTML =
      '<img src="assets/images/' + p.img + '.webp" alt="' + p.title + ' overview" loading="lazy" width="960" height="524" data-i="' + i + '">' +
      '<div class="pb"><h3>' + p.title + "</h3><p>" + p.desc + '</p><div class="chips">' + chips(p.tech) + "</div>" +
      '<div class="pl"><button data-i="' + i + '"><i class="fa-solid fa-circle-info"></i>Details</button>' +
      '<a href="' + p.code + '" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i>Code</a></div></div>';
    grid.appendChild(c);
  });

  var modal = $("#modal"), lastFocus;
  function open(i) {
    var p = projects[i]; lastFocus = document.activeElement;
    $("#mi").src = "assets/images/" + p.img + ".webp"; $("#mi").alt = p.title;
    $("#mt").textContent = p.title; $("#md").textContent = p.desc;
    $("#mf").innerHTML = p.features.map(function (f) { return "<li>" + f + "</li>"; }).join("");
    $("#mtags").innerHTML = chips(p.tech); $("#mg").href = p.code;
    modal.classList.add("on"); $(".x").focus();
  }
  function close() { modal.classList.remove("on"); if (lastFocus) lastFocus.focus(); }
  grid.addEventListener("click", function (e) {
    var t = e.target.closest("[data-i]"); if (t) open(+t.dataset.i);
  });
  $(".x").addEventListener("click", close);
  modal.addEventListener("click", function (e) { if (e.target === modal) close(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });

  var burger = $(".burger"), links = $(".links");
  burger.addEventListener("click", function () {
    var on = links.classList.toggle("on"); burger.setAttribute("aria-expanded", on);
  });
  links.addEventListener("click", function (e) { if (e.target.tagName === "A") links.classList.remove("on"); });

  var header = $("header"), top = $(".top");
  window.addEventListener("scroll", function () {
    header.classList.toggle("s", scrollY > 30); top.classList.toggle("on", scrollY > 600);
  }, { passive: true });
  top.addEventListener("click", function () { scrollTo({ top: 0, behavior: "smooth" }); });

  var navA = document.querySelectorAll(".links a:not(.btn)");
  var secs = [].map.call(navA, function (a) { return $(a.getAttribute("href")); });
  var spy = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (e.isIntersecting) navA.forEach(function (a) { a.classList.toggle("on", a.getAttribute("href") === "#" + e.target.id); });
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  secs.forEach(function (s) { if (s) spy.observe(s); });

  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("on"); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll(".rv").forEach(function (el) { io.observe(el); });

  $("#yr").textContent = new Date().getFullYear();
})();
