const Stopwatch = function(){
  // let duration = 0;
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

  this.ssStart = function(){
    if (isRunning)
      return new Error("Stop watch has already started")

    isRunning = true;
    startTime = new Date();
  }

  this.ssStop = function(){
    if(!isRunning)
      throw new Error("Not started");

    isRunning = false;
    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  }

  this.ssReset = function(){
    startTime = null;
    endTime = null;
    isRunning = false;
    duration = 0;
  }


};
const sw = new Stopwatch;



//sw.start();
//sw.stop();
//sw.duration
//sw.reset();
