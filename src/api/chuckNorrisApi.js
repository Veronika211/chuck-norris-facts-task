import { useQuery } from "react-query";

async function getFactsByKeyword(keyword) {
  const response = await fetch(
    `https://api.chucknorris.io/jokes/search?query=${keyword}`
  );
  const data = await response.json();
  return data.result;
}

async function getRandomFact() {
  const response = await fetch(`https://api.chucknorris.io/jokes/random`);
  const data = await response.json();
  return data;
}

export function useSearchFactsByKeyword(keyword) {
  return useQuery(["facts", keyword], () => getFactsByKeyword(keyword), {
    enabled: Boolean(keyword.length >= 3),
  });
}

export function useRandomFact() {
  return useQuery("randomFact", getRandomFact);
}
