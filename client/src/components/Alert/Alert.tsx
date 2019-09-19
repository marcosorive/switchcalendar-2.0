import React from "react";
import "./Alert.css"
type AlertProps = {
    message: string
}
type AlertState = {
    hidden: boolean
}

export class Alert extends React.Component<AlertProps,AlertState>{

    constructor(props:AlertProps){
        super(props)
        this.state = {
            hidden: false,
        }
        this.hideAlert = this.hideAlert.bind(this);
    }

    hideAlert(){
        this.setState({
            hidden:true
        })
    }

    render(){
        return(
            <div className={this.state.hidden ? "hidden" : "alert"}>
                <span>{this.props.message}</span>
                <span className="closebnt" onClick={this.hideAlert}>&times;</span> 
            </div>
        )
    }
}