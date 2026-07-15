

fetch("components/topbar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("topbar").innerHTML = data;
    });
fetch("components/header.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("header").innerHTML = data;
    });
fetch("components/navbar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("navbar-container").innerHTML = data;
    });

fetch("components/footer.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    });

