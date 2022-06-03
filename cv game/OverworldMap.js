class OverworldMap {
  constructor(config) {
    this.overworld = null;
    this.gameObjects = config.gameObjects;
    this.walls = config.walls || {};
    this.cutsceneSpaces = config.cutsceneSpaces || [];

    this.lowerImage = new Image();
    this.lowerImage.src = config.lowerSrc;

    this.upperImage = new Image();
    this.upperImage.src = config.upperSrc;

    this.isCutscenePlaying = false;
  }

  drawLowerImage(ctx, cameraPerson) {
    ctx.drawImage(
      this.lowerImage,
      utils.withGrid(10.5) - cameraPerson.x,
      utils.withGrid(6) - cameraPerson.y,
    )
  }

  drawUpperImage(ctx, cameraPerson) {
    ctx.drawImage(
      this.upperImage,
      utils.withGrid(10.5) - cameraPerson.x,
      utils.withGrid(6) - cameraPerson.y,
    )
  }

  mountObjects() {
    Object.keys(this.gameObjects).forEach(key => {

      let object = this.gameObjects[key];
      object.id = key; //Set gameobjects id: Hero, npc1
      object.mount(this);
    })
  }

  isSpaceTaken(currentX, currentY, direction) {
    const {x,y} = utils.nextPosition(currentX, currentY, direction);
    return this.walls[`${x},${y}`] || false;
  }

  async startCutscene(events) {
    this.isCutscenePlaying = true;

    //Start a loop of async events
    //await each one
    for (let i=0; i<events.length; i++) {
      const eventHandler = new OverworldEvent({
        event: events[i],
        map: this,
      })
      await eventHandler.init();
    }

    this.isCutscenePlaying = false;

    //Reset NPCs to do their idle behavior
    Object.values(this.gameObjects).forEach(object => object.doBehaviorEvent(this))
    
  }

  checkForActionCutscene() {
    const hero = this.gameObjects["hero"];
    const nextCoords = utils.nextPosition(hero.x, hero.y, hero.direction);
    const match = Object.values(this.gameObjects).find(object => {
      return `${object.x},${object.y}` === `${nextCoords.x},${nextCoords.y}`
    });
    if (!this.isCutscenePlaying && match && match.talking.length) {
      this.startCutscene(match.talking[0].events)
    }
  }

  checkForFootstepCutscene() {
    const hero = this.gameObjects["hero"];
    const match = this.cutsceneSpaces[ `${hero.x},${hero.y}`];
    if (!this.isCutscenePlaying && match) {
      this.startCutscene(match[0].events)
    }
  }

  addWall(x,y) {
    this.walls[`${x},${y}`] = true;
  }
  removeWall(x,y) {
    delete this.walls[`${x},${y}`];
  }
  moveWall(wasX, wasY, direction) {
    this.removeWall(wasX, wasY);
    const {x,y} = utils.nextPosition(wasX, wasY, direction);
    this.addWall(x,y);
  }

}

