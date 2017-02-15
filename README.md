# react-longshadowicon-component

---

react long shadow icon component

[![build status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![npm download][download-image]][download-url]

[travis-image]: https://travis-ci.org/nvsky/react-longshadowicon-component.svg?style=flat-square
[travis-url]: https://travis-ci.org/nvsky/react-longshadowicon-component
[npm-image]: https://img.shields.io/npm/v/react-longshadowicon-component.svg?style=flat-square
[npm-url]: http://npmjs.org/package/react-longshadowicon-component 
[coveralls-image]: https://coveralls.io/repos/github/nvsky/react-longshadowicon-component/badge.svg?style=flat-square
[coveralls-url]: https://coveralls.io/github/nvsky/react-longshadowicon-component?branch=master
[download-image]: https://img.shields.io/npm/dm/react-longshadowicon-component.svg?style=flat-square
[download-url]: https://npmjs.org/package/react-longshadowicon-component

## install

[![react-longshadowicon-component](https://nodei.co/npm/react-longshadowicon-component.png)](https://npmjs.org/package/react-longshadowicon-component)

## Usage

```js
var LongShadowIcon = require('react-longshadowicon-component');
var React = require('react');
React.render(<LongShadowIcon />, container);
```

## API

### props

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th style="width: 50px;">default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>prefixCls</td>
          <td>String</td>
          <td>rc-lsi</td>
          <td>component classname</td>
        </tr>
        <tr>
          <td>boxSize</td>
          <td>Number</td>
          <td>73</td>
          <td>The value is component content size</td>
        </tr>
        <tr>
          <td>maxContent</td>
          <td>Number</td>
          <td>45</td>
          <td>The value is component context max size</td>
        </tr>
        <tr>
          <td>iconUrl</td>
          <td>String</td>
          <td>''</td>
          <td>The value is icon url or base64</td>
        </tr>
    </tbody>
</table>

## Development

```
npm install react-longshadowicon-component --save
npm start
```

## Example

https://nvsky.github.io/react-longshadowicon-component/


