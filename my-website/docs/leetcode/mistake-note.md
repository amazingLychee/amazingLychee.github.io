# 错题本

## **注意list是引用还是拷贝的值**
```python
self.res.append(self.path[:])
```
如果这里直接写```append(path)```会导致后面即使加入新的path，前面的path也会跟着变