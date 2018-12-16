| glob | 释义 |
| - | - |
| `*` | 匹配任意字符串（除了 `/`）|
| `**` | 匹配任意字符串 |
| `?` | 匹配任意字符 |
| `[abc]` | 匹配字符集内的任意字符 |
| `[!abc]` | 匹配非字符集内的任意字符 |
| `{foo,bar,baz}` | 匹配字符串集内的任意字符串 |
| `{m..n}` | 匹配 [m, n] 区间内的任意整数 |

---

```ini
root = true

[*]

# tab | space
indent_style = space

# <int> | tab
indent_size = tab

tab_width = 4

# lf | crlf | cr
end_of_line = lf

# latin1 | utf-8 | utf-16be | utf-16le | utf-8-bom
charset = utf-8

trim_trailing_whitespace = true

insert_final_newline = true
```

> - 大小写不敏感
> - 注释必须独占一行
> - `prop = unset` 可用来重置某一属性
