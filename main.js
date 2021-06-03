let counter = 0;

const showData = () => {
  console.log(`counter value : ${counter++}`);
};

showData();

const debounce = function(delay) {
  let timer;

  return function () {

    clearTimeout(timer)
    let contex = this;

    timer = setTimeout(() => {
      showData.apply(contex);
    }, delay);
  };
};

betterFunction = debounce(300)
