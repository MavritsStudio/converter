import React, { useState } from "react";

import CollapsedSettingsIcon from "./CollapsedSettingsIcon";

const SettingsBar = ({ children }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div
      className={`settings-bar__container ${
        isOpened ? "extended" : "collapsed"
      }`}
    >
      <div
        className='settings-bar__collapsed'
        onClick={() => setIsOpened(true)}
      >
        <header>
          <div className='logo'>
            <span className='capital'>
              <CollapsedSettingsIcon />
            </span>
          </div>
        </header>

        <div className='vertical'>
          <span>Настройки</span>
        </div>
      </div>

      <div
        className='settings-bar__close'
        onClick={() => setIsOpened(false)}
      ></div>

      <div className='settings__container'>{children}</div>
    </div>
  );
};

export default SettingsBar;
