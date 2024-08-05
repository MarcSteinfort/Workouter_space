document.getElementById('workout-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const date = document.getElementById('date').value;
    const type = document.getElementById('workout-type').value;
    const duration = document.getElementById('duration').value;
    
    const workoutList = document.getElementById('workout-list');
    const workoutEntry = document.createElement('div');
    workoutEntry.className = 'workout-entry';
    
    workoutEntry.innerHTML = `
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Type:</strong> ${type}</p>
        <p><strong>Duration:</strong> ${duration} minutes</p>
    `;
    
    workoutList.appendChild(workoutEntry);
    
    document.getElementById('workout-form').reset();
});
