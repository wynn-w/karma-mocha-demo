/*
 * @Author: wynn-w
 * @Description: 测试目标文件
 * @Date: 2020-12-12 22:22:06
 * @LastEditTime: 2020-12-16 10:58:14
 * @LastEditors: wynn-w
 */

import { clickHandle } from "./clickHandle"
function _main(selector) {
    let elemententent = document.querySelector(selector)
    elemententent.addEventListener("click", function() {
        elemententent.innerText = clickHandle();
      });
}
export { _main };