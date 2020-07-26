const promise = require('promise');
const cp = require('child_process');

exports.fetch_video = function (video_url) {	

	return new promise((resolve,reject) => {
		setTimeout(() => {
			var ydl = cp.spawnSync('youtube-dl',['-f','mp4',video_url,'-o','video.mp4'], {encoding: 'utf8'});
			console.log(ydl.stdout);
			console.log(ydl.stderr);

			var err;
			if(!err) {
				resolve();
			} else {
				reject('Video download error');
			}

		}, 1000);		
	});	

}

exports.trim_video = function(start_time,end_time) {
	
	return new promise((resolve,reject) => {
		setTimeout(() => {
			var vxt = cp.spawnSync('ffmpeg',['-i','.\\video.mp4','-ss',start_time,'-to',end_time,'-c','copy','output.mp4'], {encoding: 'utf8'});
			console.log(vxt.stdout);
			console.log(vxt.stderr);				

			var err;
			if(!err) {
				resolve();
			} else {
				reject('Video trim error');
			}

		}, 2000);
	});		
}


exports.cleanup = function() {

	return new promise((resolve,reject) => {
		setTimeout(() => {
			var fs = require('fs');
			fs.unlinkSync('.\\video.mp4');	
			fs.unlinkSync('.\\output.mp4');	

			console.log('\nProcess Complete \n ---------------------- \n');	

			var err;
			if(!err) {
				resolve();
			} else {
				reject('File system error');
			}

		}, 10000);
	});		

}
