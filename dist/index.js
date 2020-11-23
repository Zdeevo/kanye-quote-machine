const url = `https://api.kanye.rest/`;
const handleClick = () => {
    fetch(url)
        .then((response) => response.json())
        .then((response) => {
        document.getElementById("theShiz").textContent = response.quote;
    });
};
