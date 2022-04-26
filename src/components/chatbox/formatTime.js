const formatTime = (timeString) => {
	let splitTimeString = timeString.split(":");
	return `${splitTimeString[0]}:${splitTimeString[1]}`;
};

export function formatMinutes(minutes) {
    return minutes < 10 ? `0${minutes}` : minutes;
  }
  
  export function formatSeconds(seconds) {
    return seconds < 10 ? `0${seconds}` : seconds;
  }
  

export default formatTime;
