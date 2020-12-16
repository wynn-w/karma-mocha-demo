/*
 * @Author: wynn-w
 * @Description: 
 * @Date: 2020-12-12 22:43:16
 * @LastEditTime: 2020-12-16 11:01:22
 * @LastEditors: wynn-w
 */
import { _main } from "../src/main"
import { expect } from 'chai'
describe("click handle", function () {
    // 钩子函数
    beforeEach(function () {
        // 向页面的 body 元素中添加 DOM 元素，来辅助测试
        let _button = document.createElement('button')
        _button.id = 'btn'
        document.body.appendChild(_button)
        _main("#btn");
    });
    it("should clicked when _main run", function () {
        let button = document.querySelector("#btn");
        button.click();                          
        expect(button.innerText).to.equal("clicked!");
    });
})
console.log("_main");