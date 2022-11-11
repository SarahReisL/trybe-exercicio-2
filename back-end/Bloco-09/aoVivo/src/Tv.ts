class TV {
    private _brand: string;
    private _size: number;
    private _resolution: string;
    private _connections: string[];
    private _connectedTo?: string;

    constructor(b:string, s:number, r:string, c:string[]) {
        console.log(`Cria essa tv ${b}`)
        this._brand = b;
        this._size = s;
        this._resolution = r;
        this._connections = c;

    }

    // turnOn():void {
    //     console.log(`TV ${this._brand}, ${this._size}", resolution: 
    //     ${this._resolution} \n\ available connections: ${this._connections}, LIGADA`);
    // }

    get connectedTo(): string | undefined {
        return this._connectedTo;
    }

    set connectedTo (value: string | undefined): void {
    // permite setar undefined ou uma conexão que esteja no `connections`
        if (!value || this._connections.includes(value)) {
            this._connectedTo = value;
            console.log(this._connectedTo);
        } else {
            console.log('Sorry, connection unavailable!');
        }
    }
}
// const tv1 = new TV('Tramontina', 10, '4K', ['HDMI', 'Ethernet', 'Wifi']);
// const tv2 = new TValue('Tramontina', 10, 20, 'https');
// console.log(tv1.brand, tv1.size, tv1.resolution, tv1.connections);
// tv1.turnOn();