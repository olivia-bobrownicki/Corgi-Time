// preload cloud image so all media is ready before setup
function preload(){
  cloud = loadImage("cloud3.png")
  sun = loadImage("happysun3.png")
  grass = loadImage("grass.png")
  star = loadImage("star.png")
  //happyStar = loadImage("happystar2.png")
  moon = loadImage("happymoon2.png")
  corgi = createImg("runcorgi.gif",'')
}

// setup() is called once at page-load
function setup() {
  createCanvas(800,600); // make HTML canvas element w x h pixels
}


// draw() is called 60 times per second
function draw() {
    let hr = hour();
    let min = minute();
    let sec = second();

    let skycols = [];
    skycols = ["#0c1114","#0c1114","#0c1114","#0c1114","#0c1114","#3b4e59","#6d8a9c","#A7D5D3","#d9f5fc","#d9f5fc","#d9f5fc","#d9f5fc","#d9f5fc","#d9f5fc","#d9f5fc","#d9f5fc","#d9f5fc","#d9f5fc","#A7D5D3","#6d8a9c","#3b4e59","#0c1114","#0c1114","#0c1114","#0c1114"];
    background(skycols[hr]);
  
    cols = min % 8
  
    // solve edge case before 1 am
    // to avoid undefined rows variable
    if(hr!=0)
    {
      rows = Math.floor(min/8)
    }
    else
    {
      rows = 0
    }
  
  // add a cloud for each minute of the hour
  
    for (let i=0;i<=rows;i++)
    {
        for (let idx = 0; idx < 8; idx++)
        {
          if (((i*8)+idx)<min)
          {
            // use stars instead of clouds at night
            if (hr<20 && hr>5)
            {
              image(cloud,idx*100,i*55.6,100,55.6)
            }
            else
            {
              image(star,idx*100,i*55.6,80,50)
            }
            
          }
        } 
    }
  
  // add the sun/moon, representing hours  

  
  // x ranges from 0 to 600
  xcoord = hr * (600/24)

  // y ranges from 400 to 0 back to 400
  if(hr>=12)
  {
    ycoord = ((hr-12)*(400/12))
  }
  else
  {
    ycoord = 400 - (hr*(400/12))
  }
  
  if ((hr<20) && (hr>5))
  {
    image(sun,xcoord,ycoord,200,200)
  }
  else
  {
    image(moon,xcoord,ycoord,200,200)
  }
  
  
  
 
  
  // add the running corgi, representing seconds
  corgi.size(100,100)
  // travels 790 pixels
  corgi.position(710-(sec*(790/60)),520)
  
  // add grass to bottom border
  image(grass,0,540,800,100)
   
}