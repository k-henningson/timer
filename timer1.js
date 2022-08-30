const seconds = process.argv.slice(2);

const timer1 = function(seconds) {

  seconds.forEach((second) => {
    const number = Number(second);
    //console.log('number', number);
    if (isNaN(number)) {
      return;
    };

    if (number < 0) {
      return;
    };

    setTimeout(() => {
      process.stdout.write('\x07');
      //console.log(number);
    }, (number * 1000));

  });
};

timer1(seconds);