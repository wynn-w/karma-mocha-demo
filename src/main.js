/*
 * @Author: wynn-w
 * @Description: 测试目标文件
 * @Date: 2020-12-12 22:22:06
 * @LastEditTime: 2020-12-12 23:05:34
 * @LastEditors: wynn-w
 */
// window.onload=function(){
//     let _string = "click"
//         let text = document.getElementById("text")
//         let btn = document.getElementById("btn")
//         text.innerText = "null"
//         btn.addEventListener('click',function clickHandle(){
//             text.innerText !== _string && (text.innerText = _string)
//         })
// }
import clickHandle from "./clickHandle"
function main (selector){
    let element = document.querySelector(selector)
    element.addEventListener("click",function(){
        element.innerText = clickHandle()
    })
}
export default main