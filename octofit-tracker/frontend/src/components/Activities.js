import React, { useEffect, useState } from 'react';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const codespace = process.env.REACT_APP_CODESPACE_NAME;
  const endpoint = codespace
    ? `https://${codespace}-8000.app.github.dev/api/activities/`
    : `http://localhost:8000/api/activities/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('Activities API endpoint:', endpoint);
        console.log('Fetched activities:', data);
        setActivities(data.results || data);
      });
  }, [endpoint]);

  return (
    <div className="container mt-4">
      <h2 className="mb-4 display-6">Activities</h2>
      <div className="card">
        <div className="card-body">
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Type</th>
                <th>Duration (min)</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((activity, idx) => (
                <tr key={activity._id || idx}>
                  <td>{activity.type}</td>
                  <td>{activity.duration}</td>
                  <td>{activity.calories}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Activities;
