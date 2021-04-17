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
            $("#gameBody").css("backgroundImage", "url(images/" + myData.background + ")");
            $("#firstChoice").data("next", myData.first[1]);
            $("#secondChoice").data("next", myData.second[1]);
            if (myData.main) {
                $(".primaryContent").show;
                $(".primaryContent").html(myData.main);
            } else { $(".primaryContent").hide(); }
            if (myData.secondary) {
                $(".secondaryContent").show;
                $(".secondaryContent").html(myData.secondary);
            } else { $(".secondaryContent").hide(); }
            if (myData.first[0]) {
                $("#firstChoice").show;
                $("#firstChoice").html(myData.first[0]);
            } else { $("#firstChoice").hide(); }
            if (myData.second[0]) {
                $("#secondChoice").show;
                $("#secondChoice").html(myData.second[0]);
            } else { $("#secondChoice").hide(); }
            if (myData.story) {
                $("#storyBox").show;
                $("#storyBox").html(myData.story);
            } else { $("#storyBox").hide(); }
        }
    }).catch(function(error) {
        console.log(error);
    });
};

$(document).ready(function() {
    fetchDataAndUpdateFrame("0");
    $("#firstChoice").click(function() {
        fetchDataAndUpdateFrame($("#firstChoice").data("next"));
    });
    $("#secondChoice").click(function() {
        fetchDataAndUpdateFrame($("#secondChoice").data("next"));
    });
});