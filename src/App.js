import React, { Component } from 'react';
import Label from './component/Label';
import Input from './component/Input';
import Button from './component/Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputAmount: '',
      resultConvert: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleValidation(){
    let inputAmount = this.state.inputAmount;
    let message = '';
    let formIsValid = true;

    if(typeof inputAmount === "undefined" || !inputAmount){
      formIsValid = false;
      message = "Cannot be empty";
    }else{
      if(inputAmount.match(/^[1-9]\d*(\.\d+)?$/) || inputAmount.match(/^\Rp?[0-9][0-9.]*[0-9]\,?[0-9]{0,2}$/)){
        if(!inputAmount.match(/0000/g)){
          formIsValid = true;
        }else{
          formIsValid = false;
          message = "Please input the correct format";
        }
      }else{
        if(inputAmount.indexOf("Rp ") == 0){
          inputAmount = inputAmount.replace('Rp ','');
          if(!inputAmount.match(/\s/) && !inputAmount.match(/0000/g)){
            if(inputAmount.match(/^[1-9]\d*(\.\d+)?$/) && inputAmount.match(/^[0-9][0-9.]*[0-9]\,?[0-9]{0,2}$/)){
              if(isNaN(inputAmount)){
                formIsValid = false;
                message = "Please input the correct format";
              }else{
                formIsValid = true;
              }
            }else{
              if(inputAmount.indexOf(",00") == (inputAmount.length-3)){
                formIsValid = true;
              }else{
                formIsValid = false;
                message = "Please input the correct format";
              }
            }
          }else{
            formIsValid = false;
            message = "Please input the correct format";
          }
        }else{
          if(isNaN(inputAmount)){
            formIsValid = false;
            message = "Please input the correct format";
          }else{
            inputAmount = parseInt(inputAmount.replace(/0000/g,''));
            formIsValid = true;
          }
        }
      }  
    }

    this.setState({resultConvert: message});
    return formIsValid;
  }

  startConvert(inputAmount){
    var bil, ii;
    var result = "";
    inputAmount = parseInt(inputAmount.replace(/\D/g,''));
    var money = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100];

    for(ii = 0; ii < money.length; ii++){
      bil = Math.floor(inputAmount/money[ii]);
      if (bil > 0){
        result += bil + "x Rp" + money[ii] + " ";
        inputAmount = inputAmount - (money[ii] * bil);
        if(inputAmount < 100 && inputAmount > 0){
          result += "sisa = " + inputAmount;
        }
        this.setState({
          resultConvert: result
        });
      }
    }
  }

  handleChange(e) {
    this.setState({
      inputAmount: e.target.value
    });
  }

  handleClick(e) {
    let inputAmount = this.state.inputAmount;
    e.preventDefault();
    if(this.handleValidation()){
      this.startConvert(inputAmount);
    }
  }

  render() {
    return (
      <div className="wrap">
        <div className="wrap-input clearfix">
          <div className="box">
            <label className="label" >Input Your Money</label>
            <input className="input" type="text" placeholder='Rp 15.000' name='inputAmount' value={this.state.inputAmount} onChange={this.handleChange}/>
          </div>
          <button className="btn-convert" onClick={this.handleClick}>Submit</button>
        </div>
        <div className="">
          <p className="error">{this.state.errors}</p>
          <h1 className="resultConvert" name="resultConvert">{this.state.resultConvert}</h1>
        </div>
        <p className="note">Example = Input : Rp 15.000/15.000, Output : Rp 15.000 = 1x Rp 10.000, 1x Rp 5.000</p>
      </div>
    );
  }
}

export default App;
