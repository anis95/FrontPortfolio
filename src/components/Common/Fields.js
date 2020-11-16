import React, {Component} from 'react';

class Fields extends Component{
    render(){
        return(
            <div>
             { this.props.elementName === 'input' ?
               
                <div className="form-group">
                    <input 
                        className="form-control px-3 py-4" 
                        type={this.props.type}
                        id={this.props.name}
                        placeholder={this.props.placeholder}
                        name={this.props.name}
                        value={this.props.value}
                        onChange={this.props.onChange}
                        onBlur={this.props.onBlur}                      
                        required="required" 
                    />
                </div>            
                :
                <div className="form-group mb-5">
                    <textarea 
                       className="form-control px-3 py-4" 
                       name={this.props.name}
                       id={this.props.name}
                       placeholder={this.props.placeholder}
                       value={this.props.value}
                       onChange={this.props.onChange}
                       onBlur={this.props.onBlur}
                       required="required" 
                       cols="30" 
                       rows="10" 
                       />

                    
                </div>
                }
                <p className="help-block text-danger">
                {(this.props.touched && this.props.errors) &&
                <span>{this.props.errors}</span>
                    
                }
                </p>               
        </div>
        );
    }
}
export default Fields;