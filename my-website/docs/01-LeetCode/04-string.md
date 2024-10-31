# String Cheatsheet

## 基本操作

1. **字符串反转**
    ```python
    s = "hello"
    reversed_s = s[::-1]  # 'olleh'
    ```

2. **字符串切片**
    ```python
    s = "hello"
    first_two = s[:2]  # 'he'
    last_two = s[-2:]  # 'lo'
    middle = s[1:4]    # 'ell'
    ```

3. **字符串拼接**
    ```python
    strings = ["Hello", "world"]
    combined = "".join(strings)  # 'Helloworld'
    combined_with_space = " ".join(strings)  # 'Hello world'
    ```

4. **字符频率统计**
    ```python
    from collections import Counter
    s = "hello"
    freq = Counter(s)  # {'h': 1, 'e': 1, 'l': 2, 'o': 1}
    ```

## 常用算法/技巧

1. **双指针/滑动窗口**
   用于寻找子串或字符串中的特定属性（如最长无重复子串）。
    ```python
    def lengthOfLongestSubstring(s: str) -> int:
        char_set = set()
        l = 0
        max_length = 0
        
        for r in range(len(s)):
            while s[r] in char_set:
                char_set.remove(s[l])
                l += 1
            char_set.add(s[r])
            max_length = max(max_length, r - l + 1)
        
        return max_length
    ```

2. **字符串去重/查找重复**
   用 `set()` 或 `dict()` 来快速查找或去重。
    ```python
    s = "abcabcbb"
    unique_chars = set(s)  # {'a', 'b', 'c'}
    ```

3. **字符串排序（字符重排列）**
    ```python
    s = "cba"
    sorted_s = "".join(sorted(s))  # 'abc'
    ```

4. **判断回文**
    ```python
    def is_palindrome(s: str) -> bool:
        return s == s[::-1]
    
    print(is_palindrome("racecar"))  # True
    ```

## 经典问题示例

1. **最长公共前缀（Longest Common Prefix）**
    ```python
    def longestCommonPrefix(strs: List[str]) -> str:
        if not strs:
            return ""
        
        strs.sort()
        first, last = strs[0], strs[-1]
        i = 0
        while i < len(first) and i < len(last) and first[i] == last[i]:
            i += 1
        
        return first[:i]
    ```

2. **罗马数字转整数（Roman to Integer）**
    ```python
    def romanToInt(s: str) -> int:
        roman_map = {
            'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000
        }
        
        total = 0
        prev_value = 0
        for char in s[::-1]:  # Reverse iterate
            value = roman_map[char]
            if value < prev_value:
                total -= value
            else:
                total += value
            prev_value = value
        
        return total
    ```

3. **有效的括号（Valid Parentheses）**
    ```python
    def isValid(s: str) -> bool:
        stack = []
        mapping = {')': '(', '}': '{', ']': '['}
        
        for char in s:
            if char in mapping:
                top_element = stack.pop() if stack else '#'
                if mapping[char] != top_element:
                    return False
            else:
                stack.append(char)
        
        return not stack
    ```

4. **最长回文子串（Longest Palindromic Substring）**
    ```python
    def longestPalindrome(s: str) -> str:
        def expandAroundCenter(s, left, right):
            while left >= 0 and right < len(s) and s[left] == s[right]:
                left -= 1
                right += 1
            return left + 1, right
        
        start, end = 0, 0
        for i in range(len(s)):
            left1, right1 = expandAroundCenter(s, i, i)
            left2, right2 = expandAroundCenter(s, i, i + 1)
            
            if right1 - left1 > end - start:
                start, end = left1, right1
            if right2 - left2 > end - start:
                start, end = left2, right2
        
        return s[start:end]
    ```

## 字符串常用操作
1. **判断子串**
    ```python
    s = "hello"
    if "ell" in s:
        print("Substring found!")
    ```

2. **替换字符**
    ```python
    s = "hello"
    s_replaced = s.replace("l", "r")  # 'herro'
    ```

3. **转换大小写**
    ```python
    s = "Hello World"
    print(s.lower())  # 'hello world'
    print(s.upper())  # 'HELLO WORLD'
    ```

4. **去除空白字符**
    ```python
    s = "  hello  "
    stripped = s.strip()  # 'hello'
    ```
