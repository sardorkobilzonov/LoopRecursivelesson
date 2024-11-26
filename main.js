//1-masala
// {
//     //Loop
//     let a = 3,
//     b = 8;
//     let arr = [];
//   for (let i = a; i <= b; i++) {
//       if (i % 2 === 0) {
//       arr.push(i);
//     }
// }
// console.log(arr);

// //recursive
// let i = a;
// function recursive() {
//     i++;
//     if (a % 2 === 0) {
//       recursive();
//     }
//   }
//   recursive();
//   console.log(arr);
// }

//2-masala

// {
//   //Loop
//   let a = 45;
//   let arr = [];
//   for (let i = 10; i <= a; ) {
//     arr.push(i);
//     i += 10;
//   }
//   console.log(arr);

//   //recursive
//   let i = a;
//   function recursive() {
//     i++;
//     if (i <= a) {
//       recursive();
//     }
//   }
//   recursive();
//   console.log(arr);
// }

//3-masala
// {
//   //Loop
//   let a = 5;
//   let arr = [];
//   for (let i = 1; i <= a; i++) {
//     arr.push(i * i);
//   }
//   console.log(arr);

//   //recursive
//   let i = a;
//   function recursive() {
//     i++;
//     if (i <= a) {
//       recursive();
//     }
//   }
//   recursive();
//   console.log(arr);
// }

//4-masala
// {

//     let number = son(23761);
//     function son(num) {
//         return (a = num
//             .toString()
//             .split("")
//             .sort((a, b) => a - b)
//             .join(""));
//         }
//         console.log(number);
//     }

//5-masala
// {
//   let text = word("wats your name?");
//   function word(letter) {
//     return letter.toString(" ").split().splice(0, 14).join("");
//   }
//   console.log(text);
// }

//6-masala
// {
//   //Loop
//   let a = 5;
//   let arr = [];

//   for (let i = 0; i < a; i++) {
//     arr.push(a);
//   }
//   console.log(arr);

//   //recursive

//   let i = 0;
//   function recursive() {
//     if (i < a) {
//       arr.push(a);
//     }
//   }
//   console.log(arr);
// }

//7-masala
// {

//     function trueOrFalse(word) {
//         return !!word;
//     }

//     console.log(trueOrFalse(true));
//     console.log(trueOrFalse(false));
//     console.log(trueOrFalse("Hello"));
//     console.log(trueOrFalse(""));
// }
