import React from 'react';
import Welcome from '@/Components/Welcome';
import DashboardLayout from '@/Layouts/Dashboard/DashboardLayout';

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
            <Welcome />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
