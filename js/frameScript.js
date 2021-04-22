var firebaseConfig = {
    apiKey: "AIzaSyAZ0jWb7gWeVw81MazMSlsVJEYKaIib06A",
    authDomain: "webtech-ed10d.firebaseapp.com",
    projectId: "webtech-ed10d",
    storageBucket: "webtech-ed10d.appspot.com",
    messagingSenderId: "241542976230",
    appId: "1:241542976230:web:417a764ae0b1601f9f2127"
};

firebase.initializeApp(firebaseConfig);

var firestore = firebase.firestore();

const collectionRef = firestore.collection("sections");

function fetchDataAndUpdateFrame(section) {
    collectionRef.doc(section).get().then(function(doc) {
        if (doc && doc.exists) {
            let myData = doc.data();
            $("#firstChoice").css('visibility', 'hidden');
            $("#secondChoice").css('visibility', 'hidden');
            $(".secondary").css('visibility', 'hidden');
            $(".main").css('visibility', 'hidden');
            $("#storyBox").css('visibility', 'hidden');
            $("#gameBody").css("backgroundImage", "url(images/" + myData.background + ")");
            if (section == "21111") {
                $("#win").css('visibility', 'visible');
                $("#wrap").css('visibility', 'visible');
                init();
            } else {
                $("#win").css('visibility', 'hidden');
                $("#wrap").css('visibility', 'hidden');
            }
            if (myData.music) {
                $("#titleSong")[0].attr('src', "music/" + myData.music);
                $("#titleSong")[0].play();
            }
            if (myData.first) {
                $("#firstChoice").click(function() {
                    fetchDataAndUpdateFrame(myData.first[1]);
                });
                $("#firstChoice").html(myData.first[0]);
                $("#firstChoice").css('visibility', 'visible');
                if (myData.second) {
                    $("#secondChoice").click(function() {
                        fetchDataAndUpdateFrame(myData.second[1]);
                    });
                    $("#secondChoice").html(myData.second[0]);
                    $("#secondChoice").css('visibility', 'visible');
                }
            }
            if (myData.main) {
                $(".primaryContent").html(myData.main);
                $(".main").css('visibility', 'visible');
            }
            if (myData.secondary) {
                $(".secondaryContent").html(myData.secondary);
                $(".secondary").css('visibility', 'visible');
            }
            if (myData.story) {
                $("#storyBox").html(myData.story);
                $("#storyBox").css('visibility', 'visible');
            }
        }
    }).catch(function(error) {
        console.log(error);
    });
};

$(document).ready(function() {
    fetchDataAndUpdateFrame("0");
});