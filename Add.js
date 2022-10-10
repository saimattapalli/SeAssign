import React ,{Component} from 'react';
import axios from'axios';
class Add extends Component {
    constructor(){
        super();
        this.state={
            number1:'',
            number2:'',
            total:''
        }
    }
    handlenumber1 =(e) =>{
        this.setState({
            number1:e.target.value
        })
    }
    handlenumber2 =(e) =>{
        this.setState({
            number2:e.target.value
        })
    }
    res =(e) => {
        this.setState({total:parseInt(this.state.number1) + parseInt(this.state.number2)})
        axios.get("http://localhost:5001/add?a="+this.state.number1+"&b="+this.state.number2 ,{method:"GET",mode:"no-cors",headers:{}})
        .then(res =>{
            this.setState({total: res.data["Add"]})
        })
        
    }
    render() {
        return(
            <div>
                <h1>Add of two numbers</h1>
                
                <div>
                    Number 1:
                    <input type="text" value ={this.state.number1} onChange={this.handlenumber1}/>

                </div>
                <br />
                <div>
                    Number 2:
                    <input type ="text" value={this.state.number2} onChange={this.handlenumber2}/>
                </div>

                <br />
                <div>
                    <button onClick={this.res}>Add</button>
                </div>
                <br />
                <div>
                    Total:
                    <input type="text" value={this.state.total} />
                </div>
                
            </div>
        ) 
            
    }

}
export default Add;