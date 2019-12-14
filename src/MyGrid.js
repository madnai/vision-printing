import React, {useRef, Component} from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import GridLayout from 'react-grid-layout';

import _ from "lodash";
import * as firebase from 'firebase';
import { connect } from 'react-redux';
import { throwStatement } from "@babel/types";
import ReactToPrint from 'react-to-print';
import { transform } from "@babel/core";



const ResponsiveReactGridLayout = WidthProvider(Responsive);


// arrayTest = [
//    {w: 2, h: 2, x: 0, y: 0, i: "0"},
//    {w: 2, h: 2, x: 0, y: 2, i: "1"}
//    ]



/**
 * 
 * array = [
 * {w: 2, h: 2, x: 0, y: 0, i: "0"},
 * {w: 2, h: 2, x: 0, y: 2, i: "1"}
 * ]
 * This layout demonstrates how to use a grid with a dynamic number of elements.
 * 
 *   X X X X X X X X X X 
 *   X X X X X X X X X X
 *   X X X X X X X X X X
 * 
 * {
 *  row1: [0,0,0,0,0,0,0,0,0,0]
 *  row2: [0,0,0,0,0,0,0,0,0,0]
 *  row3: [0,0,0,0,0,0,0,0,0,0]
 * }
 * 
 *  0: {w: 2, h: 2, x: 0, y: 0, i: "0", …} - y0 = row1 , w:2 - row1[0][1], h:2 - row1[0] row2[0]
 * 
 * array[y] = array.push()
 *
 * array = [[1,1,0,0,0,0,0,0,0,0], 
 *          [1,1,0,0,0,0,0,0,0,0], 
 *           [0,0,0,0,0,0,0,0,0,0]]
 * 
    1: {w: 2, h: 2, x: 0, y: 2, i: "1", …}
 */
class AddRemoveLayout extends React.Component {
  static defaultProps = {
    className: "layout",
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
    rowHeight: 100
  };



  constructor(props) {
    super(props);

    this.state = {
      width: 0,
      height: 210,
      draggable: true,
      hover: false
    };

    this.onBreakpointChange = this.onBreakpointChange.bind(this);
  }
  
  createElement(el) {
    console.log('firing create eement!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    const hoverStyle = {
      position: "absolute",
      right: "2px",
      top: 0,
      cursor: "pointer"
    };
    const nonHoverStyle = {
      display: 'none',
      position: "absolute",
      right: "2px",
      top: 0,
      cursor: "pointer",
      color: 'red'
    };
    

    const imgStyle = {
      width: '198px',
      height: '210px'
    }
    const i = el.add ? "+" : el.i;
    return (
      <div key={i} data-grid={el} id={i}  onDoubleClick={this.onRemoveItem.bind(this) } 
          onMouseEnter={() => {
            this.setState({
              hover: true
            })
      }}
        onMouseLeave={() => {
          this.setState({
            hover: false
          })
        }} style={{border: 'none'}}>
        {el.add ? (
          <span
            className="add text"
            onClick={this.onAddItem}
            title="You can add an item by clicking here, too."
          >
            Add +
          </span>
        ) : (
          <img src={el.img} style={{width: 'inherit', height: 'inherit'}} id={i}></img>
        )}
        <span
          className="remove"
           style={this.state.hover ? hoverStyle : nonHoverStyle}
          onClick={this.onRemoveItem.bind(this, i)}
          
        >
          x
        </span>
      </div>
    );
  }

  // We're using the cols coming back from this to calculate where to add new items.
  onBreakpointChange(breakpoint, cols) {
    this.setState({
      breakpoint: breakpoint,
      cols: cols
    });
  }

  onLayoutChange(layout) {
    // this.props.onLayoutChange(layout);
    // this.setState({ layout: layout });
  }

  onRemoveItem(i) {
    // let x = parseInt(e.target.id)
    this.props.onImageRemove(i);
  }

