const mediaSelector = document.getElementById("media");
const mediaSelector1 = document.getElementById("next");
//mediaSelector1.addEventListener("onclick",function() {alert("I am working")});



let t = document.querySelector('textarea');

let selectedMedia = null;
mediaSelector.addEventListener("change", (e) => {

	
	selectedMedia = e.target.value;
	console.log(selectedMedia);
	console.log(typeof (selectedMedia));


	let t1 = Math.floor(Math.random() * 10) + 1;
	console.log(selectedMedia === "English");
	
	if (selectedMedia == "English") {
		switch (t1) {
			case 0:
				t.innerText = "Once, there was a boy who became bored when he watched over the village sheep grazing on the hillside. To entertain himself, he sang out, Wolf! Wolf! The wolf is chasing the sheep!.";
				break;
			case 1:
				t.innerText = "There once was a king named Midas who did a good deed for a satyr — a spirit of nature. Dionysus, the god of wine, then granted him a wish.";
				break;
			case 2:
				t.innerText = "One day, a fox became very hungry. He went out to search for some food. He searched high and low but couldn’t find anything to eat.";
				break;
			case 3:
				t.innerText = "Once upon a time, in a desert far away, there was a rose who was so proud of her beautiful looks. Her only complaint was that she was growing next to an ugly cactus.";
				break;
			case 4:
				t.innerText = "One day, Molly the milkmaid had filled her pails with milk. Her job was to milk the cows and then bring the milk to the market to sell. Molly loved to think about what to spend her money on."

				break;
			case 5:
				t.innerText = "There was an old owl who lived in an oak tree. Every day, he observed incidents that occurred around.";
				break;
			case 6:
				t.innerText = "Once upon a time, a farmer had a goose that laid one golden egg every day. The egg provided enough money for the farmer and his wife to support their daily needs. The farmer and his wife continued to be happy for a long time.";
			case 7:
				t.innerText = "A farmer needed a water source for his farm, so he bought a well from his neighbor. However, The neighbor was cunning. The next day, as the farmer came to draw water from his well, the neighbor refused to let him take any.";
				break;
			case 8:
				t.innerText = "A lone elephant walked through the forest, looking for friends. She soon saw a monkey and asked, “Can we be friends, monkey?”";
				break;
			case 9:
				t.innerText = "Asha was getting frustrated and tired of life, so she asked her father what to do. Her father told her to bring an egg, two tea leaves, and a potato. He then brought out three vessels, filled them with water, and placed them on the stove.";
				break;
			case 10:
				t.innerText = "Once, there were two brothers who lived at the forest’s edge. The oldest brother was always unkind to his younger brother. The older brother took all the food and snatched all the good clothes.";
		}
	}
	else {
		switch (t1) {
			case 0:
				t.innerText = "कहानियां जरिया हैं, बच्चों को अच्छे संस्कार देने का। उन्हें बेहतर इंसान बनाने का। संभवत: यही कारण है कि आप और हम, सभी दादी-नानी से राजाओं की, परियों की, पशु-पक्षियों की और जिन्न आदि की कहानियां सुन-सुन कर बड़े हुए हैं।";
				break;
			case 1:
				t.innerText = "भारत में ऐसे कई महान ज्ञानी हुए हैं, जिनकी बुद्धिमत्ता का लोहा हर किसी ने माना है। उनके व्यक्तित्व व चतुराई से जुड़े किस्से हर किसी को प्रभावित व रोमांचित करते हैं। भारत के इतिहास में ऐसे ही शख्स हुए हैं, जिनका नाम है तेनालीराम।";
				break;
			case 2:
				t.innerText = "भारत में ऐसे कई महान ज्ञानी हुए हैं, जिनकी बुद्धिमत्ता का लोहा हर किसी ने माना है। उनके व्यक्तित्व व चतुराई से जुड़े किस्से हर किसी को प्रभावित व रोमांचित करते हैं। भारत के इतिहास में ऐसे ही शख्स हुए हैं, जिनका नाम है तेनालीराम। तेनालीराम की बुद्धिमानी से भला कौन परिचित नहीं है। ";
				break;
			case 3:
				t.innerText = "विक्रम बेताल की कहानियां, जिसे बेताल पच्चीसी के नाम से भी जाना जाता है। यह 25 कहानियों का संग्रह है, जिसमें कई प्ररेणादायक और नेतृत्व क्षमता को बढ़ाने वाली कहानियां शामिल हैं।";
				break;
			case 4:
				t.innerText = "गौतम बुद्ध का जीवन सभी के लिए प्रेरणा का स्रोत रहा है। माना जाता है कि सिर्फ एक जन्म में ही नहीं, बल्कि पिछले जन्मों में भी उनका जीवन प्रेरणादायक रहा था। उनके पिछले जन्म से जुड़े किस्से-कहानियों के संग्रह को ही जातक कथाएं कहा जाता है।";
				break;
			case 5:
				t.innerText = "कहानियां हमेशा से बच्चों के लिए ज्ञान और मनोरंजन का स्रोत रही हैं। बचपन में सुनी इन कहानियों में बच्चे अपने जीवन के पहले दोस्त बनाते हैं, जो उनके मन-मस्तिष्क पर अहम छाप जोड़ जाते हैं। इनमें परियां हमेशा से बच्चों की सबसे प्रिय मित्र रही हैं और परी कथाएं की कहानियां सबसे पसंदीदा कहानियों में से एक हैं।";
				break;
			case 6:
				t.innerText = "कहानियां हमेशा से बच्चों के लिए ज्ञान और मनोरंजन का स्रोत रही हैं। बचपन में सुनी इन कहानियों में बच्चे अपने जीवन के पहले दोस्त बनाते हैं, जो उनके मन-मस्तिष्क पर अहम छाप जोड़ जाते हैं। इनमें परियां हमेशा से बच्चों की सबसे प्रिय मित्र रही हैं और परी कथाएं की कहानियां सबसे पसंदीदा कहानियों में से एक हैं।";
			case 7:
				t.innerText = "इसलिए, मॉमजंक्शन में कहानियों की श्रेणी में हमने शामिल की है परी कथाएं हिंदी में, जहां बच्चों को सुनाने के लिए आपको हर रात एक नई कहानी मिलेगी। ये बच्चों की कल्पना को विकसित करेंगी और उन्हें ऐसी दुनिया की सैर कराएंगी, जहां जाने का मन हर किसी का होता है";
				break;
			case 8:
				t.innerText = "बच्चों के लिए कहानी की जब भी बात आती है, तो हर कहानी अपने आप में कोई न कोई सीख या प्रेरणा लिए होती है। वहीं, जब हम सिर्फ प्रेरणादायक कहानी की बात करते हैं, तो ऐसे में केवल उन कहानियों को शामिल किया जाता है, जिनसे बच्चों को जीवन में अच्छे कर्म और व्यवहार की प्रेरणा मिले।";
				break;
			case 9:
				t.innerText = "बच्चों को कहानी के किरदार हमेशा से रोमांचित और आकर्षित करते रहे हैं। वहीं, अगर कहानी के किरदार असल जिंदगी से ताल्लुक रखते हों, तो वो बच्चों के मन-मस्तिष्क पर एक अलग ही छाप छोड़ जाते हैं।";
				break;
			case 10:
				t.innerText = "बच्चों को कहानी के किरदार हमेशा से रोमांचित और आकर्षित करते रहे हैं। वहीं, अगर कहानी के किरदार असल जिंदगी से ताल्लुक रखते हों, तो वो बच्चों के मन-मस्तिष्क पर एक अलग ही छाप छोड़ जाते हैं।";
		}
	}
	document.getElementById("next").onclick = function() {
		let t1 = Math.floor(Math.random() * 10) + 1;
	
		if (selectedMedia == "English") {
			switch (t1) {
				case 0:
					t.innerText = "Once, there was a boy who became bored when he watched over the village sheep grazing on the hillside. To entertain himself, he sang out, Wolf! Wolf! The wolf is chasing the sheep!.";
					break;
				case 1:
					t.innerText = "There once was a king named Midas who did a good deed for a satyr — a spirit of nature. Dionysus, the god of wine, then granted him a wish.";
					break;
				case 2:
					t.innerText = "One day, a fox became very hungry. He went out to search for some food. He searched high and low but couldn’t find anything to eat.";
					break;
				case 3:
					t.innerText = "Once upon a time, in a desert far away, there was a rose who was so proud of her beautiful looks. Her only complaint was that she was growing next to an ugly cactus.";
					break;
				case 4:
					t.innerText = "One day, Molly the milkmaid had filled her pails with milk. Her job was to milk the cows and then bring the milk to the market to sell. Molly loved to think about what to spend her money on."
	
					break;
				case 5:
					t.innerText = "There was an old owl who lived in an oak tree. Every day, he observed incidents that occurred around.";
					break;
				case 6:
					t.innerText = "Once upon a time, a farmer had a goose that laid one golden egg every day. The egg provided enough money for the farmer and his wife to support their daily needs. The farmer and his wife continued to be happy for a long time.";
				case 7:
					t.innerText = "A farmer needed a water source for his farm, so he bought a well from his neighbor. However, The neighbor was cunning. The next day, as the farmer came to draw water from his well, the neighbor refused to let him take any.";
					break;
				case 8:
					t.innerText = "A lone elephant walked through the forest, looking for friends. She soon saw a monkey and asked, “Can we be friends, monkey?”";
					break;
				case 9:
					t.innerText = "Asha was getting frustrated and tired of life, so she asked her father what to do. Her father told her to bring an egg, two tea leaves, and a potato. He then brought out three vessels, filled them with water, and placed them on the stove.";
					break;
				case 10:
					t.innerText = "Once, there were two brothers who lived at the forest’s edge. The oldest brother was always unkind to his younger brother. The older brother took all the food and snatched all the good clothes.";
			}
		}
		else {
			switch (t1) {
				case 0:
					t.innerText = "कहानियां जरिया हैं, बच्चों को अच्छे संस्कार देने का। उन्हें बेहतर इंसान बनाने का। संभवत: यही कारण है कि आप और हम, सभी दादी-नानी से राजाओं की, परियों की, पशु-पक्षियों की और जिन्न आदि की कहानियां सुन-सुन कर बड़े हुए हैं।";
					break;
				case 1:
					t.innerText = "भारत में ऐसे कई महान ज्ञानी हुए हैं, जिनकी बुद्धिमत्ता का लोहा हर किसी ने माना है। उनके व्यक्तित्व व चतुराई से जुड़े किस्से हर किसी को प्रभावित व रोमांचित करते हैं। भारत के इतिहास में ऐसे ही शख्स हुए हैं, जिनका नाम है तेनालीराम।";
					break;
				case 2:
					t.innerText = "भारत में ऐसे कई महान ज्ञानी हुए हैं, जिनकी बुद्धिमत्ता का लोहा हर किसी ने माना है। उनके व्यक्तित्व व चतुराई से जुड़े किस्से हर किसी को प्रभावित व रोमांचित करते हैं। भारत के इतिहास में ऐसे ही शख्स हुए हैं, जिनका नाम है तेनालीराम। तेनालीराम की बुद्धिमानी से भला कौन परिचित नहीं है। ";
					break;
				case 3:
					t.innerText = "विक्रम बेताल की कहानियां, जिसे बेताल पच्चीसी के नाम से भी जाना जाता है। यह 25 कहानियों का संग्रह है, जिसमें कई प्ररेणादायक और नेतृत्व क्षमता को बढ़ाने वाली कहानियां शामिल हैं।";
					break;
				case 4:
					t.innerText = "गौतम बुद्ध का जीवन सभी के लिए प्रेरणा का स्रोत रहा है। माना जाता है कि सिर्फ एक जन्म में ही नहीं, बल्कि पिछले जन्मों में भी उनका जीवन प्रेरणादायक रहा था। उनके पिछले जन्म से जुड़े किस्से-कहानियों के संग्रह को ही जातक कथाएं कहा जाता है।";
					break;
				case 5:
					t.innerText = "कहानियां हमेशा से बच्चों के लिए ज्ञान और मनोरंजन का स्रोत रही हैं। बचपन में सुनी इन कहानियों में बच्चे अपने जीवन के पहले दोस्त बनाते हैं, जो उनके मन-मस्तिष्क पर अहम छाप जोड़ जाते हैं। इनमें परियां हमेशा से बच्चों की सबसे प्रिय मित्र रही हैं और परी कथाएं की कहानियां सबसे पसंदीदा कहानियों में से एक हैं।";
					break;
				case 6:
					t.innerText = "कहानियां हमेशा से बच्चों के लिए ज्ञान और मनोरंजन का स्रोत रही हैं। बचपन में सुनी इन कहानियों में बच्चे अपने जीवन के पहले दोस्त बनाते हैं, जो उनके मन-मस्तिष्क पर अहम छाप जोड़ जाते हैं। इनमें परियां हमेशा से बच्चों की सबसे प्रिय मित्र रही हैं और परी कथाएं की कहानियां सबसे पसंदीदा कहानियों में से एक हैं।";
				case 7:
					t.innerText = "इसलिए, मॉमजंक्शन में कहानियों की श्रेणी में हमने शामिल की है परी कथाएं हिंदी में, जहां बच्चों को सुनाने के लिए आपको हर रात एक नई कहानी मिलेगी। ये बच्चों की कल्पना को विकसित करेंगी और उन्हें ऐसी दुनिया की सैर कराएंगी, जहां जाने का मन हर किसी का होता है";
					break;
				case 8:
					t.innerText = "बच्चों के लिए कहानी की जब भी बात आती है, तो हर कहानी अपने आप में कोई न कोई सीख या प्रेरणा लिए होती है। वहीं, जब हम सिर्फ प्रेरणादायक कहानी की बात करते हैं, तो ऐसे में केवल उन कहानियों को शामिल किया जाता है, जिनसे बच्चों को जीवन में अच्छे कर्म और व्यवहार की प्रेरणा मिले।";
					break;
				case 9:
					t.innerText = "बच्चों को कहानी के किरदार हमेशा से रोमांचित और आकर्षित करते रहे हैं। वहीं, अगर कहानी के किरदार असल जिंदगी से ताल्लुक रखते हों, तो वो बच्चों के मन-मस्तिष्क पर एक अलग ही छाप छोड़ जाते हैं।";
					break;
				case 10:
					t.innerText = "बच्चों को कहानी के किरदार हमेशा से रोमांचित और आकर्षित करते रहे हैं। वहीं, अगर कहानी के किरदार असल जिंदगी से ताल्लुक रखते हों, तो वो बच्चों के मन-मस्तिष्क पर एक अलग ही छाप छोड़ जाते हैं।";
			}
		}
	};
	

});

