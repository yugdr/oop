// Use Destructuring Assignment to Extract Values from Objects

const AVG_TEMPERATURES = {
    today: 77,
    tomorrow: 79
  };

function getTempOfTmrw(avgTemperatures) {
    "use strict";
    const {tomorrow : tempOfTomorrow} = avgTemperatures;

    return tempOfTomorrow;
}
