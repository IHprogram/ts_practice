var copy = function (value) {
    return value;
};
console.log(copy('hello')); // <string>を引数として、<T>に渡す
// 複数の型を渡すこともできる
var copy2 = function (value1, value2) {
    console.log(value1);
    return value1;
};
console.log(copy2('hello', 3)); // <string>を引数として、<T>に渡す
// オブジェクトの場合は、以下のように型定義する
var copy3 = function (value) {
    console.log(value);
    return value;
};
console.log(copy3({ name: 'Valueです', age: 16 }));
// また、「<{ name: string, age: number }, string>」を書かなくても型推論が行われる。
// この時、ジェネリクスの「U」はcopy3の呼び出し側で何も型定義していないので、unknownになる
// <T>に条件を付けたい場合はextendsを使う。以下は、「string型の値を持つnameプロパティを含むオブジェクト型」を指定している。
var copy4 = function (value) {
    console.log(value);
    return value;
};
// 正常に動作する例
console.log(copy4({ name: 'Valueです', age: 16 }));
console.log(copy4({ name: 'Valueです' }));
