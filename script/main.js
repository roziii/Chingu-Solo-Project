setInterval(function(){timer()}, 1000)
let timer =()=>{
    let dayMilliseconds = 86400000
    const currentDate = new Date();
   let remainedTimeElement =  document.querySelector('#remained_time')
   let hours= currentDate.getHours();
   let minutes=currentDate.getMinutes();
   let seconds = currentDate.getSeconds();

   let remainedHours = 24- hours ;
   let remainedMinutes = 60- minutes;
   let remainedSeconds = 60 - seconds;
   let timeString = remainedHours+':'+remainedMinutes+':'+remainedSeconds
   remainedTimeElement.innerHTML = timeString
}
if(screen.width<448){
 const vp =   document.querySelector('#vp')
 vp.setAttribute('content', 'width=448 , user-scalable=no')
}