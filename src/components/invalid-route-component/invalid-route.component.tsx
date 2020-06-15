import React from 'react';
import './invalid-route.styles.scss';
import { useHistory } from 'react-router-dom';
import { History } from 'history';

const InvalidRoute: () => JSX.Element = () => {
  const history: History<History.PoorMansUnknown> = useHistory();
  const navigateTo: () => void = () => history.push('/dashboard');

  return (
    <div className="invalid-route">
      <div className="dashboard-route" onClick={navigateTo}>
        Not a valid route, click here to return to the Dashboard!
      </div>
    </div>
  );
};

export default InvalidRoute;
