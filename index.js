var url = "https://api.kanye.rest/";
var handleClick = function () {
    fetch(url)
        .then(function (response) { return response.json(); })
        .then(function (response) {
        document.getElementById("theShiz").textContent = response.quote;
    });
};
