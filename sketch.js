function setup() {
	createCanvas(windowWidth,windowHeight); //產生一個畫布
	background(0); //背景色
}
function draw() {
    rectMode(CENTER)
    noFill() //形狀不填滿顏色
    stroke(255) //邊框顏色
    strokeWeight(1) //邊框粗細
    
    // ellipse(25+50*0,25,50) //畫一個圓
    // rect(25+50*0,25,50) //畫一個正方形
    // ellipse(50+50*0,50,20) //右下角小圓

    // ellipse(25+50*1,25,50) //畫一個圓
    // rect(25+50*1,25,50) //畫一個正方形
    // ellipse(50+50*1,50,20) //右下角小圓

    // ellipse(25+50*2,25,50) //畫一個圓
    // rect(25+50*2,25,50) //畫一個正方形
    // ellipse(50+50*2,50,20) //右下角小圓

    // ellipse(25+50*3,25,50) //畫一個圓
    // rect(25+50*3,25,50) //畫一個正方形
    // ellipse(50+50*3,50,20) //右下角小圓

    // ellipse(25+50*4,25,50) //畫一個圓
    // rect(25+50*4,25,50) //畫一個正方形
    // ellipse(50+50*4,50,20) //右下角小圓

    // ellipse(25+50*5,25,50) //畫一個圓
    // rect(25+50*5,25,50) //畫一個正方形
    // ellipse(50+50*5,50,20) //右下角小圓

    // ellipse(25+50*6,25,50) //畫一個圓
    // rect(25+50*6,25,50) //畫一個正方形
    // ellipse(50+50*6,50,20) //右下角小圓
  

    // for(var i=0;i <windowWidth/50;i++) { 
    //   ellipse(25+50*i,25+50*0,50)
    //   rect(25+50*i,25+50*0,50)
    //   ellipse(50+50*i,50+50*0,20)
    // }
    // for(var i=0;i <windowWidth/50;i++) { 
    //   ellipse(25+50*i,25+50*1,50)
    //   rect(25+50*i,25+50*1,50)
    //   ellipse(50+50*i,50+50*1,20)
    // }
    // for(var i=0;i <windowWidth/50;i++) { 
    //   ellipse(25+50*i,25+50*2,50)
    //   rect(25+50*i,25+50*2,50)
    //   ellipse(50+50*i,50+50*2,20)
    // }
    // for(var i=0;i <windowWidth/50;i++) { 
    //   ellipse(25+50*i,25+50*3,50)
    //   rect(25+50*i,25+50*3,50)
    //   ellipse(50+50*i,50+50*3,20)
    // }
    for(var i=0;i <windowWidth/50;i++) {
      for(var j=0;j <windowHeight/50;j++) {
            stroke(255,0,0)
            ellipse(25+(i*50),25+(j*50),mouseX/10)
            stroke(255,255,0)
            rect(25+(i*50),25+(j*50),mouseX/10)
            stroke(0,0,255) 
            triangle(50+(i*50),50+(j*50),mouseX/10)
      }
        }
  }
    
      
