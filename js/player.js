class Player{
    constructor(){
        this.name=null ;
        this.distance= 0;
        this.index= null;
        this.rank = null;

    }
    getCount(){
        var playercountref =  database.ref('playercount');
        playercountref.on("value",function (data){
            playercount = data.val();
        })
    }
    updateCount(count){
        database.ref('/').update({
            playercount:count
        })
    }
    update(){
        var playerindex = "players/player"+this.index;
        database.ref(playerindex).set({
            name:this.name ,
            distance:this.distance
            })
        }
static getplayerinfo(){
    var playerinforef=database.ref ('players');
    playerinforef.on("value",(data)=>{
        allplayer = data.val();
    })
}
getcarsatend(){
    database.ref('carsatend').on("value",(data)=>{
        this.rank = data.val();
    })

}
static updatecarsatend(rank){
    database.ref('/').update({
        carsatend:rank
    })
}
    }
