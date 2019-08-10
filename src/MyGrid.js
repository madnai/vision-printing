import React, {useRef} from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import _ from "lodash";
import * as firebase from 'firebase';
import { connect } from 'react-redux';
import { throwStatement } from "@babel/types";
import ReactToPrint from 'react-to-print';

const ResponsiveReactGridLayout = WidthProvider(Responsive);


/**
 * This layout demonstrates how to use a grid with a dynamic number of elements.
 */
class AddRemoveLayout extends React.PureComponent {
  static defaultProps = {
    className: "layout",
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
    rowHeight: 100
  };



  constructor(props) {
    super(props);

    let items = this.props.img
    

    this.state = {
      width: 0,
      height: 210
    };

    this.onBreakpointChange = this.onBreakpointChange.bind(this);
  }
  
  createElement(el) {
    console.log('element ', el)
    const removeStyle = {
      position: "absolute",
      right: "2px",
      top: 0,
      cursor: "pointer"
    };

    const imgStyle = {
      width: '198px',
      height: '210px'
    }
    const i = el.add ? "+" : el.i;
    return (
      <div key={i} data-grid={el} >
        {el.add ? (
          <span
            className="add text"
            onClick={this.onAddItem}
            title="You can add an item by clicking here, too."
          >
            Add +
          </span>
        ) : (
          <img src={el.img} style={{width: 'inherit', height: 'inherit'}}></img>
        )}
        <span
          className="remove"
          style={removeStyle}
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
    console.log("removing", i);
    this.setState({ items: _.reject(this.state.items, { i: i }) });
  }

  render() {
    return (
      <div>
        <ResponsiveReactGridLayout ref={el => (this.componentRef = el)}
          onLayoutChange={this.onLayoutChange}
          onBreakpointChange={this.onBreakpointChange}
          {...this.props}
        >
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
        </ResponsiveReactGridLayout>
        <ReactToPrint trigger={() => <a href="#">Print this</a>}
        content={() => this.componentRef} />

      </div>
    );
  }
}


if (require.main === module) {
  require("./test-hook.jsx")(module.exports);
}

const mapStateToProps = state => {
  return {
    img: state.images
  }
}

export default connect(mapStateToProps, null)(AddRemoveLayout)