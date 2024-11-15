# 回溯

## 10.复原IP地址
这里要注意选择用字符串还是list。如果是字符串，本身是不可变的，是不用显式的进行回溯操作。如果是list则需要pop。还需要注意：最后循环是循环到第三个，检查第四个，结束回溯；还是循环到第四个数组，直接在for里检查，然后检查最后在startIndex == len(s)
```python
if self.isValid(currentString):
path += (currentString + ".")
self.backTracking(s, result, path, i + 1, pointsNum + 1)
else:
break
```

## 总结
在树层去重的时候，用used。但是如果是不能sort原数组的情况，就不能够使用used，比如求递增子序列。就需要使用set