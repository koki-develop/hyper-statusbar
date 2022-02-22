import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import os from "os";
import Panel from "./Panel";

export type UserPanelProps = {
  //
};

export type UserPanelState = {
  //
};

class UserPanel extends React.Component<UserPanelProps, UserPanelState> {
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
