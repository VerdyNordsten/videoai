'use client';

import React from 'react';

export default function TeamCollaborationSection() {
  const handleInviteMember = () => {
    alert('Inviting new member');
  };

  return (
    <section id="team-section" className="mb-8">
      <div className="bg-surface border border-gray-200 rounded-xl p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-poppins font-semibold text-xl text-gray-900 mb-1">Team Collaboration</h2>
            <p className="text-muted">Manage your video marketing team and projects</p>
          </div>
          <button 
            className="bg-accent2 text-white font-medium px-6 py-2 rounded-xl btn-hover"
            onClick={handleInviteMember}
          >
            <i className="fa-solid fa-user-plus mr-2"></i>
            Invite Member
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Active Team Members</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center space-x-3">
                  <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg" alt="Team Member" className="w-10 h-10 rounded-lg" />
                  <div>
                    <h4 className="font-medium text-gray-900">Sarah Chen</h4>
                    <p className="text-sm text-muted">Creative Director</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="bg-accent2 text-white text-xs px-2 py-1 rounded-full">Owner</span>
                  <button className="text-muted hover:text-gray-900">
                    <i className="fa-solid fa-ellipsis-h"></i>
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center space-x-3">
                  <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" alt="Team Member" className="w-10 h-10 rounded-lg" />
                  <div>
                    <h4 className="font-medium text-gray-900">Marcus Johnson</h4>
                    <p className="text-sm text-muted">Video Editor</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">Editor</span>
                  <button className="text-muted hover:text-gray-900">
                    <i className="fa-solid fa-ellipsis-h"></i>
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center space-x-3">
                  <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg" alt="Team Member" className="w-10 h-10 rounded-lg" />
                  <div>
                    <h4 className="font-medium text-gray-900">Emma Rodriguez</h4>
                    <p className="text-sm text-muted">Marketing Specialist</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="bg-secondary text-white text-xs px-2 py-1 rounded-full">Viewer</span>
                  <button className="text-muted hover:text-gray-900">
                    <i className="fa-solid fa-ellipsis-h"></i>
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center space-x-3">
                  <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg" alt="Team Member" className="w-10 h-10 rounded-lg" />
                  <div>
                    <h4 className="font-medium text-gray-900">David Kim</h4>
                    <p className="text-sm text-muted">Content Strategist</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="bg-accent1 text-white text-xs px-2 py-1 rounded-full">Collaborator</span>
                  <button className="text-muted hover:text-gray-900">
                    <i className="fa-solid fa-ellipsis-h"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl">
                <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" alt="User" className="w-8 h-8 rounded-lg" />
                <div className="flex-1">
                  <p className="text-sm text-gray-900"><span className="font-medium">Marcus Johnson</span> completed editing <span className="font-medium">"Summer Collection Launch"</span></p>
                  <p className="text-xs text-muted mt-1">2 hours ago</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl">
                <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg" alt="User" className="w-8 h-8 rounded-lg" />
                <div className="flex-1">
                  <p className="text-sm text-gray-900"><span className="font-medium">Emma Rodriguez</span> shared <span className="font-medium">"Client Testimonials"</span> project</p>
                  <p className="text-xs text-muted mt-1">4 hours ago</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl">
                <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg" alt="User" className="w-8 h-8 rounded-lg" />
                <div className="flex-1">
                  <p className="text-sm text-gray-900"><span className="font-medium">David Kim</span> added new AI idea template <span className="font-medium">"Product Demo 2.0"</span></p>
                  <p className="text-xs text-muted mt-1">1 day ago</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl">
                <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg" alt="User" className="w-8 h-8 rounded-lg" />
                <div className="flex-1">
                  <p className="text-sm text-gray-900"><span className="font-medium">Sarah Chen</span> created new project <span className="font-medium">"Brand Story 2024"</span></p>
                  <p className="text-xs text-muted mt-1">2 days ago</p>
                </div>
              </div>
            </div>

            <button className="w-full mt-4 text-primary font-medium py-2 border border-primary rounded-xl hover:bg-primary hover:text-white transition-colors">
              View All Activity
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}