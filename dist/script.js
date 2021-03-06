function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} // !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place.

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments.

class Pomodoro extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "countDownSession",































































    () => {
      clearInterval(window.countTimer);
      window.countTimer = setInterval(() => {
        let seconds = this.state.time;
        if (seconds == 0) {
          this.setState(state => ({
            time: state.sessionLength * 60,
            break: state.breakLength * 60 }));

          this.playBeep();
          this.setState({
            isBreak: true });

          setTimeout(() => {
            this.countDownBreak();
          }, 1000);
          clearInterval(window.countTimer);
          console.clear();
        } else {
          if (!this.state.stop) {
            seconds -= 1;
            this.setState(state => ({
              time: state.time - 1 }));

          } else {
            this.setState({
              stop: true });

          }
        }
      }, 1000);
    });_defineProperty(this, "countDownBreak",

    () => {
      clearInterval(window.countBreak);
      window.countBreak = setInterval(() => {
        let seconds = this.state.break;
        if (seconds == 0) {
          this.setState(state => ({
            time: state.sessionLength * 60,
            break: state.breakLength * 60 }));

          this.playBeep();
          this.setState({
            isBreak: false });

          setTimeout(() => {
            this.countDownSession();
          }, 1000);
          clearInterval(window.countBreak);
          console.clear();
        } else {
          if (!this.state.stop) {
            seconds -= 1;
            this.setState(state => ({
              break: state.break - 1 }));

          } else {
            this.setState({
              stop: true });

          }
        }
      }, 1000);
    });this.state = { breakLength: 5, sessionLength: 25, time: 1500, break: 300, stop: true, isBreak: false };this.formatToMinutes = this.formatToMinutes.bind(this);this.addSessionLength = this.addSessionLength.bind(this);this.minusSessionLength = this.minusSessionLength.bind(this);this.addBreakLength = this.addBreakLength.bind(this);this.minusBreakLength = this.minusBreakLength.bind(this);this.resetClock = this.resetClock.bind(this);this.startStop = this.startStop.bind(this);this.playBeep = this.playBeep.bind(this);this.stopBeep = this.stopBeep.bind(this);}addSessionLength() {if (this.state.sessionLength >= 1 && this.state.sessionLength < 60) {this.setState(state => ({ sessionLength: state.sessionLength + 1, time: state.time + 60 }));}}minusSessionLength() {if (this.state.sessionLength > 1 && this.state.sessionLength <= 60) {this.setState(state => ({ sessionLength: state.sessionLength - 1, time: state.time - 60 }));}}addBreakLength() {if (this.state.breakLength >= 1 && this.state.breakLength < 60) {this.setState(state => ({ breakLength: state.breakLength + 1, break: state.break + 60 }));}}minusBreakLength() {if (this.state.breakLength > 1 && this.state.breakLength <= 60) {this.setState(state => ({ breakLength: state.breakLength - 1, break: state.break - 60 }));}}formatToMinutes(time) {let minutes = Math.floor(time / 60);let seconds = time - minutes * 60;let minStr = minutes >= 10 ? minutes.toString() : `0${minutes.toString()}`;let secStr = seconds >= 10 ? seconds.toString() : `0${seconds.toString()}`;return `${minStr}:${secStr}`;}

  startStop() {
    if (this.state.stop == true) {
      this.setState({
        stop: false });

      this.countDownSession();
    } else {
      this.setState({
        stop: true });

    }
  }

  playBeep() {
    let sound = document.getElementById("beep");
    sound.currentTime = 0;
    sound.play();
  }

  stopBeep() {
    let sound = document.getElementById("beep");
    sound.pause();
    sound.currentTime = 0;
  }

  resetClock() {
    clearInterval(window.countTimer);
    clearInterval(window.countBreak);
    this.setState({
      breakLength: 5,
      sessionLength: 25,
      time: 1500,
      break: 300,
      stop: true,
      isBreak: false });

    this.stopBeep();
  }

  render() {
    return /*#__PURE__*/(
      React.createElement(React.Fragment, null, /*#__PURE__*/
      React.createElement("audio", { id: "beep" }, /*#__PURE__*/
      React.createElement("source", {
        src: "https://www.soundjay.com/misc/censor-beep-6.mp3",
        type: "audio/mpeg" }), "Your browser does not support the audio element."), /*#__PURE__*/



      React.createElement("div", { id: "pomodoro" }, /*#__PURE__*/
      React.createElement("h1", null, "Pomodoro Clock"), /*#__PURE__*/
      React.createElement("div", { id: "head" }, /*#__PURE__*/
      React.createElement("div", { id: "break" }, /*#__PURE__*/
      React.createElement("h3", { id: "break-label" }, "Break length"), /*#__PURE__*/
      React.createElement("button", { id: "break-increment", onClick: this.addBreakLength }, /*#__PURE__*/
      React.createElement("i", { class: "fa fa-arrow-up" })), /*#__PURE__*/

      React.createElement("p", { id: "break-length" }, this.state.breakLength), /*#__PURE__*/
      React.createElement("button", { id: "break-decrement", onClick: this.minusBreakLength }, /*#__PURE__*/
      React.createElement("i", { class: "fa fa-arrow-down" }))), /*#__PURE__*/


      React.createElement("div", { id: "session" }, /*#__PURE__*/
      React.createElement("h3", { id: "session-label" }, "Session length"), /*#__PURE__*/
      React.createElement("button", { id: "session-increment", onClick: this.addSessionLength }, /*#__PURE__*/
      React.createElement("i", { class: "fa fa-arrow-up" })), /*#__PURE__*/

      React.createElement("p", { id: "session-length" }, this.state.sessionLength), /*#__PURE__*/
      React.createElement("button", { id: "session-decrement", onClick: this.minusSessionLength }, /*#__PURE__*/
      React.createElement("i", { class: "fa fa-arrow-down" })))), /*#__PURE__*/



      React.createElement("div", { id: "body" }, /*#__PURE__*/
      React.createElement("h3", { id: "timer-label" }, this.state.isBreak ? "Break" : "Session"), /*#__PURE__*/
      React.createElement("h4", { id: "time-left" },
      this.state.isBreak ?
      this.formatToMinutes(this.state.break) :
      this.formatToMinutes(this.state.time))), /*#__PURE__*/


      React.createElement("div", { id: "footer" }, /*#__PURE__*/
      React.createElement("button", { id: "start_stop", onClick: this.startStop }, "START / STOP"), /*#__PURE__*/


      React.createElement("button", { id: "reset", onClick: this.resetClock }, "RESET")))));






  }}

ReactDOM.render( /*#__PURE__*/React.createElement(Pomodoro, null), document.getElementById("root"));