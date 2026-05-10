// Problem Solutions 1

function filterEvenNumbers(nums: number[]): number[] {
  return nums.filter(num => num % 2 === 0);
}

// Problem Solutions 2

function reverseString(word: string): string { 
  return word.split('').reverse().join('');
}

// Problem Solutions 3

type StringOrNumber = string | number;

function checkType(value: StringOrNumber): string {
  if (typeof value === 'string') {
    return 'The value is a string.';
  } else if (typeof value === 'number') {
    return 'The value is a number.';
  } else {
    return 'The value is of an unknown type.';
  }
}

// Problem Solutions 4

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// Problem Solutions 5

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}
function toggleReadStatus (book: Book, isRead: boolean): Book & { isRead: boolean } {
  return { ...book, isRead: isRead };
}

// Problem Solutions 6

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: number;

  constructor(name: string, age: number, grade: number) {
    super(name, age);
    this.grade = grade
  }
  
  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

// Problem Solutions 7

function getIntersection(arr1: number[], arr2: number[]): number[] {
  return arr1.filter((num) => arr2.includes(num));
}