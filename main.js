// if 1

// let A = +prompt("Butun son kiriting!");

// if (A > 0) {
//   A++;
// };

// console.log(A);
// document.body.innerHTML = A;

// if 2

// let A = +prompt("Butun son kiriting!");

// if (A > 0) {
//   A++;
// } else if (A < 0) {
//   A -= 2;
// } else {
//   A = 10;
// };

// console.log(A);
// document.body.innerHTML = A;

// if 3

// let A = +prompt("Birinchi butun sonni kiriting!");
// let B = +prompt("Ikkinchi butun sonni kiriting!");
// let C = +prompt("Uchinchi butun sonni kiriting!");

// let positive = 0;

// if (A > 0) {
//   positive++;
// };
// if (B > 0) {
//   positive++;
// };
// if (C > 0) {
//   positive++;
// };

// console.log(positive);

// if 4

// let A = +prompt("Birinchi butun sonni kiriting!");
// let B = +prompt("Ikkinchi butun sonni kiriting!");

// if (A > B) {
//  console.log(A);
// } else {
//  console.log(B);
// };

// if 5

// let A = +prompt("Birinchi butun sonni kiriting!");
// let B = +prompt("Ikkinchi butun sonni kiriting!");

// if (A < B) {
//   console.log("1 chi son kichik");
// } else if (A > B){
//   console.log("2 chi son kichik");
// } else {
//   console.log("ikkalasi teng");
// };

// if 6

// let A = +prompt("Birinchi butun sonni kiriting!");
// let B = +prompt("Ikkinchi butun sonni kiriting!");

// if (A < B) {
//   document.body.innerHTML = B;
//   console.log(B);
// } else if (A > B){
//   document.body.innerHTML = A;
//   console.log(A);
// } else {
//   document.body.innerHTML = "Ikkalasi teng";
//   console.log("Ikkalsi teng");
// };

// if 7

// let A = +prompt("A butun sonni kiriting!");
// let B = +prompt("B butun sonni kiriting!");

// let k = A

// if (A > B) {
//   A = B;
//   B = k
//   document.body.innerHTML = "A: " + A + "<br/>" + "B: " + B;
// } else if (A < B) {
//   document.body.innerHTML = "A: " + A + "<br/>" + "B: " + B;
// } else {
//   document.body.innerHTML = "A va B: " + A;
// };

// if 8

// let A = +prompt("A butun sonni kiriting!");
// let B = +prompt("B butun sonni kiriting!");

// let res = 0

// if (A !== B) {
//   res = A + B;
//   document.body.innerHTML = "A: " + res + "<br/>" + "B: " + res;
// } else {
//   document.body.innerHTML = "A: " + res + "<br/>" + "B: " + res;
// };

// if 9

// let A = +prompt("A butun sonni kiriting!");
// let B = +prompt("B butun sonni kiriting!");

// if (A > B) {
//   B = A;
// } else if (A < B) {
//   A = B;
// } else {
//   A = 0;
//   B = 0;
// };

// document.body.innerHTML = "A: " + A + "<br/>" + "B: " + B;

// if 10

// let A = +prompt("A butun sonni kiriting!");
// let B = +prompt("B butun sonni kiriting!");
// let C = +prompt("C butun sonni kiriting!");

// if (A < B && A <= C) {
//   console.log(A + " eng kichik son");
// } else if (A < C && A <= B) {
//   console.log(A + " eng kichik son");
// } else if (B < A && B <= C) {
//   console.log(B + " eng kichik son");
// } else if (B < C && B <= A) {
//   console.log(B + " eng kichik son");
// } else if (C < A && C <= B) {
//   console.log(C + " eng kichik son");
// } else if (C < B && C <= A) {
//   console.log(C + " eng kichik son");
// } else {
//   console.log(A + " eng kichik son")
// }

// if 11

// let A = +prompt("A butun sonni kiriting!");
// let B = +prompt("B butun sonni kiriting!");
// let C = +prompt("C butun sonni kiriting!");

// if (A < B && A > C) {
//   console.log(A + " O'rtacha son");
// } else if (A < C && A > B) {
//   console.log(A + " O'rtacha son");
// } else if (B < A && B > C) {
//   console.log(B + " O'rtacha son");
// } else if (B < C && B > A) {
//   console.log(B + " O'rtacha son");
// } else if (C < A && C > B) {
//   console.log(C + " O'rtacha son");
// } else if (C < B && C > A) {
//   console.log(C + " O'rtacha son");
// } else {
//   console.log("O'rtacha son yo'q")
// }

// if 12

