const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const code = `
  function func() {
    const guang = 'guang';
    function func2() {
      const ssh = 'ssh';
      {
        function func3 () {
          const suzhe = 'suzhe';
        }
      }
    }
  }
`;

const ast = parser.parse(code);

traverse(ast, {
  FunctionDeclaration(path) {
    if (path.get('id.name').node === 'func3') {
      console.log(path.scope.dump());
    }
  }
})



// ------------------------------------------------------------
// # FunctionDeclaration
//  - suzhe { constant: true, references: 0, violations: 0, kind: 'const' }
// # BlockStatement
//  - func3 { constant: true, references: 0, violations: 0, kind: 'hoisted' }
// # FunctionDeclaration
//  - ssh { constant: true, references: 0, violations: 0, kind: 'const' }
// # FunctionDeclaration
//  - guang { constant: true, references: 0, violations: 0, kind: 'const' }
//  - func2 { constant: true, references: 0, violations: 0, kind: 'hoisted' }
// # Program
//  - func { constant: true, references: 0, violations: 0, kind: 'hoisted' }
// ------------------------------------------------------------


// 函数和块的作用域内的变量声明会在作用域 （scope） 内创建一个绑定（变量名绑定到具体的值，也就是 binding），
// 然后其余地方可以引用 （refer） 这个 binding，这样就是静态作用域链的变量访问顺序。


// 因为这样的嵌套关系是分析代码就可以得出的，不需要运行，按照这种顺序访问变量的链就是静态作用域链，
// 这种链的好处是可以直观的知道变量之间的引用关系。
// 相对的，还有动态作用域链，也就是作用域的引用关系与嵌套关系无关，与执行顺序有关，
// 会在执行的时候动态创建不同函数、块的作用域的引用关系。缺点就是不直观，没法静态分析。
// 静态作用域链是可以做静态分析的，比如我们刚刚用 babel 分析的 scope 链就是。
// 所以绝大多数编程语言都是作用域链设计都是选择静态的顺序。

// 但是，JavaScript 除了静态作用域链外，还有一个特点就是函数可以作为返回值。

// 这就导致了一个问题，本来按照顺序创建调用一层层函数，按顺序创建和销毁作用域挺好的，
// 但是如果内层函数返回了或者通过别的暴露出去了，那么外层函数销毁，内层函数却没有销毁，
// 这时候怎么处理作用域，父作用域销不销毁？ （比如这里的 func 调用结束要不要销毁作用域）
