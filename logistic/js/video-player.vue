Vue.component('video-player', {
    data: () => {
        return {
            show: true,
            isVisible: false
        }

    },

    methods: {

        showPlayer(e){
            e.preventDefault()
            this.show = false;
        }
    },

    template: `
        <div class="col-7 v-observe-visibility="visibilityChanged"">
            <div v-if="show == true">
                <a href="" class="play-video" @click="showPlayer"><i class="fas fa-play"></i></a>
                <h2 class="text-white">View Our Services By Watching This Short Video</h2>
            </div>   
            <video src="video.mp4" v-else></video>
        </div>

        
    
    `
});