// let A = +prompt("A butun sonni kiriting!");
// let B = +prompt("B butun sonni kiriting!");
// let C = +prompt("C butun sonni kiriting!");

// if (A < B && A <= C || A < C && A <= B) {
//   document.body.innerHTML = B + " + " + C + " = " + (B + C);
// } else if (B < A && B <= C || B < C && B <= A) {
//   document.body.innerHTML = A + " + " + C + " = " + (A + C);
// } else if (C < A && C <= B || C < B && C <= A) {
//   document.body.innerHTML = A + " + " + B + " = " + (A + B);
// } else {
//   document.body.innerHTML = A + " + " + B + " = " + (A + B);
// };

// if 13

// let A = +prompt("A butun sonni kiriting!");
// let B = +prompt("B butun sonni kiriting!");
// let C = +prompt("C butun sonni kiriting!");

// if (A < B && B < C) {
//   document.body.innerHTML = "A: " + 2 * A + "<br/>" + "B: " + 2 * B + "<br/>" + "C: " + 2 * C;
// } else {
//   document.body.innerHTML = "A: " + (-1) * A + "<br/>" + "B: " + (-1) * B + "<br/>" + "C: " + (-1) * C;
// };

// if 14

// let A = +prompt("A butun sonni kiriting!");
// let B = +prompt("B butun sonni kiriting!");
// let C = +prompt("C butun sonni kiriting!");

// if (A < B && B < C || A > B && B > C) {
//   document.body.innerHTML = "A: " + 2 * A + "<br/>" + "B: " + 2 * B + "<br/>" + "C: " + 2 * C;
// } else {
//   document.body.innerHTML = "A: " + (-1) * A + "<br/>" + "B: " + (-1) * B + "<br/>" + "C: " + (-1) * C;
// };

// if 15

// let A = +prompt("Birinchi butun sonni kiriting!");
// let B = +prompt("Ikkinchi butun sonni kiriting!");
// let C = +prompt("Uchinchi butun sonni kiriting!");
// let D = +prompt("To'rtinchi butun sonni kiriting!");

// if (A !== B && A !== C && A !== D && B === C && C === D) {
//   console.log("Birinchi son hech qaysiga teng emas");
// } else if (B !== A && B !== C && B !== D && A === C && C === D) {
//   console.log("Ikkinchi son hech qaysiga teng emas");
// } else if (C !== A && C !== B && C !== D && A === B && B === D) {
//   console.log("Uchinchi son hech qaysiga teng emas");
// } else if (D !== A && D !== B && D !== C && A === B && B === C) {
//   console.log("To'rtinchi son hech qaysiga teng emas");
// } else {
//   console.log("Shart bajarilmadi!");
// };

// if 16

// let x = +prompt("x haqiqiy sonni kiriting!");

// if (x < 0) {
//   console.log(-x);
// } else if (x === 0) {
//   console.log(x);
// } else if (x > 0 && x < 2) {
//   console.log(x**2);
// } else if (x >= 2) {
//   console.log(4);
// } else {
//   console.log("x aniqlanish sohasida emas!");
// };

// // if 17

// let x = +prompt("Biror yil kiriting!");

// if (x % 100 === 0 && x % 400 !== 0) {
//   console.log("Yilda 365 kun bor");
// } else if (x % 4 === 0) {
//   console.log("Yilda 366 kun bor");
// } else if (x <= 0) {
//   console.log("Bunday yil yo'q");
// } else {
//   console.log("Yilda 365 kun bor");
// };

// if 18

// let x = +prompt("1-999 oraliqda son kiriting!");

// if (x / 100 >= 1 && x < 999) {
//   if (x % 2 === 0) {
//     console.log("Uch honali juft son");
//   } else {
//     console.log("Uch honali toq son");
//   }
// } else if (x / 10 >= 1 && x < 999) {
//   if (x % 2 === 0) {
//     console.log("Ikki honali juft son");
//   } else {
//     console.log("Ikki honali toq son");
//   }
// } else if (x / 1 >= 1 && x < 999) {
//   if (x % 2 === 0) {
//     console.log("Bir honali juft son");
//   } else {
//     console.log("Bir honali toq son");
//   }
// } else {
//   console.log("Shartga mos kelmadi!");
// };

// case 1

// let x = +prompt("1 dan 5 gacha bo'lgan butun son kiriting!");

// let res;

// switch (x) {
//   case 1:
//     res = "Yomon"
//     break;
//   case 2:
//     res = "Qoniqarsiz"
//     break;
//   case 3:
//     res = "Qoniqarli"
//     break;
//   case 4:
//     res = "Yaxshi"
//     break;
//   case 5:
//     res = "A'lo"
//     break;
//   default:
//     res = "Xato"
//     break;
// }

