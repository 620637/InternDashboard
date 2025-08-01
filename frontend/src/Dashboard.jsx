import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [internData, setInternData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInternData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/intern-data');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setInternData(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInternData();
  }, []);

  if (loading) {
    return <div className="loading-message">Loading...</div>;
  }

  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }

  return (
    <div>
      <h1>Intern Dashboard</h1>
      <div className="dashboard-card">
        <h2>Welcome, {internData.name}!</h2>
        <p><strong>Your Referral Code:</strong> {internData.referralCode}</p>
        <p><strong>Total Donations Raised:</strong> ${internData.donationsRaised}</p>
      </div>

      <div className="dashboard-card">
        <h3>Rewards/Unlockables</h3>
        <ul className="rewards-list">
          {internData.rewards.map(reward => (
            <li key={reward.id} className="reward-item">
              <span>{reward.name}</span>
              <span className={reward.unlocked ? 'unlocked' : 'locked'}>
                {reward.unlocked ? '✅ Unlocked' : '🔒 Locked'}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;