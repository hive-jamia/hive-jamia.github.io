import React from 'react';
import './Event.css';
import e1 from '../src/image/event1.jpg';
import e5 from '../src/image/event5.jpg';
import e4 from '../src/image/event4.jpg';
import e3 from '../src/image/event3.jpg';
import w1 from '../src/image/web1.png';
import w2 from '../src/image/web2.jpg';
import o from '../src/image/orient.jpg';
import d1 from '../src/image/data1.png';
import d2 from '../src/image/data2.png';
import d3 from '../src/image/data3.png';
import s1 from '../src/image/sc1.png';
import s2 from '../src/image/sc2.png';

function EventContent() {
    return (
        <div>
            <div class="container">
<h1 class='h'>Latest Events</h1>
</div>
<center>
  <div class="mycontainer">
    <div id="slide-left-container">
      <div class="slide-left">
	  
      </div>
    </div>
    <div id="cards-container">
      <div class="cards">
        <div class="card">
          <img src={e1} alt="Animals" style={{width:"100%"}} />
          <div class="mycontainer">
            <h4>
              <b>Webinar</b>
            </h4>
			
          </div>
        </div>
        <div class="card">
          <img src={e5} alt="Nature" style={{width:"100%"}} />
          <div class="mycontainer">
            <h4>
              <b>Machine Learning<br/> Session</b>
            </h4>
			
          </div>
        </div>
        <div class="card">
          <img src={o} alt="Architecture" style={{width:"100%"}} />
          <div class="mycontainer">
            <h4>
              <b>Orientation -<br/> Hive</b>
            </h4>
			
          </div>
        </div>
        <div class="card">
          <img src="https://picsum.photos/500/350" alt="Technology" style={{width:"100%"}} />
          <div class="mycontainer">
            <h4>
              <b>Event Name</b>
            </h4>
			
          </div>
        </div>
        <div class="card">
          <img src="https://picsum.photos/700/370" alt="People" style={{width:"100%"}} />
          <div class="mycontainer">
            <h4>
              <b>Event Name</b>
            </h4>

          </div>
        </div>
        <div class="card">
          <img src="https://picsum.photos/270/300" alt="Animals" style={{width:"100%"}} />
          <div class="mycontainer">
            <h4>
              <b>Event Name</b>
            </h4>
			
          </div>
        </div>
        <div class="card">
          <img src="https://picsum.photos/700/300" alt="Nature" style={{width:"100%"}} />
          <div class="mycontainer">
            <h4>
              <b>Event Name</b>
            </h4>
			
          </div>
        </div>
        <div class="card">
          <img src="https://picsum.photos/200/400" alt="Architecture" style={{width:"100%"}} />
          <div class="mycontainer">
            <h4>
              <b>Event Name</b>
            </h4>
			
          </div>
        </div>
        <div class="card">
          <img src="https://picsum.photos/400/300" alt="Technology" style={{width:"100%"}} />
          <div class="mycontainer">
            <h4>
              <b>Event Name</b>
            </h4>
			
          </div>
        </div>
        <div class="card">
          <img src="https://picsum.photos/250/350" alt="People" style={{width:"100%"}} />
          <div class="container">
            <h4>
              <b>Event Name</b>
            </h4>
			
          </div>
        </div>
      </div>
    </div>

    <div id="slide-right-container">
      <div class="slide-right">
	  
	  
      </div>
    </div>

  </div>
  </center> 
<div class="container ccs">
<h1 class='heading'>Commpetitive Coding Society</h1>
    <div class="row hi ccs">
        <div class='col-xs-12 col-sm-6 col-lg-3'>
            <div class='zoom'>
                <img  src={e4} alt="" style={{height:"350px"}} />
                <div class="caption">
                            <h4><b> The 100</b></h4>
                            <p> 22-08-2020</p>
                        </div>
            </div>
        </div>
        <div class=' col-xs-12 col-sm-6 col-lg-3'>
            <div class='zoom'>
                <img  src={d1} alt="" style={{height:"350px"}} />
                <div class="caption">
                            <h4><b>The 100-Solutions</b></h4>
                            <p> 24-09-2020</p>
                </div>
            </div>
        </div>
        <div class=' col-xs-12 col-sm-6 col-lg-3'>
            <div class='zoom'>
                <img src={d2} alt="" style={{height:"350px"}}/>
                <div class="caption">
                            <h4><b>The 100-Questions</b></h4>
                            <p> 31-10-2020</p>
                </div>
            </div>
        </div>
        <div class='col-xs-12 col-sm-6 col-lg-3'>
            <div class='zoom'>
                <img  src={d3} alt="" style={{height:"350px"}} />
                <div class="caption">
                            <h4><b>The 100-Resources</b></h4>
                            <p> 31-09-2020</p>
                </div>
            </div>
        </div>
      
    </div>
</div>

<div class="container">
<h1 class='heading'>Web Developement Society</h1>
    <div class="row hi">
        <div class='col-xs-12 col-sm-6 col-lg-4'>
            <div class='zoom' style={{width:"350px"}}>
                <img  src={e3} alt="" style={{height:"320px",width:"350px"}}/>
                <div class="caption">
                            <h4><b> Web Developement Session</b></h4>
                            <p> 12-03-2020</p>
                        </div>
            </div>
        </div>
        <div class=' col-xs-12 col-sm-6 col-lg-4'>
            <div class='zoom' style={{width:"350px"}}>
                <img  src={w1} alt="" style={{height:"320px",width:"350px"}}/>
                <div class="caption">
                            <h4><b> Web Developement Session</b></h4>
                            <p> 12-03-2020</p>
                </div>
            </div>
        </div>
        <div class=' col-xs-12 col-sm-6 col-lg-4'>
            <div class='zoom' style={{width:"350px"}}>
                <img src={w2} alt="" style={{height:"320px",width:"350px"}}/>
                <div class="caption">
                            <h4><b>Html & Css</b></h4>
                            <p> 24-01-2020</p>
                </div>
            </div>
        </div>
        
    </div>
    
</div>
<div class="container">
<h1 class='heading'>Data Science Society</h1>
    <div class="row hi">
        <div class='col-xs-12 col-sm-6 col-lg-4'>
            <div class='zoom' style={{width:"350px"}}>
                <img  src={e5} alt="" style={{height:"320px",width:"350px"}}/>
                <div class="caption">
                            <h4><b>Machine Learning</b></h4>
                            <p> 01-03-2020</p>
                        </div>
            </div>
        </div>
        <div class=' col-xs-12 col-sm-6 col-lg-4'>
            <div class='zoom' style={{width:"350px"}}>
                <img  src={s1} alt="" style={{height:"320px",width:"350px"}}/>
                <div class="caption">
                            <h4><b>Feed</b></h4>
                            <p> 06-09-2020</p>
                </div>
            </div>
        </div>
        <div class=' col-xs-12 col-sm-6 col-lg-4'>
            <div class='zoom' style={{width:"350px"}}>
                <img src={s2} alt="" style={{height:"320px",width:"350px"}} />
                <div class="caption">
                            <h4><b>Resources</b></h4>
                            <p> 08-09-2020</p>
                </div>
            </div>
        </div>
        
    </div>
        </div>
        </div>
    )
}

export default EventContent;
