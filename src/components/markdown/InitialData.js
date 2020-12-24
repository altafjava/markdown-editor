export function InitialTextValue() {
  return `# Markdown Editor

> Responsive GitHub flavored markdown editor built with [React.js](https://facebook.github.io/react/)

You can use this editor to preview your markdown files before committing to GitHub.

Take a look at this project's [repo](https://github.com/altafjava/markdown-editor).

### Code samples

Java

\`\`\`
class Employee {
    int id;
    String name;
    double salary;
    long mobile;

    public Employee() {
    }

    public Employee(int id, String name, double salary, long mobile) {
      this.id=id;
      this.name=name;
      this.salary=salary;
      this.mobile=mobile;
    }
}
\`\`\`

JavaScript

\`\`\`js
function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}
\`\`\`

CSS

\`\`\`css
html { 
    height: 100%;
    box-sizing: border-box;
    font-size: 100%;
}
*, *:before, *:after {
    box-sizing: inherit;
}
\`\`\`

### Tables

| Tables   |      Are      |  Cool |
|----------|:-------------:|------:|
| col 1 is |  left-aligned | $1600 |
| col 2 is |    centered   |   $12 |
| col 3 is | right-aligned |    $1 |


## Projects Used

 * [CodeMirror](https://codemirror.net/) - The code editor
 * [marked](https://github.com/chjj/marked) - The markdown parser
 * [highlight.js](https://highlightjs.org/) - The syntax highlighter in the markdown output
 * [emojify.js](https://github.com/emojione/emojify.js/) - Emoji support

`
}
