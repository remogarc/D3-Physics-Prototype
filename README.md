A simple physics-based game by Reese Garcia built using Phaser

Code requirements:
- **The game uses both continuous and discrete inputs from the player**: The player uses cursor keys to move about space. The player must hold down keys to move in a given direction. To move on between scenes, the player will press SPACE at the end of the level and move on to the summary screens and title. The player can also use keys to enable full screen mode
- **The player’s goal can only be achieved indirectly (by allowing the physics engine to move key objects into position/contact).**: While players can skip to further levels in the prototype, players can navigate through a maze to reach the end. In addition, they must push blocks that are in their path in order to progress further.

Experience requirements:
- **3+ physics-based gameplay scenes (possibly implemented with a single Phaser Scene subclass).**: There are three separate levels that showcase the mechanics of the prototype. Each level is a maze each with a different layout and placement of blocks.
- **Other scenes are used to separate and contextualize the gameplay scenes**: In between each level, there is a short summary screen that helps break up gameplay. These are short breaks with a message informing the player that the level has been completed. Furthermore, there is a also a title screen before the main game that the player must advance from first in order to move through gameplay scenes.

Asset sources:
- All assets were created by me using using [Microsoft Paint](https://apps.microsoft.com/store/detail/paint/9PCFS5B6T72H)
- Some of these assets were modified using the Phaser engine, reusing the same asset for multiple objects of different sizes.

Code sources:
- All files, game.js, physic.js, index.html were written by me, using some reference to [Pushable Body Debug 1](https://labs.phaser.io/view.html?src=src/physics/arcade/pushable%20body%20debug%201.js), [Collision Detection](https://labs.phaser.io/view.html?src=src/physics/arcade/collision%20direction.js), and [BigBodies](https://github.com/nathanaltice/BigBodies/blob/master/src/scenes/HoneySpider.js).

Link to playable game:
[Block Maze](https://remogarc.github.io/D3-Physics-Prototype/)
