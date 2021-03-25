import logo from './logo.svg';
import './App.css';
import React from 'react';

class MyComponent extends React.Component {
   constructor(props) {
     super(props);
     var today=new Date(),
      days=["Satur","Mon","Tues","Wednes","Thurs","Fri","Sun"],
   months=["JAN","FEB","March","AV"+"May"+"jun"+"jully"],
     date=days[today.getDay()]+'-'+months[(today.getMonth()+1)]+'-'+today.getDate()+'-'+today.getFullYear(),
     time=today.getHours()+':'+today.getUTCMinutes();
     this.state = {
       humidity:'',
       pressure:'',
       sea_level:'',
       degre:'',
       speed:'',
       descriptiion:'',
       day:'',
       country:'',
       ip:'',
       countryname:'tunisia',
       date:date,
       time:time
     };
     
   }
 
   
   myChangeHandler = (event) => {
    this.setState({countryname: event.target.value});
  }
  abir=()=>{
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.countryname}&appid=3d276dd0248a8f6d4a15500dc0dec11a&units=metric`)
.then(res => res.json())
.then(
  (result) => {
    this.setState({
       country:result.city.name,
      sea_level:result.list[0].main.sea_level,
      pressure:result.list[0].main.pressure,
      humidity:result.list[0].main.humidity,
      speed:result.list[0].wind.speed,
      degre:result.list[0].wind.deg,
      descriptiion:result.list[0].weather[0].description,
      day:result.list[0].dt_txt

    });
    console.log(result)
  },
  // Note: it's important to handle errors here
  // instead of a catch() block so that we don't swallow
  // exceptions from actual bugs in components.
  
)


}

 componentDidMount() {
 
  fetch('https://freegeoip.app/json/'+'197.238.107.166')
  .then(res => res.json())
  .then(
    (result) => {
      this.setState({
         pays:result.region_name,
       country:result.country_name
         
      })
      
      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Berlin&appid=3d276dd0248a8f6d4a15500dc0dec11a&units=metric`)
  .then(res => res.json())
  .then(
    (result) => {
      this.setState({
         
        sea_level:result,
        pressure:result.list[0].main.pressure,
        humidity:result.list[0].main.humidity,
        speed:result.list[0].wind.speed,
        degre:result.list[0].wind.deg,
        descriptiion:result.list[0].weather[0].description,
        day:result.list[0].dt_txt
  
      });
      console.log(result)
    },
    // Note: it's important to handle errors here
    // instead of a catch() block so that we don't swallow
    // exceptions from actual bugs in components.
    
  )

}
)
     
   
   
}
   render() {
     const {pressure,humidity,sea_level,degre,speed,descriptiion,day,pays,country,ip} = this.state;
     var MyStyle = {
      fontSize: 50,
      color: '#FF0000'
   }
   function ab(){
     
    alert("thank you")
   }

       return (
         <div>
         <ul>
           
       <div className="App-logo"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Circle-icons-weather.svg/1024px-Circle-icons-weather.svg.png"/></div>
           
           <br></br>
          <input type="text" placeholder="Tap your country"  onChange={this.myChangeHandler} />
          <button onClick={this.abir}>search</button>
          <div style= {MyStyle} >My Weather application</div>
           <div>{this.state.date}</div>
       <div>{this.state.time}</div>
           <div className="ai" >Country name:{country}</div><br></br>
          
            <div className="abour">
            <div><br></br>Cloud Description:<br></br><br></br>{descriptiion}</div> 
            <div><br></br><br></br>Wind speed: <br></br><br></br>{speed}</div> 
            <div><br></br><br></br>Wind degre: <br></br><br></br>{degre}°</div> 
           {/* <div>Sea level: <br></br>  {sea_level}</div> */}
          <div><br></br><br></br>Humidity:   <br></br><br></br>{humidity}</div> 
           <div><br></br><br></br>Pressure:  <br></br><br></br>{pressure}</div></div>
           <br></br>
           <div className="abour1">
              <img src="https://scontent.xx.fbcdn.net/v/t1.15752-0/p206x206/152912714_417895715941635_5048472551074178962_n.png?_nc_cat=101&ccb=3&_nc_sid=58c789&_nc_ohc=1l8VDZDjfcYAX-W2mnl&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&_nc_tp=30&oh=ca1d9562bdcddb79f6dc9290663605ab&oe=605B831C"/>
             <img src="https://scontent.ftun12-1.fna.fbcdn.net/v/t1.15752-9/69117604_2284942798422238_3674243280758898688_n.png?_nc_cat=100&ccb=3&_nc_sid=ae9488&_nc_ohc=pMvcwOWMjWoAX8F9VP-&_nc_ht=scontent.ftun12-1.fna&oh=ac3bb06d0e0e6b42235b18f47bf2ed77&oe=605B8BC9"/>
             <img  className="az1" src="https://scontent.xx.fbcdn.net/v/t1.15752-0/p403x403/153132420_249849226711177_856570859604265424_n.png?_nc_cat=101&ccb=3&_nc_sid=aee45a&_nc_ohc=mZH54K2WBCkAX_rwYu1&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&_nc_tp=30&oh=c829d2643aca4598f352fb3d372d544e&oe=605BCFC3"/>
              <img className="az" src="https://scontent.xx.fbcdn.net/v/t1.15752-0/p403x403/94210715_2553296541655439_5162400340166836224_n.png?_nc_cat=110&ccb=3&_nc_sid=aee45a&_nc_ohc=ScS6KIOIbysAX_Hw9SZ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&_nc_tp=30&oh=3c5704bdbc94580ed6b8c5a3ad43586c&oe=605C9A00"/>
              
              
             <img src="https://icon-library.com/images/pressure-icon-png/pressure-icon-png-7.jpg"/></div>
             <div className="zz">&copy;opyright abir bouziri 2020-2021:abir bouziri devops</div>     
       </ul>
      
       </div>
       );
     }
  
 }
export default MyComponent;