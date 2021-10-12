const copy5 = <T extends { name: string }, U extends keyof T>(value: T, key: U): T => {
  console.log(key);
  return value;
}

console.log(copy({ name: 'Valueです', age: 38 }));


// Classに対してジェネリクスを使用する方法
class LightDatabase<T extends string | number | boolean> {
  private data: T[] = [];
  add(item: T) {
    this.data.push(item);
  }
  remove(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  get() {
    return this.data;
  }
}

const stringLightDatabase = new LightDatabase<string>();
stringLightDatabase.add('Apple');
stringLightDatabase.add('Banana');
stringLightDatabase.add('Orange');
stringLightDatabase.add('Grape');
console.log(stringLightDatabase.get());
stringLightDatabase.remove('Banana');
console.log(stringLightDatabase.get());


// interfaceの型定義

interface interfaceDatabase<T> {
  id: number;
  data: T[];
}

const interfaceDataBase: interfaceDatabase<number> = {
  id: 1,
  data: [11]
}

// typeの場合もほぼ同じ

type typeDatabase<T> = {
  id: number;
  data: T[];
}

const typeDatabase: typeDatabase<number> = {
  id: 2,
  data: [22]
}

console.log('typeDatabaseの中身', typeDatabase)