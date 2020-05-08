import React, { Component, Fragment } from 'react'

class Memegen extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            topBody : '',
            bottomBody : '',
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                console.log(memes[0])
                this.setState({ allMemeImgs: memes })
            })
    }

    handleSubmit(event) {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randNum].url
        this.setState({ randomImg: randMemeImg })
    }

    handleChange(event){
        const {name , value} = event.target 
        this.setState({
            [name]: value
        })
    }
    render() {
        
        return (
            <Fragment>
                    <div className='container'>

                <form onSubmit = {this.handleSubmit} className="myForm">
               <div className="form-group">
                   <br />
                <input 
                type="text" 
                className="form-control"
                placeholder="top text"
                name = "topBody"
                value = {this.state.topBody}
                onChange = {this.handleChange}
                />
                </div>
                <div className="form-group">
                    <input 
                    type="text" 
                    className="form-control"
                    placeholder="bottom text"
                    name= "bottomBody"
                    value = {this.state.bottomBody}
                    onChange = {this.handleChange}
                     />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <br />
                    </form>
                    <div class="card text-center text-white" style={{width:'50%', margin:'auto'}}>
                    <img src={this.state.randomImg} style={{backgroundRepeat:'noRepeat'}} alt="images" class="card-img img-fluid rounded" />
                    <div class="card-img-overlay" style={{marginTop:"5em"}}>
                    <h3 className="top">{this.state.topBody}</h3>
                    <h3 className="bottom">{this.state.bottomBody} </h3>
                    </div>
                    </div>
                    </div>
            </Fragment>
               
        )
    }
}

export default Memegen
