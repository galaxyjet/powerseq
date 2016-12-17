import * as assert from "assert";
import { Enumerable, intersect} from "../../src/index";

it('intersect', function () {
    assert.deepEqual(Array.from(intersect([1, 2, 3, 4, 2, 4], [4, 5, 6, 1])), [4, 1]);
    assert.deepEqual(Enumerable.from([1, 2, 3, 4, 2, 4]).intersect([4, 5, 6, 1]).toarray(), [4, 1]);
    assert.deepEqual(Enumerable.from([1, 2, 3, 4, 2, 4]).intersect([4, 6], x => x % 3).toarray(), [4, 6]);
});

export const linq = "Intersect";