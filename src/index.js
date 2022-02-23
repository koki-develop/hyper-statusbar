import Statusbar from './components/Statusbar';

exports.reduceUI = (state, { type, config }) => {
  switch (type) {
    case 'CONFIG_LOAD':
    case 'CONFIG_RELOAD':
      return state.set('statusbar', config.statusbar);
  }

  return state;
};

exports.decorateConfig = config => {
  return {
    ...config,
    css: `
      ${config.css ?? ''}
      .terms_terms {
        margin-bottom: 40px;
      }
    `,
  };
};

exports.mapHyperState = ({ ui: { statusbar } }, map) => {
  return {
    ...map,
    statusbar,
  };
};

exports.decorateHyper = (Hyper, { React }) =>
  class extends React.Component {
    static displayName = 'Hyper';

    constructor(props) {
      super(props);
    }

    render() {
      const { customChildren = [] } = this.props;
      const existingChildren =
        customChildren instanceof Array ? customChildren : [customChildren];

      const { statusbar, ...hyperProps } = this.props;

      return (
        <Hyper
          {...hyperProps}
          customInnerChildren={existingChildren.concat(
            <Statusbar
              style={{ borderColor: hyperProps.borderColor ?? '#333' }}
              panels={statusbar?.panels}
            />,
          )}
        />
      );
    }
  };
