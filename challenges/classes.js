// 1. Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker(attributes) {
    // this.length = attributes.length;
    // this.width = attributes.width;
    // this.height = attributes.height;
//   }

class CuboidMaker { 
    constructor(attrs) {
        this.length = attrs.length;
        this.width = attrs.width;
        this.height = attrs.height;
    }
  
    volume() {
        const vol = this.length * this.width * this.height;
        console.log(`This cuboid has a volume of ${vol}`);
    }

    surfaceArea() {
        const area = 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
        console.log(`This cuboid has a surface area of ${area}`);  
    }
  }

  const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5
  }); 


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.