setInterval(() => {
    const d = new Date();
    const htime = d.getHours();
    const mtime = d.getMinutes();
    const stime = d.getSeconds();
    
    const hrotation = 30 * htime + mtime / 2;
    const mrotation = 6 * mtime;
    const srotation = 6 * stime;

    // Use template literals for CSS transformations
    hours.style.transform = `rotate(${hrotation}deg)`;
    minutes.style.transform = `rotate(${mrotation}deg)`;
    seconds.style.transform = `rotate(${srotation}deg)`;

    // Use template literals for formatted time
    const formattedTime = `${htime.toString().padStart(2, '0')}:${mtime.toString().padStart(2, '0')}:${stime.toString().padStart(2, '0')}`;
    document.getElementById('digital-clock').innerText = formattedTime;
}, 1000);