// console.log(res);

// case 2

// let x = +prompt("1 dan 12 gacha bo'lgan butun son kiriting!");

// let res;

// switch (x) {
//   case 1:
//     res = "1 chi oy, qish"
//     break;
//   case 2:
//     res = "2 chi oy, qish"
//     break;
//   case 3:
//     res = "3 chi oy, bahor"
//     break;
//   case 4:
//     res = "4 chi oy, bahor"
//     break;
//   case 5:
//     res = "5 chi oy, bahor"
//     break;
//   case 6:
//     res = "6 chi oy, yoz"
//     break;
//   case 7:
//     res = "7 chi oy, yoz"
//     break;
//   case 8:
//     res = "8 chi oy, yoz"
//     break;
//   case 9:
//     res = "9 chi oy, kuz"
//     break;
//   case 10:
//     res = "10 chi oy, kuz"
//     break;
//   case 11:
//     res = "11 chi oy, kuz"
//     break;
//   case 12:
//     res = "12 chi oy, qish"
//     break;
//   default:
//     res = "Xato"
//     break;
// }

// console.log(res);

// case 3

// let x = +prompt("1 dan 12 gacha bo'lgan butun son kiriting!");

// let res;

// switch (x) {
//   case 1:
//     res = "Yanvar oyida, 31 kun bor"
//     break;
//   case 2:
//     res = "Fevral oyida, 28 yoki 29 kun bor"
//     break;
//   case 3:
//     res = "Mart oyida, 31 kun bor"
//     break;
//   case 4:
//     res = "Aprel oyida, 30 kun bor"
//     break;
//   case 5:
//     res = "May oyida, 31 kun bor"
//     break;
//   case 6:
//     res = "Iyun oyida, 30 kun bor"
//     break;
//   case 7:
//     res = "Iyul oyida, 31 kun bor"
//     break;
//   case 8:
//     res = "Avgust oyida, 31 kun bor"
//     break;
//   case 9:
//     res = "Sentyabr oyida, 30 kun bor"
//     break;
//   case 10:
//     res = "Oktyabr oyida, 31 kun bor"
//     break;
//   case 11:
//     res = "Noyabr oyida, 30 kun bor"
//     break;
//   case 12:
//     res = "Dekabr oyida, 31 kun bor"
//     break;
//   default:
//     res = "Xato"
//     break;
// }

// console.log(res);

// case 4

// let x = +prompt("1 dan 5 gacha bo'lgan butun son kiriting!");
// let y = +prompt("Uzunlikni kiriting!");

// let res;

// switch (x) {
//   case 1:
//     res = y + " detsimetr = " + y / 10 + " metr ga teng"
//     break;
//   case 2:
//     res = y + " kilometr = " + y * 1000 + " metr ga teng"
//     break;
//   case 3:
//     res = y + " metr" + y + " metr ga teng"
//     break;
//   case 4:
//     res = y + " millimetr = " + y / 1000 + " metr ga teng"
//     break;
//   case 5:
//     res = y + " santimetr = " + y / 100 + " metr ga teng"
//     break;
//   default:
//     res = "Xato"
//     break;
// }

// console.log(res);

// case 5

// let x = +prompt("1 dan 5 gacha bo'lgan butun son kiriting!");
// let y = +prompt("Og'irlikni kiriting!");

// let res;

// switch (x) {
//   case 1:
//     res = y + " kilogramm = " + y + " kilogramm ga teng"
//     break;
//   case 2:
//     res = y + " milligramm = " + y / 10**6 + " kilogramm ga teng"
//     break;
//   case 3:
//     res = y + " gramm" + y / 1000 + " kilogramm ga teng"
//     break;
//   case 4:
//     res = y + " tonna = " + y * 1000 + " kilogramm ga teng"
//     break;
//   case 5:
//     res = y + " sentner = " + y * 100 + " kilogramm ga teng"
//     break;
//   default:
//     res = "Xato"
//     break;
// }

// console.log(res);

// case 6

// let M = +prompt("Oyni sonda kiriting!");
// let D = +prompt("Kunni kiriting!");

// let res;

