import { Component } from "react";

class GoogleMap extends Component {
    render() { 
        return (
            <div id="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d374.7237883719231!2d90.36906662876638!3d23.75101329043116!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1671147353817!5m2!1sen!2sbd"></iframe>
            </div>
        );
    }
}
 
export default GoogleMap;