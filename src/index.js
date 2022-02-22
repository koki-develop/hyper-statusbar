import Statusline from "./components/Statusline";

exports.decorateHyper = (Hyper, { React }) =>
  class extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      const { customChildren = [] } = this.props;
      const existingChildren =
        customChildren instanceof Array ? customChildren : [customChildren];

      return React.createElement(
        Hyper,
        Object.assign({}, this.props, {
          customInnerChildren: existingChildren.concat(
            React.createElement(Statusline, {})
          ),
        })
      );
    }
  };
