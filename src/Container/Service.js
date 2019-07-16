import axios from 'axios';

export default class Service{
    
    getInfos(){
        console.log("Get Info");
    const url = `http://trivago-magazine-work-sample-server.s3-website.eu-central-1.amazonaws.com/latest_posts.json`;
    return axios.get(url).then(response => response.data);
    }

    getInfoByLink(link){
        const url = `http://trivago-magazine-work-sample-server.s3-website.eu-central-1.amazonaws.com/latest_posts.json/${link}`;
        return axios.get(url).then(response => response.data);
    }

    getInfo(id){
        const url = `http://trivago-magazine-work-sample-server.s3-website.eu-central-1.amazonaws.com/latest_posts.json/${id}`;
        return axios.get(url).then(response => response.data);
    }
}
