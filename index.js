
let pronounList = ['the', 'our']; 
let adjList = ['great', 'big']; 
let nounList = ['jogger', 'racoon']; 

const _permutar = (suffixList, prefixList) => {
  return suffixList.reduce((state, suffix) => {
    const combinationList = prefixList.map((prefix) => `${prefix}${suffix}`);
    return [...state, ...combinationList];
  }, []);
};

const _addComSuffix = (list) => {
  return list.map((string) => {
    return `${string}.com`;
  });
};

const _printInTerminal = (list) => {
  list.forEach((string) => {
    console.log(string);
  });
};

function main() {
  const primeraPermuta = _permutar(adjList, pronounList);
  const segundaPermuta = _permutar(nounList, primeraPermuta);
  const resultList = _addComSuffix(segundaPermuta);
  _printInTerminal(resultList);
}


main();
