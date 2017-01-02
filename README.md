
    
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
<table><tr><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/enumerable/defer.ts" title=" defer(() => [1, 2, 3] /* executed on demand */) -> seq [1, 2, 3]">defer</a> </span></td><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/enumerable/range.ts" title=" range(10, 4) -> seq [10, 11, 12, 13]">range</a> (Range)</span></td></tr><tr><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/enumerable/empty.ts" title=" empty() -> seq []">empty</a> </span></td><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/enumerable/repeatvalue.ts" title=" repeatvalue(true, 4) -> seq [true, true, true, true]&#013; take(repeatvalue(true), 2) -> seq []">repeatvalue</a> </span></td></tr><tr><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/enumerable/entries.ts" title=" entries({ 'a': 1, b: 2 }) -> seq [['a', 1], ['b', 2]]">entries</a> </span></td></tr><tr><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/enumerable/from.ts" title=" Enumerable.from([1, 2, 3]) -> enumerable [1, 2, 3]&#013; Enumerable.from((function* () { yield 1; })()) -> enumerable []">from</a> </span></td></tr><tr><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/enumerable/generate.ts" title=" generate(0, x => x < 4, x => x + 1, x => 'a'.repeat(x)) -> seq ['', 'a', 'aa', 'aaa']">generate</a> </span></td></tr><tr><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/enumerable/of.ts" title=" of(1, 2, true, 'abc') -> seq [1, 2, true, 'abc']">of</a> </span></td></tr></table>

