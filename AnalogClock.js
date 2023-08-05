setInterval(()=>{
    const date = new Date();
    const hoursHand = date.getHours();
    const minutesHand = date.getMinutes();
    const secondHand = date.getSeconds();
    hrotation = 30*hoursHand + minutesHand/2;
    mrotation = 6*minutesHand;
    srotaion = 6*secondHand;
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotaion}deg)`;
},1000)