var canvasSize = 200,
    centre = canvasSize/2,
    radius = canvasSize*0.8/2,
    startY = centre-radius;
    // percDiv = document.getElementById('percent');

function run(percent,str) {
    var s = Snap(str),
    arc = s.path(""),
    txt = s.text(radius,centre,"");

    var endpoint = percent*360;
    Snap.animate(0, endpoint,   function (val) {
        arc.remove();

        var d = val,
            dr = d-90;
            radians = Math.PI*(dr)/180,
            endx = centre + radius*Math.cos(radians),
            endy = centre + radius * Math.sin(radians),
            largeArc = d>180 ? 1 : 0;  
            path = "M"+centre+","+startY+" A"+radius+","+radius+" 0 "+largeArc+",1 "+endx+","+endy;
  
        arc = s.path(path);
        arc.attr({
          stroke: '#33c2ff',
          fill: 'none',
          strokeWidth: 2
        });
        txt.attr({
            "font-size":"40",
            x:70,
            y:110,
            fill:'#33c2ff'

        });

        // percDiv.innerHTML = Math.round(val/360*100) +'%';
        txt.node.textContent = (Math.round(val/360*100) +'%');


    }, 2000, mina.easeinout);  
}

var wow = new WOW(
    {
    boxClass:     'wow',     
    animateClass: 'animated', 

    callback:function(box) {

      if(box.getAttribute('data-id')=='front'){
        run(84/100,'.html');
        run(74/100,'.css');
        run(58/100,'.javas');
        run(65/100,'.smilli');
    }

      if(box.getAttribute('data-id')=='back'){
        run(80/100,'.java');
        run(83/100,'.python');
        run(54/100,'.csharp');
        run(53/100,'.si');
     }
      if(box.getAttribute('data-id')=='admin'){
        run(80/100,'.linux');
        run(75/100,'.devops');
        run(54/100,'.bash');
        run(66/100,'.fuflo');
      }

      if(box.getAttribute('data-id')=='framework'){
        run(82/100,'.django');
        run(68/100,'.hibernate');
        run(54/100,'.jquery');
        run(67/100,'.bts');
      }
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();









