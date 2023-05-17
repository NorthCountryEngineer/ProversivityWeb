import { Hub } from 'aws-amplify'

class Logger {

  constructor(){   
  }

  _log(level, messages){
    let text = ''
  
    if(messages && typeof messages === 'string'){
      text = messages
    }else if(messages && typeof messages === 'object'){
      text = messages.map(message => {
        if (typeof message === 'object') {
          return JSON.stringify(message, null, 2)
        } else {
          return message
        }
      }).join(' ')
    }

    Hub.dispatch('LogsChannel', { 
      event: `log-${new Date().toISOString()}`,
      message:`${new Date().toISOString()} [${level}] ${text}\n\r`
    })
  }

  debug(messages) {
    this._log('debug', messages)
  }

  info(messages) {
    this._log('info', messages)
  }

  warn(messages) {
    this._log('warn', messages)
  }

  error(messages){
    this._log('error', messages)
  }
}

export const logger = new Logger()
