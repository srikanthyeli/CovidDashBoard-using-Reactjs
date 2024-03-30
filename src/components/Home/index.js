import {Component} from "react"
import Header from "../Header"
import HomeRoute from "../HomeRoute"
import Footer from "../Footer"
import "./index.css"

class Home extends Component{
    state={}

    render(){
        return(
            <div>
                <Header/>
                <HomeRoute/>
                <Footer/>
                
            </div>
        )
    }
}

export default Home