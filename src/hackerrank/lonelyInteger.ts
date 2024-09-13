function lonelyInteger(a: number[]): number {
  let uniqueElement = 0;
  const countMap = new Map<number, number>();
  

  for ( const element of a){
    if ( countMap.has(element)){
        countMap.set(element, countMap.get(element)!+ 1)
    } else {
        countMap.set(element, 1);
    }
  }

  for ( let element of countMap.keys()){
    if ( countMap.get(element)! <= 1){
        uniqueElement = element;
    }
  }

  return uniqueElement;
}

export default lonelyInteger;