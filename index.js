exports.decorateHyper = (Hyper, { React }) =>
  class extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return React.createElement(Hyper, this.props);
    }
  };
