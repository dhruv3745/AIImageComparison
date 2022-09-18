import React, { Component } from 'react';
  
class App extends Component {
  render() {
    const myStyle={
        backgroundImage: "url('https://sanctuarymentalhealth.org/wp-content/uploads/2021/03/The-Starry-Night-1200x630-1.jpg')",
        width:'100%',
        marginTop:'0px',
        height:'100vh',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
    const questionStyle={
      width:'100%',
      float:'center',
      textalign:'center',
      display: 'block',
      marginLeft: 'auto',
      paddingLeft:'19%',
      paddingRight:'auto',
      marginRight: 'auto',
      fontSize:'fit',
      color:'beige',
      transition:"opacity 400ms linear"
    }
    const questionStyleTwo={
      width:'100%',
      float:'center',
      textalign:'center',
      display: 'block',
      marginLeft: 'auto',
      paddingLeft:'12%',
      paddingRight:'auto',
      marginRight: 'auto',
      fontSize:'fit',
      color:'tan',
      transition:"opacity 400ms linear"
    }
    const questionStyleThree={
      width:'100%',
      float:'center',
      textalign:'center',
      display: 'block',
      marginLeft: 'auto',
      paddingLeft:'5%',
      paddingRight:'auto',
      marginRight: 'auto',
      fontSize:'150%',
      color:'peru',
      transition:"opacity 400ms linear"
    }
    const placeholder={
      display:"inline-block",
      marginTop:'-70px',
      height:"17%",
    };

    return (
      <div style={myStyle}>
        <div style={placeholder}></div>
        <h1 class="question" style={questionStyle}> Can an AI be artists? </h1>
        <h1 class="questionTwo" style={questionStyleTwo}>They may even be better.</h1>
        <h1 class="questionThree" style={questionStyleThree}>Look at the following pictures to find out.</h1>
      </div> 
    );
  }
}
   
export default App;