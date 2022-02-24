import os from 'os';
import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { loadUser, User } from '@/lib/user';
import Panel from '.';

export type UserPanelProps = {
  //
};

export type UserPanelState = {
  user: User;
};

class UserPanel extends React.Component<UserPanelProps, UserPanelState> {
  static panelName = 'user';

  constructor(props: UserPanelProps) {
    super(props);
    this.state = {
      user: loadUser(),
    };
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
