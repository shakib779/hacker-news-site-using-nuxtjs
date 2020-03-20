import Vue from 'vue'

Vue.filter('getTimeDiffrence', (timeInUnix) => {
  let diff = Math.round((Date.now() / 1000)) - timeInUnix;
  const day = 24 * 60 * 60;
  const hour = 60 * 60;
  const minutes = 60;
  let string = "";

  if (diff >= day) {
    diff = Math.round(diff / day);
    string = " day";
  } else if (diff >= hour) {
    diff = Math.round(diff / hour);
    string = " hour";
  } else if (diff >= minutes) {
    diff = Math.round(diff / minutes);
    string = " minute";
  } else {
    string = " second";
  }

  if (diff > 1)
    string += "s";
  return diff.toString() + string;

});