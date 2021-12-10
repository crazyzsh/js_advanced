// 有且仅有export关键字就是具名导出，引入时必须使用{}的形式进行引入（只暴露一个也要使用{}）
export function a() {
    console.log("这是直接导出的函数a");
}
export let b = "22"
export class Other {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    introduction() {
        console.log(`分别暴露的类的方法啊：我叫${this.name},我今年${this.age}了`)
    }
}