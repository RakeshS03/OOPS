class Logger {
  log() {
    console.log("Base log");
  }
}

class FileLogger extends Logger {
  log() {
    console.log("File log");
  }
}

const logger: Logger = new FileLogger();
logger.log(); // late binding
