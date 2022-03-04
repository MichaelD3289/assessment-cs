  | function | tinyArray | smallArray | mediumArray | largeArray | extraLargeArray |
  | ..Insert |  149.9 μs |  156.7 μs  |  506.3 μs   | 15.5145 ms |   1.6179505 s   |
  | ..Append |  209.1 μs |  234.2 μs  |  232.2 μs   |  947.9 μs  |    6.8884 ms    |

  The insert function starts off faster but by the time the array even hits 1000 items its over twice as slow. At large scale inserting is much slower as the workload increases exponentially. Append is much more linear. Append scales better. 

  Insert is slower because it has to rearrange every item in the array every time it inserts data to the front. This means every one item inserted could require moving thousands of items. Append only ever places an item an the last index on an array and doens't need to rearange any part of it.
