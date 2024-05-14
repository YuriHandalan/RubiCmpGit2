class Tyre {
    constructor(brand, size) {
        this.brand = brand
        this.size = size
    }

    
}

const tyre1 = new Tyre("Dunlop",15)
const tyre2 = new Tyre("Bridgestone",17)

class Car {
    constructor(varian,door, seat, tyre, year, warranty){
        this.varian = varian
        this.sn = this.sn()
        this.door = door
        this.seat = seat
        this.Tyre = tyre
        this.year = year    
        this.warranty = warranty
    }

     sn(){
        return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
        (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
      );
    }
    
}

class Rush extends Car{
    constructor(year){
        super('Rush',5,5,tyre2, year,1)
    }
}
// console.log(new Rush)


class Agya extends Car{
    constructor(year){
        super('Agya',5,5,tyre1,year,1)
    }

}
// console.log(new Agya)


class CarFactory {
    constructor() {
        this.cars = [];
    }

    produce(year) {
        for (let i = 0; i < Math.floor(Math.random() * 12); i++) {
        this.cars.push(new Agya(year))
        // console.log(this.cars[i]) 
    }
    for (let i = 0; i < Math.floor(Math.random() * 12); i++) {
        this.cars.push(new Rush(year))
        // console.log(this.cars[i]) 
        }        
    }
    

    guaranteeSimulation(simulationYear) {
    console.log(`hasil simulasi garansi semua mobil pada tahun ${simulationYear} : `)    
    
                this.cars.forEach((car, index) => {
                    console.log(`
        no.${index + 1}       
        varian   : ${car.varian}
        sn       : ${car.sn}
        door     : ${car.door}
        seat     : ${car.seat} seater
        tyre     : ${car.Tyre.brand} ${car.Tyre.size} inch
        year     : ${car.year}
        warranty : ${car.warranty} year                
                    `)
        
        console.log(`status on ${simulationYear} this guarantee status ${(car.year + car.warranty >= simulationYear) ? 'active' : 'expired'}`)
                })
        
        
            }
        


    result(){
        // console.log(this.cars)
    }
}

const toyota = new CarFactory()
toyota.produce(2020)
toyota.produce(2022)
toyota.result()
toyota.guaranteeSimulation(2025)