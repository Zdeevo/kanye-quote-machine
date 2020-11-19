const url: string = `https://api.kanye.rest/`;


const handleDisplay = (response: any) => {

  alert(response.quote);
}


const handleGetJson = (response: Response): Promise<any> => {
  return response.json();
}

const handleClick = (): void  => {

    fetch(url).then(handleGetJson).then(handleDisplay);
}
