import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import students from './components/Students'
import AddInput from './components/AddInput'
import EditInput from './components/EditInput'

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      studentsArr: students,
      currentStudent: 1,
      currentIndex: 0,
      totalStudents: students.length,
      showAdd: false,
      shoeEdit: false
    }
  this.clickPrevious = this.clickPrevious.bind(this);
  this.clickNext = this.clickNext.bind(this);
  this.deleteStudent = this.deleteStudent.bind(this);
  this.addNew = this.addNew.bind(this);
  this.addToArray = this.addToArray.bind(this);
  this.editArray = this.editArray.bind(this);
  this.editButton = this.editButton.bind(this);

  }

clickPrevious () {
  if (this.state.currentStudent > 1) {
    this.setState({currentStudent: this.state.currentStudent - 1, currentIndex: this.state.currentIndex -1})
  } else {
    this.setState({currentStudent: this.state.studentsArr.length, currentIndex: this.state.studentsArr.length - 1})
  }
}

clickNext () {
  if (this.state.currentStudent < this.state.studentsArr.length) {
  this.setState({currentStudent: this.state.currentStudent +1, currentIndex: this.state.currentIndex +1})
  } else {
    this.setState({currentStudent: 1, currentIndex: 0})
  }
}

deleteStudent () {
  if (this.state.studentsArr.length === 1) {
    this.setState({currentStudent: 0, currentIndex: 0, totalStudents: 0, studentsArr: [{name: null, from: null, 
      indoorsOrOutdoors: null, travel: null, food: null, dogOrCat: null}] })
  } else {
  this.state.studentsArr.splice(this.state.currentIndex, 1);
  this.setState({studentsArr: this.state.studentsArr, 
    currentStudent: 1, currentIndex: 0, totalStudents: this.state.studentsArr.length});
}}

addNew () {
  this.setState({showAdd: !this.state.showAdd})
}

addToArray (obj) {
  this.state.studentsArr.push(obj);
  this.setState({showAdd: false, currentStudent: this.state.studentsArr.length,
    currentIndex: this.state.studentsArr.length - 1, totalStudents: this.state.totalStudents + 1})
}

editButton () {
  this.setState({showEdit: !this.state.showEdit})
}

editArray (obj) {
  this.state.studentsArr.splice(this.state.currentIndex, 0, obj)
  this.setState({showEdit: false})
}



  render() {
    let newArr = this.state.studentsArr[this.state.currentIndex];

    return (
      <div className="App">
        <nav>
        <a href="" className="left">Home</a>
        <a href="" className="right">DevMountain Directory</a>
    </nav>
    <main>
        {this.state.showAdd && <AddInput pushNew={this.addToArray}/>}
        {this.state.showEdit && <EditInput pushEdit={this.editArray}
        newArr={newArr}/>}
        <h2 className="numOfStudents">{this.state.currentStudent} of {this.state.totalStudents}</h2>
        <h1 className="bold">{this.state.studentsArr[this.state.currentIndex].name}</h1>
        <div className="stats">
            <p><span className="bold">From:</span> {this.state.studentsArr[this.state.currentIndex].from}</p>
            <p><span className = "bold">Fun Fact:</span> {this.state.studentsArr[this.state.currentIndex].funFact}</p>
        </div>
        <div>
            <p className="bold">Would you rather...</p>
            <ul>
                <li><span className="bold">...live in the city or country?</span> {this.state.studentsArr[this.state.currentIndex].cityOrCountry}</li>
                <li><span className="bold">...be indoors or outdoors?</span> {this.state.studentsArr[this.state.currentIndex].indoorsOrOutdoors}</li>
                <li><span className="bold">...travel every day or never leave home?</span> {this.state.studentsArr[this.state.currentIndex].travel}</li>
                <li><span className="bold">...eat at Top's or Subway?</span> {this.state.studentsArr[this.state.currentIndex].food}</li>
                <li><span className="bold">...have a dog or a cat?</span> {this.state.studentsArr[this.state.currentIndex].dogOrCat}</li>
        </ul>
        </div>
    </main>
      <div className='buttons'>
      <button className= 'previousNext' onClick={this.clickPrevious}>{`< Previous`}</button>
          <button className='editDeleteAdd' onClick={this.editButton}>Edit</button>
          <button className='editDeleteAdd' onClick={this.deleteStudent}>Delete</button>
          <button className='editDeleteAdd' onClick={this.addNew}>New</button>
        <button className= 'previousNext' onClick={this.clickNext}>{`Next >`}</button>
      </div>
      
    </div>
    );
  }
}

export default App;
