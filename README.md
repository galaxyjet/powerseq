

```javascript
import {Enumerable} from "powerseq";

var q = Enumerable
    .range(1,Number.MAX_VALUE)
    .filter( x => x % 2 === 0)
    .take(5)
    .reverse();

console.log(q.toarray());
```

enumerable
<table><tr><td><a href="https://github.com/marcinnajder/powerseq/tree/master/test/enumerable/empty.ts">empty</a></td></tr><tr><td><a href="https://github.com/marcinnajder/powerseq/tree/master/test/enumerable/entries.ts">entries</a></td></tr><tr><td><a href="https://github.com/marcinnajder/powerseq/tree/master/test/enumerable/from.ts">from</a></td></tr><tr><td><a href="https://github.com/marcinnajder/powerseq/tree/master/test/enumerable/of.ts">of</a></td></tr><tr><td><a href="https://github.com/marcinnajder/powerseq/tree/master/test/enumerable/range.ts">range (Range)</a></td></tr><tr><td><a href="https://github.com/marcinnajder/powerseq/tree/master/test/enumerable/repeatvalue.ts">repeatvalue</a></td></tr></table>

operators
<table><tr><td><a href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/concat.ts">concat (Concat)</a></td><td><a href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/findindex.ts">findindex</a></td><td><a href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/min.ts">min (Min)</a></td><td><a href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/take.ts">take (Take)</a></td></tr><tr><td><a href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/count.ts">count (Count)</a></td><td><a href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/flatmap.ts">flatmap (SelectMany)</a></td><td><a href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/reduce.ts">reduce (Aggregate)</a></td><td><a href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/takewhile.ts">takewhile (TakeWhile)</a></td></tr><tr><td><a href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/distinct.ts">distinct (Distinct)</a></td><td><a href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/groupby.ts">groupby (GroupBy)</a></td><td><a href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/reverse.ts">reverse (Reverse)</a></td><td><a href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/toarray.ts">toarray (ToArray)</a></td></tr><tr><td><a href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/every.ts">every (All)</a></td><td><a href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/intersect.ts">intersect (Intersect)</a></td><td><a href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/skip.ts">skip (Skip)</a></td><td><a href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/tomap.ts">tomap</a></td></tr><tr><td><a href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/expect.ts">expect</a></td><td><a href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/join.ts">join (Join)</a></td><td><a href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/skipwhile.ts">skipwhile (SkipWhile)</a></td><td><a href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/toobject.ts">toobject</a></td></tr><tr><td><a href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/filter.ts">filter (Where)</a></td><td><a href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/map.ts">map (Select)</a></td><td><a href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/some.ts">some (Any)</a></td><td><a href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/union.ts">union (Union)</a></td></tr><tr><td><a href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/find.ts">find (First)</a></td><td><a href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/max.ts">max (Max)</a></td><td><a href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/sort.ts">sort (OrderBy)</a></td><td><a href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/zip.ts">zip (Zip)</a></td></tr></table>
