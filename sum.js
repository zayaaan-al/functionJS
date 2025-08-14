function sumTen(num){
  let sum=0;
   for(i=1;i<=num;i++){
    sum +=i
}
  console.log(sum);

}
sumTen(20);

function sumFirstTenOddNumbers() {
    let sum = 0;
    let count = 0;
    let number = 1;

    while (count < 10) {
        sum += number;
        number += 2; // move to next odd number
        count++;
    }

    return sum;
}

const result = sumFirstTenOddNumbers();
console.log("Sum of the first 10 odd numbers is: " + result);
