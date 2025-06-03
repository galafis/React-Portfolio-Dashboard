/**
 * Dashboard Component
 * @author Gabriel Demetrios Lafis
 */

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardTitle = styled.h3`
  color: #333;
  margin-bottom: 15px;
  font-size: 1.2rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-bottom: 20px;
`;

const StatCard = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 5px;
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  opacity: 0.9;
`;

const Dashboard = () => {
  const [stats, setStats] = useState({
    projects: 48,
    technologies: 15,
    experience: 5,
    certifications: 8
  });

  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Project Completion',
        data: [12, 19, 15, 25, 22, 30],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
      },
    ],
  };

  const barChartData = {
    labels: ['JavaScript', 'Python', 'Java', 'React', 'Node.js'],
    datasets: [
      {
        label: 'Skill Level',
        data: [95, 90, 85, 92, 88],
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 205, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(153, 102, 255, 0.8)',
        ],
      },
    ],
  };

  const doughnutData = {
    labels: ['Frontend', 'Backend', 'DevOps', 'Data Science'],
    datasets: [
      {
        data: [35, 30, 20, 15],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
        ],
      },
    ],
  };

  return (
    <>
      <StatsGrid>
        <StatCard>
          <StatValue>{stats.projects}</StatValue>
          <StatLabel>Projects Completed</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>{stats.technologies}</StatValue>
          <StatLabel>Technologies Mastered</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>{stats.experience}+</StatValue>
          <StatLabel>Years Experience</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>{stats.certifications}</StatValue>
          <StatLabel>Certifications</StatLabel>
        </StatCard>
      </StatsGrid>

      <DashboardContainer>
        <Card>
          <CardTitle>Project Timeline</CardTitle>
          <Line data={lineChartData} />
        </Card>
        
        <Card>
          <CardTitle>Technical Skills</CardTitle>
          <Bar data={barChartData} />
        </Card>
        
        <Card>
          <CardTitle>Expertise Distribution</CardTitle>
          <Doughnut data={doughnutData} />
        </Card>
      </DashboardContainer>
    </>
  );
};

export default Dashboard;
