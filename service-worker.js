// service-worker.js
self.addEventListener('notificationclick', event => {
    event.notification.close();
    // Handle notification click event, e.g., open a specific page
  });
  
  self.addEventListener('push', event => {
    const options = {
      body: event.data.text(),
      icon: 'path-to-your-icon.png', // Include a path to your notification icon
    };
  
    event.waitUntil(
      self.registration.showNotification('Task Reminder', options)
    );
  });
  