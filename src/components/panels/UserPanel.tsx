import os from 'os';
import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import Panel from '.';

export type UserPanelProps = {
  //
};

export type UserPanelState = {
  //
};

class UserPanel extends React.Component<UserPanelProps, UserPanelState> {
  static panelName = 'user';

  constructor(props: UserPanelProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Panel icon={AiOutlineUser}>
        {process.env.USER}@{os.hostname()}
      </Panel>
    );
  }
}

export default UserPanel;
