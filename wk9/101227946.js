// this is empty array
const initalArray = []
let emptyArray = " "


// create three arrays
const player = ['nomad', 'videlord', 'oddish', 'the ox']
const gameServers = ['play.game.io', 'game.server', 'let.play.game', '192.168.1.1']
const gameNames = ['super smash', 'mortal combat', 'tekken', 'street fighter']

initalArray.push(player, gameServers, gameNames)


for (let index = 0; index < initalArray.length; index++) {
    const arrayElement = initalArray[index];
    for (let index = 0; index < arrayElement.length; index++) {
        emptyArray += arrayElement[index] + " ";
        
        
    }
    
}
console.log(emptyArray);