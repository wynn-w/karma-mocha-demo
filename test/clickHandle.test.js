/*
 * @Author: wynn-w
 * @Description: 
 * @Date: 2020-12-12 22:51:56
 * @LastEditTime: 2020-12-16 10:53:30
 * @LastEditors: wynn-w
 */
import { clickHandle } from "../src/clickHandle"
import { expect } from 'chai'
// 测试套件
describe("utils::clickHandle test", function () {
    // 测试用例
    it("should clicked when clickHandle return", function () {
        expect(clickHandle()).to.equal("clicked!");
    });
});
console.log("until");