/**
 * throttle.
 *
 * Напишите функцию throttle(fn, delay, ctx) – «тормозилку», которая возвращает обёртку,
 * вызывающую fn не чаще, чем раз в delay миллисекунд.
 * В качестве контекста исполнения используется ctx.
 * Если игнорируемый вызов оказался последним, то он должен выполниться.
 */

// пример для delay === 100
// . - вызовы throttledFn
// ! - вызовы fn
//................
//!         !          !
//0ms      100ms      200ms
//.    .         .
//!         !          !
//0ms      100ms      200ms

function test() {
  function sendCoord(x, y) {
    console.log(`${Date.now()}: User ${this.name} mouse coords are ${x}, ${y}`);
  }

  const throttled = throttle(sendCoord, 100, {name: 'Slava'});

  setTimeout(() => throttled(1, 1), 0);
  setTimeout(() => throttled(2, 2), 35);
  setTimeout(() => throttled(3, 3), 97);
  setTimeout(() => throttled(4, 4), 118);
  setTimeout(() => throttled(5, 5), 194);
  setTimeout(() => throttled(6, 6), 250);

  // 0: 1,1
  // 100: 3,3
  // 200: 5,5
  // 300: 6,6
}

function throttle(fn, delay, ctx) {
  let isThrottled = false
  let lastCallProps

  return function throttleInner(...props) {
    if (isThrottled) {
      lastCallProps = props
    } else {
      isThrottled = true
      fn.call(ctx, ...props)

      setTimeout(() => {
        isThrottled = false

        if (lastCallProps) {
          throttleInner(...lastCallProps)
          lastCallProps = null
        }
      }, delay)
    }
  }
}

test()