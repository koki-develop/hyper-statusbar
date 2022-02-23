import React from 'react';
import { getPanels } from './panels';

export const PanelName = {
  battery: 'battery',
  clock: 'clock',
  cpu: 'cpu',
  ip: 'ip',
  memory: 'memory',
  user: 'user',
} as const;

export type PanelName = typeof PanelName[keyof typeof PanelName];

export type StatusbarProps = React.HTMLProps<HTMLDivElement> & {
  panels?: PanelName[];
};

export type StatusbarState = {
  //
};

class Statusbar extends React.Component<StatusbarProps, StatusbarState> {
  constructor(props: StatusbarProps) {
    super(props);
    this.state = {};
  }

  render() {
    const { panels = [], ...divProps } = this.props;
    const panelComponents = getPanels(panels);

    return (
      <footer
        {...divProps}
        style={{
          backgroundColor: 'black',
          borderTopStyle: 'solid',
          borderTopWidth: 1,
          bottom: 0,
          color: 'white',
          display: 'flex',
          height: 40,
          position: 'absolute',
          width: '100%',
          ...divProps.style,
        }}
      >
        {panelComponents}
      </footer>
    );
  }
}

export default Statusbar;
