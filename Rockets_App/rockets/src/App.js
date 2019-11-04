import React, {Component} from 'react';
import './css/App.css';
import './components/DescriptionCard';
import DetailsPannel from "./components/DescriptionCard";
import RocketCard from './components/RocketCard';
class App extends Component{


   state = {
    rockets:null,
    isLoading:true,

   }

    componentWillMount(){
      this.latestLaunches();
    }

    //Get launch data
    latestLaunches =()=>{
      try{
          this.request('GET','/latest',null).then((launchData)=>{
            this.setState({rockets:launchData, isLoading:false})
          });
      }catch(err){
        console.log('Sorry the following has occurred:',err.message);
      }
    }

    //Request
    request =(method,endPoint,params)=>{
        const options = {method:method, body:null, headers: new Headers({'Content-Type':'application/json'}),};
        if(params == null){
            options.body = null;
        }else{
            //Set options.body = data.
        }
        let url = `https://api.spacexdata.com/v3/launches${endPoint}`;
        return fetch(url, options).then(res => res.json())
    }

    render() {
        return <div className="App">
            <h3>Space X Launch Details</h3>
            {this.state.isLoading ? <div>Loading..</div>:
                <div>
                    <DetailsPannel description ={this.state.rockets.details} />
                    <span>Rocket Details:</span>
                    <div>
                        <RocketCard rocketData={this.state.rockets}/>
                    </div>
                </div>
            }
            </div>;
    }

}


export default App;
