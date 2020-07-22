import React, {useState, useRef, useEffect} from 'react';

 
function FlagEvent() {
  const [count, setCount] = useState(0);
 
  function handleClick() {
    setCount(count + 1);
  }

  const prevCountRef = useRef();
  useEffect(() => {
    prevCountRef.current = count;
  });
  // const prevCount = prevCountRef.current;
 
  return (
    <div>
      <button type="button" onClick={handleClick} style={{margin:"10px",border: "none", backgroundColor:"#FAFAD2", padding: "15px"}}>
      <span role="img" aria-label="flag"> 🚩</span> Report Event : {count}
      </button>
    </div>
  );
}

export default FlagEvent


// class FlagEvent extends React.Component {
//   constructor (props) {
// 		super (props)
// 		// create a state with a property count set to 0
// 		this.state = {
// 		count : 0
// 		}
// 		// bind the method to the class component 
// 		this.incrementMe = this.incrementMe.bind(this)
// 	}

//   incrementMe = () => {
//     console.log("Event Flagged!")
//     let newCount = this.state.count + 1
//     this.setState({
//       count: newCount
//     });
//   };

//   render () {
//     return (
//       <>
//       <button OnClick={this.incrementMe}> <span role="img" aria-label="flag"> 🚩</span> Flag Event: {this.state.count} </button>
//       </> 
//     );
//   }
// } 


// export default FlagEvent;