// if (D < 31) {
//   switch (M) {
//     case 1:
//       res = D + " chi yanvar";
//       break;
//     case 2:
//       res = D + " chi Fevral";
//       break;
//     case 3:
//       res = D + " chi Mart";
//       break;
//     case 4:
//       res = D + " chi Aprel";
//       break;
//     case 5:
//       res = D + " chi May";
//       break;
//     case 6:
//       res = D + " chi Iyun";
//       break;
//     case 7:
//       res = D + " chi Iyul";
//       break;
//     case 8:
//       res = D + " chi Avgust";
//       break;
//     case 9:
//       res = D + " chi Sentyabr";
//       break;
//     case 10:
//       res = D + " chi Oktyabr";
//       break;
//     case 11:
//       res = D + " chi Noyabr";
//       break;
//     case 12:
//       res = D + " chi Dekabr";
//       break;
//     default:
//       res = "Kiritilgan oy xato";
//       break;
//   }

//   console.log(res);
// } else {
//   console.log("Kiritilgan kun xato");
// }

// case 7

// let M = +prompt("Oyni sonda kiriting!");
// let D = +prompt("Kunni kiriting!");

// if (D == 31) {
//   D = 0;
//   M++;
//   if (M == 13) {
//     M = 1
//   }
// }

// let res;

// if (D < 31) {
//   switch (M) {
//     case 1:
//       res = D + 1 + " chi yanvar";
//       break;
//     case 2:
//       res = D + 1 + " chi Fevral";
//       break;
//     case 3:
//       res = D + 1 + " chi Mart";
//       break;
//     case 4:
//       res = D + 1 + " chi Aprel";
//       break;
//     case 5:
//       res = D + 1 + " chi May";
//       break;
//     case 6:
//       res = D + 1 + " chi Iyun";
//       break;
//     case 7:
//       res = D + 1 + " chi Iyul";
//       break;
//     case 8:
//       res = D + 1 + " chi Avgust";
//       break;
//     case 9:
//       res = D + 1 + " chi Sentyabr";
//       break;
//     case 10:
//       res = D + 1 + " chi Oktyabr";
//       break;
//     case 11:
//       res = D + 1 + " chi Noyabr";
//       break;
//     case 12:
//       res = D + 1 + " chi Dekabr";
//       break;
//     default:
//       res = "Kiritilgan oy xato";
//       break;
//   }

//   console.log(res);
// } else {
//   console.log("Kiritilgan kun xato");
// }

// case 8

// let Y = prompt("Yo'nalishni kiriting sonda kiriting!");
// let K = prompt("Xarakatni kiriting!");

// let z = Y + K;

// let res;

// switch (z) {
//   case "s0":
//     res = "Robot shimolga qarab harakatni dovom ettirdi";
//     break;
//   case "s1":
//     res = "Robot g'arbga qarab turipti";
//     break;
//   case "s2":
//     res = "Robot sharqqa qarab turipti";
//     break;
//   case "j0":
//     res = "Robot janubga qarab harakatni dovom ettirdi";
//     break;
//   case "j1":
//     res = "Robot sharqqa qarab turipti";
//     break;
//   case "j2":
//     res = "Robot g'arbga qarab turipti";
//     break;
//   case "q0":
//     res = "Robot sharqqa qarab harakatni dovom ettirdi";
//     break;
//   case "q1":
//     res = "Robot shimolga qarab turipti";
//     break;
//   case "q2":
//     res = "Robot janubga qarab turipti";
//     break;
//   case "g0":
//     res = "Robot g'arbga qarab harakatni dovom ettirdi";
//     break;
//   case "g1":
//     res = "Robot janubga qarab turipti";
//     break;
//   case "g2":
//     res = "Robot shimolga qarab turipti";
//     break;
//   default:
//     res = "Xato";
//     break;
// }

// console.log(res);

// case 9

// let M = +prompt("1-4 gacha karta turini kiriting!");
// let N = +prompt("6-14 gacha karta raqamini kiriting!");

// if (N == 6) {
//   N = "olti"
// } else if (N == 7) {
//   N = "yetti"
// } else if (N == 8) {
//   N = "sakkiz"
// } else if (N == 9) {
//   N = "to'qqiz"
// } else if (N == 10) {
//   N = "o'n"
// } else if (N == 11) {
//   N = "valet"
// } else if (N == 12) {
//   N = "dama"
// } else if (N == 13) {
//   N = "qirol"
// } else if (N == 14) {
//   N = "tuz"
// } else {
//   M = 0
// };

// let res;

// switch (M) {
//   case 1:
//     res = N + " g'isht";
//     break;
//   case 2:
//     res = N + " olma";
//     break;
//   case 3:
//     res = N + " chillak";
//     break;
//   case 4:
//     res = N + " qarg'a";
//     break;
//   default:
//     res = "Xato";
//     break;
// }

// console.log(res);

// case 10

// let M = +prompt("10-40 gacha butun son kiriting!");

// let bir = M % 10;
// let on = (M - bir) / 10;
// let N

