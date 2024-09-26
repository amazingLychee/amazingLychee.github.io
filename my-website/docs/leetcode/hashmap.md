# HashMap (Dictionary) Cheat Sheet

## **1. 基本用法**
在Python中，HashMap由内置的数据结构`dictionary`实现。

### **创建HashMap**
```python
# 空的HashMap
my_map = {}

# 带有初始值的HashMap
my_map = {'key1': 'value1', 'key2': 'value2'}
```

### **添加或更新元素**
```python
# 添加新的键值对
my_map['new_key'] = 'new_value'

# 更新已有的键
my_map['key1'] = 'updated_value'
```

## **2. 访问元素**
### **通过键获取值**
```python
value = my_map['key1']  # 如果'key1'不存在，将引发KeyError
```

### **使用`get()`方法**
```python
value = my_map.get('key1')  # 如果'key1'不存在，返回None

# 在键不存在时返回默认值
value = my_map.get('nonexistent_key', 'default_value')
```

## **3. 删除元素**
### **使用`del`关键字**
```python
del my_map['key1']  # 如果'key1'不存在，将引发KeyError
```

### **使用`pop()`方法**
```python
value = my_map.pop('key2', 'default_value')  # 如果'key2'不存在，返回'default_value'
```

### **删除所有元素**
```python
my_map.clear()
```

## **4. 检查键是否存在**
```python
# 检查键是否在HashMap中
if 'key1' in my_map:
    print('key1 存在于HashMap中')
```

## **5. 遍历HashMap**
### **遍历所有键**
```python
for key in my_map:
    print(key)
```

### **遍历所有值**
```python
for value in my_map.values():
    print(value)
```

### **遍历所有键值对**
```python
for key, value in my_map.items():
    print(f'Key: {key}, Value: {value}')
```

## **6. 获取HashMap大小**
```python
size = len(my_map)
```

## **7. 内置方法概览**

| 方法                        | 描述                                                    |
|----------------------------|--------------------------------------------------------|
| `my_map.get(key, default)` | 返回`key`对应的值，如果不存在则返回`default`。          |
| `my_map.pop(key, default)` | 移除并返回`key`对应的值，如果不存在则返回`default`。     |
| `my_map.keys()`            | 返回所有键的视图对象。                                  |
| `my_map.values()`          | 返回所有值的视图对象。                                  |
| `my_map.items()`           | 返回所有键值对的视图对象。                              |
| `my_map.clear()`           | 删除字典中的所有项。                                    |
| `my_map.update(other_map)` | 用`other_map`中的键值对更新字典。                       |

## **8. 示例**
### **合并两个HashMap**
```python
map1 = {'a': 1, 'b': 2}
map2 = {'b': 3, 'c': 4}

# 使用update()方法
map1.update(map2)  # 现在 map1 = {'a': 1, 'b': 3, 'c': 4}
```

### **为不存在的键设置默认值**
```python
from collections import defaultdict

# defaultdict为不存在的键提供默认值
my_map = defaultdict(int)
my_map['a'] += 1  # 因为'a'不存在，它被初始化为0，然后递增为1
```

## **9. 提示和最佳实践**
- **键的要求**：键必须是不可变类型（如字符串、数字、元组）并且是唯一的。
- **复杂度**：
  - 插入、访问和删除的平均时间复杂度为 **O(1)**，因为哈希机制。
- **避免KeyError**：使用`get()`或`in`在访问前检查键是否存在。