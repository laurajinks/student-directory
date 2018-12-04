import React, {Component} from 'react'

export default class AddInput extends Component {
    constructor (props) {
        super (props) ;
        this.state = {
            nameInput: '',
            fromInput: '',
            factInput: '',
            cityCountryInput: '',
            inOrOutInput: '',
            travelInput: '',
            foodInput: '',
            dogOrCatInput: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.submitNewInfo = this.submitNewInfo.bind(this)

    }
    handleChange (e) {
        this.setState({[e.target.name]: e.target.value});
    }

    submitNewInfo (props) {
        let newStudent = {name: this.state.nameInput, from: this.state.fromInput, funFact: this.state.factInput, cityOrCountry: this.state.cityCountryInput,
        indoorsOrOutdoors: this.state.inOrOutInput, travel: this.state.travelInput, food: this.state.foodInput, dogOrCat: this.state.dogOrCatInput}
        this.setState({nameInput: '', fromInput: '', factInput: '', cityCountryInput: '', travelInput: '', foodInput: '', dogOrCatInput: ''})
        this.props.pushNew(newStudent);
    }

    render () {
        return(
            <div className='inputField'>
                <h2>Submit New Student</h2>
                <p>Name:</p><input name='nameInput' onChange={this.handleChange}></input>
                <p>From:</p><input name='fromInput' onChange={this.handleChange}></input>
                <p>Fun Fact:</p><input name='factInput' onChange={this.handleChange}></input>
                <h3>Would you rather...</h3>
            cityCountryInput: '',
                <p>...live in the city or country?</p><input name='cityCountryInput' onChange={this.handleChange}></input>
                <p>...be indoors or outdoors?</p><input name='inOrOutInput' onChange={this.handleChange}></input>
                <p>...travel every day or never leave home?</p><input name='travelInput' onChange={this.handleChange}></input>
                <p>..eat at Top's or Subway?</p><input name='foodInput' onChange={this.handleChange}></input>
                <p>...have a dog or a cat?</p><input name='dogOrCatInput' onChange={this.handleChange}></input><br></br>
                <button className='editDeleteAdd, submitNewInfo' onClick={this.submitNewInfo}>Submit</button>
            </div>
        )
    }
}