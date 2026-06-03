// 1から20までの数を順に処理する
for(let i = 1; i <= 20; i++){
  // 3の倍数かつ5の倍数のとき
  if(i % 3 === 0 && i % 5 === 0){
    console.log("FizzBuzz")
  }
  // 3の倍数のとき
  else if(i % 3 === 0){
    console.log("Fizz")
  }
  // 5の倍数のとき
  else if(i % 5 === 0){
    console.log("Buzz")
  }
  // どれにも当てはまらない場合、そのままの数を表示
  else{
    console.log(i)
  }
}
