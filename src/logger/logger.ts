// src/logger/logger.ts

export class Logger {
  /**
   * Returns current timestamp in HH:mm:ss format
   */
  private static getTimestamp(): string {
    return new Date().toLocaleTimeString("en-IN", {
      hour12: false,
    });
  }

  static info(message: string): void {
    console.log(
      `\x1b[36m[${this.getTimestamp()}] INFO     ${message}\x1b[0m`
    );
  }

  static success(message: string): void {
    console.log(
      `\x1b[32m[${this.getTimestamp()}] SUCCESS  ${message}\x1b[0m`
    );
  }

  static warn(message: string): void {
    console.warn(
      `\x1b[33m[${this.getTimestamp()}] WARN     ${message}\x1b[0m`
    );
  }

  static error(message: string): void {
    console.error(
      `\x1b[31m[${this.getTimestamp()}] ERROR    ${message}\x1b[0m`
    );
  }

  static step(message: string): void {
    console.log(
      `\n\x1b[35m========== ${message.toUpperCase()} ==========\x1b[0m`
    );
  }
}