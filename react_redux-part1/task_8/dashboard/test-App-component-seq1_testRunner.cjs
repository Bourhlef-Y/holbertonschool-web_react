const { execSync } = require('child_process');

try {
  // Test 1: App renders Login when not logged in
  const result1 = execSync('npx jest src/tests/App.spec.js -t "renders Login component when not logged in" --silent', { encoding: 'utf8' });
  if (result1.includes('PASS')) {
    console.log('OK');
  } else {
    console.log('NOK');
  }
} catch (error) {
  console.log('NOK');
}

try {
  // Test 2: App renders CourseList when logged in
  const result2 = execSync('npx jest src/tests/App.spec.js -t "renders CourseList component when logged in" --silent', { encoding: 'utf8' });
  if (result2.includes('PASS')) {
    console.log('OK');
  } else {
    console.log('NOK');
  }
} catch (error) {
  console.log('NOK');
} 