export function binarySearch<T>(list: T[], item: T): number | null {
  let low: number = 0; // initial lowest index
  let high: number = list.length - 1; // initial upper index

  while (low <= high) {
    let mid: number = (low + high) / 2; // get middle value
    let guess: T = list[mid]; // element at middle

    if (guess === item) { // if item found, return its index
      return mid;
    } else if (guess < item) { // if guess is too low, adjust low 
      low = mid + 1;
    } else if (guess > item) {  // if guess is too high, adjust high 
      high = mid - 1;
    }
  }

  return null; // item cannot be found

}

/*
Aim is to find the index of the item and return it.
This algorithm assumes the list is sorted, otherwise it doesn't work
*/