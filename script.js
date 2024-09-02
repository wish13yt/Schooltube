// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyApdBzM4CsG52QUEBH-h1tCCkdODcJF3ZM",
    authDomain: "schooltube-d877c.firebaseapp.com",
    projectId: "schooltube-d877c",
    storageBucket: "schooltube-d877c.appspot.com",
    messagingSenderId: "758988416504",
    appId: "1:758988416504:web:949b4303f1516947e0220d",
    measurementId: "G-LGE5MYKFZ0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const database = firebase.database();

// Function to handle video upload
document.getElementById('uploadButton').addEventListener('click', () => {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
        const storageRef = storage.ref('videos/' + file.name);
        const uploadTask = storageRef.put(file);

        uploadTask.on('state_changed',
            (snapshot) => {
                // Progress
            },
            (error) => {
                // Error
                console.error(error);
            },
            () => {
                // Complete
                uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                    // Save video URL to database
                    database.ref('videos').push({
                        url: downloadURL,
                        name: file.name
                    }).then(() => {
                        alert('Video uploaded successfully!');
                        loadVideos(); // Reload videos after upload
                    });
                });
            }
        );
    }
});

// Function to load and display videos
function loadVideos() {
    const videoList = document.getElementById('videoList');

    database.ref('videos').on('value', (snapshot) => {
        videoList.innerHTML = '<h2>View Videos</h2>'; // Reset video list
        snapshot.forEach((childSnapshot) => {
            const video = childSnapshot.val();
            const videoElement = document.createElement('div');
            videoElement.className = 'video-item';
            videoElement.innerHTML = `
                <video controls>
                    <source src="${video.url}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                <h3>${video.name}</h3>
            `;
            videoList.appendChild(videoElement);
        });
    });
}

// Initial load of videos
loadVideos();







