/*
 * @Author: wynn-w
 * @Description: 测试目标文件
 * @Date: 2020-12-12 22:22:06
 * @LastEditTime: 2020-12-16 10:03:39
 * @LastEditors: wynn-w
 */

import { clickHandle } from "./clickHandle"
function _main(selector) {
    let element = document.querySelector(selector)
    console.log(element);
    element.innerText = clickHandle()
    console.log("main.js");
}
export { _main };