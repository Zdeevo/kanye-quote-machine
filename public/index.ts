const url: string = `https://api.kanye.rest/`;

const handleClick = (): void => {
  fetch(url)
    .then((response) => response.json())
    .then((response: KanyeResponse) => {
      document.getElementById("theShiz").textContent = response.quote;
    });
};

interface KanyeResponse {
  quote: string;
}
