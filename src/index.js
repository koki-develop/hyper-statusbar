import Statusline from "./components/Statusline";

exports.reduceUI = (state, { type, config }) => {
  switch (type) {
    case "CONFIG_LOAD":
    case "CONFIG_RELOAD":
      return state.set("statusline", config.statusline);
  }

  return state;
};

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

exports.mapHyperState = ({ ui: { statusline } }, map) => {
  return {
    ...map,
    statusline,
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

      const { statusline, ...hyperProps } = this.props;

      return React.createElement(Hyper, {
        ...hyperProps,
        customInnerChildren: existingChildren.concat(
          React.createElement(Statusline, {
            style: { borderColor: hyperProps.borderColor ?? "#333" },
            panels: statusline?.panels,
          })
        ),
      });
    }
  };
