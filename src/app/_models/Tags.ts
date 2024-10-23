export class Tag {
  static readonly PYTHON = new Tag('Python', 'darkgreen', 'white');
  static readonly CPP = new Tag('C++', 'orange', 'white');
  static readonly CSHARP = new Tag('C#', 'blue', 'white');
  static readonly TYPESCRIPT = new Tag('TypeScript', 'darkred', 'white');
  static readonly QT = new Tag('Qt', 'green', 'white');
  static readonly ANGULAR = new Tag('Angular', 'red', 'white');
  static readonly UNITY = new Tag('Unity', 'darkbrown', 'black');
  static readonly GIT = new Tag('Git', '#7d3c98', 'white');
  static readonly PHP = new Tag('PHP', '#1f618d', 'white');
  static readonly SQL = new Tag('SQL', '#117864', 'white');
  static readonly SYMFONY = new Tag('Symfony', '#239b56', 'white');
  static readonly JAVASCRIPT = new Tag('JavaScript', '#d35400', 'white');
  static readonly AZURE = new Tag('Azure', '#85c1e9', 'black');
  static readonly SPARK = new Tag('Spark', '#145a32', 'white'); 
  static readonly HADOOP = new Tag('Hadoop', '#7dcea0', 'black');
  static readonly ELK = new Tag('ELK', '#34495e', 'white');
  static readonly DOCKER = new Tag('Docker', '#922b21', 'white');
  static readonly SHELL = new Tag('Shell', '#4a235a', 'white');
  static readonly LINUX = new Tag('Linux', '#641e16', 'white');
  static readonly DUT = new Tag('DUT', 'blue', 'white');
  static readonly ENSIMAG = new Tag('ENSIMAG', 'green', 'white');
  static readonly PERSONNAL = new Tag('Personal Projects', 'darkorange', 'white');
  static readonly CHOSENTACTICS = new Tag('ChosenTactics', 'darkred', 'white');
  static readonly DOTNET = new Tag('.NET', '#0394fc', 'white');

  private constructor(private readonly key: string, public readonly bgcolor: string, public readonly color: string) {

  }

  toString() {
    return this.key
  }
}
