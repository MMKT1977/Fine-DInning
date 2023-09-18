import React from "react";
import "./Contacts.css"

function Contacts(){
    return(
        <div className="contact-us">
            <h2><i>We would love to hear from you</i></h2>
          <div className="contact-box">
            <div className="contact-right">
            <h3><i>contact us</i></h3>
                <table>
                    <tr>
                        <td>Email:</td>
                        <td>finedining@org.com</td>
                    </tr>
                    <tr>
                        <td>Phone:</td>
                        <td>+254 1234567</td>
                    </tr>
                    <tr>
                        <td>Adress:</td>
                        <td>Fine Dining Towers, Nairobi, Kenya</td>
                    </tr>
                </table>
            </div>
                
          </div>
        </div>
    )
}
export default Contacts;