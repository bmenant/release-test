"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index = require("../index");
describe('the index.ts module', function () {
    describe('the add function', function () {
        it('should add two numbers together', function () {
            var sum = index.add(4, 5);
            expect(sum).toBe(9);
        });
    });
});
