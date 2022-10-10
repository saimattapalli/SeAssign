import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react';

export default class Bio extends Component{


    render(){
        return(
            <div>
                <div class="container">
                    <div class="row">
                        <div class = "col-sm-4"  >
                        <img
  src=" https://as2.ftcdn.net/v2/jpg/03/22/27/15/1000_F_322271599_m6B4XfH1Y2k72n5Kk34Q1KfX7oz3GlQs.jpg" style={{marginRight:300}}
  class="img-thumbnail" width={200} height={150}
  alt=" "
/>
                        </div>
                    </div>
                </div>
                
                <div className="profile">
                <form>
                    
                    <label>
                        User Name:
                        <input type="text" name="name"/>
                    </label>
                    <br />
                    <br />
                    <label>
                        Biography:
                    </label>
                    <textarea>
                    Hello there, this is some text in a text area
                        
                         </textarea><br/>
                    <button>Edit</button>
                </form>
                </div>
            </div>
        )
    }
}