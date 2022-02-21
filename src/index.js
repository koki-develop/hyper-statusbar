import Statusline from "./components/Statusline";

exports.decorateHyper = (Hyper, { React }) =>
  class extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return React.createElement(
        Hyper,
        Object.assign({}, this.props, {
          customInnerChildren: React.createElement(Statusline, {}),
        })
      );
    }
  };
