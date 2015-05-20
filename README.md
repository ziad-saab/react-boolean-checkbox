# NOTE: This package is useless because React already provides [`checkedLink`](https://facebook.github.io/react/docs/two-way-binding-helpers.html)

# [React](http://facebook.github.io/react/)-boolean-checkbox
React checkbox for `true`/`false` with `valueLink`.

## Usage
```html
<label>
  <BooleanCheckbox valueLink={this.linkState('isSupercool')}/>
  <span>Are you super cool?</span>
</label>
```

## Install

```sh
bower install react-boolean-checkbox
or
npm install react-boolean-checkbox
```

Simply require it to use it:

```javascript
var BooleanCheckbox = require('react-boolean-checkbox');
```
