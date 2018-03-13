export default {
    install(Vue,options){
        const bus = new Vue();
        let success = false;
        if(Vue.prototype.bus === undefined){
            Vue.prototype.bus = bus;
            success = true;
        }
        if(window.bus === undefined){
            window.bus = bus;
            success = true;
        }
        if( !success ){
            throw new Error('Failed to install bus, Vue.prototype.bus & windos.bus already exists!')
        }
    }
}