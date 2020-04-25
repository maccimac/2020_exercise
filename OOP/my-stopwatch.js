const Stopwatch = function(){
  let duration = 0;
  let timerGo = null;
  let time = 0;

  let startTime, endTime, isRunning, duration = 0;

  Object.defineProperty(this, "duration",{
    get: function(){
      return duration;
    }
  })

  this.start = function(){
    timerGo = setInterval(function(){
      duration++;
    }, 1000);
  }

  this.stop = function(){
    clearInterval(timerGo);
  }

  this.reset = function(){
    timerGo = null;
    duration = 0;
  }

  this.whatIsDuration = function(){
    return time;
  }



};
const sw = new Stopwatch;



//sw.start();
//sw.stop();
//sw.duration
//sw.reset();
