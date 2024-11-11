import * as alt from "alt-server";

type EventType = {
    name: string;
    isActive: boolean;
}

export default class ConnectSystem {
    static events: Array<EventType> = new Array({name: "playerConnect", isActive: false});


    static registerEvents(): void {
        for(let event of ConnectSystem.events) {
            if(event.isActive) continue;

            alt.on(event.name, ConnectSystem.playerConnect);
            event.isActive = true;
        }
    }
    
    static unRegisterEvents(): void {
        for(let event of ConnectSystem.events) {
            if(!event.isActive) continue;

            alt.off(event.name, ConnectSystem.playerConnect);
            event.isActive = false;
        }
    }

    static playerConnect(player: alt.Player): void {
        console.log("Привет")
    }
}