  render() {
    return (
      <div>

        <GridLayout ref={el => (this.componentRef = el)} style={{ display: 'inline-block', textAlign: 'center',  width: '700px', border: '1px black solid'}}
        className='layout' cols={12} rowHeight={78} width={700} 
        draggableCancel='.nonDraggableClass'
        isDroppable={true}
        onDrop={(elemPara) => console.log('///////////////////////////////////// ', elemPara)}
        onResize={(el) => console.log('onResize ', el, 'wysokosc: ' ,el[1], 'szerokosc: ', el[1])}
        onDragStart={(el) => console.log('onDragstart', el)}
        onDragStop={(el, oldItem, newItem,
          placeholder, e, element) => {
            let evt = new MouseEvent("dragstart", {
              bubbles: true,
              cancelable: true,
              view: window
            });

            if(element.id == 0) {
              // element.style.transform= "translate(10px, 10px)"
              e.target.dispatchEvent(evt)
              newItem = {w: 2, h: 1, x: 0, y: 0, i: "0"}
            }
            // element.style.transform= "translate(10px, 30px)"
            console.log('event STOP', newItem)


        }}
        onDrag={(el, oldItem, newItem,
          placeholder, e, element) => {
            console.log('event ', element.style)
            let columnHeight = [0,0,0,0,0,0,0,0]
          
            let counter1 = 0
            let counter2 = 0
            let counter3 = 0
            let counter4 = 0
            let counter5 = 0
            let counter6 = 0
            let counter7 = 0
            let counter8 = 0
            el.forEach((el, i) => {

            if(el.x == 0) {
              
              counter1 = counter1 + el.h 
              columnHeight.splice(0,1, counter1) 
              if(el.w > 1) {
                counter2 = counter2 + el.h
                columnHeight.splice(1,2, counter2) 
              }
            }
            if(el.x == 1) {
              
              counter2 = counter2 + el.h
              columnHeight.splice(1,2, counter2)
              if(el.w > 1) {
                counter3 = counter3 + el.h
                columnHeight.splice(2,3, counter3) 
              }
            }
            if(el.x == 2) {
              
              counter3 = counter3 + el.h
              columnHeight.splice(2,3, counter3)
              if(el.w > 1) {
                counter4 = counter4 + el.h
                columnHeight.splice(3,4, counter4) 
              }
            }
            if(el.x == 3) {
              if(el.w > 1) {
                counter5 = counter5 + el.h
              }
              counter4 = counter4 + el.h
              columnHeight.splice(3,4, counter4)
            }

            if(el.x == 4) {
              if(el.w > 1) {
                counter6 = counter6 + el.h
              }
              counter5 = counter5 + el.h
              columnHeight.splice(4,5, counter5)
            }
            if(el.x == 5) {
              if(el.w > 1) {
                counter7 = counter7 + el.h
              }
              counter6 = counter6 + el.h
              columnHeight.splice(5,6, counter6)
            }
            if(el.x == 6) {
              counter7 = counter7 + el.h
              columnHeight.splice(6,7, counter7)
            }
            if(el.x == 7) {
              counter8 = counter8 + el.h
              columnHeight.splice(7,8, counter8)
            }
              console.log('columnHeight: ', columnHeight)
            })

            el.forEach((el, i) => {
              if(el.i == newItem.i) {
              
                // // jest na pozycji
                // console.log(newItem.x)
                // // bedzie na pozycji
                // console.log(el.x)
                // // wysokosc elementu
                // console.log(el.h)
                // // na pozycji el.x ile jest zajetej 
                // console.log(columnHeight[el.x] )
                // //w sumie ile zajma
                // console.log(columnHeight[el.x] + el.h )
            
                if((columnHeight[el.x] + el.h) > 4) {
                  console.log('nie zmiesci sie')
                  this.setState({
                    draggable: false
                  })
                } else {
                  console.log('zmiesci sie')
                }
              }
            })

          }}
        preventCollision={true}>
        {this.props.img.map(function(x, i, list) {
                return {
                  i: i.toString(),
                  x: i * 2,
                  y: 0,
                  w: 2,
                  h: 1,
                  add: i === (list.length - 1).toString(),
                  img: x,
                  maxH: 6
                };
              }).map(el => 
                this.createElement(el))
              }
        </GridLayout><br></br>
        {console.log('IMAGE: ', this.props.img)}
        {/* <ResponsiveReactGridLayout ref={el => (this.componentRef = el)}
          onLayoutChange={this.onLayoutChange}
          onBreakpointChange={this.onBreakpointChange}
          {...this.props}
        style={{border: '1px solid black', marginBottom: '20px'}}>
          {this.props.img.map(function(x, i, list) {
                return {
                  i: i.toString(),
                  x: i * 2,
                  y: 0,
                  w: 2,
                  h: 2,
                  add: i === (list.length - 1).toString(),
                  img: x
                };
              }).map(el => this.createElement(el))}
        </ResponsiveReactGridLayout> */}
        <ReactToPrint trigger={() => <button style={{backgroundColor: '#010101', color: '#fff', padding: 10, borderRadius: 4, cursor: 'pointer'}}>Print this</button>}
        content={() => this.componentRef} />

      </div>
    );
  }
}


if (require.main === module) {
  require("./test-hook.jsx")(module.exports);
}

const mapDispatchToProps = dispatch => {
  return {
    onImageRemove: (item) => dispatch({type: 'REMOVE', payload: item})
  }
}

const mapStateToProps = state => {
  return {
    img: state.images
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRemoveLayout)