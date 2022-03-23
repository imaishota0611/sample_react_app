// var val1 = "var変数";
// console.log(var1);

// var1 = "上書き";
// console.log(var1);

// var var1 = "再宣言";
// console.log(var1);

// let val2 = "let";
// console.log(val2)

// val2 = "上書き";
// console.log(val2)

// let val2 = "再宣言";

// const val3 = "const";
// console.log(val3);

//val3 = "上書き";

// const val3 = "再宣言";

//constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "shota",
//   age: 25,
// };
// console.log(val4);

// val4.name = "shota2"
// val4.addres = "tokyo"
// console.log(val4);

//constで定義した配列はプロパティの変更が可能
// const val5 = ['dog', 'cat'];
// val5[0] = "bird";
// val5.push("monkey")
// console.log(val5);

/**
 * テンプレート文字列
 */

//  const name = "shota";
//  const age = 25;

//従来の方法
//  const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

//テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */

//従来の関数
//  function func1(str) {
//    return str;
//  }
// console.log(func1("func1です。"));

//アロー関数
// const func2 = (str) => str;
// console.log(func2("func2です。"));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20))

/**
 * 分割代入
 */
// const myProfile = {
//   name: "shota",
//   age: 25,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`
// console.log(message1);

// const {name, age} = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`
// console.log(message2);

// const myProfile2 = ["shota", 25];
// const [name, age] = myProfile2;
// const message3 = `名前は${name}です。年齢は${age}です。`;
// console.log(message3);

/**
 * default値
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにんちは！${name}さん`);
// sayHello("shota");