window.OverworldMaps = {
  cvoverworld : {
    lowerSrc : "images/maps/cvoverworld.png",
    upperSrc : "images/maps/CVoverworldupperpng.png",
    gameObjects : {
      hero : new Person({
        x : utils.withGrid(15),
        y : utils.withGrid(12),
        isPlayerControlled : true,
      }),
      npcA : new Person({
        x : utils.withGrid(10),
        y : utils.withGrid(10),
        src : "/images/characters/people/npc1.png",
        // behaviorLoop: [
        //   {type : "walk", direction : "left"},
        //   // {type : "stand", direction : "up", time: 800},
        //   // {type : "walk", direction : "down"},
        //   // {type : "walk", direction : "right"},
        //   // {type : "walk", direction : "up"},
        // ],
        talking : [
          {
            events: [
              {type: "textMessage", text: "Welcome to Tom's village!", faceHero: "npcA"},
              {type: "textMessage", text: "Right now there is not a lot to do...", faceHero: "npcA"},
              // {who: "hero", type : "walk", direction : "left"},
            ]
          }
        ]
      }),
      npcD : new Person({
        x : utils.withGrid(32),
        y : utils.withGrid(12),
        src : "/images/characters/people/npc3.png",
        // behaviorLoop: [
        //   {type : "walk", direction : "left"},
        //   // {type : "stand", direction : "up", time: 800},
        //   // {type : "walk", direction : "down"},
        //   // {type : "walk", direction : "right"},
        //   // {type : "walk", direction : "up"},
        // ],
        talking : [
          {
            events: [
              {type: "textMessage", text: "Thanks to Drew Conley for learning this project and getting some sprite art!", faceHero: "npcD"},
              // {who: "hero", type : "walk", direction : "left"},
            ]
          }
        ]
      })
    },
    
    walls: window.Walls.cvOverworld,
    // {
    //   [utils.asGridCoord(16,9)]: true,
    //   [utils.asGridCoord(16,10)]: true,
    //   [utils.asGridCoord(16,11)]: true,
    //   [utils.asGridCoord(17,9)]: true,
    //   [utils.asGridCoord(17,10)]: true,
    //   [utils.asGridCoord(17,11)]: true,
    // },
    cutsceneSpaces: {
      // [utils.asGridCoord(16,8)]: [
      //   {
      //     events : [
      //       {who: "hero" ,type : "walk", direction : "up"}
      //     ]
      //   }
      // ],
      [utils.asGridCoord(5,8)]: [
        {
          events : [
            {type: "changeMap", map: "museum"},
          ]
        }
      ],
      [utils.asGridCoord(29,8)]: [
        {
          events : [
            {type: "changeMap", map: "room1"},
          ]
        }
      ],
    }
  },
  museum : {
    lowerSrc : "/images/maps/museum.png",
    upperSrc: "",
    gameObjects: {
      hero: new Person({
        isPlayerControlled: true,
        x: utils.withGrid(6),
        y: utils.withGrid(12),
      }),
      npcB: new Person({
        x: utils.withGrid(10),
        y: utils.withGrid(9),
        src: "/images/characters/people/npc3.png",
        // behaviorLoop: [
        //   {type : "walk", direction : "left"},
        //   {type : "stand", direction : "up", time: 800},
        //   {type : "walk", direction : "down"},
        //   {type : "walk", direction : "right"},
        //   {type : "walk", direction : "up"},
        // ],
        talking : [
          {
            events: [
              {type: "textMessage", text: "This museum will show the history of Tom.", faceHero: "npcB"},
              {type: "textMessage", text: "As you can see, it's empty right now...", faceHero: "npcB"},
              {type: "textMessage", text: "I hope you will show up at a later time to see the final result!", faceHero: "npcB"},
            ]
          }
        ]
      })
    },
    walls: window.Walls.museum,
    cutsceneSpaces: {
      [utils.asGridCoord(6,12)]: [
        {
          events : [
            {type: "changeMap", map: "cvoverworld"}
          ]
        }
      ],
    }
  },
  room1 : {
    lowerSrc : "images/maps/room1.png",
    upperSrc : "images/maps/room1upper.png",
    gameObjects : {
      hero : new Person({
        x : utils.withGrid(5),
        y : utils.withGrid(10),
        isPlayerControlled : true,
      }),
      npcC : new Person({
        x : utils.withGrid(9),
        y : utils.withGrid(8),
        src : "/images/characters/people/npc2.png",
        // behaviorLoop: [
        //   {type : "walk", direction : "left"},
        //   {type : "stand", direction : "up", time: 800},
        //   {type : "walk", direction : "down"},
        //   {type : "walk", direction : "right"},
        //   {type : "walk", direction : "up"},
        // ],
        talking : [
          {
            events: [
              {type: "textMessage", text: "This room is still mostly empty.", faceHero: "npcC"},
              {type: "textMessage", text: "Maybe next time there is more to see...", faceHero: "npcC"},
            ]
          }
        ]
      })
    },
    walls: window.Walls.room1,
    cutsceneSpaces: {
      [utils.asGridCoord(5,10)]: [
        {
          events : [
            {type: "changeMap", map: "cvoverworld"}
          ]
        }
      ],
    }
  }
}