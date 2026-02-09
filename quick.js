function pivot(list) {
  let pivot = 0;
  let swap = 0;
  for (let i = 1; i < list.length; i++) {
    if (list[pivot] > list[i]) {
      swap++;
      [list[swap], list[i]] = [list[i], list[swap]];
    }
  }
  [list[swap], list[pivot]] = [list[pivot], list[swap]];
  return swap;
}


function quick_sort(list) {
  if(list.length > 1){
    let swap_i = pivot(list)
    let left = list.slice(0, swap_i)
    let right = list.slice(swap_i+1, list.length)
    let left_wing = quick_sort(left)
    let right_wing = quick_sort(right)

    return [...left_wing, list[swap_i], ...right_wing]
  }

  return list
}

console.log(quick_sort([9,2,1,8,4,6,5,7]));
