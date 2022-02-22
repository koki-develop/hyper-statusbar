import Statusline from "./components/Statusline";

exports.decorateConfig = (config) => {
  return {
    ...config,
    css: `
      ${config.css ?? ""}
      .terms_terms {
        margin-bottom: 40px;
      }
    `,
  };
};

exports.decorateHyper = (Hyper, { React }) =>
  class extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      const { customChildren = [] } = this.props;
      const existingChildren =
        customChildren instanceof Array ? customChildren : [customChildren];

      return React.createElement(Hyper, {
        ...this.props,
        customInnerChildren: existingChildren.concat(
          React.createElement(Statusline, {
            style: { borderColor: this.props.borderColor ?? "#333" },
          })
        ),
      });
    }
  };
