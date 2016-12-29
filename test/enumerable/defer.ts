import * as assert from "assert";
import { Enumerable, defer, filter } from "../../src/index";

it('defer', function () {
    var couter = 0;

    var iterable = defer(() => {
        couter++;
        return [couter, couter, couter];
    });

    assert.deepEqual(Array.from(iterable), [1, 1, 1]);
    assert.deepEqual(couter, 1);
    assert.deepEqual(Array.from(iterable), [2, 2, 2]);
    assert.deepEqual(couter, 2);
});