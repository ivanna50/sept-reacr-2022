// type MyType = number | string[] | boolean
//
// const test = (name: string): MyType => {
//     return [name]

// }
// console.log(test('max'));

// const arr: number[] = [1, 2, 2, 3,]
// const arr: [number, string] = [4, 'u']
//
// interface IUser <DATA1,DATA2> {
//     name: string;
//     age: number;
//     surname: string;
//     status: boolean;
//     data1: DATA1;
//     data2:DATA2;
//
// }

// const user:Partial <IUser> = {name: 'bova', status: true}

// const getName = (user: IUser): string => {
//     return  user.surname
//
// }

// const user:IUser<number [] ,string>={surname:'Pop', name:'vad', age:77,status :true,data1:[1,1,1,1,1,1,],data2:'e'}

//
// class User{
//     constructor(private name:string ,private age:number) {
//
//     }
// }
// // interface IShare {
// //     area: () => number;
// //
// //     perimeter: () => number;
// // }
// //
// // interface IGreeting {
// //     greeting: () => void;
// // }
// //
// // class Rectangle implements IGreeting, IShare {
// //     constructor(private a: number, private b: number) {
// //     }
// //
// //     greeting(): void {
// //         console.log('hello');
//     }
// //
//
//     perimeter(): number {
//         return this.a * this.b;
//     }
//
//     area(): number {
//         return this.a * this.b * 3;
//     }
//
// }

// const rectangle = new Rectangle(1, 3);
//
// rectangle.greeting();
// console.log(rectangle.area());
// console.log(rectangle.perimeter());
//
// class Trikutnic implements IShare {
//
//     constructor(private a: number, private b: number, private c: number) {
//     }
//
//     area(): number {
//         return this.a + this.c * this.b;
//     }
//
//     perimeter(): number {
//         return this.c * 2 * this.a + this.b;
//     }
// }
// const shares:IShare[]=[new Rectangle(2,5),new Trikutnic(3,3,2),new Rectangle(2,4)];
// for (let share of shares) {
//     console.log(share.area());
//     console.log(share.perimeter());
// }

// const x=():number=>{
//     return 14;
// }
//  type MyType=ReturnType<typeof x>;
// const a: MyType=8


import {userService} from "./services/userService";

userService.getAll().then(({data})=>{
    console.log(data[0].address.city);
})