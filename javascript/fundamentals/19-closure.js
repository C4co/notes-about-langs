/*
  Closure
  https://javascript.info/closure
*/

/*
  a closure is a function that remember its outer variable
  and can access them
*/

// simple clousure
{
  function fn(arg) {
    return function () {
      console.log(arg)
    }
  }

  const foo = fn('foo')
  const bar = fn('bar')

  foo()
  bar()
}

// garbage collection
{
  function f() {
    let value = 123

    function g() {
      console.log(value)
    }

    return g
  }

  let g = f() // g is reachable, and keeps the outer lexical evironment in memory
}

// cache function
{
  // sum function with cache
  const sum = (function () {
    const cache = new Map()

    return (a = 0, b = 0) => {
      const values = JSON.stringify({ a: b, b: b })
      const isCached = cache.get(values)

      if (isCached) {
        return `From cache - ${isCached}`
      } else {
        const total = a + b
        cache.set(values, total)

        return total
      }
    }
  })()

  console.log(sum(1, 2))
  console.log(sum(1, 2))
  console.log(sum(3, 5))
  console.log(sum(10))
  console.log(sum(10))
}
