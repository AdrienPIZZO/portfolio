export class Tag {
  static readonly PYTHON = new Tag('Python', 'darkgreen', 'white');
  static readonly CPP = new Tag('C++', 'orange', 'white');
  static readonly CSHARP = new Tag('C#', 'blue', 'white');
  static readonly TYPESCRIPT = new Tag('TypeScript', 'darkred', 'white');
  static readonly QT = new Tag('Qt', 'green', 'white');
  static readonly ANGULAR = new Tag('Angular', 'red', 'white');


  private constructor(private readonly key: string, public readonly bgcolor: string, public readonly color: string) {

  }

  toString() {
    return this.key
  }
}
