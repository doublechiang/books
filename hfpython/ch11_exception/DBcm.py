import mysql.connector

class SQLError(Exception):
    pass

class UseDatabase:
    def __init__(self, config: dict) -> None:
        self.configuration = config


    def __enter__(self) -> 'cursor':
        self.conn = mysql.connector.connect(**self.configuration)
        self.cursor = self.conn.cursor()
        return self.cursor

    def __exit__(self, exc_type, exc_value, exc_trace) -> None:
        self.conn.commit()
        self.cursor.close()
        self.conn.close()
        if exc_type is mysql.connector.errors.ProgrammingError:
            raise SQLError
        elif exec_type:
            raise exc_type(exc_value)