const audioMediaConstraints = {
	audio: true,
	video: false,
};

let chunks = [];


function startRecording(
	thisButton, otherButton) {

     document.getElementById('start-aud-recording').innerText="recording....";
	navigator.mediaDevices.getUserMedia(audioMediaConstraints)
		.then((mediaStream) => {


			const mediaRecorder = new MediaRecorder(mediaStream);


			window.MediaStream = mediaStream;

			window.MediaRecorder = mediaRecorder;

			mediaRecorder.start();


			mediaRecorder.ondataavailable = (e) => {
                chunks.push(e.data);
			};


			mediaRecorder.onstop = () => {


				const blob = new Blob(chunks, { type: "audio/mpeg" });
				console.log(chunks[0]);
				chunks = [];


				const recordedMedia = document.createElement("audio");
				recordedMedia.style.display = "none";
				recordedMedia.controls = true;


				const recordedMediaURL = URL.createObjectURL(blob);




				recordedMedia.src = recordedMediaURL;


				let downloadButton = document.getElementById("download")
				downloadButton = document.createElement("a");


				downloadButton.download = "Recorded-Media";

				downloadButton.href = recordedMediaURL;
				downloadButton.innerText ="download";

				downloadButton.onclick = () => {


					URL.revokeObjectURL(recordedMedia);
				};

				document.getElementById(
					`start-aud-recording`).append(
						recordedMedia, downloadButton);
			};


			thisButton.disabled = true;
			otherButton.disabled = false;
		});
}

function stopRecording(thisButton, otherButton) {

	 document.getElementById('start-aud-recording').innerText="Start recording";
	window.MediaRecorder.stop();


	window.MediaStream.getTracks()
		.forEach((track) => {
			track.stop();
		});


	thisButton.disabled = true;
	otherButton.disabled = false;
} 