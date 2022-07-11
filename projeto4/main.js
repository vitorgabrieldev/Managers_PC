    window.addEventListener('mousemove', (Event) => {
        const clientX =  Event.clientX;
        const clientY = Event.clientY;
    
        const x = document.getElementById("x")
        const y = document.getElementById("y")
    
        x.innerHTML = clientX
        y.innerHTML = clientY
    
        var circle = document.getElementById("circle")
    
            var xx = Event.clientX
            var yy = Event.clientY 

        const xxx = document.getElementById("xxx")
        const yyy = document.getElementById("yyy")

        yyy.style.left = xx + 'px'
        xxx.style.top = yy + 'px'

        const display = document.getElementById("position")
        
        display.style.left = xx + (-50) + 'px'
        display.style.top  = yy + (-100) + 'px'

        
})