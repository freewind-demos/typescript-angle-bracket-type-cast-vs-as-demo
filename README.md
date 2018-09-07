TypeScript "<type>obj" and "obj as type" Demo
=============================================

Typescript中，`<type>obj`与`obj as type`这两种形式是等价的，
只是前者不能用于tsx（支持类似于html的标记），以防止parser太难写。
而后者`as`就是为了解决这个问题，它可以用在普通的ts以及tsx中。


```
npm install
npx ts-node hello.ts
```

