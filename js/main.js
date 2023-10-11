/* First variant */

let arrLength = prompt('Введіть, будь-ласка, довжину масиву більше 4 та менше 10');
if(arrLength === null) {
  alert('Шкода');
} else {
  while(isNaN(+arrLength) || +arrLength < 4 || +arrLength > 10 || +arrLength === 0 || arrLength === '') {
    arrLength = prompt('Введіть будь-ласка довжину масиву більше 4 та менше 10');
  }
  let arrContent = prompt('Введіть перший елемент масиву');
  if(arrContent === null) {
    alert('Шкода');
  } else {
    while(isNaN(+arrContent) || arrContent === '' || arrContent === null) {
      alert('Будь-ласка введіть число');
      arrContent = prompt('Введіть перший елемент масиву');
    }
    const initialArray = [];
    initialArray.length = +arrLength;
    initialArray[0] = +arrContent;
    for(let i = 1; i < initialArray.length; i++) {
      arrContent = prompt('Введіть наступний елемент масиву');
      while(isNaN(+arrContent) || arrContent === '' || arrContent === null) {
        alert('Будь-ласка, введіть число');
        arrContent = prompt('Введіть наступний елемент');
      }
      initialArray[i] = +arrContent;
    }
    document.write('Initial array: ' + initialArray);
    const sortedArray = [...initialArray].sort(function(a, b) {
      return a-b;
    })
    document.write('<br>' + 'Sorted array: ' + sortedArray);
    const finalArray = [...sortedArray];
    finalArray.splice(1, 3);
    document.write('<br>' + 'Final array: ' + finalArray);
  } 
}

/* Second variant */

/*let arrLength = prompt('Введіть будь-ласка довжину масиву більше 4 та менше 10');
if(arrLength === null) {
  alert('Шкода');
} else {
  while(isNaN(+arrLength) || +arrLength < 4 || +arrLength > 10 || +arrLength === 0 || arrLength === '') {
    arrLength = +prompt('Введіть будь-ласка довжину масиву більше 4 та менше 10');
  }
  let arrContent = prompt('Введіть числа через пробіл');
  if(arrContent === null) {
    alert('Шкода');
  } else {
    while(isNaN(Number.parseInt(arrContent)) || arrContent === '' ) {
      alert('Будь-ласка введіть числа');
      arrContent = prompt('Введіть числа через пробіл');
    }
    const initialArray = arrContent.split(' ');
    document.write('Initial array: ' + initialArray);
    const sortedArray = [...initialArray].sort(function(a, b) {
      return a-b;
    })
    document.write('<br>' + 'Sorted array: ' + sortedArray);
    const finalArray = [...sortedArray];
    finalArray.splice(1, 3);
    document.write('<br>' + 'Final Array: ' + finalArray);
  }
}*/