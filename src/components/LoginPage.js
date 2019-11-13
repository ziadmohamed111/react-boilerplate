import React from "react"
import { connect } from "react-redux"
import { startLogin } from "../actions/auth"

export const LoginPage = ( props ) => (
    <div className="box-layout">
        <div className="box-layout__login-box">
            <h1>Boiler plater</h1>
            <p>tag line for app</p>
            <button className="button-big" onClick={props.startLogin}>Login With Google</button>
        </div>
        
    </div>
)

const mapDispatchToProps = ( dispatch ) => ( {
    startLogin: () => dispatch( startLogin() )
} )

export default connect( undefined, mapDispatchToProps )( LoginPage ) 