function fib(n) {
   if (n <= 1) return 1;
   return fib(n - 1) + fib(n - 2);
}

function fibMemo(n) {
   const fibMap = {};

   return n => {
      if (n <= 1) return 1;
      if (fibMap[n]) return fibMap[n];

      fibMap[n] = fib(n - 1) + fib(n - 2);
      return fibMap[n];
   };
}

const fibNum = fibMemo();
console.log(fibNum(9));