operators
<table><tr><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/asiterable.ts" title=" asiterable([1, 2] /**changes seq type to help TypeScript*/) -> [1, 2]">asiterable</a> </span></td><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/filter.ts" title=" filter([1, 2, 2, 3, 4], x => x > 2) -> seq [3, 4]&#013; filter([1, 2, 2, 3, 4], (x, index) => x - 1 === index) -> seq [1, 2]">filter</a> (Where)</span></td><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/max.ts" title=" max([1, 2, 3, 1]) -> 3&#013; max(['a', 'bb', 'rrr', 'd'], x => x.length) -> 3">max</a> (Max)</span></td><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/skipwhile.ts" title=" skipwhile([1, 2, 2, 3, 3, 4, 5], x => x < 3) -> seq [3, 3, 4, 5]">skipwhile</a> (SkipWhile)</span></td></tr><tr><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/average.ts" title=" average([1, 2, 3, 4]) -> 2.5&#013; average(['a', 'aa', 'aaa'], s => s.length) -> 2">average</a> (Average)</span></td><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/find.ts" title=" find([1, 2, 2, 3, 4]) -> 1&#013; find([1, 2, 2, 3, 4], x => x > 2) -> 3&#013; find([1, 2, 2, 3, 4], x => x > 4) -> 'error: Cannot read property 'Symbol(Symbol.iterator)' of undefined'&#013; find([1, 2, 2, 3, 4], (x, index) => x > 1 && index > 2) -> 3">find</a> (First)</span></td><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/maxby.ts" title=" maxby(['a', 'bb', 'rrr', 'd'], x => x.length) -> 'rrr'">maxby</a> </span></td><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/some.ts" title=" some([1]) -> true&#013; some([]) -> false&#013; some([1, 2, 3], x => x > 2) -> true&#013; some([1, 2, 3], x => x > 3) -> false">some</a> (Any)</span></td></tr><tr><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/buffer.ts" title=" buffer([1, 2, 3, 4, 5, 6, 7], 2) -> seq [[1, 2], [3, 4], [5, 6], [7]]&#013; buffer([1, 2, 3, 4, 5, 6, 7], 2, /*skip*/ 4) -> seq [[1, 2], [5, 6]]">buffer</a> </span></td><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/findindex.ts" title=" findindex([1, 2, 2, 3, 4], x => x > 1) -> 1&#013; findindex([1, 2, 2, 3, 4], (x, index) => x > 1 && index > 2) -> 3">findindex</a> </span></td><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/min.ts" title=" min([1, 2, 3, 1]) -> 1&#013; min(['a', 'bb', 'rrr', 'd'], x => x.length) -> 1">min</a> (Min)</span></td><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/sum.ts" title=" sum([1, 2, 3]) -> 6&#013; sum(['a', 'asd', 'yy'], x => x.length) -> 6">sum</a> (Sum)</span></td></tr><tr><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/cast.ts" title=" cast([new Number(1), new Number(2), 's', false], Number) -> 'error: An element in the sequence cannot be cast to type 'Number'.'">cast</a> (Cast)</span></td><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/flatmap.ts" title=" flatmap([{ ns: [1] }, { ns: [99, 10] }, { ns: [6, 3] }], x => x.ns) -> seq [1, 99, 10, 6, 3]&#013; flatmap(['abc', 'cd'], text => text, (text, char) => text + '-' + char) -> seq ['abc-a', 'abc-b', 'abc-c', 'cd-c', 'cd-d']">flatmap</a> (SelectMany)</span></td><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/minby.ts" title=" minby(['a', 'bb', 'rrr', 'd'], x => x.length) -> 'a'">minby</a> </span></td><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/take.ts" title=" take([1, 2, 3, 4, 5], 2) -> seq []">take</a> (Take)</span></td></tr><tr><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/concat.ts" title=" concat([1, 2], [3, 5], [6]) -> seq [1, 2, 3, 5, 6]">concat</a> (Concat)</span></td><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/foreach.ts" title=" foreach([1, 2, 3], x => { /* some action */ ; }) -> 'error: Cannot read property 'Symbol(Symbol.iterator)' of undefined'">foreach</a> </span></td><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/oftype.ts" title=" oftype([new Number(1), new Number(2), 's', false], Number) -> seq [{  }, {  }]">oftype</a> (OfType)</span></td><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/takelast.ts" title=" takelast([1, 2, 3], 2) -> seq [2, 3]&#013; takelast([1, 2, 3], 0) -> seq []&#013; takelast([1, 2, 3], 5) -> seq [1, 2, 3]">takelast</a> </span></td></tr><tr><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/count.ts" title=" count([2, 2, 2]) -> 3&#013; count([2, 4, 6], x => x > 2) -> 2">count</a> (Count)</span></td><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/groupby.ts" title=" groupby(['a', 'b', 'cc', 'ddd', 'xx'], x => x.length) -> seq [enumerable ['a', 'b'], enumerable ['cc', 'xx'], enumerable ['ddd']]&#013; groupby(['a', 'b', 'cc', 'ddd', 'xx'], x => x.length, x => x.toUpperCase()) -> seq [enumerable ['A', 'B'], enumerable ['CC', 'XX'], enumerable ['DDD']]">groupby</a> (GroupBy)</span></td><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/orderby.ts" title=" orderby([1, 4, 2, 3, 5, 1], x => x) -> enumerable [1, 1, 2, 3, 4, 5]&#013; orderby(['abc', 'dd', 'sdfe', 'f'], x => x.length) -> enumerable ['f', 'dd', 'abc', 'sdfe']">orderby</a> (OrderBy)</span></td><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/takewhile.ts" title=" takewhile([1, 2, 2, 3, 3, 4, 5], x => x < 3) -> seq [1, 2, 2]">takewhile</a> (TakeWhile)</span></td></tr><tr><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/defaultifempty.ts" title=" defaultifempty([1, 2, 3]) -> seq [1, 2, 3]&#013; defaultifempty([]) -> seq [undefined]&#013; defaultifempty([], 10) -> seq [10]">defaultifempty</a> (DefaultIfEmpty)</span></td><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/groupjoin.ts" title=" groupjoin([1, 3, 2], ['a', 'b', 'cc'], x => x, y => y.length, (x, ys) => x + ':' + toarray(ys)) -> seq ['1:a,b', '2:cc']">groupjoin</a> (GroupJoin)</span></td><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/orderbydescending.ts" title=" orderbydescending([1, 4, 2, 3, 5, 1], x => x) -> enumerable [5, 4, 3, 2, 1, 1]&#013; orderbydescending(['abc', 'dd', 'sdfe', 'f'], x => x.length) -> enumerable ['sdfe', 'abc', 'dd', 'f']">orderbydescending</a> (OrderByDescending)</span></td><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/thenby.ts" title=" thenby(orderby(['xa', 'a', 'fg', 'ert', 'b'], x => x.length), x => x) -> enumerable ['a', 'b', 'fg', 'xa', 'ert']">thenby</a> (ThenBy)</span></td></tr><tr><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/distinct.ts" title=" distinct([1, 2, 1, 3, 2]) -> seq [1, 2, 3]&#013; distinct(['a', 'aa', 'ab', 'abc'], x => x.length) -> seq ['a', 'aa', 'abc']">distinct</a> (Distinct)</span></td><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/ignoreelements.ts" title=" ignoreelements([1, 3, 2]) -> seq []">ignoreelements</a> </span></td><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/reduce.ts" title=" reduce([1, 2, 3], (a, x) => a + x) -> 6&#013; reduce([1, 2, 3], (a, x) => a + (x * 10), '') -> '102030'">reduce</a> (Aggregate)</span></td><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/thenbydescending.ts" title=" thenbydescending(orderby(['xa', 'a', 'fg', 'ert', 'b'], x => x.length), x => x) -> enumerable ['b', 'a', 'xa', 'fg', 'ert']">thenbydescending</a> (ThenByDescending)</span></td></tr><tr><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/distinctuntilchanged.ts" title=" distinctuntilchanged([1, 1, 2, 2, 2, 1, 3, 3]) -> seq [1, 2, 1, 3]">distinctuntilchanged</a> </span></td><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/includes.ts" title=" includes([1, 2, 3], 2) -> true&#013; includes([1, 2, 3], 5) -> false&#013; includes([1, 2, 3], 3, /*fromIndex*/ 4) -> false">includes</a> (Contains)</span></td><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/reverse.ts" title=" reverse([1, 2, 3]) -> seq [3, 2, 1]">reverse</a> (Reverse)</span></td><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/toarray.ts" title=" toarray([1, 2, 2]) -> [1, 2, 2]">toarray</a> (ToArray)</span></td></tr><tr><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/doo.ts" title=" doo([1, 2, 3,], (x) => { /* executed during iteration */ ; }) -> seq [1, 2, 3]">doo</a> </span></td><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/intersect.ts" title=" intersect([1, 2, 2, 3], [3, 3, 1]) -> seq [3, 1]&#013; intersect(['a', 'c', 'ddd'], ['r', 'ww', 'ttt', 'oooo'], x => x.length) -> seq ['r', 'ttt']">intersect</a> (Intersect)</span></td><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/scan.ts" title=" scan([1, 2, 3], (a, x) => a + x) -> seq [3, 6]&#013; scan([1, 2, 3], (a, x) => a + (x * 10), '') -> seq ['10', '1020', '102030']">scan</a> </span></td><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/tomap.ts" title=" tomap(['a', 'bb', 'ccc'], x => x.length) -> Map {1 => 'a', 2 => 'bb', 3 => 'ccc'}&#013; tomap(['a', 'bb', 'ccc'], x => x.length, x => x.toUpperCase()) -> Map {1 => 'A', 2 => 'BB', 3 => 'CCC'}">tomap</a> </span></td></tr><tr><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/elementat.ts" title=" elementat([1, 2, 12, 15], 2) -> 12&#013; elementat([1, 2, 12, 15], 20) -> 'error: Cannot read property 'Symbol(Symbol.iterator)' of undefined'">elementat</a> (ElementAt)</span></td><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/join.ts" title=" join([1, 2, 3], ['a', 'bb', 'x'], x => x, y => y.length, (x, y) => x + ':' + y) -> seq ['1:a', '1:x', '2:bb']">join</a> (Join)</span></td><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/sequenceequal.ts" title=" sequenceequal([1, 2, 3], [1, 2, 3]) -> true&#013; sequenceequal([1, 2, 3], [1, 2, 2]) -> false&#013; sequenceequal([1, 2, 3], [1, 2]) -> false">sequenceequal</a> (SequenceEqual)</span></td><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/toobject.ts" title=" toobject(['a', 'bb', 'ccc'], x => x.length) -> { 1:a, 2:bb, 3:ccc }&#013; toobject(['a', 'bb', 'ccc'], x => x.length, x => x.toUpperCase()) -> { 1:A, 2:BB, 3:CCC }">toobject</a> </span></td></tr><tr><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/every.ts" title=" every([1, 2, 12, 15], x => x > 0) -> true&#013; every([1, 2, 12, 15], x => x < 10) -> false">every</a> (All)</span></td><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/last.ts" title=" last([1, 2, 3]) -> 3&#013; last([]) -> 'error: Cannot read property 'Symbol(Symbol.iterator)' of undefined'&#013; last([1, 2, 3, 4, 5], x => x > 2) -> 5&#013; last([1, 2, 3, 4, 5], (x, index) => x > 2 && index < 4) -> 4">last</a> (Last)</span></td><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/single.ts" title=" single([1]) -> 1&#013; single([1, 2, 3], x => x > 2) -> 3&#013; single([1, 2, 3], x => x > 1) -> 'error: More than one element satisfies the condition in predicate.'">single</a> (Single)</span></td><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/union.ts" title=" union([1, 2, 2], [2, 3, 3, 4]) -> seq [1, 2, 3, 4]&#013; union(['a', 'c', 'ddd'], ['r', 'ww', 'ttt', 'oooo'], x => x.length) -> seq ['a', 'ddd', 'ww', 'oooo']">union</a> (Union)</span></td></tr><tr><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/except.ts" title=" except([1, 2, 2, 3, 4], [2, 3]) -> seq [1, 4]&#013; except(['a', 'b', 'ba', 'xde'], ['poc'], x => x.length) -> seq ['a', 'ba']">except</a> (except)</span></td><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/map.ts" title=" map([1, 2, 3], x => x * 10) -> seq [10, 20, 30]&#013; map([1, 2, 3], (x, index) => x * 10 + index) -> seq [10, 21, 32]">map</a> (Select)</span></td><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/skip.ts" title=" skip([1, 2, 3, 4, 5], 2) -> seq [3, 4, 5]">skip</a> (Skip)</span></td><td><span><a class="tooltip" href="https://github.com/marcinnajder/powerseq/tree/master/test/operators/zip.ts" title=" zip(['a', 'b', 'c'], [1, 2], (s, n) => s + n) -> seq ['a1', 'b2']&#013; zip(['a', 'b', 'c'], [1, 2], [false], (s, n, b) => s + n + b) -> seq ['a1false']">zip</a> (Zip)</span></td></tr></table>
