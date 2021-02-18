
      const createReactPlayer = require('./lib/ReactPlayer').createReactPlayer
      const Player = require('./lib/players/HlsJsP2P').default
      module.exports = createReactPlayer([{
        key: 'hlsjsp2p',
        canPlay: Player.canPlay,
        lazyPlayer: Player
      }])
    