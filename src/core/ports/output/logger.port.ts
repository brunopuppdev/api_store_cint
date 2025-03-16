export interface LoggerPort {
  debug(message: string, context?: string): void;
  log(message: string, context?: string): void;
  error(message: string, trace?: string, context?: string): void;
  warn(message: string, context?: string): void;
  verbose(message: string, context?: string): void;
}