// if (bir == 0) {
//   N = ""
// } else if (bir == 1) {
//   N = " bit"
// } else if (bir == 2) {
//   N = " ikki"
// } else if (bir == 3) {
//   N = " uch"
// } else if (bir == 4) {
//   N = " to'rt"
// } else if (bir == 5) {
//   N = " besh"
// } else if (bir == 6) {
//   N = " olti"
// } else if (bir == 7) {
//   N = " yetti"
// } else if (bir == 8) {
//   N = " sakkiz"
// } else if (bir == 9) {
//   N = " to'qqiz"
// };

// let res;

// switch (on) {
//   case 1:
//     res = "O'n" + N + "ta masala";
//     break;
//   case 2:
//     res = "Yigirma" + N + "ta masala";
//     break;
//   case 3:
//     res = "O'ttiz" + N + "ta masala";
//     break;
//   case 4:
//     res = "Qirq" + N + "ta masala";
//     break;
//   default:
//     res = "Xato";
//     break;
// }

// console.log(res);

// case 11

// let A = +prompt("100-999 gacha butun son kiriting!");

// let bir = A % 10;
// let on = (A % 100 - bir) / 10;
// let yuz = (A - on * 10 - bir) / 100;
// let N;
// let M;

// if (bir == 0) {
//   N = ""
// } else if (bir == 1) {
//   N = " bir"
// } else if (bir == 2) {
//   N = " ikki"
// } else if (bir == 3) {
//   N = " uch"
// } else if (bir == 4) {
//   N = " to'rt"
// } else if (bir == 5) {
//   N = " besh"
// } else if (bir == 6) {
//   N = " olti"
// } else if (bir == 7) {
//   N = " yetti"
// } else if (bir == 8) {
//   N = " sakkiz"
// } else if (bir == 9) {
//   N = " to'qqiz"
// };

// if (on == 0) {
//   M = ""
// } else if (on == 1) {
//   M = " o'n"
// } else if (on == 2) {
//   M = " yigirma"
// } else if (on == 3) {
//   M = " o'ttiz"
// } else if (on == 4) {
//   M = " qirq"
// } else if (on == 5) {
//   M = " ellik"
// } else if (on == 6) {
//   M = " oltimish"
// } else if (on == 7) {
//   M = " yetmish"
// } else if (on == 8) {
//   M = " sakson"
// } else if (on == 9) {
//   M = " to'qson"
// };

// let res;

// switch (yuz) {
//   case 1:
//     res = "bir yuz" + M + N;
//     break;
//     case 2:
//       res = "ikki yuz" + M + N;
//       break;
//   case 3:
//     res = "uch yuz" + M + N;
//     break;
//   case 4:
//     res = "to'rt yuz" + M + N;
//     break;
//   case 5:
//     res = "besh yuz" + M + N;
//     break;
//   case 6:
//     res = "olti yuz" + M + N;
//     break;
//   case 7:
//     res = "yetti yuz" + M + N;
//     break;
//   case 8:
//     res = "sakkiz yuz" + M + N;
//     break;
//   case 9:
//     res = "to'qqiz yuz" + M + N;
//     break;
//   default:
//     res = "Xato";
//     break;
// };

// console.log(res);

// case 12

// let A = +prompt("0-∞ gacha butun son kiriting!");

// let asr = (A + 57) % 60;
// let rang = Math.ceil(asr / 12);
// let hayvon = asr % 12;
// console.log(rang);

// let M;

// if (hayvon == 0) {
//   M = " to'ng'iz";
// } else if (hayvon == 1) {
//   M = " sichqon";
// } else if (hayvon == 2) {
//   M = " sigir";
// } else if (hayvon == 3) {
//   M = " yo'lbars";
// } else if (hayvon == 4) {
//   M = " quyon";
// } else if (hayvon == 5) {
//   M = " ajdar";
// } else if (hayvon == 6) {
//   M = " ilon";
// } else if (hayvon == 7) {
//   M = " ot";
// } else if (hayvon == 8) {
//   M = " qo'y";
// } else if (hayvon == 9) {
//   M = " maymun";
// } else if (hayvon == 9) {
//   M = " tovuq";
// } else if (hayvon == 9) {
//   M = " it";
// }

// let res;

// switch (rang) {
//   case 0:
//   case 5:
//     res = "Qora" + M;
//     break;
//   case 1:
//     res = "Yashil" + M;
//     break;
//   case 2:
//     res = "Qizil" + M;
//     break;
//   case 3:
//     res = "Sariq" + M;
//     break;
//   case 4:
//     res = "Oq" + M;
//     break;
//   default:
//     res = "Xato";
//     break;
// }

// console.log(res);
