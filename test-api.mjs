// Test script for API testing with forced update
async function testAPI() {
  try {
    console.log('Testing Parndorf hours API with force update...');
    
    // Force data update
    const response = await fetch('http://localhost:3000/api/parndorf/hours', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('API Response:', JSON.stringify(data, null, 2));
    
    if (data.success && data.data && data.data.openingHours) {
      console.log('\nOpening Hours:');
      data.data.openingHours.forEach((item, index) => {
        console.log(`${index + 1}. ${item.day}: ${item.hours}`);
      });
    }
    
  } catch (error) {
    console.error('Error testing API:', error);
  }
}

testAPI();
