import React from 'react';

function NotFound() {
  const styles = {
    backgroundColor: '#ffe5e5',  // สีพื้นหลังแดงอ่อน
    color: '#cc0000',            // สีข้อความแดงเข้ม
    padding: '50px',
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    height: '100vh'
  };

  return (
    <div style={styles}>
      404 - Page Not Found
    </div>
  );
}

export default NotFound;
