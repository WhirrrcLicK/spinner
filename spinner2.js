const spinnerArray = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|  ', '\r/  ', '\r-  ', '\r\\  ']
let count = 100
const spinner = function() {
  for (let x = 0; x < spinnerArray.length; x++) {
    setTimeout(() => {
      process.stdout.write(spinnerArray[x])
    }, count)
    count += 200
  }
}

spinner(spinnerArray)