```js
React.createElement(T, props, ...children)
```

---

JSXElement:

- JSXSelfClosingElement
- JSXOpeningElement JSXChildren<sub>opt</sub> JSXClosingElement

JSXSelfClosingElement:

- `<` JSXElementName JSXAttributes<sub>opt</sub> `/` `>`

JSXOpeningElement:

- `<` JSXElementName JSXAttributes<sub>opt</sub> `>`

JSXClosingElement:

- `<` `/` JSXElementName `>`

JSXElementName:

- JSXIdentifier
- JSXMemberExpression

JSXIdentifier:

- IdentifierStart
- JSXIdentifier IdentifierPart

JSXMemberExpression:

- JSXIdentifier `.` JSXIdentifier
- JSXMemberExpression `.` JSXIdentifier

---

JSXAttributes:

- JSXSpreadAttribute JSXAttributes<sub>opt</sub>
- JSXAttribute JSXAttributes<sub>opt</sub>

JSXSpreadAttribute:

- `{` `...` AssignmentExpression `}`

JSXAttribute:

- JSXAttributeName JSXAttributeInitializer<sub>opt</sub>

JSXAttributeName:

- JSXIdentifier

JSXAttributeInitializer:

- `=` JSXAttributeValue

JSXAttributeValue:

- `"` JSXDoubleStringCharacters<sub>opt</sub> `"`
- `'` JSXSingleStringCharacters<sub>opt</sub> `'`
- `{` AssignmentExpression `}`

JSXDoubleStringCharacters:

- JSXDoubleStringCharacter JSXDoubleStringCharacters<sub>opt</sub>

JSXDoubleStringCharacter:

- SourceCharacter __but not `"`__

JSXSingleStringCharacters:

- JSXSingleStringCharacter JSXSingleStringCharacters<sub>opt</sub>

JSXSingleStringCharacter:

- SourceCharacter __but not `'`__

---

JSXChildren:

- JSXChild JSXChildren<sub>opt</sub>

JSXChild:

- JSXText
- JSXElement
- `{` JSXChildExpression<sub>opt</sub> `}`

JSXText:

- JSXTextCharacter JSXText<sub>opt</sub>

JSXTextCharacter:

- SourceCharacter __but not one of `{`, `<`, `>` or `}`__

JSXChildExpression:

- AssignmentExpression
- `...` AssignmentExpression

---

- [JSX In Depth](https://reactjs.org/docs/jsx-in-depth.html)
- [Draft: JSX Specification](https://facebook.github.io/jsx/)
- [ECMAScript 6th Edition (ECMA-262)](https://www.ecma-international.org/ecma-262/8.0/index.html)
