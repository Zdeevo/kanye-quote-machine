const url = `https://api.kanye.rest/`;
const handleDisplay = (response) => {
    alert(response.quote);
};
const handleGetJson = (response) => {
    return response.json();
};
const handleClick = () => {
    fetch(url).then(handleGetJson).then(handleDisplay);
};
