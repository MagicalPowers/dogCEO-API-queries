async function dogApiCall({ endpoint = "test", random = false }) {
  let url = "https://dog.ceo/api/";

  switch (random) {
    case true:
      url += "breeds/image/random";
      break;
    default:
      url += "breed/" + endpoint + "/images/random";
  }

  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export default dogApiCall;
