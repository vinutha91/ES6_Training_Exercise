// Some service call
myPromise.then(data => data.id);

// Can be better if written like this
myPromise.then(function extractId(data) {
  return data.id;
});

var dog = {
  sound: 'woofff',
  speak: function(){
      setTimeout(() => {
          console.log(this.sound);
      }, 100);
  }
}