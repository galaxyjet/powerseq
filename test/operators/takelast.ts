import * as assert from "assert";
import { Enumerable, takelast } from "../../src/index";

it('takelast', function () {
    assert.deepEqual(Array.from(takelast([1, 2, 3], 2)), [2, 3]);
    assert.deepEqual(Enumerable.from([1, 2, 3, 4]).takelast(0).toarray(), []);
    assert.deepEqual(Enumerable.from([1, 2, 3, 4]).takelast(1).toarray(), [4]);
    assert.deepEqual(Enumerable.from([1, 2, 3, 4]).takelast(5).toarray(), [1, 2, 3, 4]);
    assert.deepEqual(Enumerable.from([]).takelast(5).toarray(), []);
});

export const samples = [
    () => takelast([1, 2, 3], 2),
    () => takelast([1, 2, 3], 0),
    () => takelast([1, 2, 3], 5)
];

export const lodash = ["last", "takeRight"];
export const rxjs = "takeLast";