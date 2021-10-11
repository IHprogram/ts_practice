const copy = <T>(value: T): T => {
  return value;
}

console.log(copy<string>('hello')); // <string>を引数として、<T>に渡す

// 複数の型を渡すこともできる
const copy2 = <T1, T2>(value1: T1, value2: T2): T1 => {
  console.log(value1)
  return value1;
}

console.log(copy2<string, number>('hello', 3)); // <string>を引数として、<T>に渡す


// オブジェクトの場合は、以下のように型定義する

const copy3 = <T, U>(value: T): T => {
  console.log(value)
  return value;
}

console.log(copy3<{ name: string, age: number }, string>({ name: 'Valueです', age: 16 }));
// また、「<{ name: string, age: number }, string>」を書かなくても型推論が行われる。

// この時、ジェネリクスの「U」はcopy3の呼び出し側で何も型定義していないので、unknownになる


// <T>に条件を付けたい場合はextendsを使う。以下は、「string型の値を持つnameプロパティを含むオブジェクト型」を指定している。
const copy4 = <T extends { name: string }>(value: T): T => {
  console.log(value)
  return value;
}

// 正常に動作する例
console.log(copy4<{ name: string, age: number }>({ name: 'Valueです', age: 16 }));
console.log(copy4<{ name: string }>({ name: 'Valueです' }));

// エラーが出る例
// console.log(copy4<{ name: number }>({ name: 'Valueです' })); エラーが出る
// console.log(copy4<{ gender: string }>({ name: 'Valueです' })); エラーが出る


type K = keyof { name: string; age: number } // → type K = "name" | "age"