# Easy-Toast

> built for project that i use vanilla Javascript or typescript that I do not want to use extra libraries with it

## how to use

1. Copy easy-toast.js to your project
2. Copy easy-toast.css to your project
3. add `<div id="toast"></div>` at the bottom of you page
4. call function easyToast(Message, Position, type, Duration)

## Parameters

1. Message: string
2. position: string
   1. top
   2. bottom
   3. left
   4. right
   5. top left
   6. top right
   7. bottom left
   8. bottom right
3. type: string
   1. success
   2. warning
   3. error
4. Duration: number
   1. in seconds
   2. if you did not add it it will be 3 seconds by default

|            Error/Warning             |             Success              |
| :----------------------------------: | :------------------------------: |
| ![Error](./assets/error-worning.png) | ![Warning](./assets/success.png) |

## TODO

- [x] Show Toast
- [x] Select place to show toast
- [ ] Show stack of toasts
- [x] set timer of the toasts
- [ ] Show timer under the toast
- [ ] Add SVG logos depend on user request
- [ ] OnClick close toast

> Note: now you can only show one toast at a time
